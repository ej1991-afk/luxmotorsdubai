import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET.");
  process.exit(1);
}

async function upload(filePath, publicId) {
  const bytes = await readFile(filePath);
  const timestamp = Math.floor(Date.now() / 1000);
  const params = `overwrite=true&public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
  const signature = createHash("sha1").update(params).digest("hex");
  const body = new FormData();
  body.append("file", new Blob([bytes]), path.basename(filePath));
  body.append("public_id", publicId);
  body.append("overwrite", "true");
  body.append("timestamp", String(timestamp));
  body.append("api_key", apiKey);
  body.append("signature", signature);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: "POST",
    body,
  });
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(`${publicId}: ${payload.error?.message || response.status}`);
  }
  console.log(payload.secure_url);
}

const brandDir = path.join(process.cwd(), "public", "brand");
for (const file of await readdir(brandDir)) {
  if (!file.endsWith(".svg")) continue;
  const name = file.replace(/\.svg$/, "");
  await upload(path.join(brandDir, file), `aurelian/brand/${name}`);
}

const photoDir = path.join(process.cwd(), "public", "photos");
for (const file of await readdir(photoDir)) {
  if (!file.endsWith(".webp")) continue;
  const name = file.replace(/\.webp$/, "");
  await upload(path.join(photoDir, file), `aurelian/photos/${name}`);
}

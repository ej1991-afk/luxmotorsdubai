import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ids = [
  "photo-1606664515524-ed2f786a0bd6",
  "photo-1618843479313-40f8afb4b4d8",
  "photo-1605559424843-9e4c228bf1c2",
  "photo-1580274455191-1c62238fa333",
  "photo-1614244788272-f6dcdfd8df9f",
  "photo-1578911504392-fb6cee1da196",
  "photo-1621135802920-133df287f89c",
  "photo-1606220838315-056192d5e927",
  "photo-1511919884226-fd3cad34687c",
  "photo-1533473359331-0135ef1b58bf",
  "photo-1669215420018-098507d14861",
  "photo-1519641471654-76ce0107ad1b",
  "photo-1621007947382-bb3c3994e3fb",
  "photo-1549317661-bd32c8ce0db2",
  "photo-1555215695-3004980ad54e",
  "photo-1556189250-72ba954cfc2b",
  "photo-1617531653332-bd46c24f2068",
  "photo-1583121274602-3e2820c69888",
  "photo-1592198084033-aade902d1aae",
  "photo-1544636331-e26879cd4d9b",
  "photo-1563720360172-67b8f3dce741",
  "photo-1631295868223-63265b40d9e4",
  "photo-1617814076367-b759c7d7e738",
  "photo-1609521263047-f8f205293f24",
  "photo-1616422285623-13ff0162193c",
  "photo-1503376780353-7e6692767b70",
  "photo-1606152421802-db97b9c7a11b",
  "photo-1492144534655-ae79c964c9d7",
  "photo-1553440569-bcc63803a83d",
];

const outDir = path.join(process.cwd(), "public", "photos");
await mkdir(outDir, { recursive: true });

for (const id of ids) {
  const source = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`;
  const response = await fetch(source);
  if (!response.ok) {
    throw new Error(`${id} returned ${response.status}`);
  }
  const input = Buffer.from(await response.arrayBuffer());
  const webp = await sharp(input).rotate().resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 78 }).toBuffer();
  await writeFile(path.join(outDir, `${id}.webp`), webp);
  console.log(`${id}.webp ${webp.length}`);
}

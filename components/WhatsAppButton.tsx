import { Icon } from "@/components/Icon";
import { brand } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={brand.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${brand.whatsapp}`}
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <Icon name="whatsapp" alt="" className="h-8 w-8 sm:h-9 sm:w-9" />
    </a>
  );
}

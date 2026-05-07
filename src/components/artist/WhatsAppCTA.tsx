import Link from "next/link";
import { formatWhatsAppLink, Artist } from "@/lib/artist-data";

export function WhatsAppCTA({ artist }: { artist: Artist }) {
  return (
    <Link href={formatWhatsAppLink({ number: artist.contact.whatsappNumber })} className="rounded-full bg-green-500 px-5 py-3 font-semibold text-black hover:bg-green-400">
      WhatsApp the artist
    </Link>
  );
}

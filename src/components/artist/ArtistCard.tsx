import Link from "next/link";
import { Artist } from "@/lib/artist-data";

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link href={`/artists/${artist.slug}`} className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
      <img src={artist.portraitImage.src} alt={artist.portraitImage.alt} className="h-64 w-full object-cover" />
      <div className="space-y-2 p-4">
        <h3 className="text-xl font-semibold">{artist.displayName}</h3>
        <p className="text-sm text-white/70">{artist.tagline}</p>
        <p className="text-xs text-white/60">{artist.location}</p>
      </div>
    </Link>
  );
}

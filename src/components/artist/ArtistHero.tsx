import { Artist } from "@/lib/artist-data";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function ArtistHero({ artist }: { artist: Artist }) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <img src={artist.heroImage.src} alt={artist.heroImage.alt} className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="relative container mx-auto grid gap-6 px-4 py-24 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em]">{artist.location}</p>
          <h1 className="text-5xl font-black md:text-7xl">{artist.displayName}</h1>
          <p className="text-xl text-white/80">{artist.tagline}</p>
          <p>{artist.categories.join(" · ")}</p>
          <WhatsAppCTA artist={artist} />
        </div>
        <img src={artist.portraitImage.src} alt={artist.portraitImage.alt} className="h-[480px] w-full rounded-3xl object-cover" />
      </div>
    </section>
  );
}

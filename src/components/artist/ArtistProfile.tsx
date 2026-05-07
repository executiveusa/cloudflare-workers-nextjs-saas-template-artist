import { Artist } from "@/lib/artist-data";
import { ThemeProvider } from "./ThemeProvider";
import { ArtistHero } from "./ArtistHero";
import { StorySection } from "./StorySection";
import { ArtworkGallery } from "./ArtworkGallery";
import { BeforeAfterReveal } from "./BeforeAfterReveal";
import { ProcessTimeline } from "./ProcessTimeline";
import { WhatsAppCTA } from "./WhatsAppCTA";

export function ArtistProfile({ artist }: { artist: Artist }) {
  return <ThemeProvider artist={artist}><ArtistHero artist={artist} /><StorySection artist={artist} /><ArtworkGallery artist={artist} /><BeforeAfterReveal artist={artist} /><ProcessTimeline /><section className="container mx-auto px-4 py-16"><h2 className="text-3xl font-bold">Interview</h2>{artist.interviewVideoUrl ? <iframe src={artist.interviewVideoUrl} title={`${artist.displayName} interview`} className="mt-4 h-80 w-full rounded-2xl" allowFullScreen /> : <div className="mt-4 rounded-2xl border border-dashed border-white/20 p-10 text-center">Interview clip coming soon.</div>}</section><section className="container mx-auto space-y-3 px-4 pb-24"><h2 className="text-3xl font-bold">Visit & Contact</h2><p>Meet {artist.displayName} on the Malecon and schedule a studio or commission conversation.</p><div className="flex flex-wrap gap-3"><WhatsAppCTA artist={artist} />{artist.contact.instagramUrl ? <a href={artist.contact.instagramUrl} className="rounded-full border border-white/30 px-4 py-2">Instagram</a> : null}{artist.contact.email ? <a href={`mailto:${artist.contact.email}`} className="rounded-full border border-white/30 px-4 py-2">Email</a> : null}</div></section><a href={"#"} className="fixed bottom-4 right-4 rounded-full bg-green-500 px-4 py-3 font-semibold text-black md:hidden">WhatsApp</a></ThemeProvider>;
}

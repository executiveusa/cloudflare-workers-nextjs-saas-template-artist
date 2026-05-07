import { Artist } from "@/lib/artist-data";

export function ArtworkGallery({ artist }: { artist: Artist }) {
  return <section className="container mx-auto space-y-5 px-4 py-16"><h2 className="text-3xl font-bold">Featured Artworks</h2><div className="grid gap-4 md:grid-cols-3">{artist.featuredArtworks.map((art) => <article key={art.id} className="rounded-2xl border border-white/10 bg-black/30 p-3"><img src={art.image.src} alt={art.image.alt} className="h-52 w-full rounded-xl object-cover" /><p className="mt-3 text-lg font-semibold">{art.title}</p><p className="text-sm text-white/70">{art.medium} · {art.year}</p><p className="text-sm">{art.description}</p><p className="text-sm font-medium text-orange-300">{art.inquiryLabel}</p></article>)}</div></section>;
}

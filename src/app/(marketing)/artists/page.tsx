import { ArtistDirectory } from "@/components/artist/ArtistDirectory";

export default function ArtistsPage() {
  return (
    <main className="bg-zinc-950 text-white">
      <section className="container mx-auto space-y-3 px-4 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-orange-300">Public directory</p>
        <h1 className="text-4xl font-bold">Discover Malecon artists</h1>
      </section>
      <div className="container mx-auto px-4 pb-24"><ArtistDirectory /></div>
    </main>
  );
}

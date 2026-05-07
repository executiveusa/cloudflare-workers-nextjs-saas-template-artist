import Link from "next/link";
import { artists } from "@/lib/artist-data";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <section className="container mx-auto space-y-6 px-4 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-orange-300">Puerto Vallarta Malecon</p>
        <h1 className="text-5xl font-black md:text-7xl">Artist Directory & Story Sites</h1>
        <p className="mx-auto max-w-3xl text-lg text-white/70">A cinematic open directory where local artists get discoverable profiles and direct WhatsApp inquiries.</p>
        <div className="flex justify-center gap-3"><Link href="/artists" className="rounded-full bg-orange-400 px-6 py-3 font-semibold text-black">Explore artists</Link><a href="#join" className="rounded-full border border-white/30 px-6 py-3">Join the directory</a></div>
      </section>
      <section className="container mx-auto grid gap-4 px-4 pb-24 md:grid-cols-3">{artists.map((artist) => <Link key={artist.id} href={`/artists/${artist.slug}`} className="rounded-2xl border border-white/10 p-4"><p className="text-sm text-orange-300">Featured</p><p className="text-2xl font-semibold">{artist.displayName}</p><p className="text-white/70">{artist.shortBio}</p></Link>)}</section>
      <section id="join" className="container mx-auto space-y-4 px-4 pb-24 text-center"><h2 className="text-3xl font-bold">Join the directory</h2><p className="text-white/70">Free onboarding for artists now. Upgrade to WhatsApp AI agent later.</p></section>
    </main>
  );
}

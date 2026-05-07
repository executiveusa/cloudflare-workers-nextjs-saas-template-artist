import { Artist } from "@/lib/artist-data";

export function StorySection({ artist }: { artist: Artist }) {
  return <section className="container mx-auto grid gap-6 px-4 py-16 md:grid-cols-2"><div><h2 className="text-3xl font-bold">Philosophy</h2><p className="mt-3 text-white/85">{artist.philosophy}</p><p className="mt-4 text-white/70">{artist.longBio}</p></div><div className="rounded-3xl border border-white/10 bg-white/5 p-6"><h3 className="text-2xl font-semibold">Story</h3>{artist.storySections.map((section) => <div key={section.id} className="mt-4"><p className="font-medium">{section.title}</p><p className="text-white/70">{section.body}</p></div>)}</div></section>;
}

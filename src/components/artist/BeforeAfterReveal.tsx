import { Artist } from "@/lib/artist-data";

export function BeforeAfterReveal({ artist }: { artist: Artist }) {
  const project = artist.beforeAfterProjects[0];
  if (!project) return null;
  return (
    <section className="container mx-auto space-y-4 px-4 py-16">
      <h2 className="text-3xl font-bold">Before / After</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <img src={project.before.src} alt={project.before.alt} className="h-72 w-full rounded-2xl object-cover" />
        <img src={project.after.src} alt={project.after.alt} className="h-72 w-full rounded-2xl object-cover" />
      </div>
      <p className="text-white/70">{project.caption}</p>
    </section>
  );
}

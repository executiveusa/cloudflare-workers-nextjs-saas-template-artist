import { Artist } from "@/lib/artist-data";

const themeMap = {
  ocean: "bg-slate-950 text-cyan-50",
  sunset: "bg-zinc-950 text-orange-50",
  monochrome: "bg-black text-zinc-100",
  jungle: "bg-emerald-950 text-emerald-50",
  street: "bg-neutral-900 text-amber-50",
};

export function ThemeProvider({ artist, children }: { artist: Artist; children: React.ReactNode }) {
  return <div className={themeMap[artist.theme.preset]}>{children}</div>;
}

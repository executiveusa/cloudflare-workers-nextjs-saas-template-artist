"use client";

import { useMemo, useState } from "react";
import { Artist, artists } from "@/lib/artist-data";
import { ArtistCard } from "./ArtistCard";

export function ArtistDirectory() {
  const [query, setQuery] = useState("");
  const [medium, setMedium] = useState("All");
  const categories = ["All", ...new Set(artists.flatMap((artist) => artist.categories))];

  const filtered = useMemo(() => {
    return artists.filter((artist: Artist) => {
      const matchesQuery = `${artist.displayName} ${artist.location} ${artist.categories.join(" ")}`.toLowerCase().includes(query.toLowerCase());
      const matchesMedium = medium === "All" || artist.categories.includes(medium);
      return matchesQuery && matchesMedium;
    });
  }, [query, medium]);

  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <input aria-label="Search artists" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by artist, medium, or location" className="w-full rounded-xl border border-white/20 bg-black/20 px-4 py-3" />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button key={category} onClick={() => setMedium(category)} className={`rounded-full px-3 py-1 text-sm ${medium === category ? "bg-orange-400 text-black" : "bg-white/10"}`}>
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </section>
  );
}

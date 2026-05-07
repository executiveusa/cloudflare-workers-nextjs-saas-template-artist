import { notFound } from "next/navigation";
import { ArtistProfile } from "@/components/artist/ArtistProfile";
import { artists, getArtistBySlug } from "@/lib/artist-data";

export function generateStaticParams() {
  return artists.map((artist) => ({ slug: artist.slug }));
}

export default async function ArtistProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();
  return <ArtistProfile artist={artist} />;
}

export interface MediaAsset {
  src: string;
  alt: string;
}

export interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: string;
  description: string;
  inquiryLabel: string;
  image: MediaAsset;
}

export interface ArtistStoryBlock {
  id: string;
  title: string;
  body: string;
  image?: MediaAsset;
}

export interface ArtistTheme {
  preset: "ocean" | "sunset" | "monochrome" | "jungle" | "street";
}

export interface ContactLinks {
  whatsappNumber: string;
  instagramUrl?: string;
  email?: string;
}

interface BeforeAfterProject {
  id: string;
  before: MediaAsset;
  after: MediaAsset;
  caption: string;
}

export interface Artist {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  philosophy: string;
  location: string;
  languages: string[];
  categories: string[];
  portraitImage: MediaAsset;
  heroImage: MediaAsset;
  contact: ContactLinks;
  theme: ArtistTheme;
  featuredArtworks: Artwork[];
  beforeAfterProjects: BeforeAfterProject[];
  storySections: ArtistStoryBlock[];
  interviewVideoUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, vi tu perfil en el Directorio de Artistas del Malecón y me interesa tu trabajo.";

export function formatWhatsAppLink({ number, message = DEFAULT_WHATSAPP_MESSAGE }: { number: string; message?: string }) {
  const cleanedNumber = number.replace(/[^\d]/g, "");
  return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;
}

export const artists: Artist[] = [
  {
    id: "artist-1",
    slug: "sofia-luz-marina",
    name: "Sofia Luz Marina",
    displayName: "Sofía Luz Marina",
    tagline: "Mural stories painted with Pacific light",
    shortBio: "Painter and muralist translating Malecon sunsets into layered public art.",
    longBio: "Sofía creates large-format murals and collectible canvases inspired by fisherfolk, dancers, and golden-hour skies along Puerto Vallarta's waterfront.",
    philosophy: "Every wall can become a memory archive for the neighborhood.",
    location: "Malecón Centro, Puerto Vallarta",
    languages: ["Spanish", "English"],
    categories: ["Mural", "Painting"],
    portraitImage: { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80", alt: "Sofia portrait" },
    heroImage: { src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1600&q=80", alt: "Colorful mural" },
    contact: { whatsappNumber: "+523221234567", instagramUrl: "https://instagram.com", email: "sofia@example.com" },
    theme: { preset: "sunset" },
    featuredArtworks: [{ id: "a1", title: "Malecón Echo", medium: "Acrylic", year: "2025", description: "Layered skyline with ocean winds.", inquiryLabel: "Price on inquiry", image: { src: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80", alt: "Artwork" } }],
    beforeAfterProjects: [{ id: "b1", before: { src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80", alt: "Blank wall" }, after: { src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80", alt: "Completed mural" }, caption: "Community plaza mural transformation" }],
    storySections: [{ id: "s1", title: "Sunset as a palette", body: "Sofía starts with field recordings and sketches from evening walks, then scales the rhythm into monumental strokes." }],
    interviewVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    createdAt: "2026-05-01",
    updatedAt: "2026-05-05",
  },
  { id: "artist-2", slug: "mateo-plata-fina", name: "Mateo Plata Fina", displayName: "Mateo Plata Fina", tagline: "Hand-forged silver jewelry with Huichol motifs", shortBio: "Craft artist combining recycled silver, obsidian, and sea textures.", longBio: "Mateo runs a tiny bench studio near the Malecón, making one-of-one pieces for travelers and local collectors.", philosophy: "Objects should hold daily ritual and regional memory.", location: "Zona Romántica, Puerto Vallarta", languages: ["Spanish"], categories: ["Jewelry", "Craft"], portraitImage: { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80", alt: "Mateo portrait" }, heroImage: { src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=80", alt: "Jewelry studio" }, contact: { whatsappNumber: "+523221111222", instagramUrl: "https://instagram.com" }, theme: { preset: "jungle" }, featuredArtworks: [{ id: "a2", title: "Marea Ring", medium: "Sterling silver + obsidian", year: "2026", description: "Hammered ring inspired by wave crests.", inquiryLabel: "Collector inquiry", image: { src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80", alt: "Ring" } }], beforeAfterProjects: [{ id: "b2", before: { src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80", alt: "Raw materials" }, after: { src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca6?auto=format&fit=crop&w=900&q=80", alt: "Finished jewelry" }, caption: "From raw silver to finished heirloom" }], storySections: [{ id: "s2", title: "From bench to boardwalk", body: "Each piece is forged by hand in micro-batches and finished after real-world wear testing on humid coastal days." }], createdAt: "2026-05-02", updatedAt: "2026-05-05" },
  { id: "artist-3", slug: "camila-trazo-vivo", name: "Camila Trazo Vivo", displayName: "Camila Trazo Vivo", tagline: "Portrait and caricature sessions in under fifteen minutes", shortBio: "Live portrait artist known for expressive linework and playful exaggeration.", longBio: "Camila captures couples, families, and street performers on the Malecon with fast charcoal, watercolor, and marker portraits.", philosophy: "A portrait should feel like a conversation, not a photo copy.", location: "Los Arcos, Puerto Vallarta Malecon", languages: ["Spanish", "English", "French"], categories: ["Portrait", "Caricature"], portraitImage: { src: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80", alt: "Camila portrait" }, heroImage: { src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1600&q=80", alt: "Sketchbook" }, contact: { whatsappNumber: "+523223334444", email: "camila@example.com" }, theme: { preset: "street" }, featuredArtworks: [{ id: "a3", title: "Evening Duo", medium: "Ink + watercolor", year: "2026", description: "Live portrait from the amphitheater steps.", inquiryLabel: "Book session", image: { src: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=1200&q=80", alt: "Portrait artwork" } }], beforeAfterProjects: [{ id: "b3", before: { src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80", alt: "Pencil sketch" }, after: { src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80", alt: "Colored portrait" }, caption: "From quick sketch to finished keepsake" }], storySections: [{ id: "s3", title: "Speed with soul", body: "Camila blocks gesture first, then amplifies personality details so each commission feels cinematic and personal." }], createdAt: "2026-05-03", updatedAt: "2026-05-06" },
];

export function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}

# Architecture

## MVP now
- Next.js routes (`/`, `/artists`, `/artists/[slug]`) render presentation components.
- Seed artist data is static in `src/lib/artist-data.ts`.
- Front-end components in `src/components/artist/*` consume typed data only.
- No database required for demo.

## Future multi-tenant architecture
- Front end: public directory + per-artist sites.
- Data/API layer: server actions + D1-backed artist and artwork records.
- Agent backend: WhatsApp/Hermes task processing and moderation workflows.
- Media storage: Cloudflare R2 for artwork photos/video.

## Cloudflare roles
- Workers: runtime for Next.js/OpenNext.
- D1: tenant/artist/artwork relational data.
- KV: cache/session/state acceleration.
- R2: media originals/derivatives.

## Scale path
- Add custom domains per paid artist tier.
- Directory flywheel: discovery -> inquiry -> conversion -> upgrades.

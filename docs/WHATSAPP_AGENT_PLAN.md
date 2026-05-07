# WhatsApp Agent Plan

## Webhook flow
- WhatsApp Cloud API webhook -> Worker endpoint -> validation/rate-limit -> queue.

## Message handling
- Text/image/audio parsed and normalized.
- Media files stored in R2.
- Draft records persisted in D1 for approval.

## Approval workflow
- Agent drafts changes, artist/admin approves before publish.

## Hermes role
- Hermes executes bounded skills and proposes profile/artwork updates.

## Skill list
- publish-artwork
- update-bio
- translate-profile
- generate-caption
- collector-followup
- create-instagram-post

## Safety boundaries
- No autonomous publishing without approval.
- Content moderation and anti-spam checks before storage and publication.

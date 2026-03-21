# Silambam Class

## Current State
- Gallery section shows static placeholder images hardcoded in GallerySection.tsx
- Admin panel at /admin shows enrollment submissions table
- No way to upload or manage gallery photos from the admin panel

## Requested Changes (Diff)

### Add
- Gallery photo upload in admin panel: logged-in admin can upload photos with a caption
- Gallery photo delete in admin panel: admin can remove uploaded photos
- Dynamic GallerySection: reads photos stored in blob-storage and displays them; falls back to placeholder images if no photos uploaded yet

### Modify
- AdminPage.tsx: add a second tab/section for Gallery Management alongside Enrollment Submissions
- GallerySection.tsx: fetch and display dynamically stored gallery photos
- Backend: add gallery photo metadata storage (caption, blob reference) and CRUD endpoints

### Remove
- Nothing removed; static images remain as fallback only

## Implementation Plan
1. Select blob-storage Caffeine component
2. Update Motoko backend to store gallery photo metadata (id, caption, blobId) with add/remove/list endpoints
3. Update AdminPage to have two tabs: Enrollment Submissions and Gallery Management
4. Gallery Management tab: upload button (image picker + caption input), grid of uploaded photos with delete button each
5. Update GallerySection.tsx to load photos from backend via blob-storage URLs; show static placeholders if none uploaded
6. Wire useQueries hooks for gallery CRUD

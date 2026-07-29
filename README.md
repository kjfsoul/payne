# payne.mysticarcana.com

Cinematic landing page — "Not the Leaving, but the Believing"

15-scene single-page viewer with keyboard/click/swipe navigation, video embeds, and Hans Zimmer soundtrack.

## Deploy

Upload `dist/` to any static document root. No build step. No dependencies.

## Structure

```
dist/
  index.html          Entry point
  assets/
    app.css           Styling
    app.js            Scene controller + audio
    images/           15 WebP backgrounds
    time_inception.*  Audio (gitignored — add separately)
    chicken.mov       Video scene 10 (gitignored — add separately)
    nevergiveup.mov   Video scene 15 (gitignored — add separately)
  README-DEPLOY.md    Full deployment docs
  integrity_test.py   Text verification
```

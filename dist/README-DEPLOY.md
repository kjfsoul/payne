# Not the Leaving, but the Believing

Static cinematic landing page — 15 scenes, single-page viewer. Deploy to any static document root.

## Deploy

```sh
# Upload the entire dist/ directory to your web root:
rsync -av dist/ /var/www/payne.mysticarcana.com/

# Or for Caddy:
# root * /path/to/dist
```

No build step. No Node. No dependencies at runtime.

## Files

```
dist/
  index.html          Entry point
  assets/
    app.css           All styling
    app.js            Scene controller, navigation, preloading
    images/           01.webp–15.webp  (cinematic backgrounds)
  integrity_test.py   Verifies text matches authoritative source
  README-DEPLOY.md    This file
```

## Integrity Test

```sh
python3 dist/integrity_test.py
```

Concatenates all 15 scene text strings, normalizes whitespace, and compares against the authoritative source file. Must pass before deployment.

## Features

- 100dvh full-screen viewer, no scrolling
- One scene at a time, previous scenes unmounted
- Keyboard (← →), click (left 35% / right 65%), and swipe navigation
- Progress indicator (01 / 15)
- Ken Burns image animation (1.02→1.07 scale)
- Crossfade transitions (800ms)
- Text fade/translate ≤12px
- prefers-reduced-motion support
- Image preloading (current + next 2)
- noindex, nofollow, noarchive
- No analytics, no external soundtrack, no autoplay

## Scene Summary

| Scene | Image | First words |
|-------|-------|-------------|
| 01 | Woman alone in quiet room | You said you still love me... |
| 02 | Pool at night, man and woman | I think about the times... |
| 03 | Pool at night, man alone | Now I look into that water... |
| 04 | Dim home, cardboard boxes | You have been in Wisconsin... |
| 05 | Hands near open box | You asked what you could do... |
| 06 | Warm living room, lamp | Your mom reached out on July 18... |
| 07 | Living room, man and woman | I watched and admired your mom... |
| 08 | Hallway looking toward doorway | Please have her contact me... |
| 09 | Man with colorful headband | Stop making the people... |
| 10 | Man with headband | The time... it's been seventeen days... |
| 11 | Hallway (same as 08) | I still have more to say... |
| 12 | Woman alone (same as 01) | Tell me if any part of you... |
| 13 | Personal photo 1 | Tell me you love me... |
| 14 | Personal photo 4 | This time... there's no escape... |
| 15 | Living room (same as 06) | I don't want to tell you this... |

## Browser Support

Tested at: 390×844, 430×932, 768×1024, 1440×900, 1920×1080

Mobile Safari safe-area insets respected. Landscape and portrait both supported.

## Notes

- Scene 14 image (image.png_4) chosen over image.png_3 for higher resolution. May benefit from human review of crop.
- Scenes 01/12 share the same image; scenes 06/15 share the same image; scenes 08/11 share the same image — intentional per the creative brief.
- Images converted to WebP (quality 85) from source PNGs. Total image payload: ~924KB.

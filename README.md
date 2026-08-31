# TV Player

A TV-friendly video player with a **thumbnail gallery** that works in any Smart TV browser.

## How it works

1. Put video files (`.mp4`, `.webm`, `.mkv`, etc.) into the `movies/` folder
2. Run the server
3. Open the gallery on your TV — you'll see **thumbnails** of each video
4. Click a video → it plays **fullscreen automatically**

## Quick Start

```bash
./serve.sh 8080
```

Then on your Smart TV browser open:
```
http://YOUR-PC-IP:8080/gallery.html
```

The gallery shows all videos in `movies/` as clickable cards with auto-generated thumbnails. Clicking one opens `player.html` in fullscreen.

## Pages

| Page | Purpose |
|------|---------|
| `gallery.html` | Shows video thumbnails, click to play |
| `player.html` | Fullscreen player (auto-opens from gallery) |
| `index.html` | Manual entry page (paste URL or upload file) |

## Keyboard Controls (during playback)

| Key | Action |
|-----|--------|
| Space / Enter | Play / Pause |
| ← / → | Rewind / Forward 10s |
| ↑ / ↓ | Volume up / down |
| F | Toggle fullscreen |
| M | Mute / Unmute |
| Esc | Go back to gallery |

## Supported Formats

- **MP4 (H.264)** — best Smart TV support (recommended)
- **WebM (VP8/VP9)** — good for newer TVs
- **MKV** — depends on TV model (may not play)

> Tip: To be safe, convert old movies to MP4/H.264 for maximum Smart TV compatibility.

## GitHub Pages + ngrok (recommended)

Videos are too large for GitHub repos, so this setup streams them **from your PC via ngrok**
while the website is hosted on **GitHub Pages**:

```
[Tv Browser]  →  github.io (gallery/player pages)
                        │  fetch list.json + video (CORS)
                        ▼
              [your PC] ngrok → movie server → movies/ (dangal.mp4)
```

### 1. Start the movie server + ngrok on your PC

```bash
/home/nirbhay/tv-server/launch.sh     # starts server on :8080 + ngrok tunnel
```

Get your current ngrok URL:
```bash
curl -s http://127.0.0.1:4040/api/tunnels \
  | python3 -c "import sys,json;print([t['public_url'] for t in json.load(sys.stdin)['tunnels']])"
```

### 2. Point the site at your ngrok URL

Edit **`config.js`** and set `videoBase` to your ngrok URL (no trailing slash):

```js
window.TV_CONFIG = { videoBase: "https://xxxx-xx-xxx-xx-xx.ngrok-free.app", ... };
```

Commit + push, or if you're running locally you can open `gallery.html` directly.

> ⚠️ **Free ngrok gives you a NEW URL every time it restarts.** Whenever you restart ngrok,
> update `videoBase` in `config.js` and push again.

### 3. Open the site

```
https://cmrootnirbhay.github.io/
```

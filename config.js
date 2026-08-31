// ─────────────────────────────────────────────────────────────
//  TV Player configuration
//
//  Two modes:
//    1. LOCAL    – videos served from this same site (./movies/)
//    2. REMOTE   – videos streamed from your PC via ngrok
//
//  To switch, set VIDEO_BASE below.
//    - For LOCAL:  leave VIDEO_BASE empty ("")
//    - For REMOTE: set VIDEO_BASE to your ngrok URL (no trailing slash),
//                  e.g. "https://abcd-12-34-56-78.ngrok-free.app"
//
//  This file is loaded by gallery.html. It is the ONLY place you
//  need to change when your ngrok URL changes.
// ─────────────────────────────────────────────────────────────
window.TV_CONFIG = {
  // Base URL where the movies/ folder + list.json are served.
  // Empty string ("") uses this site's own ./movies/ folder (LOCAL mode).
  // REMOTE: set to your current ngrok URL (no trailing slash).
  videoBase: "https://514b-103-173-25-15.ngrok-free.app",

  // Show thumbnails by streaming a slice of the video from the remote host.
  // Leave on unless you see performance problems on your TV.
  enableRemoteThumbs: true
};

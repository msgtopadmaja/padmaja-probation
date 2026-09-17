Case-study clips for the "WebView vs native" section, using these exact filenames:

- `sun.mp4` — Android Studio walkthrough. Present (H.264, faststart).
- `ios.mp4` — Safari Web Inspector walkthrough. **Not in the repo yet**, so that
  second slot still renders the "video coming soon" placeholder.

Note that the repo-root `.gitignore` ignores `*.mp4`, `*.mov` and `*.webm`
everywhere as a safety net against committing raw screen recordings, with an
explicit exception for `public/video/*.mp4` and `public/video/*.webm`. A clip
added under any other path is silently ignored by git and never reaches the
deploy — that is what kept these files out of production previously.

Vite copies `public/` to the site root as-is, so the clips are served at
`/video/sun.mp4` and `/video/ios.mp4` with no code changes. Keep each clip small
enough for a normal git push (single-digit to low-tens of MB) and encode as
H.264 with the moov atom up front (`-movflags +faststart`) so it streams rather
than forcing a full download before playback.

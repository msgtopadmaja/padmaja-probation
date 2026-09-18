Case-study clips for the "WebView vs native" section, using these exact filenames:

- `sun.mp4` — Android Studio walkthrough. Present (H.264, faststart).
- `ios.mp4` — Safari Web Inspector walkthrough. Present (H.264, faststart).

Both clips must be in a real MP4 container. The iOS clip previously sat here as
`ios.mov`: a QuickTime container (`major_brand: qt  `) with the `moov` atom at
the end of the file. Nothing referenced that name, and even where a browser will
decode a `.mov`, a trailing `moov` means playback cannot start until enough of
the file has been fetched to find it. It has been remuxed — stream copy, so the
H.264 video is bit-for-bit the original — into `ios.mp4` with
`major_brand: mp42` and the `moov` atom up front.

Note that the repo-root `.gitignore` ignores `*.mp4`, `*.mov` and `*.webm`
everywhere as a safety net against committing raw screen recordings, with an
explicit exception for `public/video/*.mp4` and `public/video/*.webm`. A clip
added under any other path — or with a `.mov` extension — is silently ignored by
git and never reaches the deploy.

Vite copies `public/` to the site root as-is, so the clips are served at
`/video/sun.mp4` and `/video/ios.mp4` with no code changes. Keep each clip small
enough for a normal git push (single-digit to low-tens of MB) and encode as
H.264 with the moov atom up front (`-movflags +faststart`) so it streams rather
than forcing a full download before playback.

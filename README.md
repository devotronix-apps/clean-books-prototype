# Clean Books — mobile app UI prototype

An interactive **mobile phone app UI prototype**, based on the Clean Books UIKit functional specification. It runs in a browser only as a way to preview the mobile app. The sample’s plain HTML/CSS/JavaScript approach inspired the structure; the reading experience, visual design, content, and interactions are specific to Clean Books. `PrototypeSample` is unchanged.

**Live prototype:** [devotronix-apps.github.io/clean-books-prototype](https://devotronix-apps.github.io/clean-books-prototype/)

## Open

Double-click `index.html` in Chrome, Safari, or another modern browser. No installation or build is required. For a stable browser-storage origin and file import support, serve this folder:

```sh
python3 -m http.server 8765
```

Open **http://localhost:8765**. Run that command from the standalone prototype repository root. In the original Xcode workspace, use `python3 -m http.server 8765 --directory Prototype`. Browser state is stored per origin, so switching between a file URL and localhost creates separate demo sessions.

## Take a look around

- **Home:** current book, resume, daily goal, reading statistics, recent books, and a six-step setup tour.
- **Bookshelf:** cover grid, title/author search, reading/unread/finished filters, Add Book, and book options opening Content Review.
- **Explore:** sample Gutenberg discovery, author and subject details, grouped search, book details, sample-add progress, and the featured Little Brother content-review demo.
- **Reader:** remembered chapter, chapter navigation, keyboard arrows and swipes, chrome visibility, contents, persistent bookmarks, fonts, size, four exact page tones, Paged/Scroll controls, and browser speech.
- **Parent Edit Mode:** paragraph redaction, exact selected-text redaction, manual category tags and severity, passage review, search, filtered-word review, annotation notes, and Open Book Here.
- **Settings:** global filtering, independent redaction settings, daily goal, dictionary preference, optional demo PIN, help articles, tutorials, and resource-state previews.
- **Filters:** live matching preview, literal/regex modes, four boundary styles, enable/edit/delete, full reset/append, and all 157 built-in rules transcribed from the spec plus its ten starter rules.
- **Pronunciations:** book-scoped add/edit/delete, audio previews, suggestions, exports, imports, and copy with existing-target conflict retention.
- **Portable packages:** browser-local JSON export/import for filters, redactions, review, and pronunciations; edition validation, merge/overwrite confirmations, invalid-file feedback, and safe text-range checks.

On a desktop, the app is always shown inside a phone frame, with presentation shortcuts beside it. On a phone, the frame and presentation panel disappear and the mobile UI fills the screen. The phone app uses four bottom tabs, not a desktop sidebar. Use the presentation panel or Help & Tutorials → Prototype controls to reset sample state. Changes persist across reloads in the current browser. There is no account or cloud sync.

## Scope and honest preview boundaries

This is an interaction prototype, not an equivalent native reader implementation or a production security system.

- The seeded library and activity are illustrative. Seeded books contain short public-domain excerpts, reused across demonstration chapters. The Little Brother flow uses an explicitly labeled placeholder passage and demo category tag, not the original novel or production classifications.
- **Real EPUB import** reads ZIP/OPF metadata and ordered chapter paragraphs, detects duplicate content, and persists text in browser storage. It simplifies formatting and omits embedded images, DRM, advanced anchor mapping, and original covers. Limit: 20 MB compressed / 40 MB extracted. Large books can exceed browser-storage limits. Storage failures are reported. Test with the included original `tests/fixtures/a-quiet-morning.epub`.
- **Paged** provides chapter navigation with a scrollable reading surface, rather than typeset pagination or an iOS page-curl. **Scroll** additionally restores chapter scroll offsets. The visible count is chapters. No bottom page scrubber is offered.
- **Voice** uses actual voices exposed by the browser. Boundary-based highlighting is a best-effort preview and does not implement native word timing or pronunciation-to-visible-word mapping. Seek buttons approximate ten seconds as a text offset. iOS background audio and Now Playing are not emulated.
- **Kokoro**, native biometrics, system dictionaries, device brightness, Apple Intelligence, and the Wi-Fi upload server cannot run here. The UI explains their requirements or unavailable state. Brightness is a visual approximation. Kokoro’s full 54-name inventory is browsable without pretending the model is installed.
- **Gutenberg catalog, downloads, and dictionary installation** are simulated. No remote EPUB or catalog request is made. Independent resource-state previews include progress, cancel, failure, waiting offline, retry, and ready states.
- **PIN protection** demonstrates protected routes, cancellation, incorrect-entry feedback, and a digit challenge after three failures. It uses local plain-text demo storage and a normal input rather than a native scrambled keypad. Use a throwaway PIN only. It provides no real access control.
- **Package formats** use the named extensions with a deliberately separate `cleanbooks-prototype` JSON schema. They are **not compatible with native app exports**. Other schemas are rejected rather than guessed. Review packages require an exact deterministic content fingerprint. Exports download through the browser instead of invoking the iOS share sheet.
- **Classifications** are manual or imported. Imported baselines support correction resets. No active AI classification generation, EPUB-sharing action, paywall, or invented subscription purchase is shown.
- The UI is English. Native localization, right-to-left behavior, exact EPUB rendering, system accessibility integrations, and every native acceptance scenario remain outside this prototype.

All fonts and artwork are local. DM Sans and Literata are bundled under their included SIL Open Font Licenses in `assets/fonts`. Book-cover illustrations are original inline SVG. The definition link is the only explicit external navigation; no service receives library content.

## Files

- `index.html` — phone presentation and desktop preview controls.
- `prototype.css`, `prototype.js` — phone frame, responsive presentation, and screen shortcuts.
- `app.html` — mobile app surface, with status bar and home indicator.
- `styles.css` — responsive design, local fonts, and reader/modal states.
- `app.js` — views, browser state, EPUB parsing, and interactions.
- `defaults.js` — complete stock rules from Appendix A.
- `assets/` — icon and bundled licensed fonts.
- `tests/behavior.test.mjs` — focused checks for matching, concealment, package validation, and merging.
- `tests/fixtures/a-quiet-morning.epub` — tiny original EPUB for import QA.

Run checks with:

```sh
node --check app.js
node --check prototype.js
node --check defaults.js
node tests/behavior.test.mjs
```

## GitHub Pages

The standalone `devotronix-apps/clean-books-prototype` repository hosts this prototype from `main` at the repository root. `.nojekyll` keeps deployment static. Assets use relative paths so they work under the repository URL. Publishing changes the preview location only; it does not add web accounts, a backend, or cloud synchronization to the intended mobile app. Local preview state and hosted preview state are separate browser origins. The native Xcode application is not included in this public repository.

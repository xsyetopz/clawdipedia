# Tasks: Release Claude Code 2.1.316 and Document the Missing Mechanisms

Each release-notes item is `(proposed)` until a check in the program or a probe confirms it.
Do not let a page state a `(proposed)` item.
`cc-inspect` was not loaded as a tool in this session, so its actions were called through its own MCP
server (`inspect/mcp/dist/server.js`) from a stdio client, with `CC_INSPECT_CACHE` set to `captures/`.

## 1. Toolkit Run

- [x] 1.1 `bun run release:all -- --from 2.1.314 --to 2.1.316` (check, schemas, diff, clean, prompts
  `--no-render`, probe:print, probe:pty, facts `--check`, facts, compare).
- [x] 1.2 `bun run release:prompts -- --from 2.1.314 --to 2.1.316`, which renders `docs/prompts/`.
  Review `git diff docs/prompts/`.
- [ ] 1.3 `bun run release:probe:live -- --yes`. Standing approval is in `CLAUDE.local.md`.
- [ ] 1.4 `bun run release:probe:managed`. It needs the user to run two `sudo` commands.

## 2. Pages from the Diff

Source: `captures/2.1.316/diff/report.md`.

- [x] 2.1 A row or an exclusion for each of the 14 new environment variables.
- [x] 2.2 A row for `--session-began-as-copy` and `auth login --gateway-json`, or an exclusion.
- [x] 2.3 `bashEditDiffEnabled`: the new default (off, except in auto mode).
- [x] 2.4 `BASH_ENV`: the changed detail.
- [x] 2.5 The 18 new error texts on the page the diff names, and the 2 removed texts off the pages. Seven new texts reach only the debug log, a cloud session, or an internal check, so no page takes them. The extractor missed a conditional `throw`, so the diff listed `read not allowed under permissions.blockReadsOutsideWorkingDirectories` as removed. It is still in `2.1.316`.
- [x] 2.6 The 2 removed gates, `tengu_bubbly_canyon` and `tengu_enchanted_nest`, off the pages. Only the generated `docs/reference/surface-coverage.md` names them, so `bun run surface` in 6.1 removes them.

## 3. Release-Notes Items

Source: `captures/2.1.316/notes.md` and the `release` action `notes` (28 matched, 4 gated, 23 unmatched).
Leave out VS Code, Cloud sessions, Claude Tag, Code Review, the self-hosted runner, and the Claude apps gateway.

- [x] 3.1 `CLAUDE_CODE_DISABLE_ULTRATHINK`: row in `models-and-effort.md`.
- [x] 3.2 `CLAUDE_CODE_SUBAGENT_EFFORT` and its place in the effort order: row in `models-and-effort.md` (`chunk-05t65sbt.js`).
- [x] 3.3 `CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP` and `CLAUDE_CODE_DISABLE_SELF_NAMED_CERT_DROP`: rows in `network-and-proxy.md`.
- [x] 3.4 Opus 4.8 fast mode deprecation. Not new: the notice (`tengu_sunset_penguin_opus48`, default `2026-11-30`) is in both versions (`chunk-wysb6q7k.js@3625`, `chunk-sy129746.js@3625`). `slash-commands.md` no longer says "since 2.1.316".
- [x] 3.5 Managed `autoMode.allow` without `"$defaults"` and the scheduled-task rule: `auto-mode.md`, "Which Sources Count" (`chunk-k83gbg21.js`, `chunk-n6xbt9zz.js`).
- [x] 3.6 Server-managed settings. The prompt-free path (`first_party_silent`, predicate in `chunk-tjhecrh9.js@3050`) and the stored-copy refusal are in both versions. New in 2.1.316: "the stored copy is not a regular file" (`chunk-j4564a1j.js@175120`), `refusedCopyHelperTier`. Algorithm written in `docs/configure/settings/enterprise.md`.
- [x] 3.7 `--restricted` and Read allow rules outside the working directories: `reference/tools/files.md`.
- [x] 3.8 `/model <id>` warns about an unknown model and the 200K window (proposed).
- [x] 3.9 Bash tool shell: aliases with line breaks, dash-named functions, exported `SHELLOPTS`: `shell-and-web.md`.
- [x] 3.10 PowerShell hooks and exit code 2. Confirmed: 2.1.314 `pWe` (`chunk-sq7yspzm.js@863369`) against 2.1.316 `CHt` (`chunk-qd604jgh.js@863809`). `handlers.md:76` holds.
- [x] 3.11 Sub-agent model inheritance after a wake-up (proposed). Not confirmed: the saved metadata `model` is the per-call `model` (`chunk-b6x26kja.js`). `runtime.md` says so.

## 4. Missing Mechanisms

Source: two gap analyses of `~/Downloads/CodeProjects/xsyetopz/claudetto/docs/` against `docs/`.
Check each fact again in `2.1.316` before a page states it. Keep claudetto's measured numbers with their version.

- [x] 4.1 The shared enable gate of `ListSkills`, `ListPlugins`, `SearchPlugins`, `SearchSkills`, `SuggestSkills`,
  and `SuggestPluginInstall` (`docs/reference/tools/gated-and-other.md`).
- [x] 4.2 The enable logic of `EnterPlanMode`, `ExitPlanMode`, and `AskUserQuestion` (`docs/reference/tools/agents-and-tasks.md`).
- [x] 4.3 Built-in `cc-plugin-<name>@builtin` plugins: the full list, `enabledPlugins`, and the policy-only flags
  (`docs/extend/mod-api/nouns-and-gates.md`).
- [x] 4.4 `cc-plugin-responsive-mode` and the `focus_mode` section (`docs/how-it-works/system-prompt.md`).
- [x] 4.5 How `tool.describe` resolves a description (the `tool.describe` call page).
- [x] 4.6 Per-tool definition sizes and the deny-list savings in characters (`docs/how-it-works/context-budget.md`). The Responsive Mode prompt text is not read.
- [x] 4.7 `disableBundledSkills` and the Workflow tool, and `enableWorkflows: false` against `disableWorkflows: true`.
- [x] 4.8 Subagent and hook-agent limits: the hook-agent turn cap, `max_turns_reached`, `error_max_turns`,
  the spawn depth order, and `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION` (`docs/extend/subagents/`). `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION`: no code reads it, so it stays off the page.
- [x] 4.9 The gates of compaction: `precomputeCompactionEnabled`, `CLAUDE_CODE_COLD_COMPACT`, the retry gate,
  and the reactive path (`docs/how-it-works/context-and-compaction.md`).
- [x] 4.10 The skill listing: the size of each skill, the cost of one line, the order of `skillOverrides` values,
  and the env switches for each skill (`docs/extend/skills-and-commands/bundled-skills.md`).
- [x] 4.11 Items G11 to G52 in `gaps.md`, less G38. `gaps.md` lists the 5 claudetto files that were not read.
  Skipped: G16 and the per-list cuts of G15 (claudetto numbers only), and G30 (not confirmed in the program).

## 5. What Changed

- [x] 5.1 `docs/start/what-changed.md` holds only the `2.1.316` section, compared with `2.1.314`.
- [x] 5.2 Drop the `2.1.314` fact ids from `tools/release/facts/map.json`, and map the new facts.

## 6. Release

- [x] 6.1 Bump `src/version.ts` to `2.1.316`, run `bun run schemas`, `bun run surface`, `bun run surface:check`.
- [x] 6.2 `bun run version:bump -- clawdipedia-docs patch`, and bump `clawdipedia-docs-cli` with it.
- [x] 6.3 One `CHANGELOG.md` entry.
- [x] 6.4 `bun run schemas:check` and `bun run verify:locked`.
- [ ] 6.5 Review of the diff, then commit. Do not push: the user chose a local commit for this release.

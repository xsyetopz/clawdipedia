# Proposal: Release Claude Code 2.1.316 and Document the Missing Mechanisms

## Why

The site tracks `2.1.314`. [`2.1.316`](https://github.com/anthropics/claude-code/releases/tag/v2.1.316) shipped 2026-10-31.
There is no `2.1.315`: `gh release list -R anthropics/claude-code` goes from `v2.1.316` to `v2.1.314`.
So one hop, `2.1.314` to `2.1.316`, covers every change.

The user also asks the site to go deeper into the algorithms, data structures, and real surfaces of Claude Code.
The claudetto repository (`~/Downloads/CodeProjects/xsyetopz/claudetto/docs/`) records mechanisms that the site does not cover,
such as the hidden model calls Claude Code makes by itself, the tool registry gates, and the compaction retry.
Those records were read on `2.1.311` and `2.1.312`. Each one SHALL be checked again against `2.1.316` before a page states it.

## What Changes

### 1. Track `2.1.316`

Run the runbook in `tools/release/README.md` from `2.1.314` to `2.1.316`, and give every item a page or an exclusion.
From `captures/2.1.316/diff/report.md`:

- 14 new environment variables, among them `CLAUDE_CODE_DISABLE_ULTRATHINK`, `CLAUDE_CODE_SUBAGENT_EFFORT`,
  `CLAUDE_CODE_DISABLE_LOOPED_CROSS_CERT_DROP`, and `CLAUDE_CODE_AUTO_MODE_FULL_CONTEXT`. `BASH_ENV` lost its detail.
- 2 new flags: `--session-began-as-copy` and `auth login --gateway-json`.
- `bashEditDiffEnabled` changed its default: it is now off except in auto mode.
- 34 new gates and 2 gone, 1 new link, 18 new error texts and 2 gone.
- No change to commands, hooks, tools, models, keybindings, the Mod API, betas, or OpenTelemetry events.

State a release-notes item only after a check in the program or a probe.
Leave out VS Code, Cloud sessions, Claude Tag, Code Review, the self-hosted runner, and the Claude apps gateway admin API, which this site does not cover.

### 2. Document the Missing Mechanisms

For each mechanism that claudetto records and the site lacks, read the `2.1.316` program through `cc-inspect`, and write it on the page that owns the topic.
The list comes from a gap analysis of the claudetto docs against `docs/` and goes into task 4.
Facts measured by claudetto on its own machine keep their source and version. Facts that the program shows get "the program".
The `dossier/` pages of claudetto are third-party posts that nobody verified, so no page cites them.

A new way to probe the program goes into `cc-inspect` (`inspect/mcp`) with a test.

### 3. Release

Bump `src/version.ts` last, regenerate `schemas/` and the surface snapshot, bump the plugins, and write one `CHANGELOG.md` entry.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

None. The `tracked-release-docs` requirements already describe this release.

## Impact

`docs/`, `tools/release/facts/map.json`, `tools/surface/`, `schemas/`, `src/version.ts`, `plugin/`, `cli/`,
`inspect/` if a new lookup is added, `.claude-plugin/marketplace.json`, and `CHANGELOG.md`.

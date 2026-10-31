# Gaps: claudetto Docs Against the Site

Source: a read-only comparison of `~/Downloads/CodeProjects/xsyetopz/claudetto/docs/` with `docs/`, run 2026-10-31.
Three reads covered 39 of the 44 files; the unread files are listed at the end. A status comes from one grep for each literal over `docs/`, not from a read of the page.
MISSING: the literal is not in `docs/`. SHALLOW: the name is there, but the behavior is not.
Every item is a lead. Check it in `2.1.316` before a page states it. The numbers are claudetto's, measured on the version given.

## Known (Tasks 4.1 to 4.10)

| Id | Item | claudetto | Owner page |
| --- | --- | --- | --- |
| G1 | Shared enable gate of the skill and plugin search tools | `gates.md:13-46` (2.1.311) | `docs/reference/tools/gated-and-other.md` |
| G2 | `EnterPlanMode`, `ExitPlanMode`, `AskUserQuestion` enable logic | `gates.md:48-72`, `surfaces.md:868-870` | `docs/reference/tools/agents-and-tasks.md` |
| G3 | Built-in `cc-plugin-<name>@builtin` (13 in claudetto, 6 on the site) | `gates.md:74-109` | `docs/extend/mod-api/nouns-and-gates.md:118-128` |
| G4 | `cc-plugin-responsive-mode`, `focus_mode` | `surfaces.md:714-729` | `docs/how-it-works/system-prompt.md:196` |
| G5 | `tool.describe` resolution (`resolveToolDescription`) | `gates.md:111-154` | `docs/extend/mod-api/calls/tool-command-config.md` |
| G6 | Per-tool definition sizes, deny-list savings | `surfaces.md:52-157,745-772`, `prompt/variants.md:46-69` | `docs/how-it-works/context-budget.md` |
| G7 | `disableBundledSkills`, Workflow tool, `enableWorkflows` against `disableWorkflows` | `surfaces.md:622-629,691` | `docs/extend/skills-and-commands/bundled-skills.md` |
| G8 | `max_turns_reached`, `error_max_turns`, hook-agent cap 50, `CLAUDE_CODE_MAX_SUBAGENTS_PER_SESSION` | `levers.md:27,38-47` | `docs/extend/subagents/runtime.md` |
| G9 | Compaction gates: `precomputeCompactionEnabled`, `CLAUDE_CODE_COLD_COMPACT`, `stripNonEssential`, reactive second ask | `surfaces.md:358-467`, `window-weights.md:157-170` (2.1.312) | `docs/how-it-works/context-and-compaction.md` |
| G10 | Skill listing sizes, `skillOverrides` order, UI-command refusal | `surfaces.md:776-833` | `docs/extend/skills-and-commands/index.md` |

## New (Task 4.11)

| Id | Status | Item | claudetto | Owner page |
| --- | --- | --- | --- | --- |
| G11 | SHALLOW | `/usage` screen: parts, cache-miss "likely cause" list, "expected rebuilds" | `window-weights.md:9-40,215-228` | `docs/how-it-works/request-and-cache.md` |
| G12 | MISSING | Compaction record: `compactMetadata.trigger`, `preTokens`, `postTokens`, `durationMs`, `isCompactSummary` | `evidence/compaction/boundaries.md` | `docs/reference/transcript-format.md` |
| G13 | MISSING | Context check between turns, not between tool results | `evidence/compaction/threshold.md` | `docs/how-it-works/context-and-compaction.md` |
| G14 | SHALLOW | Threshold `min(floor(E*pct/100), E-13000)`, hard block at `E-3000` | `surfaces.md:358-467` | `docs/how-it-works/context-and-compaction.md` |
| G15 | MISSING | Auto-mode classifier: `<block>`, `max_tokens`, retries, per-list cuts | `prompt/machinery.md:56-146` | `docs/configure/permissions/auto-mode.md` |
| G16 | MISSING | Classifier request size by arm | `prompt/footprint.md:467-476` (2.1.314) | `docs/configure/permissions/auto-mode.md` |
| G17 | SHALLOW | Named default auto-mode rules | `auto-mode.md:9-86` (2.1.311) | `docs/configure/permissions/auto-mode.md` |
| G18 | MISSING | `claude auto-mode defaults` equals `config` without an `autoMode` key | `auto-mode.md:7` | `docs/configure/permissions/auto-mode.md` |
| G19 | MISSING | Classifier billing notice on stderr in `-p` with a non-Anthropic base URL | `prompt/footprint.md:478-480` (2.1.314) | `docs/configure/permissions/auto-mode.md` |
| G20 | SHALLOW | Compaction prompt, prompt-hook and agent-hook calls | `prompt/machinery.md:7-23,148-180` | `docs/extend/hooks/` |
| G21 | SHALLOW | Prompt variants and switches, `--bare` | `prompt/variants.md:9-19` (2.1.311) | `docs/how-it-works/system-prompt.md` |
| G22 | SHALLOW | Prompt override flags, agent file replaces `system[2]` | `prompt/overrides.md` | `docs/configure/output-styles.md` |
| G23 | MISSING | Plugin agent file costs listing characters when unused | `prompt/footprint.md:71-81` (2.1.316) | `docs/extend/mod-api/calls/agent.md` |
| G24 | MISSING | Output style body goes in `messages`, with a reminder each user message | `prompt/footprint.md:152-185` (2.1.312) | `docs/configure/output-styles.md` |
| G25 | MISSING | `disable-model-invocation: true` drops a skill from the listing | `prompt/footprint.md:236-259` | `docs/extend/skills-and-commands/` |
| G26 | MISSING | Three system blocks, `x-anthropic-billing-header` | `surfaces.md:837-852` | `docs/how-it-works/request-and-cache.md` |
| G27 | MISSING | `prompt.context` once per conversation, `prompt.attachment` once per message | `prompt/footprint.md:301-331` | `docs/extend/mod-api/calls/turn-prompt.md` |
| G28 | MISSING | Mod declaration files written on load | `types.md:3-24` | `docs/extend/mod-api/` |
| G29 | SHALLOW | Sandbox decision paths, `allowRead` over `denyRead` | `sandbox.md:16-26,57-64` (2.1.312) | `docs/configure/permissions/sandbox.md` |
| G30 | MISSING | `Read(~/.ssh/**)` deny does not cover Bash `cat` without the sandbox | `sandbox.md:44-46` | `docs/configure/permissions/sandbox.md` |
| G31 | MISSING | Sandbox section size, path list cut | `prompt/footprint.md:456,463-465` (2.1.314) | `docs/configure/permissions/sandbox.md` |
| G32 | SHALLOW | `skillListingBudgetFraction`, `skillListingMaxDescChars` defaults | `levers.md` | `docs/extend/skills-and-commands/index.md` |
| G33 | SHALLOW | `BASH_MAX_OUTPUT_LENGTH` clamp and overflow file | `levers.md` | `docs/configure/env-vars/tools-and-bash.md` |
| G34 | SHALLOW | `crossSessionInbound`, `autoContinueAtUsageLimit`, `respondToBashCommands`, `fastModePerSessionOptIn` | `levers.md` | `docs/configure/settings/index.md` |
| G35 | SHALLOW | Cache TTL: `promptCacheTtl`, `CLAUDE_CODE_PROMPT_CACHE_TTL`, `experimental.cacheTtl` | `levers.md` | `docs/how-it-works/request-and-cache.md` |
| G36 | MISSING | Tool registry predicates | `surfaces.md:854-872` | `docs/reference/tools/` |
| G37 | MISSING | `CLAUDE_CODE_THRIFTY_SONIC` | `levers.md`, `surfaces.md:469-499` | `docs/configure/env-vars/` |

| G39 | SHALLOW | `--resume` after a hook-built compaction: `preservedSegment`, `preservedMessages`, rows without `handle` | `evidence/code-compaction-probe.md:86-105,132-141` (2.1.310, 2.1.311) | `docs/extend/mod-api/types/session/compact-measure-messages.md` |
| G40 | MISSING | Secret masking: `redactContext`, `redactTokens`, `redactForDisplay`, the rule table | `evidence/redaction.md:3-52` (2.1.312) | `docs/configure/env-vars/telemetry-and-debug.md` or `docs/reference/` |
| G41 | SHALLOW | Subagent rows only in `<session>/subagents/*.jsonl`, `attributionAgent` | `early-stops.md:3-7` (2.1.311) | `docs/reference/transcript-format.md:66` |
| G42 | MISSING | `[Old tool result content cleared]`, `clear_tool_uses_20250919`, `applied_edits` | `evidence/probes-2.1.301.md:23` (2.1.301) | `docs/how-it-works/context-and-compaction.md` |
| G43 | SHALLOW | Plugin agent `maxTurns` check (`has invalid maxTurns`), ignored `initialPrompt` and `observe*` keys | `evidence/probes-2.1.301.md:20` (2.1.301) | `docs/extend/subagents/frontmatter.md` |
| G44 | SHALLOW | Stop prompt hooks: model order, fail-open, bracketed prompt on each block, silent subagent end | `evidence/stop-hook-eval.md:33-77` (2.1.292, 2.1.296) | `docs/extend/hooks/handlers.md` |
| G45 | MISSING | `autoMode` in project or local settings dropped (`tengu_settings_auto_mode_untrusted_source_ignored`) | `auto-mode.md:194,246` (2.1.312) | `docs/configure/permissions/auto-mode.md` |
| G46 | MISSING | `--settings` must come before `auto-mode <sub>`; `critique` auth failure and cut-off reply | `auto-mode.md:189-196,222-229`, `evidence/auto-mode-critique.md:16-37` | `docs/configure/permissions/auto-mode.md` |
| G47 | SHALLOW | `/auto-mode-setup`: `--propose`, `--apply-file`, the one-shot `--apply` refusal | `auto-mode.md:296-320` | `docs/configure/permissions/auto-mode.md` |
| G48 | MISSING | Broad allow rules dropped on entering auto mode (official page; claudetto did not read the program) | `auto-mode.md:256` | `docs/configure/permissions/auto-mode.md` |
| G49 | SHALLOW | `autoMode.environment` adds beside the built-in entry; the 21 field labels; built-in list sizes | `auto-mode.md:260-269,315` (2.1.312) | `docs/configure/permissions/auto-mode-rules.md` |
| G50 | SHALLOW | Default rules in listing lines 87-131; the site may already hold them | `auto-mode.md:87-130` (2.1.311) | `docs/configure/permissions/auto-mode-rules.md` |
| G51 | SHALLOW | `effortLevel` resolution order; user-file top-level `effortLevel` and Opus 5.5 (official page) | `models.md:157-167` | `docs/configure/models-and-providers/effort-thinking-and-fallback.md` |
| G52 | MISSING | Plugin validator `ICON_MISSING`, `ICON_INVALID` | `keep/lucide/README.md:41-52` | `docs/extend/plugins/manifest.md` |

Left out:

- G38, a placebo study of skills. It is a personal study, not program behavior.
- G53, how third-party handoff plugins use the compaction events. It describes those plugins, not Claude Code.

## Not Read

`evidence/grader-blindness.md`, `evidence/model-guidance.md`, `evidence/prohibition-lists.md`, `evidence/reply-openings.md`,
and `evidence/auto-mode-critique.md` past line 60. By title they cover prompt text and graders.

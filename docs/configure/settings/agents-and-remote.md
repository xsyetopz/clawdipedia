---
title: Agents and Remote Settings
description: Keys for subagents, workflows, background work, Remote Control, push notifications, and peer sessions.
sidebar_position: 8
---

These keys control subagents, workflows, background work, and Remote Control.
Use them to start a session as a named agent or to turn off a feature you do not want.
Rows marked as undocumented can change in any release.

`disableRemoteControl`, `disableAgentView`, and `disableWorkflows` turn features off.

## Keys

Source: [Settings Reference](https://code.claude.com/docs/en/settings-reference) for rows marked <Documented />. For rows marked <Undocumented />, Source: the program (its bundled settings schema).
Where to Set It tells you which files may set the key. See [Settings Files and Scopes](index.md#where-settings-live).

| Key | Status | Type | Default | What It Does | Where to Set It |
| --- | --- | --- | --- | --- | --- |
| `agent` | <Documented /> | string | - | Start every session as a named subagent with its prompt, tools, and model. | Any settings file |
| `agentPushNotifEnabled` | <Documented /> | boolean | - | Let Claude send a push notification to your phone when it decides to. | Any settings file |
| `askUserQuestionTimeout` | <Documented /> | enum: `60s`, `5m`, `10m`, `never` | `never` | Let an unanswered question auto-continue after idle time. Auto-continue runs only when you set `60s`, `5m`, or `10m`. | User or managed settings |
| `autoContinueAtUsageLimit` | <Documented /> | boolean | - | Wait in the open session and continue the task automatically after a claude.ai usage limit resets. | User or managed settings |
| `autoUploadSessions` | <Undocumented /> <Caution /> | boolean | - | Mirror local sessions to claude.ai as view-only, with no remote control. | Settings files |
| `crossSessionInbound` | <Documented /> | string | - | Choose what happens to messages from your other sessions. `accept` delivers them. `hold` parks them for review. `refuse` opts out. | Any settings file |
| `daemonColdStart` | <Undocumented /> | enum: `transient`, `ask` | - | Choose what happens when no background service runs: `transient` starts one for this login session. `ask` offers a permanent install. | Settings files |
| `dialogExpiry` | <Documented /> | enum: `60s`, `5m`, `10m`, `never` | `5m` | Set how long Claude Code waits for Remote Control or an SDK host to answer a forwarded dialog before it cancels the dialog. `never` removes the deadline. `CLAUDE_CODE_USER_DIALOG_TIMEOUT_MS` wins. | User or managed settings |
| `disableAgentView` | <Documented /> | boolean | - | Turn off background agents and agent view. Matches `CLAUDE_CODE_DISABLE_AGENT_VIEW=1`. | Any settings file |
| `disableRemoteControl` | <Documented /> | boolean | - | Turn off Remote Control everywhere it can start. | Any settings file |
| `disableWorkflows` | <Documented /> | boolean | - | Turn dynamic workflows off for everyone. Use `enableWorkflows` for yourself. A `true` from managed settings, or the env var `CLAUDE_CODE_DISABLE_WORKFLOWS`, gives the reason `managed_settings`. A `true` only in your own user settings, with the env var unset, gives `user_setting` (the program). Code Review on pull requests and `/ultrareview` run in the cloud and stay on. | Any settings file |
| `doneMeansMerged` | <Undocumented /> | boolean | - | Keep Claude working until the pull request is ready to merge, a timer is set to resume, or it hands you a self-contained next step. | Settings files |
| `enableWorkflows` | <Documented /> | boolean | - | Turn dynamic workflows on or off against your plan's default. The checks run in this order: runtime support, `disableWorkflows` from the env var or from a settings file other than your user settings, organization policy, plan availability, then this key. A `false` from your user settings or the plan default gives `user_setting`. A `false` from managed settings gives `managed_settings`. A `disableWorkflows: true` in your own user settings is checked last and gives `user_setting`. So `enableWorkflows: true` never overrides `disableWorkflows: true` (the program). | Any settings file |
| `inputNeededNotifEnabled` | <Documented /> | boolean | - | Get a push notification when Claude is waiting on you. | Any settings file |
| `isolatePeerMachines` | <Documented /> | boolean | - | Ask you before Claude messages one of your sessions on another machine. | Any settings file |
| `modelProposedGoals` | <Undocumented /> | string | `auto` | Control whether the model may propose session goals. `auto` (the default), `alwaysAsk`, or `disabled`. Claude Code ignores project and local settings. | Settings files |
| `processWrapper` | <Documented /> | string | - | Run Claude Code's background processes through a corporate launcher on macOS and Linux. It is the same as `CLAUDE_CODE_PROCESS_WRAPPER`, which wins. Claude Code ignores project and local files. | User or managed settings |
| `remote` | <Documented /> | object | - | Configure cloud sessions. | Any settings file |
| `remoteControl` | <Undocumented /> | object | - | Set options for `claude remote-control`. | Settings files |
| `remoteControlAtStartup` | <Documented /> | boolean | - | Connect Remote Control automatically when a session starts. | Any settings file |
| `remoteTools` | <Undocumented /> | object | - | Choose how this computer serves tool calls to cloud sessions. | Settings files |
| `skipWorkflowUsageWarning` | <Undocumented /> | boolean | - | Record that you accepted the multi-agent workflow usage warning. Until you set it, auto mode asks before it runs a workflow. | Settings files |
| `sshConfigs` | <Documented /> | array of object | - | Add SSH connections to the Desktop environment dropdown. | User or managed settings |
| `sshHostCommands` | <Undocumented /> | array of object | - | SSH connections in the desktop app on macOS and Linux whose host comes from a command. Each entry has `id`, `name`, and `command`, and can have `sshIdentityFile` and `startDirectory`. The command runs with no shell and must print only the host (`host`, `user@host`, or a JSON object with `sshHost`). Claude Code itself does not use it. New in `2.1.307`. Source: the settings schema | User or managed settings |
| `subagentStatusLine` | <Documented /> | object | - | Rewrite rows in the subagent task display with your own command. | Any settings file |
| `teammateMode` | <Documented /> | string | - | Choose how agent team teammates display. | Any settings file |
| `ultracode` | <Documented /> | boolean | - | Have Claude plan a workflow for each substantive task without you asking. It lasts one session. It needs workflows on and a model that supports it. | Any settings file |
| `workflowKeywordTriggerEnabled` | <Documented /> | boolean | `true` | Let the word `ultracode` in a prompt start a workflow. Set `false` to type it without starting one. | Any settings file |
| `workflowSizeGuideline` | <Documented /> | enum: `unrestricted`, `small`, `medium`, `large` | `medium` | Set the agent count Claude aims for in dynamic workflows. `small` aims for fewer than 5 agents, `medium` fewer than 10, `large` fewer than 50. This is a hint, not a limit. | Any settings file |

## Example

### Turn Off Remote Control for Everyone

An administrator puts this in the managed settings file. Remote Control and agent view stay off on that machine.

```json title="managed-settings.json"
{
  "disableRemoteControl": true,
  "disableAgentView": true
}
```

## Related Pages

- [Settings Files and Scopes](index.md) explains the scopes, precedence, and managed settings.
- [Settings Reference](https://code.claude.com/docs/en/settings-reference) is the official page for each key.
- [Subagents](../../extend/subagents/index.md) covers custom agents.
- [Remote Control](https://code.claude.com/docs/en/remote-control) is the official page for that feature.
- [Agents and Teams Variables](../env-vars/agents-and-teams.md) and [Remote and Cloud Session Variables](../env-vars/remote-and-cloud-sessions.md) list the matching variables.

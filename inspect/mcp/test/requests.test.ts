import { expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { filesOf, placesOf, resultText, toolNames } from "../src/requests.ts";
import type { Sent } from "../src/run.ts";

const sent = (path: string, body: unknown): Sent => ({
  method: "POST",
  path,
  host: "127.0.0.1",
  fakeKey: true,
  body,
});

test("toolNames lists the tools of each messages request and skips other requests", () => {
  const names = toolNames({
    requests: [
      sent("/v1/messages?beta=true", {
        tools: [{ name: "Bash" }, { name: "Glob" }],
      }),
      sent("/v1/messages/count_tokens", { tools: [{ name: "Read" }] }),
      sent("/api/oauth/profile", null),
      sent("/v1/messages", { messages: [] }),
    ],
  });
  expect(names).toEqual([["Bash", "Glob"], []]);
});

test("placesOf names each request, stream, and file that holds the text", () => {
  const places = placesOf(
    {
      requests: [
        sent("/v1/messages", { messages: [{ content: "a tok-123 b" }] }),
        sent("/v1/messages/count_tokens", { messages: [] }),
      ],
      stdout: "x tok-123",
      stderr: "",
      files: { "projects/p/s.jsonl": '{"m":"tok-123"}', "other.jsonl": "{}" },
    },
    "tok-123",
  );
  expect(places).toEqual([
    "request 1 POST /v1/messages",
    "stdout",
    "file projects/p/s.jsonl",
  ]);
});

test("filesOf reads the JSONL files under a folder by relative path", () => {
  const dir = mkdtempSync(join(tmpdir(), "files-of-"));
  try {
    mkdirSync(join(dir, "projects", "p"), { recursive: true });
    writeFileSync(join(dir, "projects", "p", "s.jsonl"), "{}\n");
    writeFileSync(join(dir, "notes.txt"), "no");
    expect(filesOf(dir)).toEqual({
      [join("projects", "p", "s.jsonl")]: "{}\n",
    });
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("resultText reads the last result event", () => {
  expect(
    resultText({
      events: [
        { type: "result", result: "a" },
        { type: "result", result: "b" },
      ],
    }),
  ).toBe("b");
  expect(resultText({ events: [] })).toBeNull();
});

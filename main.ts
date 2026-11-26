import { mkdirSync, writeFileSync } from "node:fs";

// One original dad joke: a single line of 1-140 chars. The sealed gate
// accepts only this file's contents, so write exactly the joke — no
// trailing newline, no extra text. Never remove /output itself; the
// grader mounts it, so only create it if missing.
const joke = "I asked the dictionary for a joke — it was at a loss for words.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

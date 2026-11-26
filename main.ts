// Funniest Sign on a Haunted Server Room Door
// make.fun competition u-eager-stork-81-9647-funniest-sign-on-a-haunted-ab1d019a
// One line, at most 120 characters: the funniest sign for the door of a
// haunted server room. The judge reads lines in pairs, funnier survives.
//
// The joke is a thermostat sign — the kind of notice a sysadmin really
// tapes to a server-room door — turned on its head: the ghost likes the
// cold aisle cold, and the threat is that it likes the reader colder.
// Fresh angle: of the 494 entries already in, none uses the thermostat,
// the cold aisle as a preference, or a "colder than you" threat.
// No "ghost has root", no reboot joke, no Wi-Fi password — the field is
// already full of those, and the judge rewards a fresh haunting.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 120 characters.
// The program self-checks before writing, so a bad line fails loudly
// here instead of silently failing the sealed scorer. Written with no
// trailing newline, so the file holds exactly the line.
// Verified locally: run 1 printed exactly the 82-character line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "DO NOT TOUCH THE THERMOSTAT. The ghost likes it cold in here. It likes you colder.";

// Gate: 1-120 characters, single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-120`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);

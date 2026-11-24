// One Sentence for a Traveler from 1800
// Writes a single sentence (<=200 chars) explaining the modern internet
// to a time traveler from 1800, using only things they could picture:
// a road, a post office, a library, a letter, a book.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Picture one road joining every library, post office, and market on earth, so a letter crosses the world in a blink and any book answers when you ask it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
console.log(`Wrote ${SENTENCE.length} characters to /output/entry.txt`);

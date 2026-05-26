import { describe, expect, test } from "vitest";
import { cleanInput } from "./repl.js";

const cases: Array<{ input: string; expected: string[] }> = [
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "single",
    expected: ["single"],
  },
  // TODO: more test cases here
];

describe("cleanInput", () => {
  for (const { input, expected } of cases) {
    test(`cleanInput(${JSON.stringify(input)})`, () => {
      const actual = cleanInput(input);
      expect(actual).toEqual(expected);
    });
  }
});

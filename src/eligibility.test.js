import { describe, expect, it } from "vitest";
import { isEligible } from "./eligibility.js";

describe("isEligible", () => {
  it("accepts an active user who meets the minimum age", () => {
    expect(isEligible({ active: true, age: 21 })).toBe(true);
  });

  it("rejects an inactive adult", () => {
    expect(isEligible({ active: false, age: 25 })).toBe(false);
  });

  it("rejects an active user below the minimum age", () => {
    expect(isEligible({ active: true, age: 16 })).toBe(false);
  });

  it("rejects an inactive underage user", () => {
    expect(isEligible({ active: false, age: 16 })).toBe(false);
  });
});

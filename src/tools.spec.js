import { chunk } from "./tools";

it("ok", () => expect(1 + 1).toBe(2));

describe("chunk", () => {
  it("指定した数に分割できる", () => {
    expect(chunk([], 1)).toEqual([[]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 1)).toEqual([[1, 2, 3, 4, 5, 6]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
      [1, 3, 5],
      [2, 4, 6],
    ]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});

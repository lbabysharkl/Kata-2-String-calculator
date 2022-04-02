const Add = require("./calculator");

test("", () => {
  expect(Add("")).toBe(0);
});

test("1,2", () => {
  expect(Add("1,2")).toBe(3);
});

test("1,2\n3", () => {
  expect(Add("1,2\n3")).toBe(6);
});

test("1,2,", () => {
  expect(() => {
    Add("1,2,");
  }).toThrow();
});

test("//;\n1;3", () => {
  expect(Add("//;\n1;3")).toBe(4);
});

test("//|\n1|2|3", () => {
  expect(Add("//|\n1|2|3")).toBe(6);
});

test("//|\n1|2,3|4", () => {
  // expect(Add("//|\n1|2,3|4")).toBe("| expected but , found at position 3.");
  expect(() => {
    Add("//|\n1|2,3|4");
  }).toThrowError("| expected but , found at position 3.");
});

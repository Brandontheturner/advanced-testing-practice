import { add, subtract, multiply, divide } from "../services/calculations";

describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
describe("subtract", () => {
  it("should subtract 1 and 2 and return 3", () => {
    expect(subtract(5, 4)).toBe(1);
  });
});
describe("multiply", () => {
  it("should multiply 1 and 2 and return 3", () => {
    expect(multiply(5, 4)).toBe(20);
  });
});
describe("divide", () => {
  fit("should divide 1 and 2 and return 3", () => {
    expect(divide(100, 4)).toBe(25);
  });
});

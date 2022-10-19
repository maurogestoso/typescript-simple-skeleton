import { Greeter } from "../src/Greeter";

test("creates a new instance without errors", () => {
  expect(() => new Greeter("Mario")).not.toThrow();
});

test("greets with the specified name", () => {
  const greeter = new Greeter("Mario");

  expect(greeter.greet()).toBe("Hello Mario from TypeScript Simple Skeleton");
});

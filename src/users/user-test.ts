import { capitalizeFirstLetter } from "./user-utils.ts";

test("Capitalizes first letter", () => {
  expect(capitalizeFirstLetter("devops")).toBe("Devops");
});

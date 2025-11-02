import { capitalizeFirstLetter } from "./user-utils.js";

test("Capitalizes first letter", () => {
  expect(capitalizeFirstLetter("devops")).toBe("Devops");
});

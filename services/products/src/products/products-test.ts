import { capitalizeFirstLetter } from "./products-utils.js";

test("Capitalizes first letter", () => {
  expect(capitalizeFirstLetter("devops")).toBe("Devops");
});

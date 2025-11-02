export function capitalizeFirstLetter(str: string): string {
  if (!str || typeof str[0] === "undefined") return "";
  return str[0]!.toUpperCase() + str.slice(1);
}

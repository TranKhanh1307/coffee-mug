export function formatCurrency(price: number) {
  return `$ ${price.toFixed(2)} USD`;
}

export function convertDate(dateStr: string): string {
  // Split the input date string
  const [day, month, year] = dateStr.split("/").map(Number);

  // Create a Date object (note: months are 0-based in JS)
  const date = new Date(year, month - 1, day);

  // Format using toLocaleDateString
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

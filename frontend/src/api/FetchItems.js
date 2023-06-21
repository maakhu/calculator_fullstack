export async function fetchItems() {
  const response = await fetch("/api/cikktetelek");
  const itemsData = await response.json();
  return itemsData;
}
export default fetchItems
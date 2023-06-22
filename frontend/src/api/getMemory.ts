export async function fetchMemory() {
  const response = await fetch("/api/memory");
  const memory = await response.json();
  return memory;
}
export default fetchMemory

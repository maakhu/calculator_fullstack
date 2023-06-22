export async function saveMemory(postItem: any) {
  try {
    const response = await fetch("/api/memory/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postItem),
    });
    const backend = await response.json();
    if (!response.ok) {
      throw new Error(backend.message);
    }
    return backend;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
}

export default saveMemory;


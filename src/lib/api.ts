export async function fetchGlobal() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/global`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch global data");
  }
  return response.json();
}

export async function fetchHome() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/home`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch home data");
  }
  return response.json();
}

import { globalDataSchema } from "./schemas";
import { homeDataSchema } from "./schemas";

export async function fetchGlobal() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/global`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch global data");
  }
  const data = await response.json();
  const parsedData = globalDataSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error("Invalid global data format");
  }
  return parsedData.data;
}

export async function fetchHome() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE}/api/home`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch home data");
  }
  const data = await response.json();
  const parsedData = homeDataSchema.safeParse(data);
  if (!parsedData.success) {
    throw new Error("Invalid home data format");
  }
  return parsedData.data;
}

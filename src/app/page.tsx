import { fetchHome } from "@/lib/api";
import { Hero } from "@/components/hero";
import { ErrorMessage } from "@/components/error-message";

export default async function Home() {
  let homeData;
  let hasError = false;

  try {
    homeData = await fetchHome();
    if (!homeData) {
      throw new Error("Home data is undefined or null");
    }
  } catch (error) {
    console.error("Error:", error);
    hasError = true;
  }

  return (
    <div>
      {hasError ? (
        <ErrorMessage message="Error loading home data" />
      ) : (
        <>
          {homeData && <Hero homeData={homeData} />}
        </>
      )}
    </div>
  );
}

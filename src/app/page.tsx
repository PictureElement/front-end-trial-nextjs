import { fetchHome } from "@/lib/api";
import { z } from "zod/v4";
import { heroItemSchema } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";

type heroItem = z.infer<typeof heroItemSchema>;

export default async function Home() {
  let homeData;
  let hasError = false;

  try {
    homeData = await fetchHome();
  } catch (error) {
    console.error("Error:", error);
    hasError = true;
  }

  let hero;
  if (!hasError && homeData) {
    ({ hero } = homeData);
  }

  return (
    <div>
      {hasError ? (
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-red-600">Error loading home data</h1>
        </div>
      ) : (
        <ul>
          {hero.map((item: heroItem) => (
            <li key={item.id} className="p-4 border-b">
              <p>{item.preheading}</p>
              <h2>{item.heading}</h2>
              <Image
                className="object-cover object-center"
                src={item.image.url}
                width={item.image.width}
                height={item.image.height}
                alt={item.image.alternativeText}
                priority
              />
              <Link href={item.cta.url} target={item.cta.openLinkInNewTab ? "_blank" : "_self"}>
                {item.cta.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

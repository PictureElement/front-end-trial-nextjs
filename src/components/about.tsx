"use client";

import { z } from "zod/v4";
import Image from "next/image";
import { homeDataSchema } from "@/lib/schemas";
import { BtnContained } from "./btn-contained";

type HomeData = z.infer<typeof homeDataSchema>;
type Props = {
  homeData: HomeData,
};

export function About({ homeData }: Props) {
  return (
    <section className="relative px-4 py-20 lg:py-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center">
          <div className="lg:h-full">
            <div className="relative lg:absolute lg:inset-0 h-100 lg:h-full lg:w-[50vw] overflow-hidden">
              <Image
                className="object-cover object-center"
                src="https://placehold.co/1500x1000.jpg"
                fill
                alt="..."
                priority
              />
            </div>
          </div>
          <div className="py-12 lg:ps-15 lg:py-40">
            <p className="text-xs md:text-base uppercase text-primary">Quality Craftmanship from build to delivery</p>
            <h2 className="text-xl md:text-4xl font-bold">Discover the beauty of a handmade kitchen</h2>
            <p className="mt-5 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet sapien venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</p>
            <BtnContained
              label="About Us"
              url="."
              openLinkInNewTab={false}
              showIcon={false}
              lucideIconName=""
            />
          </div>
        </div>
      </div >
    </section >
  );
}

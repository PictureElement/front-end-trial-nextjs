"use client";

import { z } from "zod/v4";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { homeDataSchema } from "@/lib/schemas";

type HomeData = z.infer<typeof homeDataSchema>;
type Props = {
  homeData: HomeData,
};

export function Hero({ homeData }: Props) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {homeData.hero.map((slide, index) => (
        <SwiperSlide key={index}>
          <p>{slide.preheading}</p>
          <h2>{slide.heading}</h2>
          <Image
            className="object-cover object-center"
            src={slide.image.url}
            width={slide.image.width}
            height={slide.image.height}
            alt={slide.image.alternativeText}
            priority
          />
          <Link href={slide.cta.url} target={slide.cta.openLinkInNewTab ? "_blank" : "_self"}>
            {slide.cta.label}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

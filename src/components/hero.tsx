"use client";

import { z } from "zod/v4";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { homeDataSchema } from "@/lib/schemas";
import { BtnContained } from "./btn-contained";

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
          <BtnContained
            label={slide.cta.label}
            url={slide.cta.url}
            openLinkInNewTab={slide.cta.openLinkInNewTab}
            showIcon={slide.cta.showIcon}
            lucideIconName={slide.cta.lucideIconName}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

"use client";

import { z } from "zod/v4";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { homeDataSchema } from "@/lib/schemas";
import { BtnContained } from "./btn-contained";

type HomeData = z.infer<typeof homeDataSchema>;
type Props = {
  homeData: HomeData,
};

export function Hero({ homeData }: Props) {
  return (
    <section>
      <Swiper
        modules={[Pagination, A11y, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {homeData.hero.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative grid place-content-center h-[75vh] bg-cover bg-center bg-no-repeat px-4 py-16 md:py-32"
              style={{ backgroundImage: `url(${slide.image.url})` }}
            >
              <div className="absolute inset-0 w-full h-full bg-black/50"></div>
              <div className="z-10 text-center max-w-3xl text-white">
                <p className="text-xs md:text-base uppercase">{slide.preheading}</p>
                <h2 className="text-2xl md:text-5xl font-bold mb-8">{slide.heading}</h2>
                {/* <Image
                  className="object-cover object-center"
                  src={slide.image.url}
                  width={slide.image.width}
                  height={slide.image.height}
                  alt={slide.image.alternativeText}
                  priority
                /> */}
                <BtnContained
                  label={slide.cta.label}
                  url={slide.cta.url}
                  openLinkInNewTab={slide.cta.openLinkInNewTab}
                  showIcon={slide.cta.showIcon}
                  lucideIconName={slide.cta.lucideIconName}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

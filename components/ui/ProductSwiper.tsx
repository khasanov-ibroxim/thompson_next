// components/ProductSwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

interface ProductSwiperProps {
    images?: string[];
    productName: string;
    defaultImage: StaticImageData;
}

const ProductSwiper = ({
                           images,
                           productName,
                           defaultImage,
                       }: ProductSwiperProps) => {
    // Agar images bo'lmasa yoki bo'sh bo'lsa, faqat default image ko'rsatamiz
    const hasImages = images && images.length > 0;

    if (!hasImages) {
        // Faqat bitta default rasm ko'rsatamiz
        return (
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="relative w-full h-80 lg:h-96">
                    <Image
                        src={defaultImage}
                        alt={productName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative rounded-2xl overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={500}
                className="w-full h-80 lg:h-96"
            >
                {images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-full group">
                            <Image
                                src={image}
                                alt={`${productName} - ${idx + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductSwiper;
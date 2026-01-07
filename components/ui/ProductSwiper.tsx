// components/ui/ProductSwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

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
    // If no images or empty array, show only default image
    const hasImages = images && images.length > 0;

    if (!hasImages) {
        // Show only single default image
        return (
            <div className="relative rounded-2xl overflow-hidden group">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                    <Image
                        src={defaultImage}
                        alt={productName}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
            </div>
        );
    }

    return (
        <div className="relative rounded-2xl overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                loop={true}
                speed={1000}
                className="w-full h-80 sm:h-72 md:h-80 lg:h-96"
            >
                {images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative w-full h-full group">
                            <Image
                                src={image}
                                alt={`${productName} - ${idx + 1}`}
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                priority={idx === 0}
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
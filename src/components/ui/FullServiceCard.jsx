"use client";

import { useEffect, useState } from "react";
import ButtonUi from "./ButtonUi";

import cn from "@/utils/cn";
import { ImageWithFallback } from "@/utils/ImageUtils";

export default function SpotlightSection({
    slides = [],
    variant = "hero",
    auto = false,
    controls = false,
    indicators = false,
    interval = 5000,
}) {
    const [index, setIndex] = useState(0);
    const isSlider = variant === "slider";

    useEffect(() => {
        if (!auto || !isSlider) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, interval);

        return () => clearInterval(timer);
    }, [auto, isSlider, slides.length]);

    const next = () => isSlider && setIndex((p) => (p + 1) % slides.length);
    const prev = () =>
        isSlider && setIndex((p) => (p - 1 + slides.length) % slides.length);

    return (
        <div className={cn(
            "w-full overflow-hidden bg-bg-main",
            isSlider ? "relative h-screen" : "relative min-h-screen"
        )}>

            {slides.map((slide, i) => {
                const active = i === index;
                if (!isSlider && i !== 0) return null;
                return (
                    <div
                        key={i}
                        className={cn(
                            isSlider
                                ? "absolute inset-0 transition-all duration-700"
                                : "relative",
                            isSlider
                                ? active
                                    ? "opacity-100 z-10"
                                    : "opacity-0 z-0"
                                : ""
                        )}
                    >
                        {/* 🔥 Layout */}
                        <div className="flex flex-col md:flex-row w-full min-h-screen px-6 md:px-16 py-10 md:py-20">
                            <div className="w-full md:w-1/2 h-[45vh] md:min-h-[70vh] relative overflow-hidden rounded-lg">

                                {/* 🖼 Image */}
                                <ImageWithFallback src={slide.img} />

                                {/* 🏷 Tag */}
                                {slide.tag && (
                                    <h2 className="absolute top-4 right-4 px-3 py-2 border border-[#c4956a33] text-primary-light bg-navy-deep font-stretch-100%  tracking-wide">
                                        {slide.tag}
                                    </h2>
                                )}

                            </div>

                            {/* 📦 Content */}
                            <div className="w-full md:w-1/2 flex items-center justify-center">
                                <div className="w-full max-w-xl px-4 md:px-10 py-8 md:py-0">
                                    {/* Title */}
                                    <h2 className="text-4xl md:text-4xl lg:text-6xl font-accent text-primary-light leading-tight mb-3">
                                        {slide.title}
                                    </h2>

                                    {/* Thai title */}
                                    {slide.thTitle && (
                                        <p className="text-xl md:text-lg lg:text-2xl font-thai--accent text-primary-light opacity-50 mb-4">
                                            {slide.thTitle}
                                        </p>
                                    )}
                                    {/* Category */}
                                    {slide.category && (
                                        <p className="text-[10px] tracking-[3px] uppercase text-primary mb-3">
                                            {slide.category}
                                        </p>)}

                                    {/* Description */}
                                    <p className="text-sm text-text-muted mb-4 leading-relaxed">
                                        {slide.desc}
                                    </p>

                                    {slide.list && (
                                        <ul key={index} className="flex flex-col gap-3 mb-6">
                                            {slide.list.map((item, idx) => {
                                                const isObj = typeof item === "object";

                                                return (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 opacity-0 translate-y-4 animate-[fadeUp_0.6s_ease_forwards]"
                                                        style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                                                    >
                                                        {/* ✦ ICON BOX */}
                                                        <span className="flex items-center justify-center w-5 h-5 border border-primary/60 text-primary text-[10px] leading-none mt-[3px] shrink-0">
                                                            ✦
                                                        </span>

                                                        {/* INLINE TEXT */}
                                                        <p className="text-sm leading-relaxed">
                                                            <span className="font-medium font-thai-body">
                                                                {isObj ? item.title : item}
                                                            </span>

                                                            {isObj && item.desc && (
                                                                <span className="text-text-muted ml-2 font-thai-body">
                                                                    — {item.desc}
                                                                </span>
                                                            )}
                                                        </p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}

                                    {/* Note */}
                                    {slide.note && (
                                        <p className="text-xs italic text-primary mb-4">
                                            {slide.note}
                                        </p>
                                    )}

                                    {/* Link */}
                                    <ButtonUi variant="gold" size="lg" className="mt-2">ติดต่อเรา</ButtonUi>

                                </div>
                            </div>

                        </div>
                    </div>
                );
            })}

            {/* ⬅️ Controls */}
            {controls && isSlider && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl z-20"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl z-20"
                    >
                        ›
                    </button>
                </>
            )}

            {/* 🔘 Indicators */}
            {indicators && isSlider && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={cn(
                                "w-2 h-2 rounded-full cursor-pointer",
                                i === index ? "bg-primary scale-125" : "bg-white/40"
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
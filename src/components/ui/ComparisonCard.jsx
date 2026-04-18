"use client";


import cn from "@/utils/cn";
import { SmartImage } from "@/utils/ImageUtils";


const sizeMap = {
    sm: { imgH: "h-40", pad: "p-5", title: "text-[17px]" },
    default: { imgH: "h-[220px]", pad: "p-7", title: "text-xl" },
    lg: { imgH: "h-[280px]", pad: "p-9", title: "text-2xl" },
};

export default function ComparisonCard({
    mode = "split",
    beforeSrc,
    afterSrc,
    image,
    title,
    className,
    size = "default",
}) {
    const s = sizeMap[size];

    return (
        <div
            className={cn(
                "group bg-white rounded-2xl overflow-hidden cursor-pointer",
                "shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.1)]",
                "transition-all duration-300 hover:-translate-y-2",
                className
            )}
        >
            {/* IMAGE */}
            <div className={cn("relative overflow-hidden", s.imgH)}>

                {/* SPLIT */}
                {mode === "split" && (
                    <div className="grid grid-cols-2 h-full">
                        <div className="relative">
                            <SmartImage src={beforeSrc} alt="before" />
                            <span className="absolute bottom-2 left-2 text-[10px] px-2 py-0.5 bg-black/60 text-white rounded z-[2]">
                                Before
                            </span>
                        </div>

                        <div className="relative">
                            <SmartImage src={afterSrc} alt="after" />
                            <span className="absolute bottom-2 left-2 text-[10px] px-2 py-0.5 bg-primary/80 text-white rounded z-[2]">
                                After
                            </span>
                        </div>

                        <div className="absolute inset-y-0 left-1/2 w-[2px] bg-white/70 z-[2]" />
                    </div>
                )}

                {/* SINGLE */}
                {mode === "single" && (
                    <>
                        <SmartImage src={image} alt="result" />
                        <span className="absolute bottom-2 left-2 text-[10px] px-2 py-0.5 bg-black/60 text-white rounded z-[2]">
                            Before → After
                        </span>
                    </>
                )}

                {/* HOVER */}
                {mode === "hover" && (
                    <>
                        <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                            <SmartImage src={beforeSrc} alt="before" />
                        </div>
                        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                            <SmartImage src={afterSrc} alt="after" />
                        </div>
                    </>
                )}
            </div>

            {/* BODY */}
            <div className={cn("font-display", s.pad)}>
                <h3 className={cn("leading-tight", s.title)}>
                    {title}
                </h3>
            </div>
        </div>
    );
}
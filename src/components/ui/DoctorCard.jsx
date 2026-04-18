"use client";

import cn from "@/utils/cn";
import { SmartImage } from "@/utils/ImageUtils";



export default function DoctorCard({
    mode = "summary", // "summary" | "detail"
    image,
    thName,
    enName,
    desc1,
    desc2,
    details = [], // array for detail mode
    hoverable = false,
    className,
}) {
    return (
        <div
            className={cn(
                "group bg-white rounded-2xl overflow-hidden",
                "shadow-[0_2px_20px_rgba(0,0,0,0.15)]",

                hoverable &&
                "cursor-pointer hover:shadow-[0_5px_20px_rgba(0,0,0,0.3)] hover:-translate-y-2",

                "transition-all duration-300",
                className,
            )}
        >
            {/* IMAGE */}
            <div className="relative h-[260px] overflow-hidden">
                <SmartImage src={image} alt={enName} />
            </div>

            {/* BODY */}
            <div className="p-6">

                {/* NAME */}
                <div className="mb-3">
                    <h3 className="font-display text-lg text-primary leading-tight">
                        {enName}
                    </h3>
                    <p className="font-thai-display text-sm text-text-muted opacity-70">
                        {thName}
                    </p>
                </div>

                {/* MODE: SUMMARY */}
                {mode === "summary" && (
                    <div className="text-sm text-text-muted leading-relaxed space-y-1">
                        {desc1 && <p>{desc1}</p>}
                        {desc2 && <p>{desc2}</p>}
                    </div>
                )}

                {/* MODE: DETAIL */}
                {mode === "detail" && (
                    <ul className="text-sm text-text-muted space-y-1 list-disc list-inside">
                        {details.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
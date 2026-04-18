"use client";

import { useState, useEffect } from "react";


export function ImageWithFallback({ src, alt }) {
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const isInvalid = !src || src.trim() === "";

    useEffect(() => {
        if (isInvalid) return;

        const img = new Image();
        img.src = src;

        img.onload = () => setLoaded(true);
        img.onerror = () => setError(true);
    }, [src]);

    if (error || isInvalid) {
        return (
            <span className="w-full h-full flex items-center justify-center bg-linear-to-br from-bg-soft to-[#2f3557] text-primary">
                <span className="text-6xl opacity-40">✧</span>
            </span>
        );
    }

    if (!loaded) {
        return (
            <div className="w-full h-full bg-bg-soft animate-pulse" />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
        />
    );
}


export function SmartImage({
    src,
    alt = "",
    className = "",
}) {
    const [status, setStatus] = useState("loading");

    const isInvalid = !src || src.trim() === "";

    useEffect(() => {
        if (isInvalid) {
            setStatus("error");
            return;
        }

        let mounted = true;
        setStatus("loading");

        const img = new window.Image();
        img.src = src;

        img.onload = () => mounted && setStatus("loaded");
        img.onerror = () => mounted && setStatus("error");

        return () => (mounted = false);
    }, [src, isInvalid]);

    if (status === "error") {
        return (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-bg-soft to-[#2f3557] text-primary">
                <span className="text-5xl opacity-40">✧</span>
            </div>
        );
    }

    if (status === "loading") {
        return (
            <div className="absolute inset-0 bg-bg-soft animate-pulse" />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${className}`}
        />
    );
}
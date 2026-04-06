"use client";

import { useState } from "react";

// Mirror user's @theme tokens
const c = {
  navy: "#1a1f3a",
  bgMain: "#0f1225",
  navyLight: "#252b4d",
  primary: "#c4956a",
  primaryLight: "#e8cdb5",
  primaryDark: "#a87a52",
  cream: "#faf6f1",
  creamDark: "#f0e8df",
  white: "#fff",
  textMain: "#111111",
  textMuted: "#6b7280",
  textLight: "#ffffff",
};

const imgBg = {
  default: c.navy,
  alt1: c.navyLight,
  alt2: `linear-gradient(135deg,${c.bgMain},${c.navyLight})`,
  alt3: `linear-gradient(135deg,${c.navy},#2a2f4d)`,
  alt4: `linear-gradient(180deg,${c.bgMain},${c.navy})`,
};

const sz = {
  sm: { imgH: 160, pad: 20, title: 17, desc: 12 },
  md: { imgH: 220, pad: 28, title: 20, desc: 13 },
  lg: { imgH: 280, pad: 36, title: 24, desc: 13 },
};

const CARDS = [
  {
    cat: "Nose Thread Lift",
    title: "Nose Thread Lift",
    th: "ร้อยไหมจมูก",
    desc: "Semi-surgical technique for natural nose elevation and definition. Stimulate collagen, no downtime.",
    icon: "✦",
    img: "default",
    v: "accent",
    badge: "SIGNATURE",
  },
  {
    cat: "Facial Thread Lift",
    title: "Facial Thread Lift",
    th: "ร้อยไหมหน้า",
    desc: "Lift, tighten, and contour your face. Stimulate collagen for firmer, youthful skin without surgery.",
    icon: "◇",
    img: "alt1",
    v: "default",
  },
  {
    cat: "Facial Design",
    title: "Facial Design & Lifting",
    th: "ปรับรูปหน้า ฟิลเลอร์ & กระชับ",
    desc: "Filler, SMAS-X collagen lifting, and wrinkle reduction. Contour, volumize, and rejuvenate.",
    icon: "✧",
    img: "alt2",
    v: "default",
  },
  {
    cat: "Surgery",
    title: "Surgical Procedures",
    th: "ศัลยกรรม",
    desc: "Rhinoplasty, blepharoplasty, liposuction, chin augmentation, lip surgery, and facial fat transfer.",
    icon: "○",
    img: "alt3",
    v: "default",
  },
  {
    cat: "Treatment",
    title: "Skin Rejuvenation",
    th: "ทรีทเมนท์ ฟื้นฟูผิว",
    desc: "Meso Glass Skin, PRP, Collagen Biostimulator, Placenta GF, and Vitamin Drip for radiant skin.",
    icon: "◆",
    img: "alt4",
    v: "default",
  },
];

const VARIANTS = ["default", "accent", "dark", "outline"];
const SIZES = ["sm", "md", "lg"];

function Card({
  variant = "default",
  size = "md",
  badge,
  imgVar = "default",
  icon,
  category,
  title,
  thTitle,
  description,
}) {
  const isDark = variant === "dark";
  const isOutline = variant === "outline";
  const isAccent = variant === "accent";
  const s = sz[size] || sz.md;

  return (
    <div
      className="card-hover"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        background: isDark ? c.navy : isOutline ? "transparent" : c.white,
        boxShadow: isOutline ? "none" : "0 2px 20px rgba(0,0,0,0.04)",
        borderTop: isAccent ? `3px solid ${c.primary}` : undefined,
        border: isOutline ? `1px solid ${c.creamDark}` : undefined,
        transition: "transform 0.4s cubic-bezier(0.25,0,0,1), box-shadow 0.4s",
      }}
    >
      {badge && (
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            fontFamily: "'Montserrat',sans-serif",
            fontSize: 8,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: c.textLight,
            background: `linear-gradient(135deg,${c.primary},${c.primaryDark})`,
            padding: "5px 12px",
            lineHeight: 1,
          }}
        >
          {badge}
        </span>
      )}

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: s.imgH,
          flexShrink: 0,
          background: imgBg[imgVar] || imgBg.default,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,rgba(196,149,106,0.15),transparent)",
            pointerEvents: "none",
          }}
        />
        {icon && (
          <span
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 56,
              color: c.primary,
              opacity: 0.15,
              position: "relative",
              zIndex: 1,
            }}
          >
            {icon}
          </span>
        )}
      </div>

      <div
        style={{
          padding: s.pad,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        {category && (
          <div
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: c.primary,
              marginBottom: 10,
              lineHeight: 1,
            }}
          >
            {category}
          </div>
        )}
        <div style={{ marginBottom: 10 }}>
          <h3
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: s.title,
              fontWeight: 400,
              color: isDark ? c.primaryLight : c.navy,
              margin: "0 0 4px",
              lineHeight: 1.3,
            }}
          >
            {title}
          </h3>
          {thTitle && (
            <p
              style={{
                fontFamily: "'Noto Serif Thai',serif",
                fontSize: 14,
                fontWeight: 300,
                color: isDark ? c.primaryLight : c.navy,
                opacity: 0.5,
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              {thTitle}
            </p>
          )}
        </div>
        {description && (
          <p
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: s.desc,
              fontWeight: 300,
              color: c.textMuted,
              lineHeight: 1.7,
              marginBottom: 20,
              flexGrow: 1,
            }}
          >
            {description}
          </p>
        )}
        <span
          className="card-link"
          style={{
            display: "inline-block",
            alignSelf: "flex-start",
            fontFamily: "'Montserrat',sans-serif",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: isDark ? c.primaryLight : c.primary,
            borderBottom: `1px solid ${isDark ? c.primaryLight : c.primary}`,
            paddingBottom: 4,
            cursor: "pointer",
          }}
        >
          Explore →
        </span>
      </div>
    </div>
  );
}

function Pill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "7px 16px",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: 1,
        border: active ? `1px solid ${c.primary}` : `1px solid ${c.creamDark}`,
        background: active ? "rgba(196,149,106,0.08)" : c.white,
        color: active ? c.primary : c.textMuted,
        cursor: "pointer",
        transition: "all 0.2s",
        textTransform: "capitalize",
      }}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [variant, setVariant] = useState("default");
  const [size, setSize] = useState("md");
  const [showAll, setShowAll] = useState(true);

  return (
    <div
      style={{
        background: c.cream,
        minHeight: "100vh",
        fontFamily: "'Montserrat',sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Montserrat:wght@200;300;400;500;600;700&family=Noto+Serif+Thai:wght@200;300;400;500&family=Cormorant+Garamond:wght@300;400;500&family=Prompt:wght@200;300;400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .card-hover:hover { transform:translateY(-8px)!important; box-shadow:0 20px 56px rgba(0,0,0,0.1)!important; }
        .card-link:hover  { color:${c.primaryDark}!important; border-color:${c.primaryDark}!important; }
      `}</style>

      {/* Header */}
      <div style={{ padding: "48px 48px 0", maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: c.primary,
            marginBottom: 8,
          }}
        >
          Component Preview
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 38,
            fontWeight: 400,
            color: c.navy,
            margin: "0 0 6px",
            letterSpacing: "0.08em",
          }}
        >
          ServiceCard
        </h1>
        <p
          style={{
            fontFamily: "'Noto Serif Thai',serif",
            fontSize: 18,
            fontWeight: 300,
            color: c.navy,
            opacity: 0.45,
            margin: "0 0 20px",
          }}
        >
          คอมโพเนนท์การ์ดบริการ — Tailwind CSS v4
        </p>

        {/* Token mapping table */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            maxWidth: 480,
            marginBottom: 16,
            fontSize: 12,
            fontFamily: "'SF Mono','Fira Code',monospace",
          }}
        >
          {[
            ["font-display", "Playfair Display"],
            ["font-thai-serif", "Noto Serif Thai"],
            ["font-sans", "Montserrat"],
            ["color-primary", c.primary],
            ["color-primary-light", c.primaryLight],
            ["color-bg-soft", c.navy],
            ["color-text-muted", c.textMuted],
          ].map(([k, v], i) => (
            <div key={i} style={{ display: "contents" }}>
              <div
                style={{
                  padding: "4px 8px",
                  color: c.primary,
                  background: c.creamDark,
                }}
              >
                {k}
              </div>
              <div
                style={{
                  padding: "4px 8px",
                  color: c.textMuted,
                  background: c.creamDark,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {v.startsWith("#") && (
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      background: v,
                      border: `1px solid ${c.creamDark}`,
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                )}
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div
        style={{
          padding: "20px 48px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "flex-end",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: c.textMuted,
              marginBottom: 8,
            }}
          >
            Variant
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {VARIANTS.map((v) => (
              <Pill
                key={v}
                active={!showAll && variant === v}
                onClick={() => {
                  setVariant(v);
                  setShowAll(false);
                }}
              >
                {v}
              </Pill>
            ))}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: c.textMuted,
              marginBottom: 8,
            }}
          >
            Size
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {SIZES.map((s) => (
              <Pill key={s} active={size === s} onClick={() => setSize(s)}>
                {s}
              </Pill>
            ))}
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <Pill active={showAll} onClick={() => setShowAll(true)}>
            Show All
          </Pill>
        </div>
      </div>

      {/* Cards grid */}
      <div
        style={{
          padding: "12px 48px 60px",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 24,
        }}
      >
        {showAll
          ? CARDS.map((card, i) => (
              <Card
                key={i}
                variant={card.v}
                size={size}
                badge={card.badge}
                imgVar={card.img}
                icon={card.icon}
                category={card.cat}
                title={card.title}
                thTitle={card.th}
                description={card.desc}
              />
            ))
          : ["default", "alt1", "alt2"].map((imgV, i) => (
              <Card
                key={`${variant}-${i}`}
                variant={variant}
                size={size}
                badge={variant === "accent" ? "SIGNATURE" : undefined}
                imgVar={imgV}
                icon={["✦", "◇", "✧"][i]}
                category={["Thread Lift", "Facial Design", "Surgery"][i]}
                title={
                  [
                    "Nose Thread Lift",
                    "Facial Design & Lifting",
                    "Surgical Procedures",
                  ][i]
                }
                thTitle={["ร้อยไหมจมูก", "ปรับรูปหน้า", "ศัลยกรรม"][i]}
                description="Semi-surgical technique for natural elevation and definition. Stimulate collagen, no downtime."
              />
            ))}
      </div>

      {/* Usage code */}
      <div style={{ padding: "0 48px 80px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ background: c.bgMain, padding: 32, overflow: "auto" }}>
          <div
            style={{
              fontSize: 9,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: c.primary,
              marginBottom: 16,
            }}
          >
            Token Mapping
          </div>
          <pre
            style={{
              fontFamily: "'SF Mono','Fira Code',monospace",
              fontSize: 12.5,
              color: c.primaryLight,
              lineHeight: 1.8,
              margin: 0,
              whiteSpace: "pre-wrap",
            }}
          >{`/* Your @theme tokens → Tailwind classes used in ServiceCard */

--font-display        → font-display        (Playfair Display)
--font-thai-serif     → font-thai-serif      (Noto Serif Thai)
--font-sans           → font-sans            (Montserrat)

--color-primary       → text-primary, border-t-primary
--color-primary-light → text-primary-light   (dark variant titles)
--color-primary-dark  → from-primary-dark    (badge gradient)

--color-bg-main       → from-bg-main         (image gradient bg)
--color-bg-soft       → bg-bg-soft           (dark card bg, default image bg)
--color-navy          → text-navy            (default title color, kept as raw)
--color-navy-light    → bg-navy-light        (alt1 image bg)

--color-cream-dark    → border-cream-dark    (outline variant border)
--color-text-muted    → text-text-muted      (description text)
--color-text-light    → text-text-light      (badge text)`}</pre>
        </div>
      </div>
    </div>
  );
}

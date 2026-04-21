const headstyle = {
  light: {
    section: "text-primary",
    title: "text-navy",
    titleth: "text-navy/50",
  },
  dark: {
    section: "text-primary",
    title: "text-primary-light",
    titleth: "text-primary-light/40",
  },
};
export default function SectionHeader({
  sectionname,
  title,
  titleth,
  variant = "light", }) {
  const styles = headstyle[variant] || headstyle.light;
  return (
    <div className="mb-18 text-center">
      <p className={`mb-2 font-body text-[clamp(8px,1.5vw,18px)] font-semibold tracking-[3px] uppercase ${styles.section}`}>
        {sectionname}
      </p>
      <h2 className={`mb-2 font-display text-[clamp(28px,4vw,44px)] font-normal tracking-luxury ${styles.title}`}>
        {title}
      </h2>
      <p className={`font-thai-display text-[clamp(18px,2.5vw,24px)] font-thin ${styles.titleth}`}>
        {titleth}
      </p>
      <div className="diamond-divider">
        <div className="line"></div>
        <div className="diamond"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}
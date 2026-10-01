export function SectionHeading({
  number,
  label,
  children,
  text,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> / {label}
      </p>
      <h2 data-reveal>{children}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

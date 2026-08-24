import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <div className="mb-3 flex items-center gap-3">
        {/* <span className="h-px w-10 bg-accent" /> */}
        <span className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}
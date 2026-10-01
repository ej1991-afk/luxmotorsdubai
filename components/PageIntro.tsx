export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line bg-[radial-gradient(700px_240px_at_90%_0%,rgba(198,161,91,0.16),transparent_60%),#101010]">
      <div className="mx-auto max-w-6xl px-4 pb-12 pt-24 sm:px-5 sm:pb-14 sm:pt-32">
        <p className="kicker">{kicker}</p>
        <h1 className="display mt-4 max-w-4xl text-4xl text-ivory sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-mute md:text-lg">{lede}</p>
      </div>
    </header>
  );
}

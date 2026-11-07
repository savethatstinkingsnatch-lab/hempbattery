export function Cited({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g);
  return (
    <>
      {parts.map((part, index) => {
        const match = /^\[(\d+)\]$/.exec(part);
        if (!match) return <span key={index}>{part}</span>;
        const n = match[1];
        return (
          <a key={index} href={`/#source-${n}`} className="text-fiber">
            [{n}]
          </a>
        );
      })}
    </>
  );
}

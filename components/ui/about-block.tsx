interface AboutBlockProps {
  title: string;
  text: string;
}

export function AboutBlock({ title, text }: AboutBlockProps) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-oswald mb-2 text-[#1e1e1e]">
        {title}
      </h3>
      <p className="text-[#2c2c2c]">
        {text}
      </p>
    </div>
  );
} 
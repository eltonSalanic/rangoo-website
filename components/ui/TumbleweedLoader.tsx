import Image from "next/image";

interface TumbleweedLoaderProps {
  size?: number;
  className?: string;
}

export function TumbleweedLoader({ size = 24, className = "" }: TumbleweedLoaderProps) {
  return (
    <span className={`inline-block ${className}`}>
      <Image
        src="/assets/tumbleweed.svg"
        alt="Loading..."
        width={size}
        height={size}
        className="animate-tumbleweed"
      />
    </span>
  );
}

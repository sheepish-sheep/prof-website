import Image from "next/image";

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] dither dither-dark">
        <Image
          src="/assets/Circuit.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] animate-spotlight-1" />
        <div className="absolute w-[600px] h-[600px] animate-spotlight-2" />
        <div className="absolute w-[700px] h-[700px] animate-spotlight-3" />
        <div className="absolute w-[500px] h-[500px] animate-spotlight-4" />
        <div className="absolute w-[650px] h-[650px] animate-spotlight-5" />
      </div>
    </div>
  );
}


import Image from "next/image";

export default function LoginBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Wave SVG background */}
      <div 
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <Image
          src="/wave.svg"
          alt="Background wave"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Content container */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </div>
  );
}

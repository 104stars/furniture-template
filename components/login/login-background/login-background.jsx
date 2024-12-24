import Image from "next/image";

export default function LoginBackground({ children }) {
  return (
    <div>
      {/* Wave SVG background */}
      <div className="absolute bottom-0 right-0 z-0">
        <Image
          src="/wave.svg"
          alt="Background wave"
          width={1920}
          height={1080}
          priority
          className="h-auto min-w-full object-cover"
        />
      </div>
      {/* Content container */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
}

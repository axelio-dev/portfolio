import Image from "next/image";

export default function Skills({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  return (
    <div className="w-[180px] h-[180px] border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/20 hover:border-blue-400/30">
      {image && (
        <Image
          src={image}
          alt={title}
          width={60}
          height={60}
          className="object-contain"
        />
      )}
      <h3 className="text-white text-base mt-4 font-semibold">{title}</h3>
    </div>
  );
}

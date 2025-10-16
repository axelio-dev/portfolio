import Button from "./Button";

export default function Projects({
  title,
  description,
  button,
  link,
}: {
  title: string;
  description?: string;
  button?: string;
  link?: string;
}) {
  return (
    <div className="h-[250px] w-[300px] mt-4 border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
      <div className="mx-auto flex flex-col gap-3 items-center">
        <h3 className="text-white text-xl text-center mt-[10px]">{title}</h3>
        {description && (
          <p className="text-gray-400 italic text-md text-center mt-[2px]">
            {description}
          </p>
        )}
        {button && <Button text={button} link={link} />}
      </div>
    </div>
  );
}

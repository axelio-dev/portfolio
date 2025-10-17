import Button from "./Button";

export default function Contact({
  title,
  description,
  button,
  icon,
}: {
  title: string;
  description?: string;
  button?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="w-[350px] h-[160px] md:w-[500px] md:h-[175px] border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
      <div className="mx-auto flex flex-col gap-3 items-center">
        {icon && <div className="text-blue-400 mb-1">{icon}</div>}
        <h3 className="text-white text-xl text-center mt-[10px]">{title}</h3>
        {description && (
          <p className="text-gray-400 italic text-md text-center mt-[2px]">
            {description}
          </p>
        )}
        {button && <Button text={button} />}
      </div>
    </div>
  );
}

import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="w-full top-0 left-0 right-0 backdrop-blur-[15px] text-white fixed border-b border-white py-2">
        <div className="flex items-center justify-between">
            <div className ="flex items-center"><Logo></Logo></div>
            <div className="flex items-center gap-10 mr-10">
                    <p className="cursor-pointer">Home</p>
                    <p className="cursor-pointer">Skills</p>
                    <p className="cursor-pointer">Projects</p> 
                    <p className="cursor-pointer">Contact me</p>
            </div>
        </div>
    </nav>
  );
}
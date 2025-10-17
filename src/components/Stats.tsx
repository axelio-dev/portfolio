"use client";

import { useQuery } from "@tanstack/react-query";
import StarsStats from "@/components/StarsStats";
import RepositoriesStats from "./RepositoriesStats";

export default function Stats() {
  const { isPending, error, data } = useQuery({
    queryKey: ["wakaTimeStats"],
    queryFn: async () => {
      const res = await fetch(`/api/wakatime`);
      if (!res.ok) throw new Error("Erreur WakaTime");
      return (await res.json()).data;
    },
  });

  if (isPending)
    return (
      <div className="text-4xl text-white font-bold text-center">
        ⏳ Loading...
      </div>
    );
  if (error)
    return (
      <div className="text-4xl text-white font-bold text-center">
        ❌ Error : {error?.message || "An error has occurred"}
      </div>
    );
  const totalHours = (data.total_seconds / 3600).toFixed(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-15 mr-[40px] ml-[40px]">
      <div className="flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
        <div className="text-4xl text-white font-bold">{totalHours}</div>
        <div className="mt-2 text-gray-300">Coding Hours</div>
      </div>

      <div className="flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
        <div className="text-4xl text-white font-bold">
          <RepositoriesStats />
        </div>
        <div className="mt-2 text-gray-300">Projects completed</div>
      </div>

      <div className="flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
        <div className="text-4xl text-white font-bold">
          <StarsStats />
        </div>
        <div className="mt-2 text-gray-300">Stars collected</div>
      </div>
    </div>
  );
}

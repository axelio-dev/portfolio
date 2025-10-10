"use client";

import { useQuery } from "@tanstack/react-query";

export default function Stats() {
  const { isPending, error, data } = useQuery({
    queryKey: ["wakaTimeStats"],
    queryFn: async () => {
      const res = await fetch(`/api/wakatime`);
      if (!res.ok) throw new Error("Erreur WakaTime");
      return (await res.json()).data;
    },
  });

  if (isPending) return "⏳ Chargement...";
  if (error) return "❌ Erreur : " + error.message + console.log;
  const totalHours = (data.total_seconds / 3600).toFixed(0);

  return (
    <div className="flex justify-around gap-15 mr-[40px] ml-[40px]">
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
        <div className="text-4xl text-white font-bold">{totalHours}</div>
        <div className="mt-2 text-gray-300">Coding Hours</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
        <div className="text-4xl text-white font-bold">1</div>
        <div className="mt-2 text-gray-300">Projects completed</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
        <div className="text-4xl text-white font-bold">0</div>
        <div className="mt-2 text-gray-300">Stars collected</div>
      </div>
    </div>
  );
}

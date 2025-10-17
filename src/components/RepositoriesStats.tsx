"use client";

import { useQuery } from "@tanstack/react-query";

export default function RepositoriesStats() {
  const { isPending, error, data } = useQuery({
    queryKey: ["githubStats"],
    queryFn: async () => {
      const res = await fetch(`https://api.github.com/users/axelio-dev/repos`);
      if (!res.ok) throw new Error("Erreur Github");
      return await res.json();
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

  return <div className="">{data.length}</div>;
}

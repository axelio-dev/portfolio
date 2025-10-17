"use client";

import { useQuery } from "@tanstack/react-query";

export default function StarsStats() {
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

  let stars = 0;
  for (const repo of data) {
    stars += repo.stargazers_count;
  }
  return <div>{stars}</div>;
}

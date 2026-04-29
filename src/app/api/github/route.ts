import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/axelio-dev/repos", {
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub", status: res.status },
        { status: res.status },
      );
    }

    const repos = await res.json();

    const repoArray = Array.isArray(repos) ? repos : [];

    const stars = repoArray.reduce(
      (acc: number, repo: any) => acc + (repo?.stargazers_count || 0),
      0,
    );

    return NextResponse.json({
      count: repoArray.length,
      stars,
    });
  } catch (err) {
    return NextResponse.json({ error: "GitHub API error" }, { status: 500 });
  }
}

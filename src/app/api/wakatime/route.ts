import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://wakatime.com/api/v1/users/axelio_dev/stats`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch WakaTime", status: res.status },
      { status: res.status },
    );
  }

  const data = await res.json();
  const allTime = data.data?.all_time;
  const totalSeconds = allTime?.total_seconds ?? data.data?.total_seconds ?? 0;

  return NextResponse.json({
    totalHours: Math.floor(totalSeconds / 3600),
    totalSeconds,
  });
}

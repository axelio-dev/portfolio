import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/a486a2a9-9713-41d8-951b-807f91406cb1/stats/all_time",
    );

    if (!res.ok) {
      return NextResponse.json({ error: `Failed` }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}

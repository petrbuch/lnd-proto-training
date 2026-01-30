import { NextResponse } from "next/server";

/**
 * Mock API: send contract (e.g. email). No real sending in prototype.
 */
export async function POST() {
  return NextResponse.json({ ok: true, message: "Mock: contract send" });
}

import { NextResponse } from "next/server";

/**
 * Mock API: send quote (e.g. email). No real sending in prototype.
 */
export async function POST() {
  return NextResponse.json({ ok: true, message: "Mock: quote send" });
}

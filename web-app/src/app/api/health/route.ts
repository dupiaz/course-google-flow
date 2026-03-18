import { isSupabaseConfigured, supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const revalidate = 0; // Never cache health checks

/**
 * Health check endpoint.
 * Pings Supabase to keep the free-tier project alive.
 * Called by Vercel cron every 3 days.
 */
export async function GET() {
  const result: Record<string, unknown> = {
    status: "ok",
    timestamp: new Date().toISOString(),
    supabase: false,
  };

  if (isSupabaseConfigured()) {
    try {
      const { count, error } = await supabase
        .from("modules")
        .select("*", { count: "exact", head: true });

      if (error) {
        result.supabase = false;
        result.error = error.message;
      } else {
        result.supabase = true;
        result.modules = count;
      }
    } catch (err) {
      result.supabase = false;
      result.error = err instanceof Error ? err.message : "Unknown error";
    }
  }

  return NextResponse.json(result);
}

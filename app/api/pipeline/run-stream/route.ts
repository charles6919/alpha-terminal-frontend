import { NextRequest } from "next/server"

const BACKEND_URL = process.env.BACKEND_INTERNAL_URL ?? "http://localhost:33333"

export async function POST(req: NextRequest) {
    const body = await req.text()
    const cookies = req.headers.get("cookie") ?? ""

    const upstream = await fetch(`${BACKEND_URL}/pipeline/run-stream`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": cookies,
        },
        body,
    })

    if (!upstream.ok) {
        return new Response(upstream.body, { status: upstream.status })
    }

    return new Response(upstream.body, {
        status: 200,
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",
        },
    })
}

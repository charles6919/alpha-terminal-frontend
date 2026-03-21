import { env } from "@/infrastructure/config/env";

export const httpClient = {
  get: async (path: string) => {
    const res = await fetch(`${env.apiBaseUrl}${path}`, {
      method: "GET",
      credentials: "include",
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res
  },

  post: async (path: string, body?: unknown) => {
    const res = await fetch(`${env.apiBaseUrl}${path}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res
  },

  delete: async (path: string) => {
    const res = await fetch(`${env.apiBaseUrl}${path}`, {
      method: "DELETE",
      credentials: "include",
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res
  },
};

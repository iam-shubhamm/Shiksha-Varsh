export function describeThrown(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
  try {
    return JSON.stringify(error)?.slice(0, 2000) ?? String(error);
  } catch {
    return String(error);
  }
}

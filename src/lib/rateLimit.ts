// src/lib/rateLimit.ts

type RateLimitRecord = {
  lastRequest: number;
  count: number;
};

const rateLimitMap = new Map<string, RateLimitRecord>();

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;      // Max 5 requests per window per IP

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { lastRequest: now, count: 1 });
    return false;
  }

  if (now - record.lastRequest > WINDOW_MS) {
    // Reset window
    rateLimitMap.set(ip, { lastRequest: now, count: 1 });
    return false;
  }

  if (record.count >= MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  rateLimitMap.set(ip, record);
  return false;
}


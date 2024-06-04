import { NextRequest, NextResponse } from "next/server";
import { ENV, IP_WHITELIST, VERCEL_URL } from "./utils/variables";

// IPホワイトリスト

console.log("IP_WHITELIST", IP_WHITELIST);
console.log("ENV", ENV);
console.log("VERCEL_URL", VERCEL_URL);

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();

  // access-deniedページにはミドルウェアを適用しない
  if (request.nextUrl.pathname === "/access-denied") {
    return res;
  }
  if (ENV === "local") {
    return res;
  }

  // ipアドレスを取得
  let ip: string = request.ip ?? request.headers.get("x-real-ip") ?? "";

  // プロキシ経由の場合
  const forwardedFor = request.headers.get("x-forwarded-for");

  // プロキシ経由の場合は、プロキシのIPアドレスを取得
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "Unknown";
  }

  console.log("ip", ip);
  console.log("forwardedFor", forwardedFor);

  // 取得したIPアドレスがホワイトリストに含まれているかチェックし、含まれていない場合はアクセス拒否
  if (!IP_WHITELIST.includes(ip)) {
    return NextResponse.redirect(
      "https://middleware-ip-limit-one.vercel.app/access-denied"
    ); // アクセス拒否のページにリダイレクト(フルパスで指定)
  }

  return res;
}

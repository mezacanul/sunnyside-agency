import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Skip Next.js internals, static files, api routes, etc.
    "/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)",
  ],
};

# Bug reproduction in Next.js

Steps to reproduce the bug:

1. Clone this repository
2. Run `pnpm install`
3. Run `pnpm dev`
   1. Open `http://localhost:3000`
   2. Click on the link "Open cart"
   3. Observe **correct** behavior where the catch all route is not used and the intercepting parallel route is used.
4. Run `pnpm dev --turbo`
   1. Open `http://localhost:3000`
   2. Click on the link "Open cart"
   3. Observe **incorrect** behavior where the catch all route is used together with the intercepting parallel route.

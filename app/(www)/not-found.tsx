import NextLink from "next/link";

import { Button } from "@/components/button-rename";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center pt-20 md:pt-32">
      <h1 className="mb-10 text-4xl md:text-6xl">404 - Page Not Found</h1>
      <Button asChild>
        <NextLink href="/">Go Back Home</NextLink>
      </Button>
    </div>
  );
}

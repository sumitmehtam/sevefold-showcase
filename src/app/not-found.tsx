import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mesh-bg flex min-h-[70vh] items-center py-32">
      <div className="section-shell text-center">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          The page you are looking for may have moved or no longer exists.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </section>
  );
}

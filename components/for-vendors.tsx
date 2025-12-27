import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ForVendors() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div>
            <h2 className="text-foreground text-4xl font-semibold">
              Built to work for{" "}
              <span style={{ color: "#DB0917" }}>local vendors</span>
            </h2>
            <p className="text-muted-foreground mb-12 mt-4 text-balance text-lg">
              Simple tools that help local businesses get discovered without
              changing how they already work.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden p-2 bg-zinc-200/50 dark:bg-zinc-800/50">
                <Card className="h-full translate-y-4 rounded-xl bg-white dark:bg-zinc-900 shadow-sm overflow-hidden relative">
                  <Image
                    src="/assets/vendor-posting-update.png"
                    alt="Vendor posting update"
                    fill
                    className="object-cover scale-110"
                  />
                </Card>
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Post updates in seconds
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  Vendors can share what&apos;s available right now fresh food,
                  new stock, or daily specials with just a few taps.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden p-2 bg-zinc-200/50 dark:bg-zinc-800/50">
                <Card className="h-full rounded-xl bg-white dark:bg-zinc-900 shadow-sm overflow-hidden relative">
                  <Image
                    src="/assets/local-visibility.png"
                    alt="Local visibility"
                    fill
                    className="object-cover scale-110"
                  />
                </Card>
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  Get seen by nearby customers
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  Updates reach people who live close by and are most likely to
                  walk in not random traffic from far away.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <Card className="aspect-video overflow-hidden p-2 bg-zinc-200/50 dark:bg-zinc-800/50">
                <Card className="h-full translate-x-4 translate-y-4 rounded-xl bg-white dark:bg-zinc-900 shadow-sm overflow-hidden relative">
                  <Image
                    src="/assets/vendor-independence.png"
                    alt="Vendor independence"
                    fill
                    className="object-cover scale-110"
                  />
                </Card>
              </Card>
              <div className="sm:max-w-sm">
                <h3 className="text-foreground text-xl font-semibold">
                  No commissions. No pressure.
                </h3>
                <p className="text-muted-foreground my-4 text-lg">
                  Mirchi35 doesn&apos;t control pricing, delivery, or inventory.
                  Stay independent and visible on your own terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

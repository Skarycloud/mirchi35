import { Button } from '@/components/ui/button'
import { Calendar, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function StatsSection() {
    return (
        <section>
            <div className="bg-muted py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
                        <span className="text-muted-foreground">Make your neighborhood visible.</span> Get discovered in real time.
                    </h2>
                    <p className="mt-4 text-lg">Mirchi35 helps local businesses share what’s available right now and helps nearby people discover it, without delivery pressure or discounts.</p>
                    <div className="mt-8 flex gap-3">
                        <Button
                            asChild
                            className="pr-2">
                            <Link href="#">
                                Go Live
                                <ChevronRight
                                    strokeWidth={2.5}
                                    className="size-3.5! opacity-50"
                                />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="pl-2.5">
                            <Link href="#">
                                List Your Business
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

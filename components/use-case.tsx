import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function FeaturesSection() {
    return (
        <section>
            <div className="py-24">
                <div className="mx-auto w-full max-w-2xl px-6 lg:px-0">
                    <div>
                        <div className="mb-8">
                            <span className="text-foreground text-sm font-medium uppercase tracking-widest">Use cases</span>
                            <div className="mt-2 h-px w-16 bg-border"></div>
                        </div>
                        <h2 className="text-foreground text-balance text-center text-4xl font-semibold">How a local juice shop gets more walk-ins</h2>
                        <p className="text-muted-foreground text-center mt-4">Using <span style={{ color: '#DB0917' }}>Mirchi35</span> to turn fresh juice into nearby footfall.</p>
                    </div>
                    <div className="mt-16 space-y-12">
                        <div className="grid items-center gap-6 sm:grid-cols-5">
                            <Card
                                className="p-2 sm:col-span-2 bg-muted/50 aspect-video overflow-hidden relative">
                                <Image src="/assets/vendor-posts-update.png" alt="Vendor posts update" fill className="object-cover rounded-lg scale-110" />
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">Vendor posts what&apos;s available now</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Juice and chaat shops post live updates fresh juice, evening chaat start, special fruit arrivals in just a few taps.</p>
                            </div>
                        </div>

                        <div className="grid items-center gap-6 sm:grid-cols-5">
                            <Card
                                className="p-2 sm:col-span-2 bg-muted/50 aspect-video overflow-hidden relative">
                                <Image src="/assets/nearby-customers-discover.png" alt="Nearby customers discover" fill className="object-cover rounded-lg scale-110" />
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">Nearby customers discover it in real time</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Mirchi35 shows these updates only to people close to the shop who are looking for something nearby right now.</p>
                            </div>
                        </div>

                        <div className="grid items-center gap-6 sm:grid-cols-5">
                            <Card
                                className="p-2 sm:col-span-2 bg-muted/50 aspect-video overflow-hidden relative">
                                <Image src="/assets/walk-in-footfall.png" alt="Walk-in footfall" fill className="object-cover rounded-lg scale-110" />
                            </Card>
                            <div className="max-w-md sm:col-span-3">
                                <h3 className="text-foreground text-lg font-semibold">More footfall, no extra work</h3>
                                <p className="text-muted-foreground mt-3 text-balance">People walk in while the juice is fresh no delivery, no commissions, no discounts, no pressure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

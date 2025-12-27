import Link from 'next/link'
import Image from 'next/image'

export default function StatsSection() {
    return (
        <section id="contact">
            <div className="bg-muted py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
                        <span className="text-muted-foreground">Make your neighborhood visible.</span> Get discovered in real time.
                    </h2>
                    <p className="mt-4 text-lg">Mirchi35 helps local businesses share what’s available right now and helps nearby people discover it, without delivery pressure or discounts.</p>
                    <div className="mt-8 flex justify-center sm:justify-start items-center gap-2 sm:gap-4">
                        {/* Google Play Button */}
                        <Link
                            href="#playstore"
                            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-black rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors"
                        >
                            <Image
                                src="/playstore.svg"
                                alt="Google Play"
                                width={20}
                                height={20}
                                className="w-5 h-5 sm:w-6 sm:h-6"
                            />
                            <div className="flex flex-col">
                                <span className="text-white/80 text-[9px] sm:text-[10px] uppercase tracking-wide">
                                    Get it on
                                </span>
                                <span className="text-white font-semibold text-xs sm:text-sm -mt-0.5">
                                    Google Play
                                </span>
                            </div>
                        </Link>

                        {/* App Store Button */}
                        <Link
                            href="#appstore"
                            className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-black rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors"
                        >
                            <Image
                                src="/apple.svg"
                                alt="App Store"
                                width={20}
                                height={20}
                                className="w-5 h-5 sm:w-6 sm:h-6"
                            />
                            <div className="flex flex-col">
                                <span className="text-white/80 text-[9px] sm:text-[10px]">
                                    Download on the
                                </span>
                                <span className="text-white font-semibold text-xs sm:text-sm -mt-0.5">
                                    App Store
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

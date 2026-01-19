import Image from 'next/image'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Are you a Vendor? Go Live <span style={{ color: '#DB0917' }}>Instantly.</span></h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/assets/vendor-ecosystem.webp" className="rounded-[15px] shadow" alt="Vendor ecosystem" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <span className="inline-block bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-4 py-1.5 rounded-full">For Business Owners</span>
                        <p className="text-muted-foreground">
                            Forget expensive billboards and uncertain advertising. With Mirchi35, you simply snap a photo, write a short line, and let nearby customers know what’s available instantly, within 1km.
                        </p>
                        <p className="text-muted-foreground">Connect with your local community like never before.</p>

                        <ul className="pt-4 space-y-3 border-l-4 pl-4">
                            <li className="flex items-start gap-2">
                                <span className="text-foreground font-bold">✓</span>
                                <span className="text-foreground">No restless marketing we bring customers to you</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground font-bold">✓</span>
                                <span className="text-foreground">No 10-minute delivery pressure</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground font-bold">✓</span>
                                <span className="text-foreground">No margin haircuts keep what you earn</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground font-bold">✓</span>
                                <span className="text-foreground">Post only when you want you stay in control</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-foreground font-bold">✓</span>
                                <span className="text-foreground font-semibold">Sell locally. Sell more.</span>
                            </li>
                        </ul>

                        <div className="flex flex-row justify-center sm:justify-start items-center gap-2 sm:gap-3 pt-6">
                            {/* Google Play Business App Button */}
                            <Link
                                href="#playstore"
                                className="flex items-center gap-2 px-3 py-2 bg-black rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors"
                            >
                                <Image
                                    src="/playstore.svg"
                                    alt="Google Play"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                />
                                <div className="flex flex-col">
                                    <span className="text-white/80 text-[9px] uppercase tracking-wide">
                                        Install
                                    </span>
                                    <span className="text-white font-semibold text-xs -mt-0.5">
                                        Business App
                                    </span>
                                </div>
                            </Link>

                            {/* App Store Business App Button */}
                            <Link
                                href="#appstore"
                                className="flex items-center gap-2 px-3 py-2 bg-black rounded-lg border border-zinc-700 hover:bg-zinc-900 transition-colors"
                            >
                                <Image
                                    src="/apple.svg"
                                    alt="App Store"
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                />
                                <div className="flex flex-col">
                                    <span className="text-white/80 text-[9px]">
                                        Install
                                    </span>
                                    <span className="text-white font-semibold text-xs -mt-0.5">
                                        Business App
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users } from 'lucide-react'

export default function WhyMirchi() {
    return (
        <section id="features" className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span style={{ color: '#DB0917' }}>Mirchi35</span>?</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">We make your neighborhood visible in real time so you discover what&apos;s available nearby, exactly when it matters.</p>
                </div>
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                    <svg
                                        className="m-auto h-fit w-28"
                                        viewBox="0 0 200 200"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        {/* Single boundary circle */}
                                        <circle
                                            cx="100"
                                            cy="100"
                                            r="85"
                                            className="stroke-zinc-300 dark:stroke-zinc-700"
                                            strokeWidth="2"
                                            fill="none"
                                        />

                                        {/* Grid pattern */}
                                        <path
                                            d="M40 60 H160 M40 80 H160 M40 100 H160 M40 120 H160 M40 140 H160"
                                            className="stroke-zinc-200 dark:stroke-zinc-700/50"
                                            strokeWidth="0.8"
                                        />
                                        <path
                                            d="M60 40 V160 M80 40 V160 M100 40 V160 M120 40 V160 M140 40 V160"
                                            className="stroke-zinc-200 dark:stroke-zinc-700/50"
                                            strokeWidth="0.8"
                                        />

                                        {/* Location markers - shops */}
                                        <g>
                                            {/* Shop 1 */}
                                            <circle cx="65" cy="70" r="5" className="fill-zinc-400 dark:fill-zinc-600" />
                                            <circle cx="65" cy="70" r="2.5" className="fill-white dark:fill-zinc-300" />

                                            {/* Shop 2 */}
                                            <circle cx="135" cy="80" r="5" className="fill-zinc-400 dark:fill-zinc-600" />
                                            <circle cx="135" cy="80" r="2.5" className="fill-white dark:fill-zinc-300" />

                                            {/* Shop 3 */}
                                            <circle cx="75" cy="130" r="5" className="fill-zinc-400 dark:fill-zinc-600" />
                                            <circle cx="75" cy="130" r="2.5" className="fill-white dark:fill-zinc-300" />
                                        </g>

                                        {/* Center location pin - bigger */}
                                        <g transform="translate(100, 95)">
                                            {/* Pin shadow */}
                                            <ellipse cx="0" cy="28" rx="10" ry="4" className="fill-zinc-300 dark:fill-zinc-700" opacity="0.5" />

                                            {/* Pin body */}
                                            <path
                                                d="M0 -25 C-10 -25 -18 -17 -18 -7 C-18 3 0 25 0 25 C0 25 18 3 18 -7 C18 -17 10 -25 0 -25 Z"
                                                className="fill-zinc-700 dark:fill-zinc-300"
                                            />

                                            {/* Pin center dot */}
                                            <circle cx="0" cy="-7" r="6" className="fill-white dark:fill-zinc-800" />
                                        </g>
                                    </svg>
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold">Built for your neighborhood</h2>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex h-32 w-full items-center justify-center">
                                    <svg
                                        className="h-full w-auto"
                                        viewBox="0 0 280 160"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        {/* Background clouds - improved form */}
                                        <g opacity="0.4">
                                            <ellipse cx="50" cy="30" rx="20" ry="12" className="fill-zinc-200 dark:fill-zinc-800" />
                                            <ellipse cx="68" cy="28" rx="18" ry="11" className="fill-zinc-200 dark:fill-zinc-800" />
                                            <ellipse cx="60" cy="35" rx="22" ry="10" className="fill-zinc-200 dark:fill-zinc-800" />
                                        </g>
                                        <g opacity="0.4">
                                            <ellipse cx="210" cy="25" rx="22" ry="13" className="fill-zinc-200 dark:fill-zinc-800" />
                                            <ellipse cx="230" cy="23" rx="20" ry="12" className="fill-zinc-200 dark:fill-zinc-800" />
                                            <ellipse cx="220" cy="30" rx="24" ry="11" className="fill-zinc-200 dark:fill-zinc-800" />
                                        </g>

                                        {/* Decorative plant (cactus) - on ground */}
                                        <g transform="translate(30, 115)">
                                            <rect x="8" y="0" width="8" height="30" rx="4" className="fill-zinc-400 dark:fill-zinc-600" />
                                            <rect x="4" y="10" width="5" height="15" rx="2.5" className="fill-zinc-400 dark:fill-zinc-600" />
                                            <rect x="15" y="10" width="5" height="15" rx="2.5" className="fill-zinc-400 dark:fill-zinc-600" />
                                        </g>

                                        {/* Ground/platform */}
                                        <rect x="20" y="145" width="240" height="3" rx="1.5" className="fill-zinc-300 dark:fill-zinc-700" />

                                        {/* Store building - Outline only design */}
                                        <g transform="translate(75, 45)">
                                            {/* SHOP sign - rounded pill shape - outline only */}
                                            <rect x="20" y="0" width="60" height="18" rx="9" fill="none" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2" />
                                            {/* SHOP text */}
                                            <text x="50" y="13" textAnchor="middle" className="fill-zinc-500 dark:fill-zinc-400" style={{ fontSize: '10px', fontWeight: 600, fontFamily: 'system-ui', letterSpacing: '1px' }}>SHOP</text>

                                            {/* Horizontal roof bar below sign - outline only */}
                                            <rect x="-8" y="22" width="116" height="12" rx="4" fill="none" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2" />

                                            {/* Main building body - outline only */}
                                            <rect x="0" y="34" width="100" height="56" fill="none" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2" />

                                            {/* Left side - two small dash windows */}
                                            <line x1="12" y1="55" x2="20" y2="55" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2.5" strokeLinecap="round" />
                                            <line x1="25" y1="55" x2="33" y2="55" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2.5" strokeLinecap="round" />

                                            {/* Center double door - outline only */}
                                            <rect x="37" y="45" width="26" height="45" rx="3" fill="none" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2" />
                                            {/* Door divider line */}
                                            <line x1="50" y1="45" x2="50" y2="90" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2" />
                                            {/* Door handles - vertical lines */}
                                            <line x1="46" y1="66" x2="46" y2="74" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2.5" strokeLinecap="round" />
                                            <line x1="54" y1="66" x2="54" y2="74" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2.5" strokeLinecap="round" />

                                            {/* Right side - two small dash windows */}
                                            <line x1="67" y1="55" x2="75" y2="55" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2.5" strokeLinecap="round" />
                                            <line x1="80" y1="55" x2="88" y2="55" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2.5" strokeLinecap="round" />

                                            {/* Bottom base/trim - outline only */}
                                            <rect x="-8" y="90" width="116" height="10" fill="none" className="stroke-zinc-500 dark:stroke-zinc-400" strokeWidth="2" />
                                        </g>

                                        {/* Verification badge */}
                                        <g transform="translate(220, 120)">
                                            <circle cx="0" cy="0" r="18" className="fill-zinc-700 dark:fill-zinc-300" />
                                            <circle cx="0" cy="0" r="14" className="fill-white dark:fill-zinc-800" />
                                            <path
                                                d="M -5 0 L -2 5 L 6 -5"
                                                className="stroke-zinc-700 dark:stroke-zinc-300"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">Verified local businesses</h2>
                                    <p className="text-foreground">Updates come directly from nearby shops and vendors tied to real places, not anonymous or distant sellers.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex h-32 w-full items-center justify-center">
                                    <svg
                                        className="h-full w-auto"
                                        viewBox="0 0 200 160"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        
                                        {/* Signal ripple circles - subtle expanding rings */}
                                        <circle cx="100" cy="80" r="70" className="stroke-zinc-200 dark:stroke-zinc-700/50" strokeWidth="1" fill="none" opacity="0.4" />
                                        <circle cx="100" cy="80" r="55" className="stroke-zinc-200 dark:stroke-zinc-700/50" strokeWidth="1" fill="none" opacity="0.5" />
                                        <circle cx="100" cy="80" r="40" className="stroke-zinc-300 dark:stroke-zinc-600/50" strokeWidth="1" fill="none" opacity="0.6" />

                                        {/* Clock outline - main icon */}
                                        <circle cx="100" cy="80" r="32" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="2.5" fill="none" />
                                        
                                        {/* Clock inner circle */}
                                        <circle cx="100" cy="80" r="28" className="fill-zinc-50 dark:fill-zinc-800" />
                                        <circle cx="100" cy="80" r="28" className="stroke-zinc-300 dark:stroke-zinc-600" strokeWidth="1" fill="none" />

                                        {/* Clock hour markers */}
                                        <line x1="100" y1="56" x2="100" y2="60" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="100" y1="100" x2="100" y2="104" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="76" y1="80" x2="80" y2="80" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="2" strokeLinecap="round" />
                                        <line x1="120" y1="80" x2="124" y2="80" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="2" strokeLinecap="round" />

                                        {/* Clock hands */}
                                        <line x1="100" y1="80" x2="100" y2="64" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="100" y1="80" x2="112" y2="74" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="2" strokeLinecap="round" />

                                        {/* Clock center dot */}
                                        <circle cx="100" cy="80" r="3" className="fill-zinc-600 dark:fill-zinc-300" />

                                        {/* LIVE indicator - simple dot + text */}
                                        <g transform="translate(145, 50)">
                                            {/* Pulse ring animation */}
                                            <circle cx="0" cy="0" r="8" className="fill-zinc-400/20 dark:fill-zinc-500/20">
                                                <animate attributeName="r" values="6;12;6" dur="2.5s" repeatCount="indefinite" />
                                                <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
                                            </circle>
                                            
                                            {/* Solid dot */}
                                            <circle cx="0" cy="0" r="5" className="fill-zinc-500 dark:fill-zinc-400">
                                                <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
                                            </circle>
                                            <circle cx="0" cy="0" r="2" className="fill-zinc-300 dark:fill-zinc-600" />
                                            
                                            {/* LIVE text */}
                                            <text x="14" y="4" className="fill-zinc-500 dark:fill-zinc-400" style={{ fontSize: '10px', fontWeight: 600, fontFamily: 'system-ui', letterSpacing: '0.5px' }}>LIVE</text>
                                        </g>
                                    </svg>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">Happening right now</h2>
                                    <p className="text-foreground">What you see is live fresh food, new stock, or activity that&apos;s available now, not yesterday or later.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Shield
                                            className="m-auto size-5"
                                            strokeWidth={1}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">Relevance over noise</h2>
                                        <p className="text-foreground">Mirchi35 filters by distance, time, and interest, so only what truly matters nearby reaches you.</p>
                                    </div>
                                </div>
                                <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                    </div>
                                    <svg
                                        className="w-full sm:w-[150%]"
                                        viewBox="0 0 366 180"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        
                                        {/* Subtle horizontal guide lines */}
                                        <line x1="0" y1="60" x2="366" y2="60" className="stroke-zinc-200 dark:stroke-zinc-700/30" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="0" y1="100" x2="366" y2="100" className="stroke-zinc-200 dark:stroke-zinc-700/30" strokeWidth="1" strokeDasharray="4 4" />
                                        <line x1="0" y1="140" x2="366" y2="140" className="stroke-zinc-200 dark:stroke-zinc-700/30" strokeWidth="1" strokeDasharray="4 4" />
                                        
                                        {/* Calm gradient fill under the clean line */}
                                        <path
                                            d="M0 180 L0 120 Q60 115 120 110 Q180 105 240 100 Q300 95 366 90 L366 180 Z"
                                            fill="url(#calmGradient)"
                                        />
                                        
                                        {/* Single clean calm line - gentle, smooth curve */}
                                        <path
                                            d="M0 120 Q60 115 120 110 Q180 105 240 100 Q300 95 366 90"
                                            className="stroke-zinc-400 dark:stroke-zinc-500"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                        
                                        {/* Small dot at start */}
                                        <circle cx="0" cy="120" r="4" className="fill-zinc-400 dark:fill-zinc-500" />
                                        
                                        {/* Small dot at end */}
                                        <circle cx="366" cy="90" r="4" className="fill-zinc-400 dark:fill-zinc-500" />
                                        
                                        <defs>
                                            <linearGradient
                                                id="calmGradient"
                                                x1="183"
                                                y1="90"
                                                x2="183"
                                                y2="180"
                                                gradientUnits="userSpaceOnUse">
                                                <stop
                                                    className="text-zinc-300/30 dark:text-zinc-600/20"
                                                    stopColor="currentColor"
                                                />
                                                <stop
                                                    offset="1"
                                                    stopColor="currentColor"
                                                    stopOpacity="0"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                        <Users
                                            className="m-auto size-6"
                                            strokeWidth={1}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition">Built for real-world connections</h2>
                                        <p className="text-foreground">Discover places you can walk into, talk to real people, and support businesses around you.</p>
                                    </div>
                                </div>
                                <div className="relative mt-6 flex items-center justify-center sm:-my-6 sm:-mr-6 sm:ml-6 sm:border-l sm:border-t sm:p-6">
                                    <svg
                                        className="h-48 w-full"
                                        viewBox="0 0 200 180"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        
                                        {/* Thin connection lines */}
                                        <line x1="45" y1="65" x2="25" y2="30" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="45" y1="65" x2="100" y2="35" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="100" y1="35" x2="155" y2="55" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="155" y1="55" x2="175" y2="85" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="155" y1="55" x2="155" y2="110" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="45" y1="65" x2="45" y2="120" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="45" y1="120" x2="80" y2="155" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="155" y1="110" x2="175" y2="140" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="100" y1="35" x2="100" y2="90" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="45" y1="65" x2="100" y2="90" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <line x1="155" y1="55" x2="100" y2="90" className="stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        
                                        {/* Small node circles */}
                                        <circle cx="25" cy="30" r="8" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <circle cx="100" cy="35" r="8" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <circle cx="175" cy="85" r="8" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <circle cx="80" cy="155" r="8" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        <circle cx="175" cy="140" r="8" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                        
                                        {/* Large Person Node 1 - Left */}
                                        <g transform="translate(45, 65)">
                                            {/* Large outer circle */}
                                            <circle cx="0" cy="0" r="22" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                            {/* Person icon inside */}
                                            <circle cx="0" cy="-5" r="6" className="fill-none stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                            <path d="M-10 14 Q-10 4 0 4 Q10 4 10 14" className="fill-none stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                        
                                        {/* Large Person Node 2 - Right */}
                                        <g transform="translate(155, 55)">
                                            {/* Large outer circle */}
                                            <circle cx="0" cy="0" r="22" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                            {/* Person icon inside */}
                                            <circle cx="0" cy="-5" r="6" className="fill-none stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                            <path d="M-10 14 Q-10 4 0 4 Q10 4 10 14" className="fill-none stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                        
                                        {/* Large Person Node 3 - Bottom center-left */}
                                        <g transform="translate(45, 120)">
                                            {/* Large outer circle */}
                                            <circle cx="0" cy="0" r="18" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                            {/* Person icon inside */}
                                            <circle cx="0" cy="-4" r="5" className="fill-none stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                            <path d="M-8 12 Q-8 3 0 3 Q8 3 8 12" className="fill-none stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                        
                                        {/* Large Person Node 4 - Bottom right */}
                                        <g transform="translate(155, 110)">
                                            {/* Large outer circle */}
                                            <circle cx="0" cy="0" r="18" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                            {/* Person icon inside */}
                                            <circle cx="0" cy="-4" r="5" className="fill-none stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                            <path d="M-8 12 Q-8 3 0 3 Q8 3 8 12" className="fill-none stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" strokeLinecap="round" />
                                        </g>
                                        
                                        {/* Center node - small */}
                                        <circle cx="100" cy="90" r="6" className="fill-white dark:fill-zinc-900 stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="1.5" />
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

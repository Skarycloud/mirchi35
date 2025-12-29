'use client'
import { Activity, Map as MapIcon, MessageCircle, Wifi, Store } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import FadeIn from './anim/fade-in'

export default function FeaturesSection() {
    return (
        <section id="how-it-works" className="px-4 py-16 md:py-32">
            <div className="mx-auto max-w-5xl">
                <FadeIn className="text-center mb-12" direction="down">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">How <span style={{ color: '#DB0917' }}>Mirchi35</span> works in real time</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Built to surface what&apos;s happening nearby reliably and continuously.</p>
                </FadeIn>
                <div className="grid border md:grid-cols-2">
                <FadeIn delay={0.2} direction="left" className="contents">
                    <div className="md:border-r border-b md:border-b-0">
                        <div className="p-6 sm:p-12">
                            <span className="text-muted-foreground flex items-center gap-2">
                                <MapIcon className="size-4" />
                                See what&apos;s active around you
                            </span>
    
                            <p className="mt-8 text-2xl font-semibold">Mirchi35 shows what nearby vendors have live, in your neighborhood.</p>
                        </div>
    
                        <div
                            aria-hidden
                            className="relative">
                            <div className="absolute inset-0 z-10 m-auto size-fit">
                                <div className="relative">
                                    {/* Main badge */}
                                    <div className="rounded-lg bg-background z-1 dark:bg-muted relative flex w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                        <Wifi className="size-4" /> Live local signals
                                    </div>
                                    {/* Stacked card shadow - below, inset from sides */}
                                    <div className="rounded-lg bg-background absolute left-2 right-2 -bottom-2 -z-10 h-3 border shadow-md shadow-zinc-950/5 dark:bg-zinc-900"></div>
                                </div>
                            </div>
    
                            <div className="relative overflow-hidden">
                                <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                                <Map />
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.4} direction="right" className="contents">
                    <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 dark:bg-transparent">
                        <div className="relative z-10">
                            <span className="text-muted-foreground flex items-center gap-2">
                                <MessageCircle className="size-4" />
                                Direct from vendors
                            </span>
    
                            <p className="my-8 text-2xl font-semibold">Updates come straight from the source</p>
                        </div>
                        <div
                            aria-hidden
                            className="flex flex-col gap-8">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="flex size-5 rounded-full border">
                                        <Store className="m-auto size-3" />
                                    </span>
                                    <span className="text-muted-foreground text-xs">Local Vendor</span>
                                </div>
                                <div className="rounded-lg bg-background mt-1.5 w-3/5 border p-3 text-xs">Fresh samosas ready! Hot off the pan 🔥</div>
                            </div>
    
                            <div>
                                <div className="rounded-lg mb-1 ml-auto w-3/5 bg-orange-500 p-3 text-xs text-white">Vendors post live updates themselves timely, accurate, tied to real people and real places.</div>
                                <span className="text-muted-foreground block text-right text-xs">Now</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.6} className="col-span-full border-y p-12">
                    <p className="text-center text-4xl font-semibold lg:text-7xl">Always on Always local</p>
                </FadeIn>
                <FadeIn delay={0.8} direction="up" className="relative col-span-full overflow-hidden">
                    <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Activity className="size-4" />
                            Local activity flow
                        </span>
    
                        <p className="my-8 text-2xl font-semibold">
                            See local activity in real-time. <span className="text-muted-foreground"> Instantly surface what&apos;s relevant nearby.</span>
                        </p>
                    </div>
                    <MonitoringChart />
                </FadeIn>
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg
            viewBox={viewBox}
            style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r={svgOptions.radius}
                    fill={svgOptions.color}
                />
            ))}
        </svg>
    )
}

const chartConfig = {
    desktop: {
        label: 'Nearby food',
        color: '#2563eb',
    },
    mobile: {
        label: 'Local shops',
        color: '#60a5fa',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', desktop: 56, mobile: 224 },
    { month: 'June', desktop: 56, mobile: 224 },
    { month: 'January', desktop: 126, mobile: 252 },
    { month: 'February', desktop: 205, mobile: 410 },
    { month: 'March', desktop: 200, mobile: 126 },
    { month: 'April', desktop: 400, mobile: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer
            className="h-120 aspect-auto md:h-96"
            config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient
                        id="fillDesktop"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient
                        id="fillMobile"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent className="dark:bg-muted p-3 space-y-1" />}
                />
                <Area
                    strokeWidth={2}
                    dataKey="mobile"
                    type="stepBefore"
                    fill="url(#fillMobile)"
                    fillOpacity={0.1}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="desktop"
                    type="stepBefore"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.1}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}

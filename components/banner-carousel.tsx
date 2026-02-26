'use client'

import { useEffect, useState } from 'react'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const API_BASE_URL = 'https://api.mirchi35.com'

interface Banner {
    bannerId: string
    title: string
    description: string
    imageUrl: string
    imageUri?: {
        left?: string
        rightTop?: string
        rightBottom?: string
    }
    fromDate: string
    toDate: string
    businessId: string
    businessName: string
    businessLogo: string
    city: string
    createdAt: string
}

interface BannerResponse {
    success: boolean
    data: Banner[]
}

const fallbackBanners: Pick<Banner, 'title' | 'description' | 'businessName' | 'city'>[] = [
    { title: 'Grand Opening Sale', description: 'Up to 50% off on all items', businessName: 'Mirchi Kitchen', city: 'Bangalore' },
    { title: 'Happy Hour Special', description: 'Buy 1 Get 1 on drinks', businessName: 'The Pub', city: 'Mumbai' },
    { title: 'Weekend Brunch Fest', description: 'Unlimited brunch at ₹499', businessName: 'Café Mocha', city: 'Delhi' },
    { title: 'Fresh Arrivals', description: 'New menu items just dropped', businessName: 'Spice Route', city: 'Hyderabad' },
    { title: 'Late Night Combos', description: 'Combos starting at ₹199', businessName: 'Grill Hub', city: 'Pune' },
    { title: 'Festival Offers', description: 'Flat 30% off this week', businessName: 'Sweet Spot', city: 'Chennai' },
]

function BannerCard({ banner }: { banner: Banner | Pick<Banner, 'title' | 'description' | 'businessName' | 'city'> }) {
    const hasImage = 'imageUrl' in banner && banner.imageUrl
    const hasLogo = 'businessLogo' in banner && banner.businessLogo

    return (
        <div className="group w-64 shrink-0 overflow-hidden rounded-none border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 sm:w-72">
            {/* Full-width image */}
            <div className="relative h-36 w-full overflow-hidden bg-linear-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
                {hasImage ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                        src={(banner as Banner).imageUrl}
                        alt={banner.title}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <span className="text-5xl">🌶️</span>
                    </div>
                )}

                {/* Location badge */}
                {'city' in banner && banner.city && (
                    <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        {banner.city}
                    </span>
                )}
            </div>

            {/* Business info */}
            <div className="flex items-center gap-2 px-3 py-2">
                    {hasLogo ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                            src={(banner as Banner).businessLogo}
                            alt={banner.businessName}
                            className="h-6 w-6 rounded-full object-cover ring-1 ring-zinc-200 dark:ring-zinc-700"
                        />
                    ) : (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-orange-500 to-red-500 text-[10px] font-bold text-white">
                            {banner.businessName?.charAt(0) || 'M'}
                        </div>
                    )}
                    <p className="min-w-0 truncate text-xs font-medium text-zinc-600 dark:text-zinc-300">
                        {banner.businessName}
                    </p>
            </div>
        </div>
    )
}

export default function BannerCarousel() {
    const [banners, setBanners] = useState<Banner[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        async function fetchBanners() {
            try {
                const res = await fetch(
                    `${API_BASE_URL}/api/v1/public/banners/latest`,
                    { signal: controller.signal }
                )
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                const json: BannerResponse = await res.json()
                if (json.success && json.data.length > 0) {
                    setBanners(json.data)
                }
            } catch (err: unknown) {
                if (err instanceof DOMException && err.name === 'AbortError') return
                console.warn('Failed to fetch banners:', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchBanners()
        return () => controller.abort()
    }, [])

    const displayBanners = banners.length > 0 ? banners : null
    const showFallback = loading || error || !displayBanners

    return (
        <section className="relative overflow-hidden bg-zinc-50 py-8 dark:bg-zinc-950 sm:py-10">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-5 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                        🔥 Live Deals Around You
                    </h2>
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                        Discover real-time offers from local businesses near you
                    </p>
                </div>
            </div>

            <div className="relative">
                <InfiniteSlider speed={25} speedOnHover={10} gap={24}>
                    {showFallback
                        ? fallbackBanners.map((b, i) => (
                              <BannerCard key={`fallback-${i}`} banner={b} />
                          ))
                        : displayBanners!.map((b) => (
                              <BannerCard key={b.bannerId} banner={b} />
                          ))}
                </InfiniteSlider>

                {/* Edge blur overlays */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-zinc-50 dark:from-zinc-950" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-zinc-50 dark:from-zinc-950" />
                <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-24"
                    direction="left"
                    blurIntensity={1}
                    blurLayers={3}
                />
                <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-24"
                    direction="right"
                    blurIntensity={1}
                    blurLayers={3}
                />
            </div>
        </section>
    )
}

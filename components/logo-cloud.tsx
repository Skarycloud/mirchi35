import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-sm font-semibold">Live Around You</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={15}
                            speed={30}
                            gap={48}>
                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🍻 Happy Hour: 1+1 Drinks • 150m away</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🌶️ Fresh Veggies Just Arrived • Green Grocers</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🎸 Live Music Starts in 5 mins • The Pub</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🍕 Buy 1 Get 1 Pizza • Pizza Palace</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">☕ Flat 30% OFF • Coffee House</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🍔 Late-Night Combos • Grill Hub</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🥗 Healthy Lunch Bowls • 20% OFF</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🍩 Free Donut with Coffee • Today Only</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🎬 Movie Snacks Combo • Limited Time</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2">
                                <span className="text-sm font-medium">🛍️ Weekend Sale • Fashion Store Nearby</span>
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                            blurLayers={2}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                            blurLayers={2}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="relative overflow-hidden py-1.5 bg-[#ed3b00]">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:border-white/30 md:pr-6">
                        <p className="text-end text-sm font-semibold text-white">Live Around You</p>
                    </div>
                    <div className="relative py-1.5 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={15}
                            speed={30}
                            gap={48}>
                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🍻 Happy Hour: 1+1 Drinks • 150m away</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🌶️ Fresh Veggies Just Arrived • Green Grocers</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🎸 Live Music Starts in 5 mins • The Pub</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🍕 Buy 1 Get 1 Pizza • Pizza Palace</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">☕ Flat 30% OFF • Coffee House</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🍔 Late-Night Combos • Grill Hub</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🥗 Healthy Lunch Bowls • 20% OFF</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🍩 Free Donut with Coffee • Today Only</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🎬 Movie Snacks Combo • Limited Time</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-1">
                                <span className="text-sm font-medium text-white">🛍️ Weekend Sale • Fashion Store Nearby</span>
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-[#ed3b00] absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-[#ed3b00] absolute inset-y-0 right-0 w-20"></div>
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

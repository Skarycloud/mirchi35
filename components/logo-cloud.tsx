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
                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 rounded-full border border-orange-200 dark:border-orange-800">
                                <span className="text-sm font-medium">🍻 Happy Hour: 1+1 Drinks • 150m away</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 rounded-full border border-green-200 dark:border-green-800">
                                <span className="text-sm font-medium">🌶️ Fresh Veggies Just Arrived • Green Grocers</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-full border border-purple-200 dark:border-purple-800">
                                <span className="text-sm font-medium">🎸 Live Music Starts in 5 mins • The Pub</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 rounded-full border border-red-200 dark:border-red-800">
                                <span className="text-sm font-medium">🍕 Buy 1 Get 1 Pizza • Pizza Palace</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 rounded-full border border-amber-200 dark:border-amber-800">
                                <span className="text-sm font-medium">☕ Flat 30% OFF • Coffee House</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 rounded-full border border-yellow-200 dark:border-yellow-800">
                                <span className="text-sm font-medium">🍔 Late-Night Combos • Grill Hub</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-lime-50 to-lime-100 dark:from-lime-950 dark:to-lime-900 rounded-full border border-lime-200 dark:border-lime-800">
                                <span className="text-sm font-medium">🥗 Healthy Lunch Bowls • 20% OFF</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 rounded-full border border-pink-200 dark:border-pink-800">
                                <span className="text-sm font-medium">🍩 Free Donut with Coffee • Today Only</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-full border border-blue-200 dark:border-blue-800">
                                <span className="text-sm font-medium">🎬 Movie Snacks Combo • Limited Time</span>
                            </div>

                            <div className="flex items-center whitespace-nowrap px-4 py-2 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 rounded-full border border-indigo-200 dark:border-indigo-800">
                                <span className="text-sm font-medium">🛍️ Weekend Sale • Fashion Store Nearby</span>
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

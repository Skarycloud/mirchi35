import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    const plans = [
        {
            name: 'Free',
            price: '0',
            bestFor: 'Getting started',
            features: [
                'List your business',
                'Post live updates anytime',
                'Reach nearby customers',
                'No commissions',
                'No delivery involvement',
                'Always free to exist on Mirchi35',
            ],
            cta: 'Get Started Free',
            variant: 'outline' as const,
            popular: false,
        },
        {
            name: 'Local Boost',
            price: '65',
            period: 'day',
            bestFor: 'Increasing local reach',
            features: [
                'Everything in Free',
                'Extra visibility within your area',
                'Priority placement during busy hours',
                'Reach more nearby people',
                'No price control',
                'No discount requirements',
            ],
            cta: 'Boost Local Reach',
            variant: 'default' as const,
            popular: true,
        },
        {
            name: 'Neighborhood Pro',
            price: '118',
            period: 'day',
            bestFor: 'High footfall businesses',
            features: [
                'Everything in Local Boost',
                'Maximum visibility in your neighborhood',
                'Ideal for peak hours and specials',
                'Better discovery for new customers',
                'Full control over posting and timing',
            ],
            cta: 'Talk to Us',
            variant: 'outline' as const,
            popular: false,
        },
    ]

    return (
        <section id="pricing" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl space-y-4 text-center">
                    <h2 className="text-center text-3xl font-semibold lg:text-4xl">
                        Simple pricing for local businesses
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Start free. Pay only when you want more visibility in your neighborhood.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative flex flex-col ${plan.popular ? 'border-orange-500 shadow-lg shadow-orange-500/10' : ''}`}>
                            {plan.popular && (
                                <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-linear-to-r from-orange-500 to-amber-500 px-3 py-1 text-xs font-medium text-white shadow-md">
                                    Popular
                                </span>
                            )}

                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                                <div className="mt-3">
                                    <span className="text-3xl font-bold">₹{plan.price}</span>
                                    <span className="text-muted-foreground"> / {plan.period || 'month'}</span>
                                </div>
                                <CardDescription className="mt-2 text-sm">
                                    Best for: {plan.bestFor}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1 space-y-4">
                                <hr className="border-dashed" />

                                <ul className="list-outside space-y-3 text-sm">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-start gap-2">
                                            <Check className="mt-0.5 size-4 shrink-0 text-green-500" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto pt-4">
                                <Button
                                    asChild
                                    variant={plan.variant}
                                    className="w-full bg-[#ff6900] hover:bg-[#ff6900]/90 text-white font-semibold border-0">
                                    <Link href="">{plan.cta}</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Trust Micro-copy */}
                <div className="mt-12 flex justify-center">
                    <blockquote className="border-l-4 border-zinc-400 px-6 py-4 max-w-lg">
                        <p className="italic text-zinc-700 dark:text-zinc-300">
                            Mirchi35 never takes a cut from your sales.
                            <br />
                            <span className="text-zinc-600 dark:text-zinc-400">Pricing is only for visibility, not control.</span>
                        </p>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

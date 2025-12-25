import { Store, Radio, Eye, Tag, Bell, Users } from 'lucide-react'

export default function Foundation() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Built on <span style={{ color: '#DB0917' }}>local first</span> principles</h2>
                    <p className="text-muted-foreground">Mirchi35 is designed to support real neighborhoods, real vendors, and real-world discovery without shortcuts.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Store className="size-4" />
                            <h3 className="text-sm font-medium">Buy Locally What You Crave</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Discover trusted shops around you. Support your neighborhood businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Radio className="size-4" />
                            <h3 className="text-sm font-medium">Live Updates</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Vendors post ads in real-time. If it's on Mirchi35, it's happening right now.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Eye className="size-4" />
                            <h3 className="text-sm font-medium">Seeing Is Believing</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Explore real stores, feel real products, connect with your neighbourhood.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Tag className="size-4" />
                            <h3 className="text-sm font-medium">Exclusive Deals</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Discover exclusive flash sales and offers you won't find anywhere else.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Bell className="size-4" />
                            <h3 className="text-sm font-medium">Smart Notifications</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Get instant alerts for deals near you. Never miss out on hot offers again.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />
                            <h3 className="text-sm font-medium">Stay Connected</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">We help you stay connected with Real World and Real People.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

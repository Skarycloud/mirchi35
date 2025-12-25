'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Is Mirchi35 free for local businesses?',
            answer: 'Yes. Listing your business and posting basic updates is completely free. You only pay if you later choose optional visibility features.',
        },
        {
            id: 'item-2',
            question: 'Do I need to offer discounts to use Mirchi35?',
            answer: 'No. You decide your prices. Mirchi35 does not require discounts or special offers to reach nearby customers.',
        },
        {
            id: 'item-3',
            question: 'Does Mirchi35 handle delivery?',
            answer: 'No. Mirchi35 focuses on walk-in discovery. Customers come to your shop when they see what is available nearby.',
        },
        {
            id: 'item-4',
            question: 'How is Mirchi35 different from WhatsApp status?',
            answer: 'WhatsApp status is limited to your contacts. Mirchi35 shows your updates to new people who are physically close to your shop and looking for something nearby.',
        },
        {
            id: 'item-5',
            question: 'Will this increase my daily workload?',
            answer: 'No. Posting on Mirchi35 is as simple as taking a photo and adding a short line. There is no additional operational work.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Your questions answered</p>
                        <p className="text-muted-foreground mt-6 hidden md:block">
                            Can't find what you're looking for? Contact our{' '}
                            <Link
                                href="#"
                                className="text-primary font-medium hover:underline">
                                customer support team
                            </Link>
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion
                            type="single"
                            collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}>
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <p className="text-muted-foreground mt-6 md:hidden">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

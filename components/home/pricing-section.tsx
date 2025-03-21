import Link from 'next/link';
import cn from 'classnames';
import { ArrowRight, Check, CheckIcon } from 'lucide-react';

const plans = [
    {
        id: 'basic',
        title: 'Basic',
        price: 9.99,
        discription: 'Perfect for occasional use',
        items: [
            '3 PDF summaries per day',
            'Standard processing time',
            'Email support',
        ],
        paymentLink: '',
        priceID: '',
    },

    {
        title: 'Pro',
        price: 19.99,
        discription: 'For professionals & teams',
        items: [
            'Unlimited PDF summaries',
            'Priority processing',
            '24/7 support',
            'Markdown Export',
        ],
        id: 'pro',
        paymentLink: '',
        priceID: '',
    },
]

type PricingCardProps = {
    title: string;
    price: number;
    discription: string;
    items: string[];
    id: string;
    paymentLink: string;
};

function PricingCard({ title, price, discription, items, id, paymentLink }: PricingCardProps) {
    return (
        <div className='relative w-full max-w-lg hover:scale-105 hover:transition-all duration-300'>
            <div className={cn(
                'relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px]',
                'border-gray-500/20 rounded-2xl',
                id === 'pro' && 'border-teal-500 gap-5 border-2',
            )}>
                <div className='flex justify-between items-center gap-4'>
                    <div>
                        <p className='text-lg lg:text-xl font-bold capitalize'>{title}</p>
                        <p className='text-base-content/80 mt-2'>{discription}</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <p className='text-5xl tracking-tight font-extrabold'>{price}</p>
                    <div className='flex flex-col justify-end mb-[4px]'>
                        <p className='text-xs uppercase font-semibold'>USD</p>
                        <p className='text-xs'>/month</p>
                    </div>
                </div>

                <div className='space-y-2.5 leading-relaxed text-base flex-1'>
                    {items.map((item, idx) => (
                        <li key={idx} className='flex items-center gap-2'>
                            <CheckIcon size={16} />
                            <span>{item}</span>
                        </li>
                    ))}
                </div>

                <div className='space-y-2 flex justify-center w-full'>
                    <Link 
                        href={paymentLink}
                        className={cn('w-full rounded-full flex items-center justify-center gap-2',
                        'bg-linear-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500',
                        'hover:to-emerald-600 text-white border-2 py-2',
                        id === 'pro' 
                            ? 'border-emerald-900'
                            : 'border-emerald-100 from-emerald-400 to-emerald-500'
                        )}
                        >
                            Buy Now
                            <ArrowRight size={18} />
                        </Link>
                </div>
            </div>
        </div>
    );
}
export default function PricingSection() {
    return (
        <section className='relative overflow-hidden' id='pricing'>
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6
            lg:px-4 lg:pt-12">
                <div className='flex items-center justify-center w-full pb-12'>
                    <h2 className='uppercase font-bold text-xl mb-8 text-emerald-500'>Pricing</h2>
                </div>

                <div className="relative flex justify-center flex-col lg:flex-row items-center
                    lg:items-stretch gap-8">
                        {plans.map((plan) => (
                            <PricingCard key={plan.id} {...plan} />
                        ))}
                    </div>
            </div>
        </section>
    );
}
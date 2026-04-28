import { Head, Link } from '@inertiajs/react';
import mobileHeader from '@/../images/homeHeader-640.webp';
import header from '@/../images/homeHeader.webp';
import { Card, CardTitle } from '@/components/ui/card';

export default function HomeHeader() {
    return (
        <div className="relative flex min-h-140 w-full items-center justify-center px-4 py-12 sm:min-h-162.5 lg:min-h-187.5">
            <Head>
                <link rel="preload" as="image" href={header} />
            </Head>
            <img
                src={header}
                srcSet={`${mobileHeader} 640w, ${header} 1920w`}
                sizes="(max-width: 640px) 100vw, 50vw"
                alt=""
                fetchPriority="high"
                className="absolute inset-0 h-full object-cover sm:w-full"
                loading="eager"
                aria-hidden="true"
                decoding="async"
                role="presentation"
            />
            <Card className="relative flex w-full max-w-144.75 flex-col items-center justify-center gap-5 border-0 bg-white px-6 py-10 text-center sm:px-10 sm:py-12">
                <span className="text-sm text-green-600 sm:text-base">
                    Say Hello to ToyStore!
                </span>

                <CardTitle className="font-sans text-3xl leading-tight font-normal text-black sm:text-4xl lg:text-[40px]">
                    Free Ecommerce Template for Webflow
                </CardTitle>
                <Link
                    href="/catalog"
                    className="flex h-12 w-full max-w-38.25 items-center justify-center rounded-3xl bg-[#A5C926]"
                >
                    Open catalog
                </Link>
            </Card>
        </div>
    );
}

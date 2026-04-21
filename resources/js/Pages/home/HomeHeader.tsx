import { Link } from '@inertiajs/react';
import header from '@/../images/homeHeader.webp';
import { Card, CardTitle } from '@/components/ui/card';

export default function HomeHeader() {
    return (
        <div
            className="flex min-h-140 w-full items-center justify-center px-4 py-12 sm:min-h-162.5 sm:px-6 lg:min-h-187.5"
            style={{
                backgroundImage: `url(${header})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Card className="relative flex w-full max-w-144.75 flex-col items-center justify-center gap-5 border-0 bg-white px-6 py-10 text-center sm:px-10 sm:py-12">
                <span className="text-sm text-green-600 sm:text-base">
                    Say Hello to ToyStore!
                </span>

                <CardTitle
                    className="font-sans text-black"
                    style={{ fontWeight: 400 }}
                >
                    <span className="block text-3xl leading-tight sm:text-4xl sm:leading-tight lg:text-[40px]">
                        Free Ecommerce Template for Webflow
                    </span>
                </CardTitle>
                <Link
                    href="/catalog"
                    className="h-12 w-full max-w-38.25 flex items-center justify-center rounded-3xl bg-[#A5C926]"
                >
                    Open catalog
                </Link>
            </Card>
        </div>
    );
}

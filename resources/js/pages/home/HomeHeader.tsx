import { Button } from '@headlessui/react';
import header from '@/../images/homeHeader.svg';
import { Card, CardTitle } from '@/components/ui/card';

export default function HomeHeader() {
    return (
        <div
            className="flex min-h-[560px] w-full items-center justify-center px-4 py-12 sm:min-h-[650px] sm:px-6 lg:min-h-[750px]"
            style={{
                backgroundImage: `url(${header})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Card className="relative flex w-full max-w-[579px] flex-col items-center justify-center gap-5 border-0 bg-white px-6 py-10 text-center sm:px-10 sm:py-12">
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
                <Button className="h-12 w-full max-w-[153px] rounded-3xl bg-[#A5C926]">
                    Open catalog
                </Button>
            </Card>
        </div>
    );
}

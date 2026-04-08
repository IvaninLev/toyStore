import { Button } from '@headlessui/react';
import header from '@/../images/homeHeader.svg';
import { Card, CardTitle } from '@/components/ui/card';

export default function HomeHeader() {
    return (
        <div
            style={{
                backgroundImage: `url(${header})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height:"750px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Card className="relative flex h-[308px] w-[579px] items-center justify-center border-0 bg-white">
                <span className="absolute top-12 text-green-600">
                    Say Hello to ToyStore!
                </span>

                <CardTitle
                    className="text-center font-sans text-black "
                    style={{ fontWeight: 400, fontSize: 40 }}
                >
                    Free Ecommerce Template for Webflow
                </CardTitle>
                <Button className="bg-[#A5C926] h-[48px] w-[153px] rounded-3xl">Open catalog</Button>
            </Card>
        </div>
    );
}

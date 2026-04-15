import { Link } from '@inertiajs/react';
import bear from '@/../images/StuffedBear.svg';
import wooden from '@/../images/WoodenToy.svg';
import { Card, CardTitle } from '@/components/ui/card';

export default function ToyTypePicker() {
    return (
        <section
            className="container flex items-center justify-center px-4 py-10 sm:px-6 sm:py-14"
            style={{ fontFamily: 'Varela round' }}
        >
            <div className="flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:gap-8">
                <Card
                    className="relative flex min-h-55 flex-1 flex-col items-center justify-center gap-4 overflow-hidden
                     border-0 bg-[#FFC12C] px-6 py-8 text-center sm:min-h-65 sm:px-10 lg:items-end lg:pr-12 lg:pl-32
                     lg:text-left">
                    <img
                        src={bear}
                        alt="bear"
                        className="relative w-35 max-w-[45vw] sm:w-45 lg:absolute lg:left-8 lg:top-1/2 lg:w-55
                        lg:-translate-y-1/2"
                    ></img>
                    <CardTitle
                        className="max-w-55 text-2xl sm:text-[28px]"
                        style={{ fontWeight: 400 }}
                    >
                        Stuffed Animals
                    </CardTitle>
                    <Link href="/catalog?category=stuffed" className="   flex justify-center items-center   h-12 w-30 rounded-3xl bg-white text-[13px] text-black hover:bg-white/90">
                        Shop now
                    </Link>
                </Card>

                <Card
                    className="relative flex min-h-55 flex-1 flex-col items-center
                    justify-center gap-4 overflow-hidden border-0 bg-[#FB416B] px-6 py-8 text-center sm:min-h-65
                     sm:px-10 lg:items-start lg:pl-12 lg:pr-32 lg:text-left">
                    <img
                        src={wooden}
                        alt="wooden"
                        className="relative w-35 max-w-[45vw] sm:w-45 lg:absolute lg:right-8 lg:top-1/2 lg:w-55
                         lg:-translate-y-1/2"
                    ></img>
                    <CardTitle
                        className="max-w-55 text-2xl text-white sm:text-[28px]"
                        style={{ fontWeight: 400 }}
                    >
                        Wooden Toys
                    </CardTitle>
                    <Link href="/catalog?category=wooden" className=" flex justify-center items-center  h-12 w-30 rounded-3xl bg-white text-[13px] text-black hover:bg-white/90">
                        Shop now
                    </Link>
                </Card>
            </div>
        </section>
    );
}

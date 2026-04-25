import { Link, router } from '@inertiajs/react';
import * as Slider from '@radix-ui/react-slider';
import { useState } from 'react';
import { Button } from './ui/button';

export function CatalogSidebar({
    maxPriceInDb,
    isOpen,
    setOpen,
}: {
    maxPriceInDb: number;
    isOpen: boolean;
    setOpen: any;
}) {
    const [price, setPrice] = useState([0, maxPriceInDb || 1000]);

    return (
        <aside
            className={
                `fixed w-72 border-r bg-white p-6 shadow-2xl
             transition-transform duration-300 ease-in-out
             ${isOpen ? 'translate-x-0' : '-translate-x-full'}
           md:h-auto  h-full md:relative md:block md:translate-x-0 md:shadow-none`
        }
        >
            <Button className="md:hidden" onClick={() => setOpen(!isOpen)}>
                close
            </Button>

            <h2 className="mb-6 text-xl font-bold">Filters</h2>

            <nav className="space-y-6">
                <div>
                    <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                        Categories
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/catalog"
                                className="transition-colors hover:text-[#A5C926]"
                            >
                                All toys
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/catalog?category=wooden"
                                className="transition-colors hover:text-[#A5C926]"
                            >
                                Wooden toys
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/catalog?category=stuffed"
                                className="transition-colors hover:text-[#A5C926]"
                            >
                                Stuffed toys
                            </Link>
                        </li>
                    </ul>
                    <h3 className="mt-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                        Price
                    </h3>
                    <span>
                        Price {price[0]} — {price[1]}
                    </span>
                    <Slider.Root
                        className="relative flex h-5 w-full touch-none items-center select-none"
                        max={maxPriceInDb}
                        step={1}
                        value={price}
                        onValueChange={setPrice}
                        onValueCommit={(finalValue) => {
                            const params = new URLSearchParams(
                                window.location.search,
                            );
                            params.set('min', finalValue[0].toString());
                            params.set('max', finalValue[1].toString());

                            params.set('page', '1');

                            const query = Object.fromEntries(params.entries());

                            router.get('/catalog', query, {
                                preserveState: true,
                                preserveScroll: true,
                                replace: true,
                            });
                        }}
                    >
                        <Slider.Track className="relative h-1 grow rounded-full bg-gray-200">
                            <Slider.Range className="absolute h-full rounded-full bg-[#A5C926]" />
                        </Slider.Track>
                        <Slider.Thumb className="block h-4 w-4 rounded-full border-2 border-[#A5C926] bg-white shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-[#A5C926] focus:outline-none" />
                        <Slider.Thumb className="block h-4 w-4 rounded-full border-2 border-[#A5C926] bg-white shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-[#A5C926] focus:outline-none" />
                    </Slider.Root>
                </div>
            </nav>
        </aside>
    );
}

import { router } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { CatalogSidebar } from '@/components/CatalogSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useCartStore } from '@/stores/useCartStore';
import type { Toy } from '@/types';

export default function Catalog({
    products = [],
    lastPage,
    currentPage,
    maxPriceInDb,
    filters,
}: {
    products: Toy[];
    lastPage: number;
    currentPage: number;
    maxPriceInDb: number;
    filters: any;
}) {
    const addToCart = useCartStore((state) => state.addToCart);
    const [isOpen, setOpen] = useState(false);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= lastPage) {
            router.get(
                '/catalog',
                {
                    ...filters,
                    page,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                },
            );
        }
    };

    return (
        <section className="flex text-black">
            <CatalogSidebar
                setOpen={setOpen}
                isOpen={isOpen}
                maxPriceInDb={maxPriceInDb}
            />

            <main className="w-full">
                <Menu className="md:hidden" onClick={() => setOpen(!isOpen)} />

                <div className="grid pb-0 sm:grid-cols-1 sm:justify-items-center sm:space-x-2 md:grid-cols-2 lg:grid-cols-3 lg:space-x-">
                    {products.map((product, index) => (
                        <Card
                            key={product.id}
                            className="mx-auto mt-16 mb-12 h-82 w-67.5 items-center border-0 bg-white text-black shadow-sm"
                        >
                            <img
                                src={product.image}
                                loading="eager"
                                fetchPriority={index < 4 ? 'high' : 'auto'}
                                className="h-46.25 w-46.25 object-contain"
                                alt=""
                            />
                            <CardTitle className="text-center">
                                {product.name}
                            </CardTitle>
                            <Button
                                onClick={() => addToCart(product)}
                                className="h-12 w-auto cursor-pointer rounded-3xl bg-[#A5C926] px-10 text-white hover:bg-[#A5C926]"
                            >
                                ${product.price}
                            </Button>
                        </Card>
                    ))}
                </div>
                <div className="d-flex flex w-auto items-center justify-center space-x-3">
                    {currentPage !== 1 && (
                        <Button
                            className="bg-green-500 text-white hover:cursor-pointer hover:bg-green-500"
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            prev
                        </Button>
                    )}
                    <div>
                        <span> {currentPage} </span>
                        <span> of </span>
                        <span> {lastPage} </span>
                    </div>
                    {currentPage < lastPage && (
                        <Button
                            className="bg-green-500 text-white hover:cursor-pointer hover:bg-green-500"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            next
                        </Button>
                    )}
                </div>
            </main>
        </section>
    );
}

import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { CatalogSidebar } from '@/Pages/catalog/CatalogSidebar';
import { useCartStore } from '@/stores/useCartStore';
import type { Toy } from '@/types';

export default function Catalog({
    products = [],
    lastPage,
    currentPage,
    maxPriceInDb,
}: {
    products: Toy[];
    lastPage: number;
    currentPage: number;
    maxPriceInDb: number;
}) {
    const addToCart = useCartStore((state) => state.addToCart);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= lastPage) {
            router.get(
                '/catalog',
                { page },
                {
                    preserveScroll: true,
                },
            );
        }
    };

    return (
        <section className="flex text-black">
            <CatalogSidebar maxPriceInDb={maxPriceInDb} />

            <main className="">
                <div className="grid pb-0 sm:grid-cols-1 sm:space-x-2 md:grid-cols-2 lg:grid-cols-4 lg:space-x-4">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className="mt-16 mb-12 h-82 w-67.5 flex-none items-center border-0 bg-white text-black shadow-sm"
                        >
                            <img
                                src={product.image}
                                className="h-46.25 w-46.25 object-contain"
                                alt={product.name}
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
                            className="hover:cursor-pointer bg-green-500 text-white hover:bg-green-500"
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
                            className="hover:cursor-pointer bg-green-500 text-white hover:bg-green-500"
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

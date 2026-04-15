import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useCartStore } from '@/stores/useCartStore';
import type { Toy } from '@/types';

export default function Catalog({ products = [] }: { products: Toy[] }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <section className="text-black">
            <OverlayScrollbarsComponent>
                <div className="grid grid-cols-4">
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
                                className="h-12 w-auto cursor-pointer rounded-3xl bg-[#A5C926] px-10 text-white"
                            >
                                ${product.price}
                            </Button>
                        </Card>
                    ))}
                </div>
            </OverlayScrollbarsComponent>
        </section>
    );
}

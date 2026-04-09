import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React from 'react';
import { Card, CardTitle } from '@/components/ui/card';
import type { Toy } from '@/types';
import { Button } from '@headlessui/react';

export default function WoodenToys({ products = [] }: { products: Toy[] }) {
    return (
        <section className="container bg-[#F8F8F8] text-black">
            <h1 className="ml-[12.5%] pt-10 text-3xl">Wooden Toys</h1>

            <OverlayScrollbarsComponent
                element="div"
                options={{
                    scrollbars: {
                        autoHide: 'never',
                        clickScroll: true,

                    },
                }}
                className=" wooden-scrollbars flex space-x-8 overflow-x-auto my-4 sm:ml-[10%] lg:ml-[12%]"

            >
                <div className="flex space-x-8 pb-8">
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
                            <CardTitle className=" text-center">
                                {product.name}
                            </CardTitle>
                            <Button className="h-12 w-auto px-10 rounded-3xl bg-[#A5C926] text-white  ">
                              ${product.price}
                            </Button>
                        </Card>
                    ))}
                </div>
            </OverlayScrollbarsComponent>
        </section>
    );
}

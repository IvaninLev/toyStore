import { Button } from '@headlessui/react';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Card, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useInfiniteToys } from '@/hooks/use-infinite-toys';
import { useCartStore } from '@/stores/useCartStore';

type Props = {
    title: string;
    endpoint: string;
    sectionClassName?: string;
    skeletonInnerClassName?: string;
};

export default function ToysScroller({
    title,
    endpoint,
    sectionClassName,
    skeletonInnerClassName,
}: Props) {
    const addToCart = useCartStore((state) => state.addToCart);

    const { items, list, sentinelRef } = useInfiniteToys(endpoint);

    return (
        <section
            className={`container bg-[#F8F8F8] text-black ${sectionClassName ?? ''}`}
        >
            <h1 className="ml-[12.5%] pt-10 text-3xl">{title}</h1>

            <OverlayScrollbarsComponent
                element="div"
                options={{
                    scrollbars: {
                        autoHide: 'never',

                        clickScroll: true,
                    },
                }}
                className="wooden-scrollbars my-4 flex space-x-8 overflow-x-auto sm:ml-[10%] lg:ml-[12%]"
            >
                <div className="flex space-x-8 pb-8">
                    {items.map((product) => (
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

                    {list.isLoading && (
                        <>
                            {[...Array(3)].map((_, i) => (
                                <Card
                                    key={`${title}-skeleton-${i}`}
                                    className="mt-16 mb-12 h-82 w-67.5 flex-none animate-pulse border-0 bg-white shadow-sm"
                                >
                                    <div
                                        className={`flex flex-col items-center space-y-4 ${skeletonInnerClassName ?? ''}`}
                                    >
                                        <Skeleton className="h-46 w-46 rounded-xl bg-gray-200" />

                                        <Skeleton className="h-6 w-3/4 bg-gray-200" />

                                        <Skeleton className="h-10 w-32 rounded-3xl bg-gray-200" />
                                    </div>
                                </Card>
                            ))}
                        </>
                    )}

                    <div
                        ref={sentinelRef}
                        className="flex w-20 flex-none items-center justify-center"
                    ></div>
                </div>
            </OverlayScrollbarsComponent>
        </section>
    );
}

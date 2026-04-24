import type { Toy } from '@/types';
import Catalog from './Catalog';

interface PaginatedProducts {
    data: Toy[];
    current_page: number;
    last_page: number;
}

export default function Index({
    products,
    maxPriceInDb,
    filters,
}: {
    products: PaginatedProducts;
    maxPriceInDb: number;
    filters: object;
}) {
    return (
        <>
            <main>
                <Catalog
                    products={products.data}
                    lastPage={products.last_page}
                    currentPage={products.current_page}
                    maxPriceInDb={maxPriceInDb}
                    filters={filters}
                />
            </main>
        </>
    );
}

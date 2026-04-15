import type { Toy } from '@/types';
import Catalog from './Catalog';

interface paginatedProducts {
    data: Toy[];
    current_page: number;
    lase_page: number;
}

export default function Index({ products }: { products: paginatedProducts }) {
    return (
        <>
            <main>
                <Catalog products={products.data} />
            </main>
        </>
    );
}

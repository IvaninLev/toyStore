import type { Toy } from '@/types';
import HomeHeader from './HomeHeader';
import Stuffed from './StuffedToys';
import ToyTypePicker from './ToyTypePicker';
import Wooden from './WoodenToys';

type ToysPageProps = {
    stuffedToys?: {
        data?: Toy[];
    };
    woodenToys?: {
        data?: Toy[];
    };
};

export default function Index({ stuffedToys, woodenToys }: ToysPageProps) {
    return (
        <>
            <main>
                <HomeHeader />
                <ToyTypePicker />
                <Stuffed products={stuffedToys?.data ?? []} />
                <Wooden products={woodenToys?.data ?? []} />
            </main>
        </>
    );
}

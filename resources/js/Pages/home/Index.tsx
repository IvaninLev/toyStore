import HomeHeader from './HomeHeader';
import Stuffed from './StuffedToys';
import ToyTypePicker from './ToyTypePicker';
import Wooden from './WoodenToys';

export default function Index() {
    return (
        <>
            <main>
                <HomeHeader />
                <ToyTypePicker />
                <Stuffed />
                <Wooden />
            </main>
        </>
    );
}

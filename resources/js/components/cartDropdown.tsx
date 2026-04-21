import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCartStore } from '@/stores/useCartStore';

export   function CartDropdown() {
    const { cart, removeFromCart, getTotalPrice, clearCart } = useCartStore();
    const handleCheckOut = async () => {
        try {
            const { data } = await axios.post('/checkout', { cart });

            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error('ошибка при переходе к оплате', error);
        }
    };

    return (
        <Card className="absolute top-full right-0 z-50 mt-2 mr-10 w-64 bg-white p-4 text-black shadow-xl">
            <h3 className="mb-2 border-b pb-2 font-bold">Your Cart</h3>
            {cart.length === 0 ? (
                <div>Empty</div>
            ) : (
                <>
                    <div>
                        {cart.map((item) => (
                            <div key={item.id} className="space-y-2 py-3 pt-1">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="my-3 mt-0 h-12 w-12 rounded-lg bg-gray-50 object-cover"
                                />
                                {item.name} - x{item.quantity}
                                <Button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-400 transition hover:text-red-500"
                                >
                                    Delete
                                </Button>
                            </div>
                        ))}
                        <h1> sum {getTotalPrice()}$</h1>
                        <Button
                            className="flex-1 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200"
                            onClick={clearCart}
                        >
                            Clear
                        </Button>
                        <Button
                            className="ml-10 flex-1 rounded-xl bg-green-500 py-3 text-white hover:bg-green-500"
                            onClick={handleCheckOut}
                        >
                            Pay
                        </Button>
                    </div>
                </>
            )}
        </Card>
    );
}

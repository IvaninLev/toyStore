import axios from 'axios';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCartStore } from '@/stores/useCartStore';

export function CartDropdown() {
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
        <Card className="absolute top-full right-0 z-50 mt-2 mr-10 flex max-h-105 flex-col bg-white pt-3 text-black shadow-xl">
            <h3 className="border-b pb-2 font-bold">Your Cart</h3>
            {cart.length === 0 ? (
                <div className="flex  justify-center">
                    <span> Empty</span>
                </div>
            ) : (
                <>
                    <OverlayScrollbarsComponent
                        element="div"
                        className="wooden-scrollbars flex-1"
                        options={{ scrollbars: { autoHide: 'scroll' } }}
                    >
                        <div className="px-5">
                            {' '}
                            {/* Внутренний отступ для списка */}
                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-3 border-b border-gray-100 py-3 last:border-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-12 w-12 rounded-lg bg-gray-50 object-cover"
                                    />
                                    <div className="flex-1 text-sm font-medium">
                                        {item.name}{' '}
                                        <span className="ml-1 text-xs text-gray-400">
                                            x{item.quantity}
                                        </span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        onClick={() => removeFromCart(item.id)}
                                        className="h-8 w-8 p-0 text-gray-400 transition hover:text-red-500"
                                    >
                                        x
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </OverlayScrollbarsComponent>
                    <div className="bg-gray-50 p-4">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="text-gray-600">Total:</span>
                            <span className="font-sans text-lg font-bold">
                                ${getTotalPrice()}
                            </span>
                        </div>

                        <div className="flex gap-2">
                            <Button
                                className="flex-1 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                                onClick={clearCart}
                            >
                                Clear
                            </Button>
                            <Button
                                className="flex-2 rounded-xl bg-[#A5C926] text-white hover:bg-[#94b522]"
                                onClick={handleCheckOut}
                            >
                                Pay
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </Card>
    );
}

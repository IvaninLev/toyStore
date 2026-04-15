import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useCartStore } from '@/stores/useCartStore';

export function AppHeader() {
    const [cartOpen, setCartOpen] = useState(false);
    const { cart, removeFromCart, getTotalPrice, clearCart } = useCartStore();
    const totalItems = cart.reduce((total, items) => total + items.quantity, 0);

    const handleRickRoll = () =>{
        console.log('rickrolled!')
    }

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
        <header className="relative">
            <div className="bg-green-500 text-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-1 text-center lg:flex-row lg:gap-6 lg:text-left">
                        <span>Call us: +1 213 974 5869</span>
                        <span>Email: toystore@template.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-3 lg:justify-end">
                        <Icon icon="mdi:twitter" width={20} height={20} />
                        <Icon icon="mdi:facebook" width={20} height={20} />
                        <Icon icon="mdi:pinterest" width={20} height={20} />
                        <a
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"
                            target="_blank"
                            rel="noreferrer"
                            title="secret"
                        >
                            <Icon
                                className="cursor-pointer transition-colors hover:text-red-200"
                                onClick={handleRickRoll}
                                icon="mdi:youtube"
                                width={20}
                                height={20}
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-b bg-white text-black">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
                        <div>
                            <Link href="/" className="text-center text-2xl lg:text-left">
                                Toy Store
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                            <Link href="/catalog" className="text-base sm:text-lg">
                                Catalog
                            </Link>
                            <Link href="#" className="text-base sm:text-lg">
                                Contacts
                            </Link>
                            <Link href="#" className="text-base sm:text-lg">
                                Delivery
                            </Link>
                            <Link href="#" className="text-base sm:text-lg">
                                About
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 lg:justify-end">
                        <span>Cart</span>
                        <Icon
                            onClick={() => setCartOpen(!cartOpen)}
                            className="cursor-pointer"
                            icon="mdi:cart-outline"
                            width={20}
                            height={20}
                        ></Icon>
                        <span> {totalItems}</span>
                    </div>
                </div>
            </div>
            {cartOpen && (
                <Card className="absolute top-full right-0 z-50 mt-2 mr-10 w-64 bg-white p-4 text-black shadow-xl">
                    <h3 className="mb-2 border-b pb-2 font-bold">Your Cart</h3>
                    {cart.length === 0 ? (
                        <div>Empty</div>
                    ) : (
                        <>
                            <div>
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="space-y-2 py-3 pt-1"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="my-3 mt-0 h-12 w-12 rounded-lg bg-gray-50 object-cover"
                                        />
                                        {item.name} - x{item.quantity}
                                        <Button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
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
            )}
        </header>
    );
}

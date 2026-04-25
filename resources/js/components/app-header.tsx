import { Icon } from '@iconify/react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { CartDropdown } from '@/components/cartDropdown';
import { useCartStore } from '@/stores/useCartStore';
export function AppHeader() {
    const [cartOpen, setCartOpen] = useState(false);
    const { cart } = useCartStore();
    const totalItems = cart.reduce((total, items) => total + items.quantity, 0);

    return (
        <header className="sticky top-0 z-50 w-full mx-auto">
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
                        <div className="">
                            <Link
                                href="/"
                                className="block text-center text-2xl md:text-center lg:text-left"
                            >
                                Toy Store
                            </Link>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                            <Link
                                href="/catalog"
                                className="text-base sm:text-lg"
                            >
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
            {cartOpen && <CartDropdown />}
        </header>
    );
}

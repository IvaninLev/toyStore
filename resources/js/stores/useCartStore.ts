import { persist } from 'zustand/middleware';
import { create } from 'zustand/react';
import type { CartItem, Toy } from '@/types';

interface CartState {
    cart: CartItem[];
    addToCart: (product: Toy) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
}
export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (product: Toy) => {
                const cart = get().cart;
                const cartItem = cart.find((item) => item.id === product.id);

                if (cartItem) {
                    const updatedCart = cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item,
                    );
                    set({ cart: updatedCart });
                } else {
                    set({
                        cart: [...cart, { ...product, quantity: 1 }],
                    });
                }
            },
            removeFromCart: (productId: number) => {
                const currentCart = get().cart;

                const updatedCart = currentCart
                    .map((item) =>
                        item.id === productId
                            ? { ...item, quantity: item.quantity - 1 }
                            : item,
                    )
                    .filter((item) => item.quantity > 0);
                set({ cart: updatedCart });
            },
            clearCart: () => set({ cart: [] }),
            getTotalPrice: () => {
                return get().cart.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                );
            },
        }),
        {
            name: 'cart-storage',
        },
    ),
);

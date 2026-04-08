import { Icon } from '@iconify/react';
import type { BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

export function AppHeader({}: Props) {
    return (
        <header>
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
                        <Icon icon="mdi:youtube" width={20} height={20} />
                    </div>
                </div>
            </div>

            <div className="border-b bg-white text-black">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
                        <div>
                            <h1 className="text-center text-2xl lg:text-left">
                                Toy Store
                            </h1>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                            <Link href="#" className="text-base sm:text-lg">
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
                            icon="mdi:cart-outline"
                            width={20}
                            height={20}
                        ></Icon>
                    </div>
                </div>
            </div>
        </header>
    );
}

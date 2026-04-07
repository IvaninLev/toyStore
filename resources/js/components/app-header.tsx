import { Icon } from '@iconify/react';
import type { BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
type Props = {
    breadcrumbs?: BreadcrumbItem[];
};

export function AppHeader({ breadcrumbs = [] }: Props) {
    return (
        <header className="">
            <div className="flex h-10 items-center justify-around bg-green-500 pr-[170px]">
                <div className="space-x-6">
                    <span>call us: +1 213 974 5869</span>
                    <span>Email:toystore@template.com</span>
                </div>
                <div className="flex space-x-3 text-white pl-[460px]">
                    <Icon icon="mdi:twitter" width={20} height={20} />
                    <Icon icon="mdi:facebook" width={20} height={20} />
                    <Icon icon="mdi:pinterest" width={20} height={20} />
                    <Icon icon="mdi:youtube" width={20} height={20} />
                </div>
            </div>
            <div className="flex h-17 items-center justify-around bg-white pr-[90px] text-black">
                <div className="flex">
                    <div className="pr-16">
                        <h1 className="text-2xl"> Toy Store</h1>
                    </div>
                    <div className="space-x-6 pt-1  pr-20">
                        <Link href="#" className="text-xl">
                            Catalog
                        </Link>
                        <Link href="#" className="text-xl">
                            Contacts
                        </Link>
                        <Link href="#" className="text-xl">
                            Delivery
                        </Link>
                        <Link href="#" className="text-xl">
                            About
                        </Link>
                    </div>
                </div>
                <div className="flex">
                    <span>Cart</span>
                    <Icon icon="mdi:cart-outline" width={20} height={20}></Icon>
                </div>
            </div>
        </header>
    );
}

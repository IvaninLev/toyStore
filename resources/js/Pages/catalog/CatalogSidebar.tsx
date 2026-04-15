import { Link } from '@inertiajs/react';

export default function CatalogSidebar() {
    return (
        <aside className="w-72 flex-none border-r bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">Filters</h2>

            <nav className="space-y-6">
                <div>
                    <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                        Categories
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/catalog"
                                className="transition-colors hover:text-[#A5C926]"
                            >
                                All toys
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/catalog?category=wooden"
                                className="transition-colors hover:text-[#A5C926]"
                            >
                                Wooden toys
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/catalog?category=stuffed"
                                className="transition-colors hover:text-[#A5C926]"
                            >
                                Stuffed toys
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}

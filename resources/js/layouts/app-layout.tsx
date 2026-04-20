import { Theme } from '@radix-ui/themes';
import { Toaster } from 'sonner';
import AppLayoutTemplate from '@/layouts/app/app-header-layout';
import type { BreadcrumbItem } from '@/types';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <Theme>
            <AppLayoutTemplate breadcrumbs={breadcrumbs}>
                <Toaster />
                {children}
            </AppLayoutTemplate>
        </Theme>
    );
}

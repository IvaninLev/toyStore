import ToysScroller from '@/Pages/home/ToysScroller';

export default function WoodenToys() {
    return (
        <ToysScroller
            title="Wooden Toys"
            endpoint="/api/toys/wooden"
            sectionClassName="pb-3"
            skeletonInnerClassName="p-6"
        />
    );
}

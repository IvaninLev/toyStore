import ToysScroller from './ToysScroller';

export default function StuffedToys() {
    return (
        <ToysScroller
            title="Stuffed Toys"
            endpoint="/api/toys/stuffed"
            sectionClassName="pb-3"
            skeletonInnerClassName="p-6"
        />
    );
}

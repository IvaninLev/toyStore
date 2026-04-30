import axios from 'axios';
import { useEffect, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAsyncList } from 'react-stately';
import type { Toy } from '@/types';

export function  useInfiniteToys(endpoint: string) {
    const isLoadingRef = useRef(false);

    const list = useAsyncList<Toy>({
        async load({ cursor }) {
            const url = cursor || endpoint;
            const res = await axios.get(url);

            return {
                items: res.data.data,
                cursor: res.data.next_page_url,
            };
        },
    });

    const items = useMemo(() => {
        return Array.from(
            new Map(list.items.map((item) => [item.id, item])).values(),
        );
    }, [list.items]);

    const { ref: sentinelRef, inView } = useInView({
        threshold: 0.1,
        rootMargin: '200px',
    });

    useEffect(() => {
        if (inView && !list.isLoading && list.items.length > 0) {
            if (isLoadingRef.current) {
                return;
            }

            isLoadingRef.current = true;
            list.loadMore();
        }
    }, [inView, list, list.isLoading, list.items.length]);

    useEffect(() => {
        if (!list.isLoading) {
            isLoadingRef.current = false;
        }
    }, [list.isLoading]);

    return { items, list, sentinelRef };
}

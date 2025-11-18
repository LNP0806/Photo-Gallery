import { useState, useEffect, useCallback } from "react";


const API_LIST = (page, limit = 20) => `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;


export default function useInfinitePhotos(limit = 20) {
const [photos, setPhotos] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [hasMore, setHasMore] = useState(true);


const fetchPage = useCallback(async (p) => {
setLoading(true);
try {
const res = await fetch(API_LIST(p, limit));
const data = await res.json();
if (data.length === 0) setHasMore(false);
setPhotos(prev => [...prev, ...data]);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
}, [limit]);


useEffect(() => {
fetchPage(page);
}, []);


const loadMore = () => {
if (!loading && hasMore) {
setPage(prev => prev + 1);
fetchPage(page + 1);
}
};


return { photos, loading, error, loadMore, hasMore };
}
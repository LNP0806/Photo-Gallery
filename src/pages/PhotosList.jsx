import { useEffect, useRef } from "react";
import useInfinitePhotos from "../hooks/useInfinitePhotos.js";
import PhotoCard from "../components/photoCard.jsx";
import "../output.css"


export default function PhotosList() {
const { photos, loading, error, loadMore, hasMore } = useInfinitePhotos();
const sentinel = useRef();


useEffect(() => {
const observer = new IntersectionObserver(entries => {
if (entries[0].isIntersecting) loadMore();
});
if (sentinel.current) observer.observe(sentinel.current);
return () => observer.disconnect();
}, [loadMore]);


return (
<div className="p-4 bg-gray-50 min-h-screen">
<header className="fixed top-0 left-0 w-full bg-white shadow px-4 py-3 z-50">
  <h1 className="text-2xl font-bold">Danh sách ảnh Picsum</h1>
</header>


{error && <p className="text-red-600">Lỗi: {error}</p>}


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
{photos.map(p => <PhotoCard photo={p} key={p.id} />)}
</div>


<div ref={sentinel} className="flex justify-center mt-4">
{loading && <p>Đang tải thêm...</p>}
{!hasMore && <p>Hết dữ liệu.</p>}
</div>
</div>
);
}
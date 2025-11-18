import { Link } from "react-router-dom";


export default function PhotoCard({ photo }) {
const thumb = `https://picsum.photos/id/${photo.id}/400/300`;


return (
<Link
to={`/photos/${photo.id}`}
className="block rounded overflow-hidden shadow bg-white hover:shadow-lg"
>
<img src={thumb} className="w-full h-48 object-cover" />
<div className="p-2">
<p className="font-medium">{photo.author}</p>
<p className="text-xs text-gray-500">ID: {photo.id}</p>
</div>
</Link>
);
}
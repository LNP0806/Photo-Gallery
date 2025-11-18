import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../output.css";


const API_INFO = id => `https://picsum.photos/id/${id}/info`;


export default function PhotoDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(API_INFO(id))
    .then(res => res.json())
    .then(data => setPhoto(data))
    .finally(() => setLoading(false));
  }, [id]);


  return (
    <div className="p-4 bg-gray-50 min-h-screen">

    {loading ? <p>Đang tải...</p> : (
      <div className="bg-white p-4 shadow rounded max-w-[80vw] mx-auto">
        <img
          src={photo.download_url}
          className="w-full h-auto object-contain rounded"
          alt={`Photo by ${photo.author}`}
        />
        <button
          onClick={() => window.open(photo.download_url, "_blank")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Full-size
        </button>
        <h3 className="text-gray-600 mt-4">ID ảnh: {photo.id}</h3>
        <h3 className="text-xl font-medium mt-4">Tiêu đề: Ảnh của {photo.author}</h3>
        <h3 className="text-xl font-medium mt-4">Tác giả: {photo.author}</h3>
        <h3 className="text-xl font-medium mt-4">Mô tả: {photo.url}</h3>
      </div>
    )}
    </div>
  );
}
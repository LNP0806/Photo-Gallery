import { Routes, Route } from "react-router-dom";
import PhotosList from "./pages/PhotosList.jsx";
import PhotoDetail from "./pages/PhotoDetail.jsx";


export default function App() {
return (
<Routes>
<Route path="/" element={<PhotosList />} />
<Route path="/photos" element={<PhotosList />} />
<Route path="/photos/:id" element={<PhotoDetail />} />
</Routes>
);
}
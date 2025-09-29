import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Home</h1>
      <Link to="/about" className="block mt-4 text-blue-600 underline">
        ke About
      </Link>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Abot</h1>
      <Link to="/" className="block mt-4 text-blue-600 underline">
        Back to Home
      </Link>
    </div>
  );
}

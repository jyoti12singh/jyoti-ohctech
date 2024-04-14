import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404 Not Found</h1>
                <p className="text-lg text-gray-700 mb-4">The page you are looking for doesn't exist.</p>
                <Link to="/" className="text-blue-500 hover:text-blue-700">Go to Home</Link>
            </div>
        </div>
    );
}

export default ErrorPage;

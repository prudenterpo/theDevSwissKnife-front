export default function NotFound() {
  return (
    <div className="text-center mt-24">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
      <a href="/" className="inline-block mt-6 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
        Go Home
      </a>
    </div>
  );
}
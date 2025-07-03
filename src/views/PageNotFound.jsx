export default function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a className="border px-4 py-2 rounded mt-1" href="/">Go to Home</a>
        </div>
    )
}
export default function Link({path, name}: {path:string, name:string}) {
    return (
        <a className="hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1.5" href={path}>
            {name}
        </a>
    )
}
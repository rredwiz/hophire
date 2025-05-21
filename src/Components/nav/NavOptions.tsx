export default function NavOptions() {
    return (
        <div className="flex justify-around items-center gap-8">
            <button className="hover:bg-gray-300 text-sm p-2 rounded-md cursor-pointer font-poppins">Home</button>
            <button className="hover:bg-gray-300 text-sm p-2 rounded-md cursor-pointer font-poppins">Search</button>
            <button className="hover:bg-gray-300 text-sm p-2 rounded-md cursor-pointer font-poppins">Dashboard</button>
        </div>
    )
}
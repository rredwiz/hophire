export default function NavOptions() {
    return (
		<div className="flex justify-center gap-4 items-center w-[33%]">
			<button className="hover:bg-gray-300 text-sm p-2 rounded-md cursor-pointer font-poppins">
				Home
			</button>
			<button className="hover:bg-gray-300 text-sm p-2 rounded-md cursor-pointer font-poppins">
				Search
			</button>
			<button className="hover:bg-gray-300 text-sm p-2 rounded-md cursor-pointer font-poppins">
				Dashboard
			</button>
		</div>
	);
}
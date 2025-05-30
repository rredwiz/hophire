import logo from "../../assets/images/hophire-logo-gray-thick.png";

export default function NavTitle() {
    return (
		<div className="flex justify-start items-center gap-3 ml-5 cursor-default w-[33%]">
			<img src={logo} className="w-15" />
			<h1 className="text-2xl font-geist text-gray-500">hophire</h1>
		</div>
	);
}
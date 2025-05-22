import NavOptions from "./NavOptions";
import NavTitle from "./NavTitle";
import LoginButton from "./LoginButton";

export default function Nav() {
	return (
		<div className="flex w-full shadow-sm h-15">
			<NavTitle />
			<NavOptions />
			<LoginButton />
		</div>
	);
}

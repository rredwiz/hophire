import NavOptions from "./NavOptions";
import NavTitle from "./NavTitle";
import LoginButton from "./LoginButton";

export default function Nav() {
    return (
        <div className="flex justify-between w-full shadow-md h-15">
          <NavTitle />
          <NavOptions />
          <LoginButton />
        </div>
    );
}

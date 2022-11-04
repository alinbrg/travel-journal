import logo from "../img/logo.svg";

export default function Header() {
	return (
		<header>
			<img src={logo} alt="logo" />
			<span>my travel journal.</span>
		</header>
	);
}

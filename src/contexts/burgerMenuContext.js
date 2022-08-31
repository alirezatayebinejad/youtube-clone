import { useState, createContext } from "react";

const burgerMenuContext = createContext();

export function BurgerMenueProvider({ children }) {
	const [burgerOpen, seBurgerOpen] = useState(true);
	const changeBurgerStatus = async () => {
		if (burgerOpen === false) seBurgerOpen(true);
		else if (burgerOpen === true) seBurgerOpen(false);
	};

	return <burgerMenuContext.Provider value={{ burgerOpen, changeBurgerStatus }}>{children}</burgerMenuContext.Provider>;
}

export default burgerMenuContext;

import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../ components/cart-icon/cart-icon.component";
import CartDropDown from "../../ components/cart-dropdown/cart-dropdown.component";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleShoppingCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <CartIcon shoppingCartToggleHandler={toggleShoppingCartOpen} />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;

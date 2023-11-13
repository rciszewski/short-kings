import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../ components/cart-icon/cart-icon.component";
import CartDropDown from "../../ components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const toggleShoppingCartOpen = () => {
    setIsShoppingCartOpen(!isShoppingCartOpen);
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN IN
            </Link>
          )}
          <CartIcon shoppingCartToggleHandler={toggleShoppingCartOpen} />
        </div>
        {isShoppingCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;

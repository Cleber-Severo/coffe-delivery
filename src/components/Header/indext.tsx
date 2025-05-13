import { CartBadge, HeaderActions, HeaderContainer, Location, Wrapper } from "./styles";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import { MapPin, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const { cartItemsAmount } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper $scrolled={scrolled}>
      <HeaderContainer $scrolled={scrolled}>
        <Link to="/">
          <img src={Logo} alt="main logo" />
        </Link>
        <HeaderActions>
          <Location>
            <MapPin size={28} weight="fill" color={defaultTheme.purple} />
            <span>Porto Alegre, RS</span>
          </Location>
          <CartBadge>
            <Link to="/checkout">
              <ShoppingCart size={28} weight="fill" color={defaultTheme["yellow-dark"]} />
              <span>{cartItemsAmount}</span>
            </Link>
          </CartBadge>
        </HeaderActions>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;

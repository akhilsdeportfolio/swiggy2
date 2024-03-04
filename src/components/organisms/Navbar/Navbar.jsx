import propTypes from "prop-types";
import Logo from "../../atoms/Logo/Logo";
import TkCard from "../../molecules/TkCard/TkCard";
import MenuList from "../../molecules/MenuList/MenuList";
import "./index.css";

export default function Navbar({ items }) {
  return (
    <>
      <TkCard>
        <div className="mx-64 flex">
          <Logo />
          <MenuList items={items} />
        </div>
        <></>
      </TkCard>
    </>
  );
}

Navbar.propTypes = {
  items: propTypes.arrayOf(propTypes.object),
};

Navbar.defaultProps = {
  items: [],
};

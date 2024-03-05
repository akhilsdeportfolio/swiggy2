import propTypes from "prop-types";

export function TkCard({ children }) {
  return <div className="shadow-lg p-4">{children}</div>;
}

TkCard.propTypes = {
  children: propTypes.array,
};

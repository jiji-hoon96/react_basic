import propTypes from "prop-types";

const Card = ({ title, children, onClick }) => {
  return (
    <div className="card mb-3 cursor-pointer" onClick={onClick}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div>{title}</div>
          {children && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: propTypes.string,
  children: propTypes.element,
  onClick: propTypes.func,
};

Card.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Card;

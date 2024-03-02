import PropTypes from 'prop-types';





const Input = ({ type, placeholder, className }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className={className} />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Input;

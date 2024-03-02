import PropTypes from 'prop-types';

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };



const Input = ({ type, placeholder, className }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className={className} />
    </>
  );
};

export default Input;

import React from "react";
import PropTypes from "prop-types";

const Child = ({ message }) => {
  return <p>Child says: {message}</p>;
};

Child.propTypes = {
  message: PropTypes.string.isRequired
};

export default Child;

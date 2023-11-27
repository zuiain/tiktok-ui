//import React from 'react';
import './GlobalStyles.module.scss';
import PropTypes from 'prop-types';

function GlobalStyles({ children }) {
    // chi nhan dc 1 con
    // return React.Children.only(children);
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;

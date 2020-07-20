import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {

    return (
        <a style={{ cursor: 'pointer' }} role="button" onClick={() => props.handlePageChange(props.flag, props.toggle)}>{props.label}</a>
    );
}

Button.propTypes = {
    flag: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),
    label: PropTypes.object,
    handlePageChange: PropTypes.func,
    toggle: PropTypes.bool
}

export default Button;
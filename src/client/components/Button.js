import React from 'react';
import PropTypes from 'prop-types';

/**
 * @Component: it returns all clickable atoms  
 * @param {string} flag - for page change request it tells if it is next page or previous page request
 * @param {string} toggle - boolean which tells if it hide button request
 * @param {string} label - it gives button name
*/
function Button(props) {

    return (
        <a style={{ cursor: 'pointer' }} href="javascript:;" role="button" onClick={() => props.handlePageChange(props.flag, props.toggle)}>{props.label}</a>
    );
}

Button.propTypes = {
    flag: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    handlePageChange: PropTypes.func,
    toggle: PropTypes.bool
}

export default Button;
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @Component: it returns all informative and heading atoms  
 * @param {string} grid - gives grid width from 1 to 12
 * @param {string} label - gives display name of this conponent
*/
function Header(props){
    return (
        <div className={`col s${props.grid} m${props.grid} l${props.grid} xl${props.grid}`}>
            <h7>{props.label}</h7>
        </div>
    )
}

Header.propTypes = {
    grid: PropTypes.string,
    label: PropTypes.string
}

export default Header;
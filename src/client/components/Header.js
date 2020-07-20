import React from 'react';
import PropTypes from 'prop-types';

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
import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import Header from './Header';
import Button from './Button';

/**
 * @Component: it returns data present in a row  
 * @param {boolean} isHeading - determines if it is a heading row or data row
*/

function Rows(props) {

    if(props.isHeading){
        return (
            <React.Fragment>
                {props.data.map((elem, index) => {
                    return (
                        <Header key={index} grid={elem.grid} label={elem.label} />
                    )
                })}
            </React.Fragment>
        )
    }

    return (
        <div className="row" style={props.index % 2 === 0 ? { marginBottom: '0px' } : { marginBottom: '0px', backgroundColor: '#cccccc' }}>
            <Header grid="1" label={props.elem.num_comments} />
            <Header grid="1" label={props.elem.points} />
            <Header grid="1" label={<Button handlePageChange={props.handleUpVote} label="&#x25B2;" flag={props.elem} />} />
            <Header grid="9" label={<React.Fragment><strong>{props.elem.title}</strong> {`(${props.elem.url}) by `} <strong>{props.elem.author}</strong> {`${moment(props.elem.created_at).fromNow()} | `} <Button handlePageChange={props.hideData} label="[ Hide ]" flag={props.elem} toggle={true} /></React.Fragment>} />
        </div>
    );
}

Rows.propTypes = {
    index: PropTypes.number,
    elem: PropTypes.object,
    handleUpVote: PropTypes.func,
    hideData: PropTypes.func,
    isHeading: PropTypes.bool,
    data: PropTypes.array
}

export default Rows;
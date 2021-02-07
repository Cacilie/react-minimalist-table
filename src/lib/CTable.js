import React from 'react'
import './CTable.css'
import PropTypes from 'prop-types';
import CTableHeader from './CTableHeader';
import CTableRow from './CTableRow';

export default function CTable(props) {
    return (
        <table className="cTable">
            <caption>{props.caption}</caption>
            <CTableHeader {...props} />
            <tbody>
                <CTableRow {...props} />
            </tbody>
        </table>
    )
}

CTable.propTypes = {
    caption: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    headerColor: PropTypes.string,
    headerTextColor: PropTypes.string,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    cellTextColor: PropTypes.string,
    conditionalCellStyle: PropTypes.arrayOf(PropTypes.exact({
        columns: PropTypes.arrayOf(PropTypes.string).isRequired,
        styleTrue: PropTypes.object.isRequired,
        styleFalse: PropTypes.object.isRequired,
        validation: PropTypes.func.isRequired,
        defaultStyle: PropTypes.object.isRequired,
    }))
}
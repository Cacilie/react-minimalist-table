import React from 'react'
import './CTable.css'
import PropTypes from 'prop-types';

function CTableHeader(props){
    const HEADERS = Object.keys(props.data[0]);

    return (
        <thead style={{backgroundColor: props.headerColor }}>
            <tr style={{color: props.headerTextColor}}>
                {HEADERS.map( (h, i) => {
                    return <th key={i} scope="col">{h}</th>

                })}
            </tr>
        </thead>
    )
}

function CTableRow({data}){
    const HEADERS = Object.keys(data[0]);

    return data.map( (r , i) =>  {
        return (
            <tr key={i}>
                {HEADERS.map( (h, j) => {
                    return <td key={j} data-label={h}>{data[i][h]}</td>
                })}
            </tr>
        )
    })
}

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
    headerTextColor: PropTypes.string
}
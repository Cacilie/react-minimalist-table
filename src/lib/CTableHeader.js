import React from 'react'

export default function CTableHeader(props) {
    const HEADERS = props.data[0] ? Object.keys(props.data[0]) : [];

    const theadStyles = {
        backgroundColor: props.headerColor || "#f8f9f5",
    }

    const trStyle = {
        color: props.headerTextColor,
    }

    return (
        <thead style={theadStyles}>
            <tr style={trStyle}>
                {HEADERS.map((h, i) => {
                    return <th key={i} scope="col">{h}</th>

                })}
            </tr>
        </thead>
    )
}

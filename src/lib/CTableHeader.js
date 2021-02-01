import React from 'react'

export default function CTableHeader(props) {
    const HEADERS = props.data[0] ? Object.keys(props.data[0]): [];

    return (
        <thead style={{backgroundColor: props.headerColor || "#f8f9f5" }}>
            <tr style={{color: props.headerTextColor}}>
                {HEADERS.map( (h, i) => {
                    return <th key={i} scope="col">{h}</th>

                })}
            </tr>
        </thead>
    )
}

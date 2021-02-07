import React from 'react'

export default function CTableRow({data, primaryColor, secondaryColor, conditionalCellStyle}) {
    const HEADERS = data[0] ? Object.keys(data[0]): [];
    

    return data.map( (r , i) =>  {
        return (
            <tr key={i} style={{backgroundColor: i % 2 === 0 ? primaryColor || "#fffafa" : secondaryColor || "#fff"}}>
                <Cell data={data} HEADERS={HEADERS}  i={i} conditionalCellStyle={conditionalCellStyle}/>
            </tr>
        )
    })
}


function Cell({HEADERS, data, i, conditionalCellStyle, cellTextColor}){


    

    return HEADERS.map( (h, j) => {

        let cellStyle = {
            color: cellTextColor || 'black'
        }

        let condition = {}

        if(conditionalCellStyle && conditionalCellStyle.length > 0){
            for(const c of conditionalCellStyle){
                if(c.columns.includes(h)){
                    condition = c
                }
            }

            if(condition.validation && condition.validation(data[i][h])) cellStyle = condition.styleTrue
            else cellStyle = condition.styleFalse
        }

        return <td  style={cellStyle}  key={j} data-label={h}>{data[i][h]}</td>


    })
}

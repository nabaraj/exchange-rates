import React from 'react'

export default function TableHeader(props) {
    return (
        <tr style={ { fontSize: '15px' } }>
            <th>Base Currency</th>
            {props.headerData.map(item => <td key={item}>{item}</td>)}
        </tr>
    )
}

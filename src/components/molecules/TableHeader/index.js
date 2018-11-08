import React from 'react'

export default function TableHeader(props) {
    return (
        <tr>
            <th>Base Currency</th>
            {props.headerData.map(item => <td key={item}>{item}</td>)}
        </tr>
    )
}

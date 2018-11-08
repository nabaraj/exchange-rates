import React from 'react'

export default function TableRow(props) {
  return (
    <tr>
      <td style={ { fontSize: '15px' } }>{props.forCountry}</td>
      {props.exchData.map(item => <td key={item}>{item}</td>)}
    </tr>
  )
}

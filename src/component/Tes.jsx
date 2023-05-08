import React from 'react'

const Tes = (props) => {
  return (
    <div>
        {props.data.map((x) => {
            return <li key={x.nama}> {x.umur}</li>
        })}
    </div>
  )
}

export default Tes
import React from 'react'
import CheckBox from './CheckBox'

export default function Card() {
  return (
    <div className="card border-primary mb-3" style={{maxWidth: '20rem', margin:'1rem', padding:'1rem', textAlign: 'center'}}>
        <CheckBox/>
        <div className="card-header">CODE-NUMBER</div>
        <div className="card-body">
            <h4 className="card-title">Product Name</h4>
            <p className="card-text">$Price</p>
            <p className="card-text">Specific attribute</p>
        </div>
    </div>


    //   <div className="card mb-3" style={{margin:'1rem', padding:'1rem', textAlign: 'center'}}>
    //     <CheckBox/>
    //     <div className="card-body">
    //         <h5 className="card-title">Nombre</h5>
    //         <h6 className="card-subtitle text-muted">CODIGO</h6>
    //     </div>
    //         <ul className="list-group list-group-flush">
    //             <li className="list-group-item">$Precio</li>
    //             <li className="list-group-item">Atributo especifico</li>
    //         </ul>
    // </div>
  )
}

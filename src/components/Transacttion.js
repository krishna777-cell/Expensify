import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Transacttion = (props) => {

    const {Deleteitmes} = useContext(GlobalContext);

   
    return (
        <>
        <li className="minustran row" >
            <h6 className="col-md-6 justify-content-center my-2">{props.Transaction.text}</h6> <span className="col-md-4 justify-content-center my-2">{props.Transaction.Amount}</span> <button onClick={()=>Deleteitmes(props.Transaction.id)} className="btn btn-danger col-md-1 btn-sm" >X</button>
        </li>
        </>
    )
}

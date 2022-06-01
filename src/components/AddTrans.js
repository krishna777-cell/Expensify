import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';
export const AddTrans = () => {

    const {Additmes} = useContext(GlobalContext);


    const [text,settext] = useState('');
    const [amt,setAmt] = useState(0);

    const ONSubmit = e =>{
        e.preventDefault();

        const addedTrans={
            id:Math.floor(Math.random()*1000000000),
            text,
            Amount:+amt
        }

        Additmes(addedTrans);
    }

    return (
        <div className="text-center">
          <h4 className="mb-1">Add New Transaction</h4>
          <small  className="form-text text-muted mb-2">Enter Details 'For Deposit Use +ve Sign and For Withdrawl Use -ve Sign'</small>
          <hr/>
          <form onSubmit={ONSubmit}>
          <div class="row mb-2">
          <div class="col">
            <div className="form-group">
              <label htmlFor="text">Name Transation</label>
              <input type="text" className="form-control" value={text} onChange={(event)=>settext(event.target.value)} />
            </div>
            </div>
            <div class="col">
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input type="number" className="form-control" value={amt} onChange={(event)=>setAmt(event.target.value) } />
            </div>
            </div>
          </div>
          <div className="d-grid gap-5">            
            <button type="submit" class="btn btn-secondary">Add</button>
          </div>
          </form>
        </div>
    )
}

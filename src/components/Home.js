import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Balance } from './Balance'
import { Expenses } from './Expenses'
import { Transaction } from './Transaction'
import { AddTrans } from './AddTrans'
import { GlobalProvider } from '../context/GlobalState'

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 mt-3 mb-5 box text-center">
        Hello Welcome <br /> {user && user.email}
        <div className="d-grid gap-2">
          <Button class="btn btn-secondary" onClick={handleLogout}> Log out </Button>
        </div>
      </div>
      <hr/>
      <div class="row">
      <GlobalProvider>
  <div class="col">
    <div class="form-group zt">
    <Balance />
    <Expenses />
      {/* <!-- Existing form group markup --> */}
    </div>
  </div>
  <div class="col">
    <div class="form-group zt">
      {/* <!-- Existing form group markup --> */}
      <AddTrans />
    </div>
  </div>
  <div className="p-2 zt1 text-center">
          <Transaction />
      </div>
      </GlobalProvider>
</div>
    </>
  );
};

export default Home;


{/* <GlobalProvider>
      <div className="align-items-center">
      <div className="p-2 zt text-center">
          <Balance />
          <Expenses />
      </div>
      <div className="p-2 zt text-center">
          <AddTrans />
      </div>
      </div>
      <div className="p-2 zt1 text-center">
          <Transaction />
      </div>
      </GlobalProvider> */}
import React from 'react';
import {useRouter} from "next/router";

const Account = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>


      <div>
        <h1>Account</h1>
      </div>
    </>

  );
};

export default Account;
import React, { useEffect, useState } from "react";
import { accountDTO, initAccount } from "../../../types/account.dto";
import { apiGetAccount } from "../../../api/account.api";

const Navbar = () => {
  const [account, setAccount] = useState<accountDTO>(initAccount);

  useEffect(() => {
    apiGetAccount().then((value) => {
      if (value.errors === null) {
        setAccount(value.result);
      }
    });
  }, []);
  return (
    <div className="shadow-slate-300 shadow py-2 px-3">
      {account.first_name + " " + account.last_name}
    </div>
  );
};

export default Navbar;

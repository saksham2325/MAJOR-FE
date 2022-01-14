import React, { useEffect, useState } from "react";

import queryString from "query-string";
import { useHistory } from "react-router-dom";

import { INVITATION_PURPOSE } from "constants/constant";
import  Signup  from "containers/Signup/Signup";
import { urls } from "constants/urls";

const VerifySignupToken = (props) => {
  const [token, setToken] = useState("");
  const history = useHistory();
  useEffect(() => {
    const search = queryString.parse(props.location.search);
    if (!search.token) {
      history.push(urls.VERIFY_EMAIL);
    }
    setToken(search.token);
  });

  return (
    <div>
      {token.length !== 0 && (
        <Signup purpose={INVITATION_PURPOSE.SIGNUP} token={token} />
      )}
    </div>
  );
};

export default VerifySignupToken;

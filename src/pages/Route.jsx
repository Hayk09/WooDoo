import React from "react";
import { Route as ReactRout } from "react-router-dom";
// import { useUser } from "../hooks";

const Route = ({ path, exact, Layout, secure, component }) => {
  // const { user, loading } = useUser();
  // const history = useHistory();

  // if (!loading && !user && secure) {
  //   history.push("/");
  // }

  // if (loading) {
  //   return <>...loading</>;
  // }

  return (
    <Layout>
      <ReactRout path={path} component={component} exact={exact} />
    </Layout>
  );
};

export default Route;

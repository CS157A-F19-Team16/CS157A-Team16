import React, { Fragment } from "react";
import Form from "./Form";
import User from "./User";
import RoutesResults from "../search/RoutesResults";
import SearchRoutes from "../search/SearchRoutes";

export default function Dashboard() {
  return (
    <Fragment>
      <SearchRoutes />
      <RoutesResults />
      {/* <Form />
      <User /> */}
    </Fragment>
  );
}

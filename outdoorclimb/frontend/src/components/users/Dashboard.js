import React, { Fragment } from "react";
import Form from "./Form";
import User from "./User";
import SearchRoutes from "../search/SearchRoutes";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <User />
      <SearchRoutes />
    </Fragment>
  );
}

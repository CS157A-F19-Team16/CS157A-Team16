import React, { Fragment } from "react";
import { Comment } from "./Comment";
import { CommentInput } from "./CommentInput";

export default function Comments() {
  return (
    <Fragment>
      <CommentInput />
      <Comment />
    </Fragment>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_book } from "./BookAction";

export default function BookContainer() {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <div>BookContainer</div>
      <h2>Number of Books = {noOfBooks}</h2>
      <button
        onClick={() => {
          dispatch(purchase_book());
        }}
      >
        Buy Book
      </button>
    </div>
  );
}

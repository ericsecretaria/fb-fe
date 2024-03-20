import React from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { resetSuccessAction } from "../../redux/slices/globalSlice/globalSlice";

const SuccessMsg = ({ message }) => {
  const dispatch = useDispatch();
  Swal.fire({
    icon: "success",
    title: "Good job",
    text: message,
  });
  dispatch(resetSuccessAction());
};

export default SuccessMsg;

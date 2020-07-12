import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

function TableHeaderCustom(props) {
  let res = [];
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#d6fc8a",
      color: "black"
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);
  tableHead();
  function tableHead() {
    for (var a = 0; a < props.colHeaders.length; a++) {
      res.push(
        <StyledTableCell align="center">{props.colHeaders[a]}</StyledTableCell>
      );
    }

    return res;
  }

  return res;
}

export default TableHeaderCustom;

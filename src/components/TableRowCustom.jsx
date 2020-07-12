import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableColCustom from "./TableColCustom";
import TableRow from "@material-ui/core/TableRow";

function TableRowCustom(props) {
  let res = [];
  let cellValue1 = {};
  //Styling table rows
  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
      }
    }
  }))(TableRow);
  tableRow();
  /*  {val} :object of column values passed from tableColumn */
  /*  {newVal} :object of column values passed from {val} object and populated 
  it only if all the columns for the particular row is filled */
  /*  id : it contains the row index of the column got edited */
  /*{cellValue}: final object which contains the row value and column value
  Structure of {cellValue}:
      Object {0: Object, 1: Object}
        0: Object
          val: Object
            Supplier_ID: "1"
            Reduced Checking: "2"
            ASN Approved: "3"
        1: Object
          val: Object
            Supplier_ID: "4"
            Reduced Checking: "5"
            ASN Approved: "6"
      */
  var newVal = {};
  function colVal(val, id) {
    newVal = {};
    Object.entries(val).map(([key, value]) => {
      if (value > "") {
        newVal = { ...newVal, [key]: value };
      }
      return newVal;
    });
    cellValue1 = { ...cellValue1, [id]: newVal };
    props.cellFinal(cellValue1);
  }
  var j;
  function tableRow() {
    for (j = 0; j < props.totalrows; j++) {
      res.push(
        <StyledTableRow>
          <TableColCustom
            key={j}
            id={j}
            colval={colVal}
            headers={props.headers}
            totalcols={props.totalcols}
          />
        </StyledTableRow>
      );
    }
    return res;
  }
  return res;
}

export default TableRowCustom;

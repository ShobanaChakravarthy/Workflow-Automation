import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

function TableColCustom(props) {
  var header = props.headers;
  let res = [];
  let coll1 = {};
  //handle change will store the column value in array
  function handleChange(i, suppVal, e) {
    e.preventDefault();
    var a = e.target.value;
    coll1 = { ...coll1, [suppVal]: a };
    // if (i === props.totalcols - 1) {
    //   props.colval(coll1, props.id);
    // }
    props.colval(coll1, props.id);
  }

  //stored column value array will be sent to row

  //table theme
  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);
  tableCol();
  function tableCol() {
    for (let i = 0; i < props.totalcols; i++) {
      res.push(
        <StyledTableCell align="center">
          <input
            type="text"
            value={coll1[header[i]]}
            onChange={handleChange.bind(this, i, header[i])}
          />
        </StyledTableCell>
      );
    }
    return res;
  }
  return res;
}

export default TableColCustom;

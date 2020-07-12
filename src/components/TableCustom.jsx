import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableHeaderCustom from "./TableHeaderCustom";
import TableRowCustom from "./TableRowCustom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

function TableCustom(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 700
    }
  });
  var colHeaders = props.header;
  var qtyCols = parseInt(props.cols);
  var totalcols;
  // if (colHeaders[0] === "PO_ID") {
  //   totalcols = colHeaders.length + qtyCols;
  // } else {
  totalcols = colHeaders.length;
  // }
  var totalrows = props.rows;
  const classes = useStyles();

  function cellFinal(arr1) {
    props.tabArr(arr1);
  }

  if (
    ((totalrows > "0") & (colHeaders[0] !== "PO_ID")) |
    ((totalcols > "2") & (colHeaders[0] === "PO_ID"))
  ) {
    return (
      <Grid item xs={12} alignItems="center" justify="space-evenly">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableHeaderCustom colHeaders={colHeaders} qtyCols={qtyCols} />
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRowCustom
                headers={colHeaders}
                totalcols={totalcols}
                totalrows={totalrows}
                cellFinal={cellFinal}
              />
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  } else {
    return null;
  }
}

export default TableCustom;

import React, { useState } from "react";
import BoxTitle from "./BoxTitle";
import Grid from "@material-ui/core/Grid";
import Textfield from "./TextFieldCustom";
import TableCustom from "./TableCustom";
import history from "./../history";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Box from "@material-ui/core/Box";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText("#c0ca33"),
    backgroundColor: "#c0ca33",
    "&:hover": {
      backgroundColor: "#c0ca33"
    }
  }
}))(Button);
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#9FD6BE",
    color: "black"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

function Supplier(props) {
  var envArr = props.location.state ? props.location.state.envArrF : "";
  var fabVal = "none";
  const classes = useStyles();
  var header = ["Supplier_ID", "Reduced_Checking", "ASN_Approved"];
  const [total, setTotal] = useState({
    noOfRows: "0",
    noOfColumns: "0"
  });

  function numberOf(id, value) {
    setTotal(prevValue => {
      return {
        ...prevValue,
        [id]: value
      };
    });
  }
  function chkinline() {
    if (total.noOfRows > 0) {
      fabVal = "inline";
    }
  }
  var suppArr = {};
  function tabArr(fullTab) {
    suppArr = fullTab;
  }
  return (
    <div className="div-box">
      {/* Table of Sample Data */}

      <Grid item xs={12} alignItems="center" justify="space-evenly">
        <h1 className="box-heading1">Sample Data</h1>
        <br />
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Supplier_ID</StyledTableCell>
                <StyledTableCell align="center">
                  Reduced_Checking
                </StyledTableCell>
                <StyledTableCell align="center">ASN_Approved</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell align="center">
                  <input type="text" disabled value="S0000001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="Yes" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="Yes" />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container alignItems="center">
        <BoxTitle title="Supplier Data" />
        {/* <h1 className="box-heading1">Supplier Data</h1> */}
        <Textfield
          key="Number of Suppliers"
          name="Number of Suppliers"
          value={numberOf}
          id="noOfRows"
        />
        <TableCustom
          rows={total.noOfRows}
          cols={total.noOfColumns}
          tabArr={tabArr}
          header={header}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {chkinline()}

        <Grid container justify="flex-end" alignItems="center">
          <form>
            <Box display={fabVal}>
              <ColorButton
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={() =>
                  history.push({
                    pathname: "/Prod",
                    state: { envArrF: envArr, suppArrF: suppArr }
                  })
                }
              >
                Save
              </ColorButton>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Supplier;

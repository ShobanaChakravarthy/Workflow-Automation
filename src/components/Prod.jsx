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
function Prod(props) {
  var envArr = props.location.state ? props.location.state.envArrF : "";
  var suppArr = props.location.state ? props.location.state.suppArrF : "";
  var fabVal = "none";
  const classes = useStyles();
  var header = [
    "Product_ID",
    "Area",
    "Code_Date",
    "Exception",
    "occ",
    "Catch_Weight",
    "mu"
  ];
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
  var prodArr = {};
  function tabArr(fullTab) {
    prodArr = fullTab;
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
                <StyledTableCell align="center">Product_ID</StyledTableCell>
                <StyledTableCell align="center">Area</StyledTableCell>
                <StyledTableCell align="center">Code_Date</StyledTableCell>{" "}
                <StyledTableCell align="center">Exception</StyledTableCell>{" "}
                <StyledTableCell align="center">occ</StyledTableCell>{" "}
                <StyledTableCell align="center">Catch_Weight</StyledTableCell>{" "}
                <StyledTableCell align="center">mu</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell align="center">
                  <input type="text" disabled value="P000001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="1" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="Yes" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="NO" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="C0000000000001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="No" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="No" />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container alignItems="center">
        <Grid item>
          <BoxTitle title="Product Data" />
        </Grid>
        <Textfield
          key="Number of Products"
          name="Number of Products"
          value={numberOf}
          id="noOfRows"
        />
        <TableCustom
          rows={total.noOfRows}
          cols={total.noOfColumns}
          header={header}
          tabArr={tabArr}
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
                    pathname: "/Po",
                    state: {
                      envArrF: envArr,
                      suppArrF: suppArr,
                      prodArrF: prodArr
                    }
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

export default Prod;

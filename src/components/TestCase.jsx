import React, { useState } from "react";
import BoxTitle from "./BoxTitle";
import Grid from "@material-ui/core/Grid";
import Textfield from "./TextFieldCustom";
import TableCustom from "./TableCustom";
import history from "./../history";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SaveIcon from "@material-ui/icons/Save";
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

function TestCase(props) {
  var envArr = props.location.state ? props.location.state.envArrF : "";
  var suppArr = props.location.state ? props.location.state.suppArrF : "";
  var prodArr = props.location.state ? props.location.state.prodArrF : "";
  var poArr = props.location.state ? props.location.state.poArrF : "";
  var asnArr = props.location.state ? props.location.state.asnArrF : "";
  var fabVal = "none";
  var header = [
    "Test_ID",
    "Step_No",
    "Functions",
    "Parm1",
    "Parm2",
    "Parm3",
    "Parm4",
    "Parm5",
    "Execute"
  ];
  const classes = useStyles();
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
  var testCaseArr = {};
  function tabArr(fullTab) {
    testCaseArr = fullTab;
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
                <StyledTableCell align="center">Test_ID</StyledTableCell>
                <StyledTableCell align="center">Step_No</StyledTableCell>
                <StyledTableCell align="center">Functions</StyledTableCell>
                <StyledTableCell align="center">Parm1</StyledTableCell>
                <StyledTableCell align="center">Parm2</StyledTableCell>
                <StyledTableCell align="center">Parm3</StyledTableCell>
                <StyledTableCell align="center">Parm4</StyledTableCell>
                <StyledTableCell align="center">Parm5</StyledTableCell>
                <StyledTableCell align="center">Extract(Y/N)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell align="center">
                  <input type="text" disabled value="TC001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="S0000001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="Yes" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="Yes" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="Yes" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="Yes" />
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
        <Grid item>
          <BoxTitle title="TestCase Data" />
        </Grid>
        <Textfield
          key="Number of Functions"
          name="Number of Functions"
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
                    pathname: "/ExtractX",
                    state: {
                      envArrF: envArr,
                      suppArrF: suppArr,
                      prodArrF: prodArr,
                      poArrF: poArr,
                      asnArrF: asnArr,
                      testCaseArrF: testCaseArr
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

export default TestCase;

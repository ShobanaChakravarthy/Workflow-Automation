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
function ASN(props) {
  var envArr = props.location.state ? props.location.state.envArrF : "";
  var suppArr = props.location.state ? props.location.state.suppArrF : "";
  var prodArr = props.location.state ? props.location.state.prodArrF : "";
  var poArr = props.location.state ? props.location.state.poArrF : "";
  var fabVal = "none";
  const classes = useStyles();
  var header = [
    "Delivey",
    "Pallet",
    "po",
    "occ",
    "tpnd",
    "Tray",
    "Qty",
    "CodeDate",
    "Grid",
    "ScanQty",
    "Breakdown",
    "BDGrid",
    "BCMerge",
    "ASN_Supplier"
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
  var asnArr = {};
  function tabArr(fullTab) {
    asnArr = fullTab;
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
                <StyledTableCell align="center">Delivey</StyledTableCell>
                <StyledTableCell align="center">Pallet</StyledTableCell>
                <StyledTableCell align="center">po</StyledTableCell>
                <StyledTableCell align="center">occ</StyledTableCell>
                <StyledTableCell align="center">tpnd</StyledTableCell>
                <StyledTableCell align="center">Tray</StyledTableCell>
                <StyledTableCell align="center">Qty</StyledTableCell>
                <StyledTableCell align="center">CodeDate</StyledTableCell>
                <StyledTableCell align="center">Grid</StyledTableCell>
                <StyledTableCell align="center">ScanQty</StyledTableCell>
                <StyledTableCell align="center">Breakdown</StyledTableCell>
                <StyledTableCell align="center">BDGrid</StyledTableCell>
                <StyledTableCell align="center">BCMerge</StyledTableCell>
                <StyledTableCell align="center">ASN_Supplier</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell align="center">
                  <input type="text" disabled value="1" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="1" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="PO000001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="C0000000000001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="P000001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="NO" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="40" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="12/12/2021" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="G001" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="40" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="TOPCHK" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="G401" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="Yes" />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <input type="text" disabled value="S0000001" />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid container alignItems="center">
        <Grid item>
          <BoxTitle title="ASN Data" />
        </Grid>
        <Textfield
          key="Number of Pallets"
          name="Number of Pallets"
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
                    pathname: "/TestCase",
                    state: {
                      envArrF: envArr,
                      suppArrF: suppArr,
                      prodArrF: prodArr,
                      poArrF: poArr,
                      asnArrF: asnArr
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

export default ASN;

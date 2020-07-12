import React from "react";
import BoxTitle from "./BoxTitle";
import Workbook from "react-excel-workbook";
import Grid from "@material-ui/core/Grid";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";

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

function ExtractX(props) {
  const classes = useStyles();
  var envArr = props.location.state ? props.location.state.envArrF : "";
  var suppArr = props.location.state ? props.location.state.suppArrF : "";
  var prodArr = props.location.state ? props.location.state.prodArrF : "";
  var poArr = props.location.state ? props.location.state.poArrF : "";
  var asnArr = props.location.state ? props.location.state.asnArrF : "";
  var testCaseArr = props.location.state
    ? props.location.state.testCaseArrF
    : "";
  const envTemp = { envArr };
  const envArray = Object.values(envTemp);
  const suppArray = Object.values(suppArr);
  const prodArray = Object.values(prodArr);
  const poArray = Object.values(poArr);
  const asnArray = Object.values(asnArr);
  const testCaseArray = Object.values(testCaseArr);
  var res = [];
  function popPoQty() {
    console.log(poArr);
    if (Object.keys(poArr).length !== 0) {
      var a = Object.keys(poArr[0]).length - 2;
      for (var i = 0; i < a; i++) {
        var b = "Po_Qty" + i;
        res.push(<Workbook.Column label="Product_Qty" value={b} />);
      }
    }
    return res;
  }
  return (
    <div className="div-box">
      <Grid container alignItems="center">
        <Grid item>
          <BoxTitle title="Extract to Excel sheets" />
        </Grid>
        <Grid container justify="space-evenly">
          <form>
            <Workbook
              filename="Config_File.xlsx"
              element={
                <ColorButton
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                >
                  Extract Config File
                </ColorButton>
              }
            >
              {/* Environment Array */}
              <Workbook.Sheet data={envArray} name="Env">
                <Workbook.Column label="Network" value={row => row.Network} />
                <Workbook.Column label="Region" value={row => row.Region} />
                <Workbook.Column label="Depot" value={row => row.Depot} />
                <Workbook.Column label="User" value={row => row.UserID} />
                <Workbook.Column label="Password" value={row => row.Password} />
                <Workbook.Column
                  label="Automated_Gate_House"
                  value={row => row.agh}
                />
                <Workbook.Column label="Centre" value={row => row.Centre} />
                <Workbook.Column label="Warehouse" value={row => row.Whse} />
                <Workbook.Column
                  label="Login_Chamber"
                  value={row => row.Chamber}
                />
                <Workbook.Column
                  label="Region_Login_Id"
                  value={row => row.Region_ID}
                />
                <Workbook.Column
                  label="Region_Login_Pwd"
                  value={row => row.Region_Pwd}
                />
                <Workbook.Column
                  label="Region_Type"
                  value={row => row.Region_Type}
                />
                <Workbook.Column label="Image" value={row => row.Image} />
                <Workbook.Column
                  label="Number_of_Grids_A1"
                  value={row => row.Area1Grids}
                />
                <Workbook.Column
                  label="Number_of_Grids_A2"
                  value={row => row.Area2Grids}
                />
                <Workbook.Column
                  label="Number_of_MU_Grids"
                  value={row => row.MUGrids}
                />
              </Workbook.Sheet>
              {/* Supplier  Array */}
              <Workbook.Sheet data={suppArray} name="Supplier">
                <Workbook.Column
                  label="Supplier_Id"
                  value={row => row.Supplier_ID}
                />
                <Workbook.Column
                  label="REDUCED_CHECKING"
                  value={row => row.Reduced_Checking}
                />
                <Workbook.Column
                  label="ASN_APPROVED_SUPPLIER"
                  value={row => row.ASN_Approved}
                />
              </Workbook.Sheet>
              {/* Product Array */}
              <Workbook.Sheet data={prodArray} name="Product">
                <Workbook.Column
                  label="PRODUCT_ID"
                  value={row => row.Product_ID}
                />
                <Workbook.Column label="AREA" value={row => row.Area} />
                <Workbook.Column
                  label="CODE_DATED?"
                  value={row => row.Code_Date}
                />
                <Workbook.Column
                  label="PRODUCT_EXCEPTION"
                  value={row => row.Exception}
                />
                <Workbook.Column label="OCC" value={row => row.occ} />
                <Workbook.Column
                  label="CATCHWEIGHT_PRODUCT"
                  value={row => row.Catch_Weight}
                />
                <Workbook.Column label="MU_PRODUCT" value={row => row.mu} />
              </Workbook.Sheet>
              {/* Po Array */}
              <Workbook.Sheet data={poArray} name="POS">
                <Workbook.Column label="PO_id" value={row => row.PO_ID} />
                <Workbook.Column
                  label="Supplier_id"
                  value={row => row.Supplier_ID}
                />
                {popPoQty()}
              </Workbook.Sheet>
              <Workbook.Sheet data={asnArray} name="ASN">
                <Workbook.Column label="Delivery" value={row => row.Delivey} />
                <Workbook.Column label="Pallet" value={row => row.Pallet} />
                <Workbook.Column label="SSCC" value=" " />
                <Workbook.Column label="PO" value={row => row.po} />
                <Workbook.Column label="OCC" value={row => row.occ} />
                <Workbook.Column label="TPN" value={row => row.tpnd} />
                <Workbook.Column label="Tray" value={row => row.Tray} />
                <Workbook.Column label="QTY" value={row => row.Qty} />
                <Workbook.Column
                  label="Code_date"
                  value={row => row.CodeDate}
                />
                <Workbook.Column label="GRID_id" value={row => row.Grid} />
                <Workbook.Column label="SCAN_QTY" value={row => row.ScanQty} />
                <Workbook.Column
                  label="BK_DWN_OPTION"
                  value={row => row.Breakdown}
                />
                <Workbook.Column label="BD_GRID" value={row => row.BDGrid} />
                <Workbook.Column label="BC_Merge" value={row => row.BCMerge} />
                <Workbook.Column
                  label="ASN_Supplier"
                  value={row => row.ASN_Supplier}
                />
              </Workbook.Sheet>
            </Workbook>
          </form>
        </Grid>
        <Grid container justify="space-evenly">
          <form>
            <Workbook
              filename="TestCase.xlsx"
              element={
                <ColorButton
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  // onClick={() => history.push("/Env")}
                >
                  Extract TestCase File
                </ColorButton>
              }
            >
              {/* Testcase  Array */}
              <Workbook.Sheet data={testCaseArray} name="Test">
                <Workbook.Column label="Test_ID" value={row => row.Test_ID} />
                <Workbook.Column label="Step_No" value="" />
                <Workbook.Column
                  label="Function"
                  value={row => row.Functions}
                />
                <Workbook.Column label="Parm1" value={row => row.Parm1} />
                <Workbook.Column label="Parm2" value={row => row.Parm2} />
                <Workbook.Column label="Parm3" value={row => row.Parm3} />
                <Workbook.Column label="Parm4" value={row => row.Parm4} />
                <Workbook.Column label="Parm5" value={row => row.Parm5} />
                <Workbook.Column
                  label="Execute(Y/N)"
                  value={row => row.Execute}
                />
              </Workbook.Sheet>
            </Workbook>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default ExtractX;

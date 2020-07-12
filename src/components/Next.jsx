import React from "react";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Supplier from "./Supplier";
import Po from "./Po";
import Product from "./Prod";
import ASN from "./ASN";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
function Next(props) {
  var suppVal = ["Supplier_ID", "Reduced Checking", "ASN Approved"];
  var prodVal = [
    "Product_ID",
    "Area",
    "Code Date",
    "Exception",
    "OCC",
    "Catch Weight",
    "MU"
  ];
  var poVal = ["PO_ID", "Supplier ID"];
  var asnVal = [
    "Delivey",
    "Pallet",
    "PO",
    "OCC",
    "TPND",
    "Tray",
    "Qty",
    "CodeDate",
    "Grid",
    "Scan Qty",
    "Breakdown",
    "BD Grid",
    "BC Merge",
    "ASN Supplier"
  ];
  const classes = useStyles();
  var res = [];
  function handleClick(event) {
    event.preventDefault();
    var id = props.id;
    switch (id) {
      case "1":
        res.push(
          <Supplier
            header={suppVal}
            title="Supplier Data"
            name="Number of Suppliers"
          />
        );
        break;
      case "2":
        res.push(
          <Product
            header={prodVal}
            title="Product Data"
            name="Number of Products"
          />
        );
        break;
      case "3":
        res.push(
          <Po
            header={poVal}
            title="Purchase Order Data"
            name="Number of POs"
            name2="Number of Products"
          />
        );
        break;
      default:
        res.push(
          <ASN header={asnVal} title="ASN Data" name="Number of Pallets" />
        );
    }
    return res;
  }
  return (
    <Grid container justify="flex-end" alignItems="center">
      <Box display={props.value}>
        <Fab color="secondary" variant="extended" onClick={handleClick}>
          <NavigationIcon className={classes.extendedIcon} />
          Next
        </Fab>
      </Box>
    </Grid>
  );
}
export default Next;

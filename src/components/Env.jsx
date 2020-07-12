import React, { useState } from "react";
import BoxTitle from "./BoxTitle";
import Grid from "@material-ui/core/Grid";
import history from "./../history";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
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
function Env() {
  const classes = useStyles();
  const [changeVal, setChangeVal] = useState({});
  function handleChange(e) {
    setChangeVal({ ...changeVal, [e.target.name]: e.target.value });
  }
  return (
    <div className="div-box">
      <BoxTitle title="Environment to Run" />
      <br />
      <form>
        <Grid container item spacing={3}>
          <Grid item xs={3}>
            <label>Network</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="Network"
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <label>Region</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="Region" required onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <label>Depot</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="Depot" required onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <label>UserID</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="UserID" required onChange={handleChange} />
          </Grid>
        </Grid>
        <br />
        <br /> <br />
        <Grid container item spacing={3}>
          <Grid item xs={3}>
            <label>Password</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="Password"
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <label>AGH</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="agh" required onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <label>Centre</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="Centre" required onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <label>Whse</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="Whse" required onChange={handleChange} />
          </Grid>
        </Grid>
        <br />
        <br /> <br />
        <Grid container item spacing={3}>
          <Grid item xs={3}>
            <label>Login Chamber</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="Chamber"
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <label>Region Login id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="Region_ID"
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <label>Region login pwd</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="Region_Pwd"
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <label>Region type</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="Region_Type"
              required
              onChange={handleChange}
            />
          </Grid>
        </Grid>{" "}
        <br />
        <br /> <br />
        <Grid container item spacing={3}>
          <Grid item xs={3}>
            <label>Image</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="Image" required onChange={handleChange} />
          </Grid>
          <Grid item xs={3}>
            <label>Area 1 Grids</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="Area1Grids"
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <label>Area 2 Grids</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="Area2Grids"
              required
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <label>MU Grids</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="MUGrids"
              required
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </form>{" "}
      <br />
      <br />
      <Grid container justify="flex-end" alignItems="center">
        <form>
          <ColorButton
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={() =>
              history.push({
                pathname: "/Supplier",
                state: { envArrF: changeVal }
              })
            }
          >
            Save
          </ColorButton>
        </form>
      </Grid>
    </div>
  );
}

export default Env;

import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
function TextfieldCustom(props) {
  var numberOf = "";
  return (
    <Grid item>
      &emsp;
      <TextField
        id="outlined-number"
        label={props.name}
        type="number"
        style={{ backgroundColor: "#D8FF8E" }}
        InputLabelProps={{
          shrink: true
        }}
        onChange={evt => {
          numberOf = evt.target.value;
          props.value(props.id, numberOf);
        }}
        variant="filled"
      />
    </Grid>
  );
}

export default TextfieldCustom;

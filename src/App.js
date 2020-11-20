import React, { useState } from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import IconButton from "@material-ui/core/IconButton";
import ArrowIcon from "@material-ui/icons/ArrowForwardRounded";
import VisibilityOff from "@material-ui/icons/VisibilityOffRounded";
import Visibility from "@material-ui/icons/VisibilityRounded";
import clsx from "clsx";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  labelRoot: {
    border: "1px solid rgba(0, 0, 0, .23)",
    padding: theme.spacing(1, 3, 1, 1.5),
    borderRadius: 15,

    "&:hover": {
      borderColor: theme.palette.primary.main
    }
  },
  radioGroup: {
    flexDirection: "row",
    gap: "16px",
    padding: 12
  }
}));

export default function App() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box p={1} maxWidth="900px" margin="0 auto">
      <Box>
        <Typography variant="h5">Registration</Typography>
      </Box>
      <Box
        display="flex"
        style={{ gap: 24 }}
        flexWrap="wrap"
        py={2}
        justifyContent="space-between"
      >
        <StyledTextField variant="outlined" label="Full name" />
        <StyledTextField variant="outlined" label="E-mail" />
        <StyledTextField
          variant="outlined"
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          type={showPassword ? "text" : "password"}
        />
        <StyledTextField
          variant="outlined"
          label="Phone number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">+91</InputAdornment>
            )
          }}
        />
        <FormControl component="fieldset" style={{ width: "100%" }}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            className={classes.radioGroup}
            aria-label="gender"
            name="gender1"
          >
            {[
              { value: "female", label: "Female" },
              { value: "male", label: "Male" },
              { value: "other", label: "Other" }
            ].map(({ value, label }) => (
              <FormControlLabel
                className={classes.labelRoot}
                value={value}
                control={<StyledRadio color="primary" />}
                label={label}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" style={{ width: "100%" }}>
          <FormLabel component="legend">Address</FormLabel>
          <Box pt={1.5} display="flex" flexWrap="wrap" style={{ gap: 24 }}>
            <StyledTextField variant="outlined" label="Address line 1" />
            <StyledTextField variant="outlined" label="Address line 2" />
            <StyledTextField variant="outlined" label="Landmark" />
            <StyledTextField variant="outlined" label="City" />
            <StyledTextField variant="outlined" label="State" />
            <StyledTextField
              variant="outlined"
              label="Pin code"
              type="number"
            />
          </Box>
        </FormControl>
        <StyledTextField
          variant="outlined"
          label="Annual Salary"
          InputProps={{
            startAdornment: <InputAdornment position="start">Rs</InputAdornment>
          }}
        />
        <StyledButton endIcon={<ArrowIcon />}>Submit</StyledButton>
      </Box>
    </Box>
  );
}

const StyledTextField = withStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "48%",

    "& label.Mui-focused": {
      color: theme.palette.primary.main
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main
    },
    "& .MuiOutlinedInput-root": {
      fontWeight: "bold",

      "& fieldset": {
        borderRadius: 15
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main
      }
    }
  }
}))((props) => <TextField {...props} />);

const useRadioStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    border: "1px solid rgba(0, 0, 0, 0.23)",
    backgroundColor: theme.palette.background.default,
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      borderColor: theme.palette.primary.main
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: theme.palette.primary.main
    }
  }
}));

function StyledRadio(props) {
  const classes = useRadioStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const StyledButton = withStyles((theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.light} 90%)`,
    borderRadius: 10,
    fontSize: 16,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow:
      "0px 6px 6px -3px rgba(189, 189, 189, 0.3), 0px 10px 14px 1px rgba(189, 189, 189, 0.24), 0px 4px 18px 3px rgba(189, 189, 189, 0.20)"
  }
}))((props) => <Button {...props} />);

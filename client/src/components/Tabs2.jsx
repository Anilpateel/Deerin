import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Deerim2 from "./Deerim2";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  labelContainer: {
    padding: 0,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#b32424", height: "60px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{
            style: { backgroundColor: "white" },
          }}
        >
          <Tab label="Deerim" {...a11yProps(0)} />
          <Tab label="Recharge" {...a11yProps(1)} />
          <Tab label="Withdraw" {...a11yProps(2)} />
          <Tab label="Invite" {...a11yProps(3)} />
          <Tab label="My" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Deerim2 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Rerache</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>Withdraw</h1>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1>Invite</h1>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1>my</h1>
      </TabPanel>
    </div>
  );
}

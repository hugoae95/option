import { Grid } from "@mui/material";
import parse from "html-react-parser";
import "./Sidebar.scss";

const Sidebar = (props: { text: string }) => {
  const { text } = props;
  return (
    <Grid className="full full-purple" item xs={6}>
      <div className="message-text">{parse(text)}</div>
    </Grid>
  );
};

export default Sidebar;

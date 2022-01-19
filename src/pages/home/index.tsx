import type { NextPage } from "next";
import TextField from "@mui/material/TextField";

const Home: NextPage = () => {
  return (
    <div>
      Home Page
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </div>
  );
};

export default Home;

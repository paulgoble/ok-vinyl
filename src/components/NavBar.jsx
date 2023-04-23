import { Basket } from "./Basket";
import { Search } from "@mui/icons-material";
import { OutlinedInput } from "@mui/material";

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100vw',
    position: 'fixed',
    zIndex: 1, top: 0,
    borderBottom: '1px solid grey',
    padding: '10px',
    backgroundColor: '#0a1929',
    color: '#fff'
  },
}

export const NavBar = () => {
  return (
    <div style={styles.div}>
      <h1>OKVinyl</h1>
      <h3 id="subtitle"><em>The</em> American Jazz <em>Collection 1957-1961</em></h3>
      <OutlinedInput
        size="small"
        sx={{ color: '#5090d3' }}
        placeholder="Search collection..."
        startAdornment={<Search />} />
      <Basket />
    </div>
  )
}
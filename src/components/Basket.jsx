import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from "react";

const basketStyles = {
  contents: {
    position: 'fixed',
    top: '63px', right: '20px',
    zIndex: 10,
    border: '1px solid grey',
    padding: '10px',
    backgroundColor: '#ebedf0',
    color: '#0a1929',
    height: '400px',
    width: '300px',
  }
}

const BasketContents = () => {
  return (
    <div style={basketStyles.contents}>
      <p>Basket is Empty</p>
    </div>
  )
}

export const Basket = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Button variant="outlined" onClick={toggleOpen}>
        <ShoppingCartOutlinedIcon />
      </Button>
      {open ? <BasketContents /> : null}
    </div>
  )
}
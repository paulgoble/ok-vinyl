import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BasketContents } from './BasketContents';
import { useState } from "react";
import { useSelector } from "react-redux";

export const ShoppingBasket = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  
  const orderQty = useSelector(({ basket }) => {
    let count = 0
    basket.forEach(item => {
      count += item.quantity
    })
    return count
  })

  return (
    <div>
      <Button variant="outlined" onClick={toggleOpen}>
        <Badge color="success"
          badgeContent={orderQty}
        >
          <ShoppingCartOutlinedIcon />
        </Badge>
      </Button>
      {open ? <BasketContents /> : null}
    </div>
  )
}
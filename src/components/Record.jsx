import { Button } from "@mui/material";
import { ShoppingCartRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addItem } from "../app/basketSlice"

const styles = {
  div: {
    display: 'inline-block',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#ebedf0',
    width: '300px',
    height: '400px',
    borderTopLeftRadius: '15px',
    borderBottomRightRadius: '15px',
  }
}

export const Record = ({
  title,
  artist,
  year,
  coverUrl,
  price,
  id
}) => {
  const dispatch = useDispatch()

  const addToBasket = () => {
    dispatch(addItem({
      title,
      artist,
      id,
      price,
      quantity: 1
    }))
  }

  return (
    <div className="record" style={styles.div}>
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>({year})</p>
      <br />
      <img src={coverUrl} width="180px" alt="album cover"/>
      <h4>&euro; {price}</h4>
      <Button
        variant="contained"
        startIcon={<ShoppingCartRounded />}
        onClick={addToBasket}
      >
        Add to Basket
      </Button>
    </div>
  )
}
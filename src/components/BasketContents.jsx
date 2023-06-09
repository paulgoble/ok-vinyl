import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Stack from '@mui/material/Stack'

const basketStyles = {
  contents: {
    position: 'fixed',
    top: '63px', right: '10px',
    zIndex: 10,
    border: '1px solid grey',
    backgroundColor: '#0a1929',
    color: '#fff',
    textAlign: 'left',
    borderTopLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    minWidth: '300px'
  },
  item: {
    borderBottom: '1px solid grey',
    padding: '10px'
  },
  lastItem: {
    padding: '10px'
  },
  checkout: {
    position: 'absolute',
    bottom: '10px',
    right: '10px'
  }
}

const BasketItem = ({ item }) => (
  <li style={basketStyles.item}>
    <h4>{item.title} | {item.artist} <span>&euro; {item.price}</span></h4>
    <Stack spacing={2} direction="row">
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={() => null}>+</Button>
        <Button variant="contained">Qty: {item.quantity}</Button>  
        <Button onClick={() => null}>-</Button>
      </ButtonGroup>
        <Button size="small" color="warning"
          onClick={() => null}
        >
          Remove
      </Button>
    </Stack>
  </li>
)

export const BasketContents = () => {
  const basket = []
  const total = 0

  return (
    <div style={basketStyles.contents}>
      <h3 style={basketStyles.item}>My Basket </h3>
      <ul>
        {basket.length ?
          basket.map((item) => (
            <BasketItem key={item.id} item={item} />
          )) : null
        }
      </ul>
      <h4 style={basketStyles.lastItem}>Total: &euro; {total}</h4>
      <Button
        style={basketStyles.checkout}
        variant="contained"
        color="success"
        disabled={basket.length === 0}
      >
        Checkout
      </Button>
    </div>
  )
}
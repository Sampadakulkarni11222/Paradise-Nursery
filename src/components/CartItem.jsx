import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/CartSlice'

export default function CartItem() {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  if (!items.length) {
    return (
      <main className="cart-page empty-cart">
        <h1>Your Shopping Cart</h1>
        <p>Your cart is currently empty.</p>
        <Link className="primary-btn" to="/plants">Continue Shopping</Link>
      </main>
    )
  }

  return (
    <main className="cart-page">
      <div className="page-heading">
        <h1>Shopping Cart</h1>
        <p>{itemCount} item{itemCount !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="cart-list">
        {items.map(item => (
          <article className="cart-row" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
            </div>

            <div className="quantity-controls">
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
              <strong>{item.quantity}</strong>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            </div>

            <strong>${(item.price * item.quantity).toFixed(2)}</strong>

            <button
              className="delete-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
              aria-label={`Delete ${item.name}`}
            >
              Delete
            </button>
          </article>
        ))}
      </div>

      <section className="cart-summary">
        <h2>Total: ${total.toFixed(2)}</h2>
        <div className="cart-actions">
          <Link className="secondary-btn" to="/plants">Continue Shopping</Link>
          <button
            className="checkout-btn"
            onClick={() => window.alert('Coming Soon')}
          >
            Checkout
          </button>
        </div>
      </section>
    </main>
  )
}
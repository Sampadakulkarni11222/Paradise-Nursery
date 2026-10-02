import { Link, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductList from './components/ProductList'
import CartItem from './components/CartItem'
import AboutUs from './components/AboutUs'

function Navbar() {
  const cartItems = useSelector(state => state.cart.items)
  const count = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="navbar">
      <Link className="brand" to="/">Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart">
          🛒 Cart <span className="cart-badge">{count}</span>
        </Link>
      </div>
    </nav>
  )
}

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Paradise Nursery</h1>
          <p>Bring nature home with beautiful, healthy houseplants.</p>
          <Link className="primary-btn" to="/plants">Get Started</Link>
        </div>
      </section>
      <AboutUs />
    </main>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  )
}
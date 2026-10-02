import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

const plants = [
  { id: 1, category: 'Air Purifying Plants', name: 'Snake Plant', price: 24.99, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2bb0?auto=format&fit=crop&w=700&q=80' },
  { id: 2, category: 'Air Purifying Plants', name: 'Peace Lily', price: 29.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80' },
  { id: 3, category: 'Air Purifying Plants', name: 'Spider Plant', price: 18.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80' },
  { id: 4, category: 'Air Purifying Plants', name: 'ZZ Plant', price: 27.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80' },
  { id: 5, category: 'Air Purifying Plants', name: 'Boston Fern', price: 21.99, image: 'https://images.unsplash.com/photo-1596724878582-76b8370c6e1f?auto=format&fit=crop&w=700&q=80' },
  { id: 6, category: 'Air Purifying Plants', name: 'Rubber Plant', price: 32.99, image: 'https://images.unsplash.com/photo-1600411832986-5a4477aa56a4?auto=format&fit=crop&w=700&q=80' },

  { id: 7, category: 'Succulents', name: 'Aloe Vera', price: 16.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
  { id: 8, category: 'Succulents', name: 'Jade Plant', price: 19.99, image: 'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?auto=format&fit=crop&w=700&q=80' },
  { id: 9, category: 'Succulents', name: 'Haworthia', price: 17.99, image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=700&q=80' },
  { id: 10, category: 'Succulents', name: 'Echeveria', price: 15.99, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=700&q=80' },
  { id: 11, category: 'Succulents', name: 'String of Pearls', price: 22.99, image: 'https://images.unsplash.com/photo-1604147706283-d7119b5b822c?auto=format&fit=crop&w=700&q=80' },
  { id: 12, category: 'Succulents', name: 'Zebra Haworthia', price: 18.49, image: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?auto=format&fit=crop&w=700&q=80' },

  { id: 13, category: 'Tropical Plants', name: 'Monstera Deliciosa', price: 39.99, image: 'https://images.unsplash.com/photo-1614594575237-3c1e5d6a0f1f?auto=format&fit=crop&w=700&q=80' },
  { id: 14, category: 'Tropical Plants', name: 'Fiddle Leaf Fig', price: 44.99, image: 'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b5a?auto=format&fit=crop&w=700&q=80' },
  { id: 15, category: 'Tropical Plants', name: 'Calathea', price: 34.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80' },
  { id: 16, category: 'Tropical Plants', name: 'Bird of Paradise', price: 49.99, image: 'https://images.unsplash.com/photo-1597055181300-8b5b0b5a7d85?auto=format&fit=crop&w=700&q=80' },
  { id: 17, category: 'Tropical Plants', name: 'Philodendron', price: 31.99, image: 'https://images.unsplash.com/photo-1616766418955-3e6d5f7c2d0f?auto=format&fit=crop&w=700&q=80' },
  { id: 18, category: 'Tropical Plants', name: 'Alocasia', price: 36.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=80' }
]

const categories = [...new Set(plants.map(p => p.category))]

export default function ProductList() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)
  const addedIds = new Set(cartItems.map(item => item.id))

  return (
    <main className="products-page">
      <div className="page-heading">
        <h1>Our Houseplants</h1>
        <p>Choose from our collection of beautiful plants.</p>
      </div>

      {categories.map(category => (
        <section className="category" key={category}>
          <h2>{category}</h2>
          <div className="product-grid">
            {plants.filter(p => p.category === category).map(plant => (
              <article className="product-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <div className="product-info">
                  <h3>{plant.name}</h3>
                  <div className="price">${plant.price.toFixed(2)}</div>
                  <button
                    className="add-btn"
                    disabled={addedIds.has(plant.id)}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {addedIds.has(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
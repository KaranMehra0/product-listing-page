import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products')
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <p>loading.....</p>
  }
  if (error) {
    return <p>Error:{error.message}</p>
  }
  return (
    <>
      <div>
        <h1>SHOPCART</h1>
        <p>This is our shopper's street.</p>

        <ul>
          {data.products.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} />
              <h3>{item.title}</h3>
              <p>Price : {item.price}</p>

            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

export default App

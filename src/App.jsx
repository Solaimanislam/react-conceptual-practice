
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from './SingleProduct';


function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, []);
  // console.log(products);

  const handleAddCart = (p) => {
    // console.log(p);
    const isExist = cart.find((pd) => pd.id == p.id);
    if (!isExist) {
      setCart([...cart, p]);
    }
    else {
      alert("Already in cart");
    }
  };

  const handleDeleteCart = (id) => {
    const newCart = cart.filter(item => item.id != id);
    // console.log(newCart);
    setCart(newCart);
  }


  return (
    <>

      <div className="main-container mt-6 container mx-auto flex justify-around">
        <div className="cards-container ">
          {
            products.map(pd => <SingleProduct
              key={pd.id}
              pd={pd}
              handleAddCart={handleAddCart}
            ></SingleProduct>)
          }


        </div>
        <div className="cart-container w-80 shadow-xl bg-gray-300 p-4 rounded-xl">
          <h1 className='text-3xl font-bold text-center'>This is cart</h1>
          <div className=' flex justify-around '>
            <h5>Name</h5>
            <h5>Price</h5>
          </div>
          <div>
            {
              cart.map((item, index) => (
                <div className='flex justify-around bg-white p-3 mb-3 rounded-xl ' key={item.id}>
                  <p>{index+1}</p>
                  <h5>{item.title.slice(0, 10)}</h5>
                  <h5>{item.price}</h5>
                  <button onClick={() => handleDeleteCart(item.id)} className=' bg-green-500 text-white p-1 rounded-lg'>Delete</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App

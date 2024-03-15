import PropTypes from 'prop-types';

const SingleProduct = ({pd, handleAddCart}) => {
    // console.log(pd);
    const {title, image, description, price} = pd;
    
    return (
        <div className=" mb-6">
            <div className=' w-96 space-y-6 text-center bg-slate-300 p-8 rounded-lg'>
            <img className=' w-28 mx-auto' src= {image} alt="" />
            <h1 className=' text-2xl font-bold'>{title.slice(0,10)}</h1>
            <p>{description} </p>
            <div className=' space-y-4 flex justify-around items-center'>
              <h4 className=' text-3xl font-bold'>{price} $</h4>
              <button onClick={() => handleAddCart(pd)} className='add-btn bg-sky-500 p-4 text-white rounded-lg'>Add to Cart</button>
            </div>
          </div>
        </div>
    );
};

SingleProduct.propTypes = {
    pd: PropTypes.array.isRequired,
    handleAddCart: PropTypes.func.isRequired
}

export default SingleProduct;
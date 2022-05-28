import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, setPurchaseItem }) => {
    const { _id, image, name, description, minQuantity, availableQuantity, price } = item;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div>
            <div className="card lg:max-w-lg bg-neutral text-neutral-content mt-10">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-teal-400">{name}</h2>
                    {/* <p>{image}</p> */}
                    <img className='w-64' src={image} alt="" />
                    <p><small>{description}</small></p>
                    <h2 className='text-sky-400'><small>Min_Quantity: {minQuantity} </small></h2>
                    <h2 className='text-sky-400'><small>Available_Quantity: {availableQuantity} </small></h2>
                    <h2 className='text-sky-400'><small>Price: {price} (per unit) </small></h2>
                    <div className="card-actions justify-end">

                        {/* <label htmlFor="booking-modal"> </label> */}
                        <button onClick={() => navigateToItemDetail(_id)} className="btn btn-primary">Purchase now</button>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Item;
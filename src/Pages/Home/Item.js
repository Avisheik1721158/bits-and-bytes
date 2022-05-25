import React from 'react';

const Item = ({ item, setPurchaseItem }) => {
    const { image, name, description, minQuantity, availableQuantity, price } = item;
    return (
        <div>
            <div className="card lg:max-w-lg bg-neutral text-neutral-content mt-10">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-teal-400">{name}</h2>
                    {/* <p>{image}</p> */}
                    <p><small>{description}</small></p>
                    <h2 className='text-sky-400'><small>Min_Quantity: {minQuantity} </small></h2>
                    <h2 className='text-sky-400'><small>Available_Quantity: {availableQuantity} </small></h2>
                    <h2 className='text-sky-400'><small>Price: {price} </small></h2>
                    <div className="card-actions justify-end">

                        <label onClick={() => setPurchaseItem(item)} htmlFor="booking-modal" className="btn btn-primary">Purchase now</label>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default Item;
import React from 'react';

const BookingItem = ({ purchaseItem, setPurchaseItem }) => {
    const { name } = purchaseItem;
    const handleBooking = event => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name);
        setPurchaseItem(null);
    }
    return (
        <div>




            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent">Booking For: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="quantity" placeholder="quantity of item" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name="price" placeholder="price" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingItem;
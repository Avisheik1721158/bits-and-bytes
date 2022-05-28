import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';



const BookingItem = () => {
    const { itemId } = useParams();

    const [item, setItem] = useState({});

    const [user, loading, error] = useAuthState(auth);
    useEffect(() => {
        const url = `https://desolate-garden-75654.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])


    const handleBooking = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const quantityItem = event.target.quantity.value;
        const priceItem = item.price * quantityItem;

        const order = {
            OrderId: item._id,
            OrderName: item.name,
            userName: name,
            userEmail: email,
            quantityItem: parseInt(quantityItem),
            totalPrice: priceItem,
            Phone: event.target.phone.value,
            minQuantity: item.minQuantity,
            availableQuantity: item.availableQuantity
        }
        fetch('https://desolate-garden-75654.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {

            })


        if (quantityItem < item.minQuantity || quantityItem > item.availableQuantity) {
            toast.error(`The number of Item Quantity should be between minimum Quantity : ${item.minQuantity} to available Quantity: ${item.availableQuantity}  `);
        }
        else {
            toast.success("Successfully ordered");
            toast.info(`Total Price: ${priceItem}`,
                {
                    position: toast.POSITION.BOTTOM_RIGHT
                })

        }
        // setPurchaseItem(null);
        // event.target.value.reset();
    }



    return (

        <div>





            {/* <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle"> */}
            {/* 
                    <div className="modal-box">
                        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label> */}
            <h3 className="font-bold text-lg text-accent">Booking For: {item.name}</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>



                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                <input type="text" name="phone" placeholder="phone number" className="input input-bordered w-full max-w-xs" />
                <input type="number" name="quantity" placeholder="quantity of item" className="input input-bordered w-full max-w-xs" />

                <h2>Per unit Price:($)</h2> <input type="number" name="price" value={item.price} placeholder="price" className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Order" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />


            </form>
            <div>

            </div>


        </div>

        // </div>

        // </div >

    );
};

export default BookingItem;





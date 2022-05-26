import React, { useEffect, useState } from 'react';
// import BookingItem from './BookingItem';
import Item from './Item';

const Tools = () => {
    const [items, setItems] = useState([]);
    // const [purchaseItem, setPurchaseItem] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='text-primary text-xl font-bold text-center'>
            <h2>
                Tools and Parts
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    // setPurchaseItem={setPurchaseItem}
                    ></Item>)
                }
            </div>

            {/* {
                purchaseItem && <BookingItem
                    purchaseItem={purchaseItem}
                    setPurchaseItem={setPurchaseItem}
                ></BookingItem>
            } */}
        </div>
    );
};

export default Tools;
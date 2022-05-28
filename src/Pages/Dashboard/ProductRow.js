import React from 'react';

const ProductRow = ({ product, index }) => {
    const { _id, name, minQuantity, availableQuantity } = product;
    const handleDelete = (id) => {

        const proceed = window.confirm('Are you want to sure this item??')

        if (proceed) {
            const url = `https://desolate-garden-75654.herokuapp.com/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    return (
        <div>
            <tr>
                <th>{index + 1}</th>
                <td><span className='text-sky-500 font-bold'>item name: </span> {name}</td>
                <td><span className='text-sky-500 font-bold'>min quantity: </span>{minQuantity}</td>
                <td><span className='text-sky-500 font-bold'>available quantity: </span>{availableQuantity}</td>
                <td><button onClick={() => handleDelete(_id)} className='btn btn-error btn-xs'>Delete</button></td>



            </tr>

        </div>
    );
};

export default ProductRow;
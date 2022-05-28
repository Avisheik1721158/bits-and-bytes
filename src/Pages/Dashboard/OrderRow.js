import React from 'react';


const OrderRow = ({ order, index, pay }) => {
    const { userName, OrderName, totalPrice } = order;
    // const { transactionId } = pay;


    return (


        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{OrderName}</td>
            <td>{totalPrice}</td>
            {/* <td>{transactionId}</td> */}


        </tr>

    );
};

export default OrderRow;
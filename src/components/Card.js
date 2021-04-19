import React from 'react'; 

function card({productName, price}) {
    return (
        <div>
            =================
            <div>{productName}</div>
            <div>{price}</div>
            ===================

        </div>
    )
}

export default card;

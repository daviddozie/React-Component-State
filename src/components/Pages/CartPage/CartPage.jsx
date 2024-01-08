import Header from '../../Header/Header'
import Cart from '../../Pages/CartPage/Cart/Cart';
import { useState } from "react";

function CartPage() {

    const [prices, setPrices] = useState([5000, 2000, 3000]);

    const updatePrice = (index, updatedPrice) => {
        setPrices(prevPrices => {
            const newPrices = [...prevPrices];
            newPrices[index] = updatedPrice;
            return newPrices;
        });
    };

    const cards = [
        {
            image: "/images/item1.jpg",
            label: "KFC - King Bucket"
        },
        {
            image: "/images/item2.jpg",
            label: "Refuel Max"
        },
        {
            image: "/images/item3.jpg",
            label: "Express meal"
        },
    ];

    return (
        <>
            <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto'>
                <Header
                    fTitle={"Food"}
                    lTitle={"Bag"}
                    homeLabel={"Home"}
                    cartLabel={"Cart"}
                />
                {cards.map((item, index) => (
                    <Cart
                        key={index}
                        index={index}
                        image={item.image}
                        label={item.label}
                        price={prices[index]}
                        updatePrice={updatePrice}
                    />
                ))}
            </div>
        </>
    )

}

export default CartPage;
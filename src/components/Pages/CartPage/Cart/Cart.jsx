import Button from "../../../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Cart = ({
    image, 
    label, 
    price,
}) => {
    const [count, setCount] = useState(1);

    const formatPrice = (value) => {
        if (value !== undefined && value !== null) {
            return value.toLocaleString('en-US');
        } else {
            return "";
        }
    };

    const totalPrice = price * count;

    const addCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const minusCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <>
            <div className="bg-[#262626] rounded-[8px] md:p-4 p-2 flex items-center justify-between mb-5 mt-[50px] w-full">
                <div className="flex items-center gap-3">
                    <div className="overflow-hidden">
                        <img src={image} alt="KFC" className="rounded-[5px]" />
                    </div>
                    <div>
                        <p className="text-[#eee] mb-2 text-[12px] md:text-[16px]">{label}</p>
                        <div className="flex items-center gap-4">
                            <Button handleEvent={addCount}>
                                <FontAwesomeIcon icon={faPlus}  className="text-[10px] md:text-[16px]"/>
                            </Button>
                            <p className="text-[#eee] text-[14px] md:text-[16px]">{count}</p>
                            <Button handleEvent={minusCount}>
                                <FontAwesomeIcon icon={faMinus} className="text-[10px] md:text-[16px]"/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[#eee] text-[14px] md:text-[16px]"><FontAwesomeIcon icon={faDollarSign} />{formatPrice(totalPrice)}</p>
                </div>
            </div>
        </>
    )
}

export default Cart;

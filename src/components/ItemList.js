import { useDispatch } from 'react-redux';
import {CDN_URL} from '../utils/constants';

import {addItem} from '../utils/createSlice';

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));  
    }

    return (
        <div>
           {items?.map(item=>{
                const { name, description, id, imageId, price,defaultPrice } =
                  item.card.info;
                return(
                    <div 
                        key={id}
                        className="mb-4 border-b-[1px] border-b-gray-100 pb-6 flex"
                    >
                        <div className="w-9/12">
                            <p className="font-bold text-sm">{name}</p>
                            <p className="text-sm font-semibold">₹{price || defaultPrice}</p>
                            <p className="text-sm pt-2">{description}</p>
                        </div>
                        <div className="w-3/12 pl-4 relative">
                            <img 
                                src={CDN_URL + imageId}
                                className="rounded-lg"
                            />
                            <button 
                                className="border border-spacing-2 p-2 rounded-lg w-8/12 absolute bottom-[-15px] left-9 bg-white text-orange-500 font-bold"
                                onClick={() => handleAddItem(item)}
                            >
                                ADD +
                            </button>
                        </div>
                    </div>
                )
           })}
        </div>
    )
};

export default ItemList;

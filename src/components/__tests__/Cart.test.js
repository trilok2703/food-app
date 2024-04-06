import { fireEvent, prettyDOM, render,screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import "@testing-library/jest-dom";
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import appstore from '../../utils/appStore';
import UserContext from '../../utils/UserContext';
import Header from '../Header';
import RestaurantMenu from '../RestaurantMenu';
import Cart from '../Cart';
import RESMENU_MOCK_DATA from '../mocks/resMenuMock.json';


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(RESMENU_MOCK_DATA);
        }
    })
})

it("should load restaurant menu component", async()=>{
    await act(async()=>(
        render(
        <BrowserRouter>
            <Provider store={appstore}>
                <UserContext.Provider value={{loggedInUser : "Trilok Vallamkonda"}}>
                    <Header/>
                </UserContext.Provider>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
        )
    ));

    const vegMenuAcc = screen.getByText("Veg Curries (11)");

    expect(vegMenuAcc).toBeInTheDocument();

    // on clicking the veg Curries accordion it should load 11 items
    fireEvent.click(vegMenuAcc);

    const vegMenuList = screen.getAllByTestId("resMenuItem");
    expect(vegMenuList.length).not.toBe(10);
    expect(vegMenuList.length).toBe(11);

    // Need to cart items 0 text in the Header component
    const cartItemsBefore = screen.getByText("Cart (0 items)");
    expect(cartItemsBefore).toBeInTheDocument();

    // Need to click the ADD button
    const addItemBtn = screen.getAllByRole("button",{name:"ADD +"});
    fireEvent.click(addItemBtn[0]);

    const cartItemsAfter = screen.getByText("Cart (1 items)");
    expect(cartItemsAfter).toBeInTheDocument();

    // It should load cart component and check whether it's loading by checking cart heading
    const cartHeading = screen.getByRole("heading",{name:"Cart"});
    expect(cartHeading).toBeInTheDocument();

    // now veg menu items list should be 12 including one added cart item
    const vegMenuCartItem = screen.getAllByTestId("resMenuItem");
    expect(vegMenuCartItem.length).not.toBe(13);
    expect(vegMenuCartItem.length).toBe(12);

    // Now click on the clear cart and check the no items in the cart text
    const clearCartBtn = screen.getByRole("button",{name:"Clear cart"});
    fireEvent.click(clearCartBtn);

    const noItemsText = screen.getByRole("heading",{name:"No items in the cart!. Please add the items to the cart"});
    expect(noItemsText).toBeInTheDocument();
})
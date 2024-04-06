import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

import appStore from '../../utils/appStore';
import UserContext from "../../utils/UserContext";
import useOnlineStatus from "../../utils/useOnlineStatus";
// Mocking the useOnlineStatus hook
jest.mock('../../utils/useOnlineStatus', () => jest.fn());

it("should render the Header component with a login button",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser : "Trilok Vallamkonda"}}>
                    <Header/>
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole('button',{name:"Login"});
    // screen.debug();

    // console.log(prettyDOM());

    // Assertion
    expect(loginBtn).toBeInTheDocument();
});

it("should render Header component with a cart items 0",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser : "Trilok Vallamkonda"}}>
                    <Header/>
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>
    );

    const cartText = screen.getByText("Cart (0 items)");

    // Assertion
    expect(cartText).toBeInTheDocument();
});

it("should render Header component with a cart item",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser : "Trilok Vallamkonda"}}>
                    <Header/>
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>
    );

    // using regex just to find whether the text with cart is there or not
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();

});

it("should change the login button to logout button on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{loggedInUser : "Trilok Vallamkonda"}}>
                    <Header/>
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button",{name:"Logout"});

    // Assertion
    expect(logoutBtn).toBeInTheDocument();

    fireEvent.click(logoutBtn);

    expect(loginBtn).toBeInTheDocument();
});

it("should check the offline status of the user", async ()=>{
    // Mocking online status as false
    useOnlineStatus.mockReturnValue(false);

    await act(async()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <UserContext.Provider value={{loggedInUser : "Trilok Vallamkonda"}}>
                        <Header/>
                    </UserContext.Provider>
                </Provider>
            </BrowserRouter>
        );
    })

    expect(screen.getByTestId('onlineStatus')).toHaveTextContent('Online status:🔴');
});;

it("should check the online status of the user", async()=>{
    // Mocking online status as true
    useOnlineStatus.mockReturnValue(true);

    await act(async()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <UserContext.Provider value={{loggedInUser : "Trilok Vallamkonda"}}>
                        <Header/>
                    </UserContext.Provider>
                </Provider>
            </BrowserRouter>
        );
    })

    expect(screen.getByTestId('onlineStatus')).not.toHaveTextContent('Online status:🔴');
    expect(screen.getByTestId('onlineStatus')).toHaveTextContent('Online status:✔');
})
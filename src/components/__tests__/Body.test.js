import { fireEvent, getByTestId, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

import Body from "../Body";

import MOCK_DATA from '../mocks/resListMockData.json';
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should search restaurants list with pizza text input", async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        );
    });

    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    // console.log(searchInput);
    expect(searchInput).toBeInTheDocument();

    fireEvent.change(searchInput,{target:{value:"pizza"}});
    fireEvent.click(searchBtn);

    const resCard = screen.getAllByTestId("rescard");
    expect(resCard.length).toBe(3);
});

it("should filter the top rated restaurants", async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
            <Body/>
        </BrowserRouter>
        )
    });

    const cardsBeforFilter = screen.getAllByTestId("rescard");
    expect(cardsBeforFilter.length).toBe(9);

    const topResFilterBtn = screen.getByTestId("topResFilterBtn");
    fireEvent.click(topResFilterBtn);

    const resCard = screen.getAllByTestId("rescard");
    expect(resCard.length).toBe(5);
});
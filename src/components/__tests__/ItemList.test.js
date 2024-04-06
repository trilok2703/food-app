import { render,screen } from "@testing-library/react";
import ItemList from "../ItemList";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import "@testing-library/jest-dom";

import appStore from "../../utils/appStore";

it("should display defaultprice when price is not available",()=>{
    const items = [
        {
          card: {
            info: {
              name: 'Test Item',
              description: 'Test description',
              id: 1,
              imageId: 'image123',
              price: null, // Simulating price not available
              defaultPrice: 10 // Simulating defaultPrice available
            }
          }
        }
      ];

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <ItemList items={items}/>
            </Provider>
        </BrowserRouter>
    );

    const defaultPriceTxt = screen.getByText("₹10");
    expect(defaultPriceTxt).toBeInTheDocument();
})
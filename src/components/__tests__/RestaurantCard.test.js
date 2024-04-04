import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";

import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from '../mocks/resCardMock.json';


it("Should render the RestaurantCard component with props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const resName = screen.getByRole("heading", {name:"Chinese Wok"});

    expect(resName).toBeInTheDocument();
});

it("should render RestaurantCard component with promoted label",()=>{
    // Test higher order component
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // console.log(RestaurantCardPromoted);

    render(<RestaurantCardPromoted resData={MOCK_DATA}/>);

    const promotedLabel = screen.getByText("Promoted");

    expect(promotedLabel).toBeInTheDocument();

});
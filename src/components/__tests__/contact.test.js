import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'

import Contact from '../Contact';

test("should load the contact us component", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
});

test("should load the button inside contact us component", ()=>{
    render(<Contact/>);

    // const button = screen.getByRole("button");

    // const contactTxt = screen.getByText("Contact me");
    const inputPlaceholder = screen.getByPlaceholderText("contact");

    // Assertion
    expect(inputPlaceholder).toBeInTheDocument();
});

test("should load 2 input elements in contact us component", ()=>{
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes);
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
});
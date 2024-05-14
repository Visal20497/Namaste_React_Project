import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Component/Header";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import AppStore from "../Utils/AppStore";
import { BrowserRouter } from "react-router-dom";

describe("This is unit testing for the Header component",()=>{
    it("Should load Header component with the login button", () => {
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        let result = screen.getByRole("button",{name:"LogIn"})
        expect(result).toBeInTheDocument()
    })
    
    it("Should load Header component click the logIn button it change logout", () => {
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        let result = screen.getByRole("button",{name:"LogIn"})
        fireEvent.click(result)
        let LogOutButton = screen.getByRole("button",{name:"LogOut"})
        expect(LogOutButton).toBeInTheDocument()
    })
    
    it("Should load Header component with the cart 0 items", () => {
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        )
        let result = screen.getByTestId("cart-count")
        expect(result).toBeInTheDocument('Cart 0')
    })
})
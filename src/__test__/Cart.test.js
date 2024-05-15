import '@testing-library/jest-dom';
import Mock_Data_Name from '../Mock/MockResMenu.json'
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Cart from '../Component/Cart'
import RestaurantMenu from '../Component/RestaurantMenu'
import AppStore from '../Utils/AppStore';
import { Provider } from 'react-redux';
import Header from '../Component/Header'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_Data_Name)
        }
    })
})

describe("This is the unit testing for cart component", () => {
    it("Should load the Restaurant Menu", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart/>
                </Provider>
            </BrowserRouter>
        ))
        
    //     const accordianHeader = screen.getByText("Snack Time (21)")
    //     fireEvent.click(accordianHeader)
    //     expect(screen.getAllByTestId('foodItems').length).toBe(21)
    //     const addBtn = screen.getAllByRole("button", { name: "Add+" })
    //     fireEvent.click(addBtn[0])
    //    expect( screen.getByText("Cart 1")).toBeInTheDocument()

    //    expect( screen.getAllByTestId('foodItems').length).toBe(22)

    //    fireEvent.click(screen.getByRole('button',{name:"Clear Cart"}))

    //    expect( screen.getAllByTestId('foodItems').length).toBe(21)

    //    expect(screen.getByText('Cart is empty and Add the Items in the cart')).toBeInTheDocument()

    })
})
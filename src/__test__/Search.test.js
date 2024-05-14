import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Component/Body'
import Mock_Data_Res from '../Mock/MockRestaurentList.json'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_Data_Res)
        }
    })
})
describe("This is testing to search input  in our body component", () => {
    // beforeAll(()=>{
    //     console.log("Before All")
    // })
    // afterAll(()=>{
    //     console.log("After All")
    // })
    // beforeEach(()=>{
    //     console.log("Before Each")
    // })
    // afterEach(()=>{
    //     console.log("After Each")
    // })
    it("Should render the body component with search input", async () => {
        await act(async () => render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        ))
        const cardsBeforeSeach = screen.getAllByTestId('resCard')
        expect(cardsBeforeSeach.length).toBe(20)

        const Search_input = screen.getByPlaceholderText('Enter the Restaurant..')
        fireEvent.change(Search_input, { target: { value: "Burger" } })
        await screen.findAllByTestId('resCard')
        const cardsAfterSearch= screen.getAllByTestId('resCard')
        expect(cardsAfterSearch.length).toBe(20)   //4
    })

    // it("Should render the top rated restaurent",async ()=>{
    //     await act(async () => render(
    //         <BrowserRouter>
    //             <Body />
    //         </BrowserRouter>
    //     ))
    //     const cardsBefore = screen.getAllByTestId('resCard')
    //     expect(cardsBefore.length).toBe(20)

    //     const TopRateBtn=screen.getByRole("button",{name:"Top Rated Restaurant"})
    //     fireEvent.click(TopRateBtn)
    //     const cardsAfter= screen.getAllByTestId('resCard')
    //     expect(cardsAfter.length).toBe(10)  //15

    // })

})
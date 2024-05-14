import '@testing-library/jest-dom';
import RestaurantCard from '../Component/RestaurantCard';
import { render, screen } from '@testing-library/react';
import Mock_Data from '../Mock/RestaurantCard.json'



describe("This is testing for the restaurant component",()=>{
    it("Should render the Restaurnat Card with the props",()=>{
        render(<RestaurantCard resData={Mock_Data}/>)
        let name=screen.getByText('Pizza Hut')
        expect(name).toBeInTheDocument()
    })

    it("Should render the component with the promoted data",()=>{
        
    })
})
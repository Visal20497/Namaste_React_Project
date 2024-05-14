import { render, screen } from "@testing-library/react"
import Contact from "../Component/Contact"
import '@testing-library/jest-dom';


describe("This is the contact page test cases",()=>{
    test("Should component load",()=>{
        render(<Contact/>)
        const heading=screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })
    test("should load button inside the contact component",()=>{
        render(<Contact/>)
        const button=screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    test("should find name inside the contact component",()=>{
        render(<Contact/>)
        const name=screen.getByPlaceholderText('Name')
        expect(name).toBeInTheDocument()
    })
    test("should find input the contact component",()=>{
        render(<Contact/>)
        const result=screen.getAllByRole('textbox')
        console.log(result.length)
        expect(result.length).toBe(2)
    })
    
})



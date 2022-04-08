//Funciones nativas de JEST
import {render, screen} from '@testing-library/react';
import ProductForm from "../components/ProductForm"

//antes de cada uno
beforeEach(() => {
    render(<ProductForm />)
})
describe("when the page is mounted", () => {
    /*test ->
    Debe existir un titulo "Create product" 
    Debe existir 3 inputs (name, size, description)
    Debe existir un botón de submit
    */
   it("Should exist a title Create Product", () => {
    expect(screen.getByRole("heading", { name: /create product/i }))
   })

   it("Should exist a input (name)", () => {
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument;
    expect(screen.getByLabelText(/size/i)).toBeInTheDocument;
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument;
   })
   
})

//screen.getByRole
//screen.getByText

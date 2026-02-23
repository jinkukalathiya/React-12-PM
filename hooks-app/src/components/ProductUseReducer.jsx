import React, { act, useMemo, useState } from "react";
import { useReducer } from "react";

const initialState = {
    category : null,
    maxPrice : 50000
}

function reducer(state, action){
    switch(action.type){
        case "Set_Category":
            return {
                ...state,
                category: action.payload
            }

        case "Set_Price":
            return {
                ...state,
                maxPrice: action.payload
            }
        
        case "Reset":
            return initialState

        default:
            return state
    }
}


function ProductUseReducer(){

    const [state,dispatch] = useReducer(reducer, initialState);

    const products = [
        {
            pid : 1001,
            pname: "Laptop",
            category: "Electronics",
            price: 54999,
            companyName : "Lenovo"
        },
        {
            pid : 1002,
            pname: "Mobile",
            category: "Electronics",
            price: 79999,
            companyName : "Apple"
        },
        {
            pid : 1003,
            pname: "Air Fryer",
            category: "Home",
            price: 9599,
            companyName : "Philips"
        },
        {
            pid : 1004,
            pname: "Soundbar",
            category: "Fashion",
            price: 12999,
            companyName : "Zebronics"
        },
        {
            pid : 1005,
            pname: "TV",
            category: "Electronics",
            price: 150000,
            companyName : "Samsung"
        }
    ]

    const filterProduct = products.filter((product) => {
        const matchCategory = state.category === "all" || product.category === state.category;
        return matchCategory;
    })


    return(
        <>
            <h1>Product Filter</h1>
            <select value={state.category} onChange={(e) => dispatch({ type: "Set_Category", payload: e.target.value}) }>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Home">Home</option>
                <option value="Fashion">Fashion</option>
            </select>

            <table border={1} cellPadding={10} cellSpacing={0}>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Product Company Name</th>
                    <th>Product Price</th>
                </tr>
                {

                    filterProduct.length === 0 ? (
                        <>
                            <p>No Product Found</p>
                        </>
                    ) : (
                        filterProduct.map((p,i) => (
                            <>
                                <tr key={i}>
                                    <td>{p.pid}</td>
                                    <td>{p.pname}</td>
                                    <td>{p.category}</td>
                                    <td>{p.companyName}</td>
                                    <td>{p.price}</td>
                                </tr>
                            </>
                        ))
                    )

                }
            </table>
        </>
    )
}

export default ProductUseReducer;

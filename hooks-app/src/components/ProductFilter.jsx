import React, { useMemo, useState } from "react";

function ProductFilter(){

    const [maxPrice, setMaxPrice] = useState(50000);
    const [theme, setTheme] = useState("light");

    const products = [
        {
            pid : 1001,
            pname: "Laptop",
            price: 54999,
            companyName : "Lenovo"
        },
        {
            pid : 1002,
            pname: "Mobile",
            price: 79999,
            companyName : "Apple"
        },
        {
            pid : 1003,
            pname: "Headphone",
            price: 1999,
            companyName : "Boat"
        },
        {
            pid : 1004,
            pname: "Soundbar",
            price: 12999,
            companyName : "Zebronics"
        },
        {
            pid : 1005,
            pname: "TV",
            price: 150000,
            companyName : "Samsung"
        }
    ]

    const filterProducts = useMemo(() => {
        console.log("Product Filtering.....");
        return products.filter(p => p.price <= maxPrice);
    }, [maxPrice]);

    return(
        <>
            <h1>Product Filter</h1>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Company Name</th>
                    <th>Product Price</th>
                </tr>
                {
                    products.map((p,i) => (
                        <>
                            <tr key={i}>
                                <td>{p.pid}</td>
                                <td>{p.pname}</td>
                                <td>{p.companyName}</td>
                                <td>{p.price}</td>
                            </tr>
                        </>
                    ))
                }
            </table>

            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />

            <table border={1} cellPadding={10} cellSpacing={0}>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Company Name</th>
                    <th>Product Price</th>
                </tr>
                {
                    filterProducts.map((f,i) => (
                        <>
                            <tr key={i}>
                                <td>{f.pid}</td>
                                <td>{f.pname}</td>
                                <td>{f.companyName}</td>
                                <td>{f.price}</td>
                            </tr>
                        </>
                    ))
                }
            </table>

            <button onClick={(e) => setTheme(theme === "light" ? "Dark" : "light" )}>Toggle Theme</button>
        </>
    )
}

export default ProductFilter;

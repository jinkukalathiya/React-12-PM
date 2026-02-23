import React from "react";

function FAQList(){

    const faqs = [
        {
            que : "What is List?",
            ans : "lists are a fundamental concept for displaying collections of data dynamically."
        },
        {
            que : "What is Refs?",
            ans : "Refs in React provide a way to access DOM nodes or React components directly."
        },
        {
            que : "What is Fragments?",
            ans : "let you group multiple elements in a component without adding extra DOM nodes"
        }
    ]

    return(
        <div>
            <h1>Fragment</h1>
            {
                faqs.map((faq) => (
                    <React.Fragment key={faq.que}>
                        <h3>{faq.que}</h3>
                        <p>{faq.ans}</p>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default FAQList;
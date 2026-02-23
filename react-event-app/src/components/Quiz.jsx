import React, { use, useRef } from "react";

function Quiz() {
  const Options = [
    {
      id: "Option1",
      text: "C Language",
    },
    {
      id: "Option2",
      text: "C++ Language",
    },
    {
      id: "Option3",
      text: "DSA",
    },
    {
      id: "Option4",
      text: "Javascript",
    },
  ];

  const otp1 = useRef();
  const otp2 = useRef();
  const otp3 = useRef();

  return (
    <>
        <div>
            <h1>Object with Array</h1>
            <ul>
                {Options.map((option) => (
                <li key={option.id}>{option.text}</li>
                ))}
            </ul>
            <div>
                <h1>Use Ref</h1>
                <div>
                    <label htmlFor="">Input 1 : </label>
                    <input maxLength={1} ref={otp1} onChange={() => otp2.current.focus()} />
                    <br/>
                    <br/>
                    <label htmlFor="">Input 2 : </label>
                    <input maxLength={1} ref={otp2} onChange={() => otp3.current.focus()} />
                    <br/>
                    <br/>
                    <label htmlFor="">Input 3 : </label>
                    <input maxLength={1} ref={otp3}/>
                </div>
            </div>
        </div>
        <div>

        </div>
    </>
  );
}

export default Quiz;

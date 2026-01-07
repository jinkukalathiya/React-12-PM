import React from "react";
import { useState, useEffect } from "react";
import User1 from "./User1";
import User2 from "./User2";
import User3 from "./User3";

export default function UserInfo() {

    const [step, setStep] = useState(() => {
        return Number(sessionStorage.getItem("CountStep")) || 1;
    })

    const [formData, setFormData] = useState(() => {
        return JSON.parse(sessionStorage.getItem("UserData")) || {
            name : "",
            phone : "",
            age : "",
            course : "",
            subtopic : ""
        }
    });

    useEffect(() => {
        sessionStorage.setItem("UserData", JSON.stringify(formData));
    },[formData]);

    useEffect(() => {
        sessionStorage.setItem("CountStep", step);
    },[step]);

    const next = () => setStep(step + 1);
    const prev = () => setStep(step - 1);

  return (
    <>
        <h1>Multi Step Form</h1>

        {step === 1 && (
            <User1 formData={formData} setFormData={setFormData} next={next}/>
        )}

        {step === 2 && (
            <User2 formData={formData} setFormData={setFormData} next={next} prev={prev}/>
        )}

        {step === 3 && (
            <User3 formData={formData} prev={prev}/>
        )}

    </>
  );
}


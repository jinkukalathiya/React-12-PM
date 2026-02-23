import React, { useEffect, useState } from "react";

function ConditionalRender() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false),5000);
    },[]);

    return(
        <>
            <div>
                {
                    loading ? (
                        <h1>Loading.....</h1>
                    ) : (
                        <h1>Loading SuccessFul.....</h1>
                    )
                }
            </div>
        </>
    )
}

export default ConditionalRender;
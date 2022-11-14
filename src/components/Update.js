
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

// import { ProgressBar } from 'react-bootstrap';



function Update(){

    //call /update endpoint
    const [update, setUpdate] = useState(0);

    const updateData = async() => {
        try {
            await fetch('/updateDB')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
            }).then(jsonRes => setUpdate(jsonRes.update));
            console.log("Updating data");
        }
        catch (error) {
            console.log("ERROR updating data");
        }
    }
    
    return(
    <>
    <script>
        {updateData()}
    </script>
    <div className="container">
        <div className="row">
        <h1>Updating database with new videos</h1>
        </div>
    </div>
    </>
    );
    
}
export default Update;

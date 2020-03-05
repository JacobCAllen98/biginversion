import React, { useState } from "react";

const MyNewComponent = props =>{
    const[birthday, haveBirthday] = useState(0);
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <h4>Age: { props.age + birthday }</h4>
            <h4>Hair Color: { props.hairColor }</h4>
            <button onClick={() => haveBirthday(birthday+1)}>Birthday!</button>
        </div>
    )
}


export default MyNewComponent;
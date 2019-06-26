import React, { useState } from 'react'

export default function addPost({ data, handleCreate }) {
    const [firstName, setfirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameInputChange = (event) => {
        event.persist();
        console.log('event: ', event.target.value)
        setfirstName(event.target.value);
    }
    const handleLastNameInputChange = (event) => {
        event.persist();
        console.log('event: ', event.target.value)
        setLastName(event.target.value);
    }

    return (
        <>
            <div>
                <h4>{firstName} {lastName}</h4>
                {/* <form> */}
                <label>FirstName: </label>
                <input type="text" name="firstname" onChange={handleFirstNameInputChange} />
                <label>LastName: </label>
                <input type="text" name="lastName" onChange={handleLastNameInputChange} />
                <button onClick={() => handleCreate(firstName, lastName)}>Save</button>
                {/* </form> */}

            </div>
        </>
    )
}
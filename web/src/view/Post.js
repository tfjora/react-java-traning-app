import React from 'react'

export default function Post({data, deleteForm}) {
    return (
        <div>
                <span>id: {data.id}</span><br></br>
                <span>Title: {data.title}</span>
                <button onClick={() => deleteForm(data.id)}>Delete</button>
        </div>
    )
}

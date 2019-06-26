import React from 'react';
import AddPost from './AddPost';
import Post from './Post';

export default function Posts( {data, handleCreate, deleteForm }) {

    return (
        <>
        {console.log('data22: ', data)}
            <AddPost
                handleCreate={(firstName, lastName) => handleCreate(firstName, lastName)} />
            {
                data.posts.map(post => <Post data={post} key={post.id} deleteForm={deleteForm}/>)
            }
        </>
    )
}

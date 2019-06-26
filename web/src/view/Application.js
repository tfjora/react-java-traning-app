import React, { useEffect, useState } from 'react'
import { firestore } from "../firebase/firebase.js";
import { collectIdsAndDocs } from '../common/utilites.js';
import Posts from './Posts';

// export FormContext = 

export default function Application() {
    const [data, setData] = useState({})
    const [isFetching, setisFetching] = useState(false)
    // const context = createContext();

    useEffect(() => {

        async function snapshots() {
            setisFetching(true)
            const snapshots2 = await firestore.collection('posts').get();
            const posts = snapshots2.docs.map(collectIdsAndDocs);

            setData({ posts })
            setisFetching(false)
        }
        snapshots();
    }, [])

    const handleCreate = async (firstName, lastName) => {
        setisFetching(true)
        const docRef = await firestore.collection('posts').add({ "firstName": firstName, "lastName": lastName })
        const doc = await docRef.get();

        const newData = collectIdsAndDocs(doc);
        setData({ data: [newData, ...data] })
        setisFetching(false)
    };

    const handleDelete = async (id) => {
        setisFetching(true)
        const post = data.posts.filter( post => post.id !== id)
        const test = {data: {posts: post}}
        await firestore.doc(`posts/${id}`).delete();
        setData({posts: post});
        setisFetching(false)
    }

    if (Boolean(data.posts) && !Boolean(isFetching)) {
        { console.log('data true', data) }
        return (
            <>
                <div>
                    <Posts
                        handleCreate={(firstName, lastName) => handleCreate(firstName, lastName)}
                        data={data}
                        deleteForm={(id) => handleDelete(id)}
                    />
                </div>
            </>
        )
    }
    return (
        <h1>Fant ingen treningslogger i databasen/ fetcing {console.log('isFetching: ', isFetching, data)}</h1>
    );
}
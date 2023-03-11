import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [thread, setThread]= useState("")
    const [threadList, setThreadList] = useState([]);
    const navigate = useNavigate();

    //👇🏻 The useEffect Hook
    useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("_id")) {
                navigate("/");
            } else {
                fetch("http://localhost:4000/api/all/threads")
                .then((res) => res.json())
                .then((data) => setThreadList(data.threads))
                .catch((err) => console.error(err));
            }
        };
        checkUser();
    }, [navigate]);

    const createThread = () => {
        fetch("http://localhost:4000/api/create/thread", {
            method: "POST",
            body: JSON.stringify({
                thread,
                userId: localStorage.getItem("_id"),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.message);
                setThreadList(data.threads)
            })
            .catch((err) => console.error(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        //calls the function
        createThread();
        console.log([thread])
        setThread("")
    }
  return (
    <>
     <Nav />  
     <main className='home'>
       <h2 className='homeTitle'>Create a Thread</h2>
       <form className='homeForm' onSubmit={handleSubmit}>
        <div className='home__container'>
            <label htmlFor='thread'>Title</label>
            <input
                type='text'
                name='thread'
                required
                value={thread}
                onChange={(e) => setThread(e.target.value)}
            />   
         </div>
        <button className='homeBtn'>Create Thread</button>
       </form>
       <div className='thread__container'>
                {threadList.map((thread) => (
                    <div className='thread__item' key={thread.id}>
                        <p>{thread.title}</p>
                        <div className='react__container'>
                            <Likes numberOfLikes={thread.likes.length} threadId={thread.id} />
                            <Comments
                                numberOfComments={thread.replies.length}
                                threadId={thread.id}
                                title={thread.title}
                            />
                        </div>
                    </div>
                ))}
            </div>
    </main>     
    </>
  )
}
export default Home
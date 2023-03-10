import React, {useState} from 'react'

const Replies = () => {
    const [reply, setReply] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log([reply])
        setReply("")
    }
  return (
    <main className='replies'>
        <form className='modal__content' onSubmit={handleSubmit}>
            <label htmlFor='reply'>Reply to the Thread</label>
            <textarea 
               rows={5}             
               value={reply}
               onChange={(e) => setReply(e.target.value)}
               type='text'
               name='reply'
               className='modalInput'
            />
        </form>
    </main>
  )
}

export default Replies
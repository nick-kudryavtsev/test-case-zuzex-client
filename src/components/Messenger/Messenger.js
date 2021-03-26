import React, {useState, useEffect} from 'react';
import {socket} from "../../socket";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../toolkitRedux/toolkitSlice";
import './Messenger.css'

const Messenger = () => {
    const [message, setMessage] = useState('')
    const messages = useSelector(state => state.toolkit.messages)

    const dispatch = useDispatch()

    const emitMessage = (e) => {
        e.preventDefault()
        if(message){
            socket.emit('chat message', message)
            setMessage('')
        }
    }

    useEffect(() => {
        socket.on('chat message', msg => {
            dispatch(addMessage({text: msg.text, user: msg.user}))
        })
    }, [dispatch])




    return (
        <div className="messenger">
            <ul>
                {messages.map( (item, i) => {
                    return (
                        <li key={i}>Message: {item.text} Author: {item.user}</li>
                    )
                })}
            </ul>

            <form onSubmit={(e) => {
                emitMessage(e)
            }}>
                <input
                    type="text"
                    placeholder="Start messaging..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button
                    type="submit"
                >Send</button>
            </form>
        </div>
    );
};

export default Messenger;
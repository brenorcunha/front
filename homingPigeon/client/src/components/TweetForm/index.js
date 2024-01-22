import React, {useState} from "react"
import {Container} from "./styles"
import axios from "axios"

export default function TweetForm() {
    const[text, setText] = useState()

    const handleTweet = async event =>{
        event.preventDefault()
        //THE PAGE TWEETS WILL BE CREATED FUTURELLY. PAGE 45 FROM NOW ON!!!
        try{
            const token= localStorage.setItem("SESSION_TOKEN", response.data.token)
            const response = await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/tweets`,
                {
                    content: text
                },
                {
                    headers: { "auth:token": token }
                }
            )
            setText("")
            console.log(response)
        }
        catch(error){
            console.error(error)
        } 
   }
    return(
        <Container>
            
            <textarea 
            required
            value = {text}
            onChange={e => setText(e.target.value)}
            placeholder="What do you want to share with us?"
            rows={4}
            />
            
            <div>
                <button onClick={handleTweet}>Share</button>
            </div>
        </Container>
    )
}
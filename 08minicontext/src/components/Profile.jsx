import React,{useContext} from 'react'
import UserContext from '../Context/UserContent'

function Profile() {
     const{user}=useContext(UserContext)
    

     if(!user){
        return(
            <div>
                PLEASE LOGIN
            </div>
        )
     }
     return(
        <div>
            WELCOME {user.username}
        </div>
     )
}

export default Profile

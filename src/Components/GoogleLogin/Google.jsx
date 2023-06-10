import React from 'react';
import GoogleIcon from '../../assets/icon/icons8-google.svg'
import useAuth from '../../Hooks/useAuth';
const Google = () => {
    const { googleLogin } = useAuth()
    const googleSignUp = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                const userInfo = {name:user.displayName,email:user.email }
                fetch("http://localhost:5000/users", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                    console.log(data)
                })
            })
        .catch(err => console.log(err))
    }
    return (
        <div className='text-center'>
           <button onClick={googleSignUp}><img src={GoogleIcon} width='50px' alt="" /></button> 
        </div>
    );
};

export default Google;
import React from 'react';
import GoogleIcon from '../../assets/icon/icons8-google.svg'
import useAuth from '../../Hooks/useAuth';
const Google = () => {
    const { googleLogin } = useAuth()
    const googleSignUp = () => {
        googleLogin()
            .then(result => {
            const user = result.user
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
import React, { useState, useEffect } from 'react';

const UsersForm = ({addUser, userSelected, deselectUser, editUser}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")

    useEffect(() => {
        if(userSelected !== null){
        setFirstName(userSelected.first_name)
        setLastName(userSelected.last_name)
        setEmail(userSelected.email)
        setPassword(userSelected.password)
        setBirthday(userSelected.birthday)
        }else{
            reset();
        }
    },[userSelected])

    const submit = e => {
        e.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday
        }
        if(userSelected === null){
            addUser(user);
            reset();
        }else {
            editUser(user);
            deselectUser();
        }

        
    }
    const reset = ()=>{
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }

    return (
        <form onSubmit={submit} className="users-form" >
            <div className='input-container'>
                <label  htmlFor="firstName">First Name</label>
                <input  
                type="text" 
                id='firstName' 
                onChange={e => setFirstName(e.target.value)} 
                value={firstName}/>
            </div >
            <div className='input-container'>
                <label htmlFor="lastName">Last Name</label>
                <input 
                type="text" 
                id='lastName' 
                onChange={e => setLastName(e.target.value)} 
                value={lastName}/>
            </div >
            <div className='input-container'>
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id='email' 
                onChange={e => setEmail(e.target.value)} 
                value={email}/>
            </div >
            <div className='input-container'>
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id='password' 
                onChange={e => setPassword(e.target.value)} 
                value={password}/>
            </div >
            <div className='input-container'>
                <label htmlFor="birthday">Birthday</label>
                <input 
                type="date" 
                id='birthday' 
                onChange={e => setBirthday(e.target.value)}
                value={birthday}/>
            </div >
            <button type='submit'>Submit</button>
            {
                userSelected !== null && (
                    <button className='cancel' type='button' onClick= {deselectUser}>Cancel</button>
                )
            }
        </form>
    );
};

export default UsersForm;
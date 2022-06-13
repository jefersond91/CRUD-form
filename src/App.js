import "./styles.css";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [ users, setUsers] = useState([]);
    const [ userSelected, setUserSelected ] = useState(null)

    useEffect(()=> {
        axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data))
    }, [])

    const getUsers = () => {
        axios.get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data))
    }

    const addUser = (userItem) => {
        axios.post('https://users-crud1.herokuapp.com/users/', userItem)
        .then(() => getUsers())
        .catch(error => console.log(error.response));
    }


    const removeUser = id => {
        // Con API
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then( () => getUsers())
    }

    const selectUser = user => {
        setUserSelected(user);
    }

    const deselectUser = () => {
        setUserSelected(null);
    }
    
    const editUser = (userEdited) => {
        // Con API
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, userEdited)
        .then(()=> getUsers())
    }
    
    const [showModal, setShowModal] = useState(false);


    return (
        <div className="App">
            <button onClick={() => setShowModal(true)}>Abrir modal</button>
                {showModal && <Modal close={() => setShowModal(false)} />}
            <UsersForm 
                addUser={addUser} 
                userSelected ={userSelected}
                deselectUser ={deselectUser}
                editUser ={editUser}/>
            <UsersList 
                users ={users} 
                removeUser ={removeUser} 
                selectUser ={selectUser}/>
        </div>
    );
}

export default App;

import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [userUpdate, setUserUpdate] = useState()
  
  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  }, [])

  console.log(users);
  

  return (
    <div>
      <h2>Project4</h2>
      <FormUser
      createUser={createUser}
      userUpdate={userUpdate}
      updateUser={updateUser}
      setUserUpdate={setUserUpdate}
      />
      <div>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setUserUpdate={setUserUpdate}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App

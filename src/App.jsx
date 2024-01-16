import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import ConfirmationCard from './components/ConfirmationCard'
import EmptyUserCard from './components/EmptyUserCard'

function App() {

  const [userUpdate, setUserUpdate] = useState()
  const [isFormClose, setIsFormClose] = useState(true)
  const [isConfirmation, setIsConfirmation] = useState(true)
  const [userDelete, setUserDelete] = useState('')

  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)

  useEffect(() => {
    getUsers()
  }, [])

  const handleOpenForm = () => {
    setIsFormClose(false)
  }

  const handleClickclose = () => {
    setIsFormClose(true)
  }

  return (
    <div className='app'>
      <div className='app__header'>
        <h2 className='app_title'>Usuarios</h2>
        <button className='app_btn' onClick={handleOpenForm}></button>
      </div>
      <div className={`app_confirmation__card ${isConfirmation && 'form_close'}`}>
        <ConfirmationCard
          setIsConfirmation={setIsConfirmation}
          userDelete={userDelete}
        />
      </div>
      <div onClick={handleClickclose} className={`background_form ${isFormClose && 'form_close'}`}></div>
      <div className={`form_container ${isFormClose && 'form_close'}`}>
        <FormUser
          createUser={createUser}
          userUpdate={userUpdate}
          updateUser={updateUser}
          setUserUpdate={setUserUpdate}
          setIsFormClose={setIsFormClose}
        />
      </div>
      {
        (users == (users == []))
          ?
          <div className='app_container_EmptyUser'>
            <EmptyUserCard/>
            <EmptyUserCard/>
            <EmptyUserCard/>
            <EmptyUserCard/>
            <EmptyUserCard/>
            <EmptyUserCard/>
          </div>
          
          : (
            <div className='container_userCard'>
              {
                users?.map(user => (
                  <UserCard
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                    setUserUpdate={setUserUpdate}
                    setIsFormClose={setIsFormClose}
                    setUserDelete={setUserDelete}
                    setIsConfirmation={setIsConfirmation}
                  />
                ))
              }
            </div>

          )
      }


    </div>
  )
}

export default App

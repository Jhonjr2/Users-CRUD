import './style/FormUser.css'
import './style/ConfirmationCard.css'



const ConfirmationCard = ({ setIsConfirmation, userDelete }) => {

  const handleExit = () => {
    setIsConfirmation(true)

  }

  return (
    <article className='confirmation_card'>
      <div className='form_x' onClick={handleExit}>x</div>
      <h2 className='title_confirmation'>Eliminar Usuario</h2>
      <p className='msg_confirmation'>El Usuario <span className='text_users_confirmation'>{userDelete}</span> ha sido eliminado</p>
      <button className='btn_confirmation' onClick={handleExit}>Aceptar</button>
    </article>
  )
}

export default ConfirmationCard
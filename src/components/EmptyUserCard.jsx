import './style/UserCard.css'

const EmptyUserCard = () => {
  return (
    <article className="card__user">
      <h2 className="user__name">Users</h2>
      <hr className="user__hr" />
      <ul className="user__list">
        <li className="user__item__list">
          <span className="user__label">Email</span>
          <span className="user__info"></span>
        </li>
        <li className="user__item__list">
          <span className="user__label">Birthday</span>
          <span className="user__info"><i className='bx bx-gift'></i></span>
        </li>
      </ul>
      <hr className="user__hr" />
      <footer className="footer__card">
        <button className="btn__delete"><i className='bx bx-trash'></i></button>
        <button className="btn__edit" ><i className='bx bx-edit-alt' ></i></button>
      </footer>
    </article>
  )
}

export default EmptyUserCard
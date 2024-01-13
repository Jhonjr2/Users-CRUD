import { useEffect } from "react"
import { useForm } from "react-hook-form"
import './style/FormUser.css'


const FormUser = ({ createUser, userUpdate, updateUser, setUserUpdate, setIsFormClose }) => {


    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(userUpdate)
    }, [userUpdate])



    const submit = data => {
        if (userUpdate) {
            //update
            updateUser(userUpdate.id, data)
            setUserUpdate()
        } else {
            //create
            createUser(data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    const handleClose = () => {
        setIsFormClose(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
        setUserUpdate()
    }

    return (
        <form className="form" onSubmit={handleSubmit(submit)}>
            <div className="form_x" onClick={handleClose}>x</div>
            <h2 className="form_title">{userUpdate ? 'Update User' : 'create'}</h2>
            <label className="form_label">
                <span>Email </span>
                <input {...register('email')} type="email" placeholder="user@gmail.com" />
            </label>
            <label className="form_label">
                <span className="form_field_name">Password </span>
                <input className="form_fiel" {...register('password')} type="password" placeholder="Password" />
            </label>
            <label className="form_label">
                <span className="form_field_name">First name </span>
                <input className="form_fiel"{...register('first_name')} type="text" placeholder="First name " />
            </label>
            <label className="form_label">
                <span className="form_field_name">Last name </span>
                <input className="form_fiel"{...register('last_name')} type="text" />
            </label>
            <label className="form_label">
                <span className="form_field_name">Birthday </span>
                <input className="form_fiel"{...register('birthday')} type="date" />
            </label>
            <button className="form_btn">{userUpdate ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormUser
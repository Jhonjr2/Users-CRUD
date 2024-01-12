import { useEffect } from "react"
import { useForm } from "react-hook-form"


const FormUser = ({ createUser, userUpdate, updateUser, setUserUpdate }) => {


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

    return (
        <div onSubmit={handleSubmit(submit)}>
            <form>
                <label>
                    <span>Email </span>
                    <input {...register('email')} type="email" />
                </label>
                <label>
                    <span>Password </span>
                    <input {...register('password')} type="password" />
                </label>
                <label>
                    <span>First name </span>
                    <input {...register('first_name')} type="text" />
                </label>
                <label>
                    <span>Last name </span>
                    <input {...register('last_name')} type="text" />
                </label>
                <label>
                    <span>Birthday </span>
                    <input {...register('birthday')} type="date" />
                </label>
                <button>{userUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    )
}

export default FormUser
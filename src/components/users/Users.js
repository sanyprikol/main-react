// Зробити компонент, в якому буде форма, за допомоги якої можливо
// створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users

import {useForm} from "react-hook-form";

import {createUsers} from "../../services";

const Users = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'email',
            address: 'address'
        }
    });
    const submit = (objeсt) => {
        createUsers(objeсt).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required:true})}/>
                {errors.name && <span>Enter the name</span>}
                <input type="text" {...register('username', {required:true})}/>
                {errors.username && <span>Enter the username</span>}
                <input type="text" {...register('email', {required:true})}/>
                {errors.email && <span>Enter the email</span>}
                <input type="text" {...register('address', {required:true})}/>
                {errors.address && <span>Enter the address</span>}
                <input type='submit'/>
            </form>

        </div>
    );
}
export {Users};
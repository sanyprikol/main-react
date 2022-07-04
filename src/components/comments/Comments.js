// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим
// запитом на http://jsonplaceholder.typicode.com/comments


import {useForm} from "react-hook-form";

import {createComments} from "../../services";

const Comments = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            email: 'email',
            body: 'body',

        }
    });
    const submit = (objeсt) => {
        createComments(objeсt).then(({data}) => console.log(data))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('name', {required:true})}/>
                {errors.name && <span>Enter the name</span>}
                <input type="text" {...register('email', {required:true})}/>
                {errors.email && <span>Enter the email</span>}
                <input type="text" {...register('body', {required:true})}/>
                {errors.body && <span>Enter the address</span>}
                <input type='submit'/>
            </form>

        </div>
    );
}
export {Comments};
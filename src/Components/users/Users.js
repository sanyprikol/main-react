// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси

import {useEffect, useState} from "react";
import {getUsers} from "../../services/User.api.service";

import User from "../user/User";

export default function Users ({lift}) {

    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]))
    },[]);
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} lift={lift}/>)}

        </div>
    );
}
// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про
// користувача(довільно обрану інформацію)

import {useEffect, useState} from "react";

import {User} from "../index";
import {UserDetails} from "../userDetails/UserDetails";

 function Users () {
     const [users, setUsers] = useState([]);
     const [user, setUser] = useState(null)

     useEffect(() => {
         fetch("https://jsonplaceholder.typicode.com/users")
             .then(value => value.json())
             .then(value => {
                 setUsers(value);
             });
     }, []);

     const button = (item) => {
         setUser(item);
     }

     return (


         <div>

             {user && <UserDetails user={user}/>}
             {users.map((user) => <User
                 key={user.id}
                 item={user}
                 button={button}
             />)}
         </div>
     );
 }
export {Users};
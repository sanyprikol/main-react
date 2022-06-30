import './App.css';
import Users from "./Components/users/Users";
import {getUsersPosts} from "./Components/services/User.api.service";
import {useState} from "react";
import Posts from "./Components/posts/Posts";


export default function App() {
    let [posts, setPosts] = useState([])
    const lift = (id) => {
        getUsersPosts(id).then(({data}) => {
            setPosts([...data]);
        })
    }
    return (
        <div className={'df'}>
            <div className={'left'}><Users lift={lift}/></div>
            <div className={'right'}><Posts posts={posts}/></div>


        </div>
    );
}


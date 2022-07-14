// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту
//     https://jsonplaceholder.typicode.com/posts/ID id поста взяти з коментаря (postId)
//     відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.

import './App.css';

import {Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostsCurrentComment from "./components/posts/PostsCurrentComment";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostsCurrentComment/>}/>
                    </Route>

                </Route>
            </Routes>

        </div>


    );
}

export default App;

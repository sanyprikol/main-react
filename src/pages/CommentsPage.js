import CommentsComponent from "../components/comments/CommentsComponent";

import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <CommentsComponent/>
        </div>
    );
}

export default CommentsPage;
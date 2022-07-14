import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPostsCurrentComment} from "../../services";
import PostComponent from "./PostComponent";

function PostsCurrentComment() {

    const {postId} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPostsCurrentComment(postId).then(value => setPosts([{...value}]))
    },[postId])

    return (
        <div>
            {
                posts.map(value => <PostComponent item={value} key={value.id}/>)
            }
        </div>
    );
}

export default PostsCurrentComment;
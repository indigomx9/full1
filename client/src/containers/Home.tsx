import React from "react";
import { PostForm } from "../components/PostForm";

type TPost = {
    id: string;
    createdAt: string;
    title: string;
    body: string;
}

export const Home = () => {
    const [posts, setPosts] = React.useState([{
        id: "",
        createdAt: "",
        title: "",
        body: ""
    }]);

    React.useEffect(() => {
        fetch("http://localhost:9000/api/")
        .then((res) => res.json())
        .then((posts) => setPosts(posts))
        .catch((err) => console.log(err));
    }, []);

    const editPost = (post: TPost) => {
        console.log(post);
    };

    const deletePost = (id: string) => {
        fetch(`http://localhost:9000/api/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            const postsUpdated = posts.filter((post) => post.id !== id);
            setPosts(postsUpdated);
        })
    };

    const addPost = (post: TPost) => {
        const postsUpdated = [post, ...posts];
        setPosts(postsUpdated);
    };

    return (
        <React.Fragment>
            <h1 className="banner">Home</h1>
            <section>
                <PostForm addPost={addPost} />
            </section>
            <main className="row">
                {posts.map((post) => (
                    <section key={post.id}>
                        <aside>
                            <div>{post.title}</div>
                            <div>{post.createdAt}</div>
                            <p>{post.body}</p>
                        </aside>
                        <aside>
                            <button onClick={editPost.bind(null, post)}>Edit</button>
                            <button onClick={deletePost.bind(null, post.id)}>Delete</button>
                        </aside>
                    </section>
                ))}
            </main>
        </React.Fragment>
    );
};



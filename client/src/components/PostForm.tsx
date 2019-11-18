import React from "react";

type Props = {
    addPost: Function,
    editingPost: {
        id: string;
        title: string;
        body: string;
    },
};

export const PostForm = (props: Props) => {
    const [loading, setLoading] = React.useState(false);
    const [post, setPost] = React.useState({ title: "", body: "" });

    React.useEffect(() => {
        setPost(props.editingPost);
    }, [props.editingPost]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        fetch("http://localhost:9000/api/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        })
        .then((res) => {
            res.json()
            props.addPost(post);
            setPost({ title: "", body: "" });
            setLoading(false);
        })
        .catch((err) => console.error(err));
    };

    return (
        <React.Fragment>
            {!loading ? (
                <form onSubmit={onSubmit}>
                    <section>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            name="title"
                            value={post.title}
                            onChange={onChange}
                        />
                    </section>
                    <section>
                        <label htmlFor="title">Body</label>
                        <input 
                            type="text" 
                            name="body"
                            value={post.body}
                            onChange={onChange}
                        />
                    </section>
                    <button type="submit">Add</button>
                </form>
            ) : (
                <p>Loading...</p>
            )}
        </React.Fragment>
    );
};



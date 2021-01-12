import React from 'react';
import Post1 from './Post';
export default function Posts(props) {

    let postElement = props.postsPerson.map(post => {
        return (<Post1
            message={post.message}
            likesCount={post.likesCount}
        />)
    })
    return (

        <div className="post">
            <div>
                Мои посты
                <textarea></textarea>
                <button type="btn">Добавить пост</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    )
}

{/* <Post name="Dim" likesCount='7' />
<Post name="Vlad" likesCount='5' />
<input type="text"></input>
<button type="btn">Отправить</button> */}
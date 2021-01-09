import React from 'react';
import Post1 from './Post';
export default function Posts(props) {
    let postsPerson = [
        { id: 1, message: 'hello', likesCount: '1' },
        { id: 2, message: 'world', likesCount: '2' },
        { id: 3, message: 'People', likesCount: '7' },
        { id: 4, message: 'Street', likesCount: '5' },
        { id: 5, message: 'Bitcoin', likesCount: '100' },
    ]
    let postElement = postsPerson.map(post => {
        return <Post1
            message={post.message}
            likesCount={post.likesCount}
        />
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
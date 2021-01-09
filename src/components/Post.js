import React from 'react';
export default function Post1(props) {

    return (
        <div className="post">
            <div>
                <div><img className="img-avatar" src=" https://sun9-65.userapi.com/impg/nhmck4MhaTN0G4_-Zi8FiWbm7Uu6QPeGna0-HA/8dZJQdHlASU.jpg?size=1342x2140&quality=96&proxy=1&sign=00ff8f9fa3138db3406b2a8ae4f41b5f&type=album" alt="" />
                    {props.message}
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
} 
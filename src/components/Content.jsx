
import React from 'react';
import '../App.css';
export default function Content() {
    return (
        <nav className="wrapper-content">
            <div className="img-banner">
                <img className="banner-img" src="https://img1.akspic.ru/fit/69292-sneg-les-derevo-nebo-el-x750.jpg" alt="" />
            </div>
            <div className="avatar-content">
                <div >
                    <img className="img-avatar" src="https://sun9-65.userapi.com/impg/nhmck4MhaTN0G4_-Zi8FiWbm7Uu6QPeGna0-HA/8dZJQdHlASU.jpg?size=1342x2140&quality=96&proxy=1&sign=00ff8f9fa3138db3406b2a8ae4f41b5f&type=album" alt="" /></div>
                <div>Dim</div>
            </div>
            <div className="post">
                <input type="text"></input>
                <button type="btn">Отправить</button>
            </div>
        </nav>
    )
}

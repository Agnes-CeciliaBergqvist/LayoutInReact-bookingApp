import React from 'react'
import {Link} from "react-router-dom"; 

function Menu() {
    return (
        <div>

                <nav>
                    <Link to="/">CardList</Link>
                    <Link to="/form">Lägg till</Link>
                </nav>
            
        </div>
    )
}

export default Menu

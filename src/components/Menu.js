import React from "react";
import { Link } from "react-router-dom";
// import 'https://fontawesome.com/';

function Menu() {
  return (
    <div>
      <nav class="bg-grey-100">
        <div class="max-w-6x1 mx-auto border border-red-400">
          <div class="flex justify-between">
            {/* <div class="flex"> */}
              <span>Last minute travel</span>
              <button>
                <i class="material-icons">menu</i>
              </button>

              <Link to="/">CardList</Link>
              <Link to="/form">Lägg till</Link>
              <Link to="/">My trips</Link>
              <button class="py-2 px-3 bg-yellow-400 text-yellow-900 rounded">Login</button>
            {/* </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

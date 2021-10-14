import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Pȃ̚s̭͍͙̆̾t͓͍̖̲̽̈ͣ͂ Pu𝖗𝖈h̡̰͓̫́ͅ
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
            ˂L͌ͭẸ̠̘̥̺͛̏̎̉͆A͚͔͕̘V̭̈͐̐Ë̪͔̰̫̩
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
            ∀̶A̶cct/̦͓͕̟̝̺͒͗ͣ͌ͮ͒ͫ̃̄C̢̤̭͈͚̤̤̽rea🆃🅴
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              _Log̐̂͐ͥi̖͙͓͎̫ͫn:
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag"></span>
          N̩̪̙̹͖̖̱̑͛ͨ͌̆FTͯ_*Ma͚͎̭̞̬̓̃r̩̣̬̼ͭͯk̜̯̳͙͋͒̐et
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;

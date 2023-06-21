import "../App.css"
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Welcome to the Calculator!
        </h2>
         <div className="button">
         <Link to="/calculator">Calculator</Link>
         </div>
      </header>
    </div>
  );
}

export default Main;

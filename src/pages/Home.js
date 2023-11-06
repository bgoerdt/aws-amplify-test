import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <h1>HOME</h1>
        <Link to='/about'>About</Link>
        <Link to='/my-items'>My Items</Link>
    </div>
  );
}

export default Home;

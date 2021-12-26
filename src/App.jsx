import './App.css'
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Link to="/">
        <h1>Kiwi Queue</h1>
      </Link>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/SpotifyQueue">Spotify</Link> |{" "}
        <Link to="/YoutubeQueue">Youtube</Link>
      </nav>
      <Outlet/>
    </div>
  );
}
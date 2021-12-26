import { render } from "react-dom"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import './index.css';
import { YoutubeQueue } from "./routes/YoutubeQueue";
import { SpotifyQueue } from "./routes/SpotifyQueue"

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="YoutubeQueue" element={<YoutubeQueue />} />
                <Route path="SpotifyQueue" element={<SpotifyQueue />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement);
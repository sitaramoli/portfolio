import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import PreloadMedia from "./components/PreloadMedia.tsx";
import {media} from "./constants/constants";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "./../public/Fonts/Morganite/morganiteFont.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <PreloadMedia images={Object.values(media)}>
                <App/>
            </PreloadMedia>
        </BrowserRouter>
    </React.StrictMode>,
)

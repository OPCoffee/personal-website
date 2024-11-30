import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonalWebsite from "../PersonalWebsite"
import LandingPage from "./pages/LandingPage";
import AboutMePage from "./pages/AboutMePage";

export default function WebsiteRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<PersonalWebsite />}>
                <Route index element={<LandingPage />}/>
                <Route path="about-me" element={<AboutMePage />}/>
            </Route>
        </Routes>
    </BrowserRouter>
}
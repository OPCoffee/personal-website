import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import WebsiteNavbar from "./nav/WebsiteNavbar";

export default function PersonalWebsite() {


    return <div>
        <WebsiteNavbar />
        <div style={{ margin: "1rem" }}>
            <Outlet />
        </div>
    </div>
}
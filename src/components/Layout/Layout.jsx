/* eslint-disable react/prop-types */
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";


export default function Layout({children}) {
    return (
        <div>
            <Navigation />
            <Suspense fallback={<b>Loading...</b>}>{children}</Suspense>
    </div>
)
}
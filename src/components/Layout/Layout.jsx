/* eslint-disable react/prop-types */
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";


export default function Layout({children}) {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
            <Navigation />
            <Suspense fallback={<b>Loading...</b>}>{children}</Suspense>
    </div>
)
}
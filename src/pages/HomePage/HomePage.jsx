import Button from "../../components/Button/Button.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className={css.container}>
            <Navigation/>
            <h1>
            Campers of your dreams
            </h1>
            <p>You can find everything you want in our catalog</p>
            <Link to="/campers">
            <Button>View Now</Button></Link>
        </div>
    )
}
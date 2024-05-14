import {Link} from "react-router-dom";

export const StylingOverview = () => {
    return (
        <div>
            <h1>Styling Overview</h1>
            <ul>
                <Link to={"/styling/dvh"}>Dynamic viewport height</Link>
                <li>Intersection observer</li>
            </ul>
        </div>
    )
}
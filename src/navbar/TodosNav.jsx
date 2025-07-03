import styles from "./TodosNav.module.css"
import { NavLink} from "react-router-dom";

export default function TodosNav() {

    return (
        <nav className={styles.nav}>
            <ul className="flex space-x-4">
                <li>
                    <NavLink to="inProgress">inProgress</NavLink>
                </li>
                <li>
                    <NavLink to="completed">Completed</NavLink>
                </li>
            </ul>
        </nav>
    );
}
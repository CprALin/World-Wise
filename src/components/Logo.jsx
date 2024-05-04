import styles from "./Logo.module.css";
import logoImg from "/logo.png";
import { Link } from "react-router-dom";

function Logo() {
  return <Link to="/"><img src={logoImg} alt="WorldWise logo" className={styles.logo} /></Link>;
}

export default Logo;

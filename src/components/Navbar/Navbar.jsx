import image from "./image/Frame.png";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <div className={style.nav}>
        <div className={style.navbar}>
          <img src={image} alt="bloom" />
        </div>
        <ul className={style.navList}>
          <li>Grow your career</li>
          <li>Build a team</li>
          <li>Meet the founders</li>
          <li>Mentorship</li>
          <li>Say hello</li>
        </ul>
      </div>
    </div>
  );
}

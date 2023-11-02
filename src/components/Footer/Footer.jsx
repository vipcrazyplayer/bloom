import image1 from "./image/Icon.png";
import image2 from "./image/Vector.png";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={style.foot}>
        <div className={style.footBtn}>
          <img src={image1} alt="" />
          <div className={style.footTxt}>
            <div className={style.footSub}>
              <h3>5.0</h3>
              <img src={image2} alt="" />
              <img src={image2} alt="" />
              <img src={image2} alt="" />
              <img src={image2} alt="" />
              <img src={image2} alt="" />
            </div>
            <div className="footSup">
              <h5>Based on 106 reviews</h5>
            </div>
          </div>
        </div>
        <div className={style.footList}>
          <ul>
            <li>Grow your career</li>
            <li>Build a team</li>
          </ul>
        </div>
        <div className={style.footList}>
          <ul>
            <li>Meet the founders</li>
            <li>Mentorship</li>
            <li>Say hello</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

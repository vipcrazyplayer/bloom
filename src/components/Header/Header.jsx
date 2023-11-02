import image1 from "./image/Img2.png";
import image2 from "./image/Img1.png";
import image3 from "./image/Img3.png";
import image4 from "./image/Img4.png";
import image5 from "./image/Img5.png";
import image6 from "./image/Img6.png";
import image7 from "./image/Img7.png";
import image8 from "./image/Img8.png";
import style from "./header.module.css";

export default function Header() {
  return (
    <div>
      <div className={style.item}>
        <div className={style.itemText}>
          <p className={style.txt}>Discover, nurture, bloom</p>
          <pre className={style.supTxt}>
            Product & Engineering Recruitment <br />
            va va bloom , with a human touch and a dash of
          </pre>
        </div>
        <div>
          <img className={style.itemImg} src={image1} alt="image" />
          <img className={style.itemImage} src={image2} alt="image" />
        </div>
      </div>
      <div className={style.itemList}>
        <img src={image3} alt="monzo" />
        <img src={image4} alt="deliveroo" />
        <img src={image5} alt="zoopla" />
        <img src={image6} alt="moonpig" />
        <img src={image7} alt="depop" />
        <img src={image8} alt="bumble" />
      </div>
    </div>
  );
}

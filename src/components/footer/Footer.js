import footerImage from "../../images/footer-image.png";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-image">
          <img src={footerImage} alt="footerimage" />
        </div>
        <div className="footer-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
            sagittis ligula. Sed elit ex, fermentum sit amet elit sit amet,
            viverra eleifend eros. Ut vestibulum, enim sed consectetur sodales,
            lacus diam blandit metus, non placerat metus nulla in mauris.
            Aliquam erat volutpat. Donec nec consectetur turpis. Sed volutpat
            pulvinar consequat. Proin purus eros, porta ac rutrum non, vehicula
            quis massa. In et nunc enim. Sed sed metus ut tur
          </p>
        </div>
        <div className="footer-socials">
          <div className="social-icon">
            <a href="./">Facebook</a>
          </div>
          <div className="social-icon">
            <a href="./">Twitter</a>
          </div>
          <div className="social-icon">
            <a href="./">Instagram</a>
          </div>
        </div>
        <div className="footer-subscribe">
          <input type="email" placeholder="enter your e-mail here.." />
          <button>Subscribe</button>
        </div>
        <div className="copyright">
          <p>All rights reserved. Blog by sko 2022.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;

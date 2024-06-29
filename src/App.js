import * as React from "react";
import styles from "./app.module.css";
import TwitterIcon from "../../../public/images/twitter.svg";
import FacebookIcon from "../../../public/images/facebook.svg";
import InstagramIcon from "../../../public/images/instagram.svg";
import GitgubIcon from "../../../public/images/github.svg";
import MailIcon from "../../../public/images/mail.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";

export default function App() {
  return (
    <div data-testid="App">
      <div className={styles.card}>
        <img
          className={styles.image}
          src={"https://placehold.co/317"}
          alt="..."
        />
        <div className={styles.body}>
          <h2 className={styles.name}>Lorem Ipsum</h2>
          <h3 className={styles.role}>Front-end Developer</h3>
          <p className={styles.url} onClick={() => {}}>
            mysite.com
          </p>
          <div className={styles.buttons}>
            <button
              className={`${styles.button} ${styles.primary}`}
              onClick={() => {}}
            >
              <img className={styles.icon} src={MailIcon} alt="mail icon" />
              Email
            </button>
            <button
              className={`${styles.button} ${styles.secondary}`}
              onClick={() => {}}
            >
              <img
                className={styles.icon}
                src={LinkedinIcon}
                alt="linkedin icon"
              />
              Linkedin
            </button>
          </div>
          <h4 className={styles.title}>Sobre</h4>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            fermentum dapibus nunc. Mauris in lectus nec nunc finibus laoreet
            convallis vel magna. In ligula turpis, tincidunt eget ex id,
            pulvinar mollis sapien. In leo massa, eleifend ut ipsum in, auctor
            tempor purus. Praesent rutrum fermentum velit, ac ornare nulla
            consequat eget. Aliquam dui ligula, dictum quis erat ac, iaculis
            euismod tellus. Aenean sed vehicula neque, vitae dictum nibh. Morbi
            non porta arcu. Suspendisse quis nisl vel tellus rhoncus suscipit
            vitae non lectus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. In volutpat urna lorem,
            id bibendum dui vehicula at. Praesent ut nisi et turpis commodo
            lobortis. Sed tincidunt dapibus sapien, ac volutpat ipsum sodales
            in. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <h4 className={styles.title}>Interesses</h4>
          <p className={styles.text}>
            Curabitur finibus scelerisque lectus. Curabitur interdum ante ac est
            venenatis hendrerit. Aliquam ornare, risus placerat consectetur
            pellentesque, dolor sem consectetur est, eget varius eros nisl nec
            est. Donec ullamcorper lacus eu bibendum luctus. Fusce luctus sem
            quis lacus dapibus accumsan. Vivamus at nibh id nulla imperdiet
            hendrerit non non nisl. Suspendisse potenti. Ut arcu ante, laoreet
            eu dapibus eget, accumsan id mauris. Praesent massa tellus, dictum
            eu fermentum quis, ornare at lorem. Sed scelerisque tincidunt ex
            quis pretium. Quisque congue semper volutpat. Ut sit amet vehicula
            ex.
          </p>
        </div>
        <div className={styles.footer}>
          <img onClick={() => {}} src={TwitterIcon} alt="twitter" />
          <img onClick={() => {}} src={FacebookIcon} alt="facebook" />
          <img onClick={() => {}} src={InstagramIcon} alt="instagram" />
          <img onClick={() => {}} src={GitgubIcon} alt="github" />
        </div>
      </div>
    </div>
  );
}

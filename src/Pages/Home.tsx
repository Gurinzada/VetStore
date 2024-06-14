import { Link } from "react-router-dom";
import Bone from "../imgs/Logo.svg";
import Brothers from "../imgs/Brothers.jpg";
import DogGoingToWalk from "../imgs/DogGoingToWalk.jpg";
import HotelForDog from "../imgs/HotelForDogs.jpg";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Wrapper}>
      <header className={styles.HeaderHome}>
        <div>
          <img src={Bone} alt="" className={styles.Bone} />
        </div>
        <nav className={styles.NavBar}>
          <Link to={"/register"}>Sign Up</Link>
          <Link to={"/login"}>Login</Link>
          <a href="#services">Our Services</a>
          <a href="#about">About us</a>
        </nav>
      </header>
      <main className={styles.WrapperMainHome}>
        <section className={styles.SectionHome}>
          <div className={styles.ContentForPresentation}>
            <h1 className={styles.TitleHome}>PetStore</h1>
            <div className={styles.WrapperParagraphHome}>
              <p>Bem-vindo à PetStore, uma loja única e incomparável!</p>
              <p>
                Aqui na PetStore, seu pet realmente se diverte e recebe o melhor
                cuidado com nossa equipe de cuidadores e veterinários dedicados.
              </p>
              <p>
                Nosso time é altamente qualificado e preparado para oferecer
                cuidados excepcionais e entretenimento de qualidade para o seu
                pet, garantindo uma experiência alegre e segura.
              </p>
              <p>
                Venha nos conhecer! Estamos abertos 24 horas por dia, prontos
                para receber você e seu pet a qualquer momento.
              </p>
            </div>
          </div>
          <div>
            <img src={Brothers} alt="" className={styles.ImgSection} />
          </div>
        </section>
        <section id="services" className={styles.SectionHome}>
          <div className={styles.ContentForPresentation}>
            <h1 className={styles.TitleHome}>Nossos Serviços</h1>
            <div className={styles.WrapperParagraphHome}>
              <p>
                Aqui na PetStore, oferecemos uma ampla variedade de serviços
                para garantir a felicidade de pets e tutores.
              </p>
              <p>
                Contamos com uma equipe profissional de Banho e Tosa, pronta
                para deixar seu pet ainda mais bonito e saudável.
              </p>
              <p>
                Nossos veterinários são altamente capacitados, com anos de
                experiência e muito carinho para oferecer aos seus animais.
              </p>
              <p>
                Disponibilizamos uma infraestrutura completa, incluindo um
                hospital veterinário, para atender todas as necessidades de
                saúde do seu pet.
              </p>
              <p>
                Além disso, oferecemos o Hotel PetStore, onde seu animalzinho
                pode relaxar e se divertir com nossos cuidadores durante o fim
                de semana.
              </p>
              <p>
                Venha agora mesmo consultar nossos preços e conhecer todos os
                nossos serviços!
              </p>
            </div>
          </div>
          <div>
            <img src={DogGoingToWalk} alt="" className={styles.ImgSection} />
          </div>
        </section>
        <section id="about" className={styles.SectionHome}>
          <div className={styles.ContentForPresentation}>
            <h1 className={styles.TitleHome}>Sobre a PetStore</h1>
            <div className={styles.WrapperParagraphHome}>
              <p>
                Nossa jornada começou humildemente em 1990, como um pequeno
                PetShop. Desde então, temos nos destacado e crescido no mercado
                de Pets, graças ao nosso compromisso contínuo com a excelência.
              </p>
              <p>
                Ao longo dos anos, nosso trabalho árduo e dedicação nos
                permitiram conquistar a confiança e o carinho de nossos
                clientes. Temos imenso orgulho do vínculo que construímos com
                cada um deles.
              </p>
              <p>
                Nossa missão sempre foi e sempre será proporcionar o melhor
                cuidado aos nossos amigos de quatro patas, com amor, ética e
                humanidade. Esse compromisso reflete-se em cada serviço que
                oferecemos, garantindo sempre o bem-estar dos pets.
              </p>
              <p>
                Estamos em constante evolução, buscando sempre melhorar nossos
                serviços e a experiência de nossos clientes. Com planos
                ambiciosos para o futuro, nossa visão é expandir nossa marca e
                levar nosso carinho e cuidado a mais pets e famílias.
              </p>
              <p>
                Obrigado por fazer parte da nossa história. Juntos,
                continuaremos a crescer e a fazer a diferença na vida dos nossos
                amados pets.
              </p>
            </div>
          </div>
          <div>
            <img src={HotelForDog} alt="" className={styles.ImgSection} />
          </div>
        </section>
      </main>
      <footer className={styles.FooterHome}>
        <div>
          <span>PetStore 2024 &copy;</span>
        </div>
      </footer>
    </div>
  );
}

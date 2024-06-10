import { Link } from "react-router-dom"
import Bone from "../imgs/Logo.jpg"
import Brothers from "../imgs/Brothers.jpg"
import DogGoingToWalk from "../imgs/DogGoingToWalk.jpg"
import HotelForDog from "../imgs/HotelForDogs.jpg"


export default function Home(){
    return(
        <div>
            <header>
                <div><img src={Bone} alt="" /></div>
                <nav>
                    <Link to={"/register"}>Sign Up</Link>
                    <Link to={"/login"}>Login</Link>
                    <a href="#services">Our Services</a>
                    <a href="#about">About us</a>
                </nav>
            </header>
            <main>
                <section>
                    <div>
                        <h1>PetStore</h1>
                        <div>
                            <p>Uma loja diferente de todas as outras!</p>
                            <p>Aqui na PetStore seu Pet realmente se diverte com nossos cuidadores e veterinários.</p>
                            <p>Temos uma equipe qualificada e preparada para o cuidado e entretenimento de seu Pet.</p>
                            <p>Venha nós conhecer, estamos abertos 24horas!</p>
                        </div>
                    </div>
                    <div>
                        <img src={Brothers} alt="" />
                    </div>
                </section>
                <section id="services">
                    <div>
                        <h1>Nossos Serviços</h1>
                        <div>
                            <p>Aqui na PetStore temos todos os tipos de serviços para a felicidade do Pet e tutor.</p>
                            <p>Contamos com uma equipe de Banho e Tosa profissionais,</p>
                            <p>Veterinarios capacitados com anos de experiência na área e super carinhosos,</p>
                            <p>Uma infraestrutura com hospital para os Veterinarios conseguirem atuar.</p>
                            <p>Além disso contamos com o Hotel PetStore e Cuidadores para o seu animalzinho passar um final de semana relaxando e curtindo.</p>
                            <p>Venha agora mesmo consultar os nossso preços.</p>
                        </div>
                    </div>
                    <div>
                        <img src={DogGoingToWalk} alt="" />
                    </div>
                </section>
                <section>
                    <div id="about">
                        <h1>Sobre a PetStore</h1>
                        <div>
                            <p>Começamos como um pequeno PetShop em 1990,</p>
                            <p>E desde então temos avançado nesse mercado de Pets,</p>
                            <p>Graças aos nossos ótimos trabalhos, conseguimos crescer dentro da área,</p>
                            <p>Temos orgulho da confiança que nossos clientes depositam em nós,</p>
                            <p>Nosso lema é sempre proporcinar o melhor trabalho, com amor, ética e humanidade,</p>
                            <p>Sempre buscamos evoluir nosso trabalho, e temos planejamento de expandir nossa marca!</p>
                        </div>
                    </div>
                    <div>
                        <img src={HotelForDog} alt="" />
                    </div>
                </section>
            </main>
            <footer>
                <div>
                    <span>PetStore 2024 &copy;</span>
                </div>
            </footer>
        </div>
    )
}
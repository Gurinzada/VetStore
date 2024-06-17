import { useEffect, useState } from "react"
import { Categories, UserInfo } from "../backend/services/Interface"
import { useParams } from "react-router-dom"
import api from "../backend/services/api"
import forWalk from "../imgs/ForWalk.jpg";
import takingAShower from "../imgs/TakingAShower.jpg";
import allServices from "../imgs/AllServices.jpg";
import playing from "../imgs/PlayWithDog.jpg";
import allNight from "../imgs/DogEating.jpg";
import dogVaccine from "../imgs/DogVaccine.jpg"
import styles from "../styles/Details.module.scss"
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ServiceDetails(){
    const [userInfos, setInfosUser] = useState<UserInfo | undefined>(undefined)
    const [categorie, setCategory] = useState<Categories | undefined>(undefined)
    const [changeState, setChange] = useState<boolean>(false)
    const {id, idProduct} = useParams()

    useEffect(() => {
        const fecthUser = async() => {
            const response = await api.get(`/users/${id}`)
            setInfosUser(response.data)
            console.log(userInfos)
        }

        const fetchCategorie = async() => {
            const response = await api.get(`/categories/${idProduct}`)
            setCategory(response.data)
        }
        fecthUser()
        fetchCategorie()
        setChange(false)
    },[changeState])

    const handleImages = (name: string | undefined) => {
        switch (name) {
          case "Todos os serviços":
            return allServices;
          case "Banho e Tosa":
            return takingAShower;
          case "Passear":
            return forWalk;
          case "Diária":
            return allNight;
          case "Adestramento":
            return playing;
          case "Vacinação":
            return dogVaccine;
          default:
            break;
        }
      };
    const handleBuying = async(price:number | undefined) => {
      try {
        if(userInfos){
          const response = await api.patch(`users/${userInfos?.id}`,{
            cash: Number(userInfos?.cash) + Number(price)
          })
          console.log(response.data)
          toast.success("Compra Efetuada com sucesso!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          setChange(true)
        }
      } catch (error) {
        console.error(`An error has ocurred trying to buy `, error)
      }
      
    }
      const handleText = (categoryName:string | undefined) => {
        switch (categoryName) {
          case "Todos os serviços":
            return `Aqui, oferecemos uma gama completa de cuidados que garantem a felicidade e bem-estar do seu melhor amigo. Desde um banho e tosa profissional até atendimentos veterinários especializados, cada serviço é realizado por nossa equipe altamente qualificada, que se dedica a proporcionar uma experiência única e amorosa para seu pet. Nossa infraestrutura moderna inclui um hospital veterinário totalmente equipado, onde os nossos veterinários experientes podem realizar desde consultas de rotina até procedimentos complexos. Além disso, oferecemos o exclusivo Hotel PetStore, onde seu animalzinho pode relaxar e se divertir em um ambiente seguro e confortável enquanto você está fora. E não para por aí: nossos cuidadores são apaixonados pelo que fazem e garantem que cada visita seja repleta de brincadeiras e carinho. `;
          case "Banho e Tosa":
            return `No PetShop, oferecemos um serviço de Banho e Tosa que vai além da simples higiene do seu pet. Cada sessão é uma experiência cuidadosamente planejada para proporcionar limpeza profunda e estilo personalizado.
                    Nossos groomers são especialistas em cuidados estéticos e comprometidos em garantir o conforto e a segurança do seu animal de estimação durante todo o processo. Utilizamos produtos de alta qualidade, formulados especificamente para a pele sensível e a pelagem do seu pet, deixando-o com um pelo macio, brilhante e livre de nós.
                    Além de garantir a aparência impecável, dedicamos atenção especial à saúde do seu pet. Durante o banho e a tosa, realizamos uma inspeção minuciosa da pele e pelagem, identificando possíveis problemas como pulgas, áreas irritadas ou necessidade de cuidados adicionais.
                    Nosso ambiente é projetado para proporcionar tranquilidade e conforto, criando uma experiência relaxante para o seu pet. Valorizamos cada cliente e seu animal de estimação como membros da nossa própria família, garantindo um atendimento personalizado e acolhedor em cada visita.`;
          case "Passear":
            return ` Sabemos que os passeios são essenciais para o bem-estar físico e mental dos animais, por isso, oferecemos uma experiência única e personalizada para cada pet. Nossos passeadores são treinados e apaixonados pelo que fazem, garantindo que cada caminhada seja segura, estimulante e cheia de aventuras. Desde parques locais até trilhas naturais, escolhemos os melhores locais para que seu pet possa explorar, correr e se divertir ao máximo. Com a PetStore, você pode ter a tranquilidade de saber que seu amigo peludo está em boas mãos, recebendo atenção e carinho durante todo o passeio. Agende um passeio hoje mesmo e veja seu pet desfrutar de momentos inesquecíveis ao ar livre!`;
          case "Diária":
            return `Experimente o serviço de Diária da PetStore, onde o cuidado e a diversão do seu pet são garantidos durante todo o dia! Sabemos que deixar seu pet enquanto você está fora pode ser uma preocupação, mas na PetStore, transformamos esse tempo em uma experiência positiva e cheia de alegria. Nossa equipe de cuidadores é altamente treinada e dedica atenção especial a cada hóspede, proporcionando um ambiente seguro, confortável e estimulante. Durante a estadia, seu pet terá acesso a atividades interativas, brinquedos divertidos e momentos de relaxamento, garantindo que ele se sinta em casa. Além disso, oferecemos refeições balanceadas e supervisão constante para assegurar o bem-estar do seu amigo peludo.`;
          case "Adestramento":
            return `O adestramento na PetStore é a chave para um pet mais obediente, feliz e equilibrado. Entendemos que cada animal é único e, por isso, nossos programas de adestramento são personalizados para atender às necessidades específicas do seu pet. Nossa equipe de adestradores profissionais utiliza técnicas modernas e positivas para ensinar comandos básicos e avançados, corrigir comportamentos indesejados e promover a socialização adequada. Na PetStore, o adestramento não é apenas sobre disciplina, mas também sobre fortalecer o vínculo entre você e seu pet, tornando a convivência mais harmoniosa e prazerosa. Com paciência, carinho e muita dedicação, ajudamos seu pet a alcançar seu pleno potencial. Inscreva seu pet no nosso programa de adestramento e veja a transformação em um companheiro bem-comportado e equilibrado!`;
          case "Vacinação":
            return `A vacinação na PetStore é um passo essencial para garantir a saúde e a longevidade do seu pet. Compreendemos a importância de manter seu amigo de quatro patas protegido contra doenças perigosas e, por isso, oferecemos um serviço de vacinação completo e atualizado. Nossos veterinários altamente qualificados seguem rigorosamente os protocolos de vacinação, garantindo que seu pet receba todas as doses necessárias de maneira segura e eficaz. Na PetStore, utilizamos apenas vacinas de alta qualidade e seguimos os mais altos padrões de cuidado. Além de proteger a saúde do seu pet, a vacinação contribui para a saúde pública, prevenindo a propagação de doenças entre os animais e, em alguns casos, entre os humanos. `;
          default:
            break;
        }
      }
    return(
        <div className={styles.Wrapper}>
          <ToastContainer/>
            <main className={styles.WrapperMainDetails}>
                <div>
                    <img src={handleImages(categorie ? categorie.name : undefined)} alt="" className={styles.ImgDetails}/>
                </div>
                <div className={styles.TextDescription}>
                  <p className={styles.ParagraphText}>{handleText(categorie ? categorie.name : undefined)}</p>
                  <button onClick={() => handleBuying(categorie ? categorie.price : undefined)}>Adquirir!</button>
                </div>
            </main>
        </div>
    )
}
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../backend/services/api";
import { UserInfo, Categories } from "../backend/services/Interface";
import Bone from "../imgs/Logo.jpg";
import Location from "../imgs/location-sign-svgrepo-com (1).svg";
import SearchIcon from "../imgs/search-svgrepo-com.svg";
import forWalk from "../imgs/ForWalk.jpg";
import takingAShower from "../imgs/TakingAShower.jpg";
import allServices from "../imgs/AllServices.jpg";
import playing from "../imgs/PlayWithDog.jpg";
import allNight from "../imgs/DogEating.jpg";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../Context/AuthProvider";

export default function Store() {
  const [userInfos, setUserInfos] = useState<UserInfo | null>(null);
  const [categories, setCategories] = useState<Categories[] | null>(null);
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set()
  );
  const [actualValue, setActualValue] = useState<number>(0);
  const { id } = useParams();
  const { logout } = useAuth()

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await api.get(`/users/${id}`);
      setUserInfos(response.data);
      setActualValue(response.data.cash);
      console.log(response.data);
      console.log(userInfos);
    };

    const fectchCategories = async () => {
      const response = await api.get("/categories");
      setCategories(response.data);
      console.log(response.data);
    };

    fectchCategories();
    fetchUserData();
  }, [id]);

  const handleImages = (name: string) => {
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
      default:
        break;
    }
  };

  const handleCheckBox = (id: string, isChecked: boolean) => {
    setSelectedServices((prevSelectedServices) => {
      const updatedSelectedServices = new Set(prevSelectedServices);
      if (isChecked) {
        updatedSelectedServices.add(id);
        console.log(updatedSelectedServices);
      } else {
        updatedSelectedServices.delete(id);
      }
      return updatedSelectedServices;
    });
  };

  const calculateTotalPrice = () => {
    if (!categories) return 0;
    return Array.from(selectedServices).reduce((total, serviceId) => {
      const service = categories.find((cat) => cat.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const total = calculateTotalPrice();
    const newActualValue = actualValue + total;
    setActualValue(newActualValue);

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

    try {
      await api.patch(`/users/${id}`, {
        cash: newActualValue
      });

      Array.from(selectedServices).forEach(async (service) => {
        const find = categories?.find((cat) => cat.id === service);
        if (find) {
          const getDay = new Date().getDate()
          const getMonth = new Date().getMonth() + 1
          const getYear = new Date().getFullYear()
          const theDate = `${getDay < 10 ? `0${getDay}` : getDay}/${getMonth < 10 ? `0${getMonth}` : getMonth}/${getYear}`
          await api.post("/orders", {
            tutorId: id,
            categoryId: find.id,
            actualdate: theDate
          });
        }
      });
    } catch (error) {
      console.error("Erro ao atualizar o saldo do usuário:", error);
    }
  };

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      <header>
        <div>
          <div>
            <img src={Bone} alt="" />
          </div>
          <div>
            <h1>Pet Store</h1>
          </div>
        </div>
        <div>
          <input type="search" placeholder="Procure aqui um serviço" />
          <img src={SearchIcon} alt="" />
        </div>
        <div>
          <div>
            <span>Olá, {userInfos?.name}</span>
          </div>
          <div>
            {userInfos?.cep === null ? (
              <div>
                <img src={Location} alt="" />{" "}
                <Link to={`/store/account/${id}`}><span>Adicione sua localização</span></Link>
              </div>
            ) : (
              <div>
                <h5>{userInfos?.cep}</h5>
                <p>
                  {userInfos?.street}, N°{userInfos?.housenumber}
                </p>
                <p>{userInfos?.neighborhood}</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <span>Gastos: R$ {actualValue === 0 ? "00": actualValue}.00</span>
        </div>
        <nav>
          <span style={{cursor:"pointer"}}>Account</span>
          <span style={{cursor:"pointer"}} onClick={handleLogout}>Logout</span>
        </nav>
      </header>
      <main>
        <ToastContainer />
        <div>
          <h1>Escolha seu serviço abaixo</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {categories ? (
            categories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <div>
                  <h3>{cat.name}</h3>
                </div>
                <div>
                  <img src={handleImages(cat.name)} alt="" />
                </div>
                <div>
                  <span>R${cat.price === null ? "00" :cat.price}.00</span>
                </div>
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleCheckBox(cat.id, e.target.checked)
                  }
                />
              </div>
            ))
          ) : (
            <h1>Erro ao carregar os serviços!</h1>
          )}
          <button>Confirmar compras!</button>
        </form>
      </main>
    </div>
  );
}

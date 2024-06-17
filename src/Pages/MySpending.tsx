import { useParams } from "react-router-dom";
import SimpleHeader from "../Components/SimpleHeader";
import { useEffect, useState } from "react";
import { Categories, Oders, UserInfo } from "../backend/services/Interface";
import api from "../backend/services/api";
import styles from "../styles/MySpending.module.scss"

export default function MySpending(){
    const [userInfos, setUserInfos] = useState<UserInfo>()
    const [orders, setOders] = useState<Oders[] | undefined>(undefined)
    const [categories, setCategories] = useState<Categories[]>([])
    const [change, setChange] = useState<boolean>(false)
    const {id} = useParams()

    useEffect(() => {
        const getUserInfos = async() => {
           const response = await api.get(`/users/${id}`)
           setUserInfos(response.data)
        }

        const getOders = async() => {
            const response = await api.get(`/orders/${id}`)
            setOders(response.data)
            console.log(response.data)
        }

        const getCategories = async() => {
            const response = await api.get("/categories")
            setCategories(response.data)
        }
        
        getUserInfos()
        getOders()
        getCategories()
        setChange(false)
    },[change])

    const handlePayment = async(idOrder:string, price:number) => {
        const response = await api.delete(`/orders/byorder/${idOrder}`)
        const newPrice:number = Number(userInfos?.cash) - price
        const responseUser = await api.patch(`/users/${id}`, {
            cash: newPrice
        })

        setChange(true)
        console.log(response.data)
        console.log(responseUser.data)
    }

    return(
        <div className={styles.WrapperMySpending}>
            <SimpleHeader id={`/store/${id}`}/>
            <main className={styles.WrapperForOrders}>
                <section className={styles.SectionWrapper}>
                {orders && orders.length > 0 ? orders.map((order) => {
                        const category = categories.find(cat => cat.id === order.categoryId);
                        return (
                            <div key={order.id} className={styles.CardOrders}>
                                <div><p className={styles.ContentParagraph}>ID do Pedido: {order.id}</p></div>
                                <div><p className={styles.ContentParagraph}>Serviço: {category?.name}</p></div>
                                <div><p className={styles.ContentParagraph}>Preço: {category ? category.price + ".00" : "Category not found"}</p></div>
                                <div><p className={styles.ContentParagraph}>Data: {order.actualdate}</p></div>
                                <div><button onClick={() => handlePayment(order.id, Number(category?.price))}>Pagar</button></div>
                            </div>
                        );
                    }) : <>Nenhum serviço adquirido</>}
                </section>
            </main>
        </div>
    )
}
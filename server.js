import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from "cors"


const app = express()
const prisma = new PrismaClient()


app.use(express.json())
app.use(cors())


app.get("/users", async (req, res) => {
    try {
       const response = await prisma.tutor.findMany()
       res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: "An error has ocurred"})
    }
})

app.get("/users/:id", async(req, res) => {
    try {
        const response = await prisma.tutor.findUnique({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: "An error has ocurred"})
    }
})

app.post("/users", async (req, res) => {
   try {
    const response = await prisma.tutor.create({
        data:{
            email:req.body.email,
            password: req.body.password,
            name: req.body.name,
            secondname: req.body.secondname,
            age: req.body.age,
            dogname:req.body.dogname,
            dogage:req.body.dogage,
            cep: null,
            cash: null,
            housenumber: null,
            street: null,
            neighborhood:null
        }
    })

    if(response){
        console.log(res.status(201).json(response))
    }
   } catch (error) {
        res.status(500).json({error: "An error has ocurred"})
   }
})

app.patch("/users/:id", async (req, res) => {
    try {
        const response = await prisma.tutor.update({
            where: {
                id: req.params.id,
            },
            data:{
                cash: req.body.cash
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: "An Error has ocurrerd"})
    }
})

app.put("/users/:id", async (req, res) => {
    try {
        console.log("Request Body:", req.body)
        const response = await prisma.tutor.update({
            where:{
                id: req.params.id,
            },
            data:{
                email:req.body.email,
                password: req.body.password,
                name: req.body.name,
                secondname: req.body.secondname,
                age: req.body.age,
                dogname:req.body.dogname,
                dogage:req.body.dogage,
                cep: req.body.cep,
                street: req.body.street,
                housenumber: req.body.housenumber,
                neighborhood: req.body.neighborhood,
                cash: req.body.cash,
                orders: req.body?.orders
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.error("Prisma error:", error); 
        console.log(res.status(500).json({error: "An error has ocurred!"}))
    }
})

app.get("/categories", async (req, res) => {
    const response = await prisma.category.findMany()
    res.status(200).json(response)
})

app.get("/categories/:id", async(req, res) => {
    try {
        const response = await prisma.category.findUnique({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(res.status(500).json({error: "Error trying to get categories by ID"}))
        console.log(error)
    }
    
})

app.get("/orders", async(req, res) => {
    const response = await prisma.orders.findMany()
    res.status(200).json(response)
})

app.post("/orders", async(req, res) => {
    try {
        const response = await prisma.orders.create({
            data:{
                tutorId: req.body.tutorId,
                categoryId: req.body.categoryId,
                actualdate: req.body.actualdate
            }
        })
        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({error: "An Error has ocurred during the post of your order"})
    }
})

app.get("/orders/:id", async(req, res) => {
    try {
        const response = await prisma.orders.findMany({
            where:{
                tutorId: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: "An error has ocurred during to get the oders"})
    }
})

app.get("/orders/byorder/:id", async(req, res) => {
    try {
        const response = await prisma.orders.findUnique({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: "An Error has ocurred"})
    }
})

app.delete("/orders/byorder/:id", async(req, res) => {
    try {
        const response = await prisma.orders.delete({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(`Prisma error:`, error)
        res.status(500).json({error: "An error has ocurred during the payment"})
    }
})


app.listen(3000, () => {
    console.log(`Server is running on port: 3000`)
})
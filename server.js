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
            dogage:req.body.dogage
        }
    })

    if(response){
        console.log(res.status(201).json(response))
    }
   } catch (error) {
        res.status(500).json({error: "An error has ocurred"})
   }
})

app.get("/categories", async (req, res) => {
    const response = await prisma.category.findMany()
    res.status(200).json(response)
})

app.get("/orders", async(req, res) => {
    const response = await prisma.orders.findMany()
    res.status(200).json(response)
})


app.listen(3000, () => {
    console.log(`Server is running on port: 3000`)
})
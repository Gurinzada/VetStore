import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from "cors"

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.post("/users", async (req, res) => {
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

    console.log(res.status(201).json(response))
})


app.listen(3000, () => {
    console.log(`Server is running on port: 3000`)
})
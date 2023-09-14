import express from "express"
import bcrypt from "bcryptjs"
import { Prisma } from "@prisma/client"; // Import PrismaClient and Prisma
import prisma from "../utils/prisma.js"
import { validateUser } from "../validators/users.js"
import { filter } from "../utils/common.js"
const router = express.Router()


router.get('/', async (req, res) => {
    const allUsers = await prisma.user.findMany()
    res.json(allUsers)
  })


router.post('/users', async (req, res) => {
    const data = req.body
  
    const validationErrors = validateUser(data)
  
    if (Object.keys(validationErrors).length != 0) return res.status(400).send({
      error: validationErrors
    })
  
    data.password = bcrypt.hashSync(data.password, 8);
  
    prisma.user.create({
      data
    }).then(user => {
      return res.json(filter(user, 'id', 'name', 'email'))
  
    }).catch(err => {
      if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2002') {
        const formattedError = {}
        formattedError[`${err.meta.target[0]}`] = 'already taken'
  
        return res.status(500).send({
          error: formattedError
        })
      }
      throw err
    })
  })

  router.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    // Use Prisma to delete the user by ID
    await prisma.user.delete({
      where: { id: userId },
    });

    return res.status(204).send(); // Respond with a 204 (No Content) status on successful deletion
  } catch (error) {
    console.error(`Error deleting user: ${error.message}`);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
  
  export default router
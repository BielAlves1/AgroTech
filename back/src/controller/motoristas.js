const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const create = async (req, res) => {
    const motorista = await prisma.motorista.createMany({
        data: req.body
    })

    res.status(200).json(motorista).end()
}

const read = async (req, res) => {
    const motorista = await prisma.motorista.findMany()

    res.status(200).json(motorista).end()
}

const update = async (req, res) => {
    const motorista = await prisma.motorista.update({
        where: {
            id: Number(req.body.id)
        },
        data: req.body
    })

    res.status(200).json(motorista).end()
}

const remove = async (req, res) => {
    const motorista = await prisma.motorista.delete({
        where: {
            id: Number(req.body.id)
        }
    })
    res.status(200).json(motorista).end()
}

module.exports = {
    create,
    read,
    update,
    remove
}
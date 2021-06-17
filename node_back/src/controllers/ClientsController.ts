import { Request, response, Response} from "express"
import { ClientsServices } from '../services/ClientsServices'

class ClientsController {

    async create(req: Request, res: Response) {
        const { cliente, telefone, email } = req.body
        const clientsServices = new ClientsServices()

        try { 
            const clients = await clientsServices.create({ cliente, telefone, email })
            return res.json(clients)
        } catch (err) {
            return res 
		        .status(400)
		        .json({ message: err.message })
        }
    }

    async index(req: Request, res: Response) {
        const clientsServices = new ClientsServices()

        try { 
            const clients = await clientsServices.index()
            return res.json(clients)

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message })
        }
    }

    async show(req: Request, res: Response) {
        const clientsServices = new ClientsServices()
        //parametro na rota - request.params
        const { id } = req.params
        // const id = req.params.id

        try { 
            const clients = await clientsServices.show({ id })
            return res.json(clients)

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message })
        }
    }

    async delete(req: Request, res: Response) {
        const clientsServices = new ClientsServices()
        //parametro na rota - request.params
        const { id } = req.params
        // const id = req.params.id

        try { 
            const clients = await clientsServices.delete({ id })
            return res.json({ message: 'User id deleted successfully !!'})

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message })
        }
    }

    async update(req: Request, res: Response) {
        const { cliente, telefone, email } = req.body
        const { id } = req.params

        const clientsServices = new ClientsServices()

        try { 
            const clients = await clientsServices.update({ id, cliente, telefone, email })
            return res.json(clients)

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message })
        }
    }
       

}

export { ClientsController }
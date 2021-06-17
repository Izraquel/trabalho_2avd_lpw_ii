import { Request, Response } from 'express'
import { ServicesServices } from '../services/ServicesServices'

class ServicesController {

    async create(req: Request, res: Response) {
        const { service, valor } = req.body
        //console.log({service, valor});
        
    
        const servicesServices = new ServicesServices()

        const services = await servicesServices.create({service, valor})

        return res.json(services)
    }

    async index(req: Request, res: Response) { 
        const servicesServices = new ServicesServices()
        try { 
            const services = await servicesServices.index()
            return res.json(services)
        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
     }

    async show(req: Request, res: Response) { 
        const servicesServices = new ServicesServices()
        const { id } = req.params;

        try { 
            const services = await servicesServices.show({ id })
            return res.json(services)

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
     }

    async delete(req: Request, res: Response) { 
        const servicesServices = new ServicesServices()
        const { id } = req.params

        try { 
            const services = await servicesServices.delete({ id })
            return res.json({ message: 'Services id deleted successfully'})

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
     }

    async update(req: Request, res: Response) { 
        const servicesServices = new ServicesServices()
        const { id } = req.params
        const { service, valor } = req.body

       try { 
           const services = await servicesServices.update({id, service, valor})
           return res.json(services)
       } catch (err) {
           return res
                .status(400)
                .json({ message: err.message})
       }
    }
}

export { ServicesController }
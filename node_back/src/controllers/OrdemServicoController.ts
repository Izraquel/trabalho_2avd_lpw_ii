 import { Request, Response } from 'express'
 import { OrdemServicoServices } from '../services/OrdemServicoServices'

 class OrdemServicoController {

    async create(req: Request, res: Response) {
        const { client_id, service_id, quantidade, dataservico } = req.body
        const ordemServicoServices = new OrdemServicoServices() //instanciar 

        const ordemServico = await ordemServicoServices.create({ 
            client_id, 
            service_id, 
            quantidade, 
            dataservico 
        })

         return res.json(ordemServico)
    }

    async index(req: Request, res: Response) { 
        const ordemServicoServices = new OrdemServicoServices()
        try { 
            const ordemServico = await ordemServicoServices.index()
            return res.json(ordemServico)
        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
     }

    async show(req: Request, res: Response) { 
        const ordemServicoServices = new OrdemServicoServices()
        const { id } = req.params;

        try { 
            const ordemServico = await ordemServicoServices.show({ id })
            return res.json(ordemServico)

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
    }  
 
    async delete(req: Request, res: Response) { 
        const ordemServicoServices = new OrdemServicoServices()
        const { id } = req.params

        try { 
            await ordemServicoServices.delete({ id })
            return res.json({ message: 'Services id deleted successfully'})

        } catch (err) {
            return res
                .status(400)
                .json({ message: err.message})
        }
     }

    async update(req: Request, res: Response) { 
        const ordemServicoServices = new OrdemServicoServices()
        const { id } = req.params
        let { client_id, service_id, quantidade, dataservico } = req.body

       try { 
           const ordemServico = await ordemServicoServices.update({
               id,
               client_id, 
               service_id, 
               quantidade, 
               dataservico
            })

           return res.json(ordemServico)
       } catch (err) {
           return res
                .status(400)
                .json({ message: err.message})
       }
    } 
 }

 export { OrdemServicoController }
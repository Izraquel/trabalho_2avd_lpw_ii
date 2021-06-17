import { Router } from 'express'
import { ClientsController } from './controllers/ClientsController'
import { ServicesController } from './controllers/ServicesController' //
import { OrdemServicoController } from './controllers/OrdemServicoController'


const routes = Router()

const clientsController  = new ClientsController()

routes.post('/clients', clientsController.create)
routes.get('/clients', clientsController.index)
routes.get('/clients/:id', clientsController.show)
routes.delete('/clients/:id', clientsController.delete)
routes.put('/clients/:id', clientsController.update)


const servicesController = new ServicesController()

routes.post('/services', servicesController.create)
routes.get('/services', servicesController.index)
routes.get('/services/:id', servicesController.show)
routes.delete('/services/:id', servicesController.delete)
routes.put('/services/:id', servicesController.update)


const ordemServicoController = new OrdemServicoController()

routes.post('/ordemServico', ordemServicoController.create)
routes.get('/ordemServico', ordemServicoController.index)
routes.get('/ordemServico/:id', ordemServicoController.show)
routes.delete('/ordemServico/:id', ordemServicoController.delete)
routes.put('/ordemServico/:id', ordemServicoController.update)





export { routes }
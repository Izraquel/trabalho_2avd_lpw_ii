//import { ClientsRepository } from '../repositories/ClientsRepository'

import { getCustomRepository } from "typeorm"
import { ServicesRepository } from '../repositories/ServicesRepository'

interface IServicesCreate {
    service: string
    valor: number
}

interface IServicesShow {
    id: string;
}

interface IServicesUpdate {
    id: string
    service: string
    valor: number
}

class ServicesServices {
    
    async create({ service, valor }: IServicesCreate) {
        const servicesRepository = getCustomRepository(ServicesRepository)
       // console.log({service, valor});

        const services = servicesRepository.create({ 
            service,
            valor
        })

        await servicesRepository.save(services)

        return services;
    }

    async index() {
        const servicesRepository = getCustomRepository(ServicesRepository)

        const services = await servicesRepository.find()

        return services
    }

    async show({ id }: IServicesShow) {
        const servicesRepository = getCustomRepository(ServicesRepository)

        const services = await servicesRepository.findOne({ id })

        if (!services) {
            throw new Error('Services id not found!!')
        }

        return services
    }

    async delete({ id }: IServicesShow) {
        const servicesRepository = getCustomRepository(ServicesRepository)

        const services = await servicesRepository.findOne({ id })

        if (!services) {
            throw new Error('Services id not found!!')
        }

        return await servicesRepository.delete({ id })
    }

    async update({ id, service, valor}: IServicesUpdate) {
        const servicesRepository = getCustomRepository(ServicesRepository)

        let services = await servicesRepository.findOne({ id })

        if (!services) {
            throw new Error('Services id not found!!')
        }
        
         await servicesRepository.update(id, { 
            service,
            valor
        })

        services = await servicesRepository.findOne({id})

        return services
    }
}

export { ServicesServices }


import { OrdemServicoRepository } from "../repositories/OrdemServicoRepository"
import { getCustomRepository } from "typeorm"

interface IOrdemServicoCreate {
    client_id: string
    service_id: string
    quantidade: string
    dataservico: Date
}

interface IOrdemServicoShow {
    id: string
}

interface IOrdemServicoUpdate {
    id: string
    client_id: string
    service_id: string
    quantidade: string
    dataservico: Date
}

class OrdemServicoServices {
    async create({ client_id, service_id, quantidade, dataservico}: IOrdemServicoCreate) {
        const ordemServicoRepository = getCustomRepository(OrdemServicoRepository)

        const ordemServico = ordemServicoRepository.create({ 
            client_id,
            service_id,
            quantidade,
            dataservico
        })

        await ordemServicoRepository.save(ordemServico)

        return ordemServico
    }

    async index() {
        const ordemServicoRepository = getCustomRepository(OrdemServicoRepository)

        const ordemServico = await ordemServicoRepository.find({ 
            //fazer um relacionamento
            relations: ['client', 'service']
        })

        return ordemServico
    }

    async show({ id }: IOrdemServicoShow) {
        const ordemServicoRepository = getCustomRepository(OrdemServicoRepository)

        const ordemServico = await ordemServicoRepository.findOne(id, {
            relations: ['client', 'service']
        })

        return ordemServico
    }

    async delete({ id }: IOrdemServicoShow) {
        const ordemServicoRepository = getCustomRepository(OrdemServicoRepository)

        const ordemServico = await ordemServicoRepository.findOne({ id })

        if (!ordemServico) {
            throw new Error('Service id not found!!')
        }

        return await ordemServicoRepository.delete({ id }) //exclui do bando
    }

    async update({ id, client_id, service_id, quantidade, dataservico }: IOrdemServicoUpdate) {
        const ordemServicoRepository = getCustomRepository(OrdemServicoRepository)

        let ordemServicoD = await ordemServicoRepository.findOne({ id })

        if (!ordemServicoD) {
            throw new Error('Services id not found!!')
        }
        
        await ordemServicoRepository.update(id, { 
            id, 
            client_id, 
            service_id, 
            quantidade, 
            dataservico
        })

        ordemServicoD = await ordemServicoRepository.findOne(id)

        return ordemServicoD
    } 
    
}

export { OrdemServicoServices }
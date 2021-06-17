import { ClientsRepository } from '../repositories/ClientsRepository'
import { getCustomRepository } from "typeorm"

interface IClientsCreate {
    cliente: string,
    telefone: string,
    email: string
}

interface IClientsShow {
	id: string
}

interface IClientsUpdate {
    id: string
    cliente: string
    telefone: string
    email: string
}

class ClientsServices {
    async create({ cliente, telefone, email }: IClientsCreate) {
        const clientsRepository = getCustomRepository(ClientsRepository)

         //verificando se existe o email cadastrado
        const emailAlreadyExists = await clientsRepository.findOne({
            email
        })
    
        if (emailAlreadyExists) {
            throw new Error('Email alread exists!!')
        } 

        const clients = clientsRepository.create({ 
            cliente,
            telefone,
            email
        })

        await clientsRepository.save(clients)
        return clients
    }
    
    async index() {
        const clientsRepository = getCustomRepository(ClientsRepository)

        const clients = await clientsRepository.find()
    
        return clients;
    }

  //async show({ id: string }) {
    async show({ id }: IClientsShow) {
        const clientsRepository = getCustomRepository(ClientsRepository)

        const clients = await clientsRepository.findOne({ id })

        if (!clients) {
            throw new Error('Use id not found!!')
        }
    
        return clients;
    }

    async delete({ id }: IClientsShow) {
        const clientsRepository = getCustomRepository(ClientsRepository)

        const clients = await clientsRepository.findOne({ id })

        if (!clients) {
            throw new Error('Use id not found!!')
        }
    
        return await clientsRepository.delete ( id )
    }

    async update({ id, cliente, telefone, email }: IClientsUpdate) {
        const clientsRepository = getCustomRepository(ClientsRepository)

        let clients = await clientsRepository.findOne({ id })

         //quando não encontra o id -> clients = underfined (false)
         //quando encontra o id -> clients = objeto (id, cliente, telefone, email) - (true)
    
        if (!clients) {
            throw new Error('Client id not found !!')
        } 

        let clientsUpdate = clientsRepository.update(
            id, {
                cliente,
                telefone,
                email
            })

        clients = await clientsRepository.findOne({ id })
        return clients
    }
}

export { ClientsServices }

 
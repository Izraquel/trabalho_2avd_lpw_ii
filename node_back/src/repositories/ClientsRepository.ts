import { Repository, EntityRepository } from 'typeorm'
import { Client } from '../entities/Client'

@EntityRepository(Client)
class ClientsRepository extends Repository<Client> { //extendendo

}

export { ClientsRepository }

// rotas (/clients) - get/post/put/delete
// controller - responsabilidade de pegar as informações da rota
//services - responsabilidade da regra de negocio da aplicação e devolver
//           para o controller
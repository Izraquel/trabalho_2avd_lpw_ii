import { Repository, EntityRepository } from 'typeorm'
import { OrdemServico } from '../entities/OrdemServico'

@EntityRepository(OrdemServico)
class OrdemServicoRepository extends Repository<OrdemServico> {

}

export { OrdemServicoRepository }


import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne } from 'typeorm'
import { Client } from './Client'
import { Service } from './Service'

import { v4 as uuid } from 'uuid' 

@Entity('ordemservico')
class OrdemServico {
    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'client_id'})
    @ManyToOne(() => Client) //muitas ordens de servico para um client
    client: Client;

    @Column()
    client_id: string;

    @JoinColumn({ name: 'service_id'})
    @ManyToOne(() => Service)
    service: Service;

    @Column()
    service_id: string;

    @Column()
    quantidade: string;

    @Column()
    dataservico: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
      if (!this.id) {
        this.id = uuid()
    }
  }
}

export { OrdemServico }

import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' //identificador universal unico

@Entity('services') //mesmo nome da migration
class Service {
    @PrimaryColumn()
    id: string;

    @Column()
    service: string;

    @Column()
    valor: number;

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

export { Service }
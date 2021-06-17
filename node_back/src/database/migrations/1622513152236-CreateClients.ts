import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClients1622513152236 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clients", //nome da tabela
                columns: [ //definir um array de objetos
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"cliente",
                        type: "varchar"
                    },
                    {
                        name: "telefone",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isNullable: true //campo não obrigatório, permite aceitar o campo em branco, ou seja sem preenchimento
                    },
                    {
                        name: "created_at", 
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // remove a tabela que você cria errado
        await queryRunner.dropTable("clients")
    }

}

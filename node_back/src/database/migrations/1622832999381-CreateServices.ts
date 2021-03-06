import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateServices1622832999381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: "services",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "service", 
                        type: "varchar"
                    },
                    {
                        name: "valor",
                        type: "number"
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
        await queryRunner.dropTable("services")
    }

}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOS1623717756649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "ordemservico",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "client_id",
            type: "uuid",
          },
          {
            name: "service_id",
            type: "uuid",
          },
          {
            name: "quantidade",
            type: "number",
          },
          {
            name: "dataservico",
            type: "date",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKClient",
            referencedTableName: "clients",
            referencedColumnNames: ["id"],
            columnNames: ["client_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKService",
            referencedTableName: "services",
            referencedColumnNames: ["id"],
            columnNames: ["service_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("ordemservico");
  }
}

import { Stack } from "aws-cdk-lib";
import { Table } from "aws-cdk-lib/aws-dynamodb";

export class GenericTable {
  private name: string;
  private primaryKey: string;
  private stack: Stack;
  private table: Table;

  public constructor(
    name: string,
    primaryKey: string,
    stack: Stack,
    table: Table
  ) {
    this.name = name;
    this.primaryKey = primaryKey;
  }
}

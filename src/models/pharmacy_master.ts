import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface pharmacy_masterAttributes {
    drug_id: string;
    generic_name: string;
    trade_name: string;
}

@Table({
	tableName: "pharmacy_master",
	timestamps: false 
})
export class pharmacy_master extends Model<pharmacy_masterAttributes, pharmacy_masterAttributes> implements pharmacy_masterAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.CHAR(11) 
    })
    	drug_id!: string;

    @Column({
    	type: DataType.STRING(15) 
    })
    	generic_name!: string;

    @Column({
    	type: DataType.STRING(15) 
    })
    	trade_name!: string;

}
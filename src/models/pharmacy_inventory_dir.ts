import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface pharmacy_inventory_dirAttributes {
    batch_no: string;
    drug_id?: string;
    generic_name?: string;
    trade_name?: string;
    unit_price?: number;
    current_stock?: number;
    expiry_date?: string;
}

@Table({
	tableName: "pharmacy_inventory_dir",
	timestamps: false 
})
export class pharmacy_inventory_dir extends Model<pharmacy_inventory_dirAttributes, pharmacy_inventory_dirAttributes> implements pharmacy_inventory_dirAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.CHAR(11) 
    })
    	batch_no!: string;

    @Column({
    	allowNull: true,
    	type: DataType.CHAR(11) 
    })
    	drug_id?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(15) 
    })
    	generic_name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(15) 
    })
    	trade_name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	unit_price?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	current_stock?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	expiry_date?: string;

}
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface pharmacy_orders_dirAttributes {
    order_id: string;
    encounter_id: string;
    batch_no: string;
    drug_id: string;
    order_date: string;
    dispensed_date?: string;
    order_status: string;
    prescription_details?: string;
    quantity?: number;
    total_price?: number;
}

@Table({
	tableName: "pharmacy_orders_dir",
	timestamps: false 
})
export class pharmacy_orders_dir extends Model<pharmacy_orders_dirAttributes, pharmacy_orders_dirAttributes> implements pharmacy_orders_dirAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.CHAR(11) 
    })
    	order_id!: string;

    @Column({
    	type: DataType.CHAR(11) 
    })
    	encounter_id!: string;

    @Column({
    	type: DataType.CHAR(11) 
    })
    	batch_no!: string;

    @Column({
    	type: DataType.CHAR(11) 
    })
    	drug_id!: string;

    @Column({
    	type: DataType.DATEONLY 
    })
    	order_date!: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	dispensed_date?: string;

    @Column({
    	type: DataType.STRING(11) 
    })
    	order_status!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(15) 
    })
    	prescription_details?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	quantity?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	total_price?: number;

}
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface patients_masterAttributes {
    patient_id: string;
    salutation?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    age?: number;
}

@Table({
	tableName: "patients_master",
	timestamps: false 
})
export class patients_master extends Model<patients_masterAttributes, patients_masterAttributes> implements patients_masterAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.CHAR(11) 
    })
    	patient_id!: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(4) 
    })
    	salutation?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(15) 
    })
    	first_name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(15) 
    })
    	last_name?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(6) 
    })
    	gender?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	age?: number;

}
import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface appointments_dirAttributes {
    encounter_id: string;
    patient_id?: string;
    salutation?: string;
    first_name?: string;
    last_name?: string;
    gender?: string;
    age?: number;
    department?: string;
    source?: string;
    encounter_date?: string;
}

@Table({
	tableName: "appointments_dir",
	timestamps: false 
})
export class appointments_dir extends Model<appointments_dirAttributes, appointments_dirAttributes> implements appointments_dirAttributes {

    @Column({
    	primaryKey: true,
    	type: DataType.CHAR(11) 
    })
    	encounter_id!: string;

    @Column({
    	allowNull: true,
    	type: DataType.CHAR(11) 
    })
    	patient_id?: string;

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

    @Column({
    	allowNull: true,
    	type: DataType.STRING(10) 
    })
    	department?: string;

    @Column({
    	allowNull: true,
    	type: DataType.CHAR(2) 
    })
    	source?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATEONLY 
    })
    	encounter_date?: string;

}
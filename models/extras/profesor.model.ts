import { PersonaModel } from "../persona.model";

export class ProfesorModel extends PersonaModel{
    constructor(
        protected legajo: number,
        nombre: string,
        apellido: string,
        email: string,
        protected idMateria: string,
        protected fechaAlta: string,
        protected modificacion: string,
        protected isActive: boolean
    ){
        super(nombre, apellido, email);
    }

        //legajo
    public getLegajo(): number{
        return this.legajo
    }

    public setLegajo(legajo: number): void{
        this.legajo = legajo
    }

    //materia
    public getIdMateria(): string{
        return this.idMateria;
    }

    public setIdMateria(idMateria: string): void{
        this.idMateria = idMateria;
    }

    //fecha alta
    public getFechaAlta(): string{
        return this.fechaAlta
    }

    public setFechaAlta(fechaAlta: string): void{
        this.fechaAlta = fechaAlta
    }

    //modificacion
    public getModificacion(): string{
        return this.modificacion
    }

    public setModificacion(modificacion: string): void{
        this.modificacion = modificacion
    }

    //is active
    public getIsActive(): boolean{
        return this.isActive
    }

    public setIsActive(isActive: boolean): void{
        this.isActive = isActive
    }

    public getAllAttributes(): object{
        return{
            nombre: this.getNombre(),
            apellido: this.getApellido(),
            email: this.getEmail(),
            legajo: this.legajo,
            idMateria: this.idMateria,
            fechaAlta: this.fechaAlta,
            modificacion: this.modificacion,
            isActive: this.isActive
        }
    }
}
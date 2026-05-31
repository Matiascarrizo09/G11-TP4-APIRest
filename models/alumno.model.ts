import { PersonaModel } from "./persona.model";

export class AlumnoModel extends PersonaModel{
    constructor(
       protected legajo: number,
        nombre: string,
        apellido: string,
        email: string,
        protected fechaAlta: string,
        protected modificacion: string,
        protected isActive: boolean
    ){
        super(nombre, apellido, email)
    }

    //legajo
    public getLegajo(): number{
        return this.legajo
    }

    public setLegajo(legajo: number): void{
        this.legajo = legajo
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
            fechaAlta: this.fechaAlta,
            modificacion: this.modificacion,
            isActive: this.isActive
        }
    }
}
export class NotaModel {
    constructor(
        private id: number,
        private legajo: number,
        private idMateria: string,
        private nota: number,
        private fecha: string
    ) {}

    public getId(): number{
        return this.id
    }

    public setId(id: number): void{
        this.id = id
    }

    public getLegajo(): number{
        return this.legajo
    }

    public setLegajo(legajo: number): void{
        this.legajo = legajo
    }

    public getIdMateria(): string{
        return this.idMateria
    }

    public setIdMateria(idMateria: string): void{
        this.idMateria = idMateria
    }

    public getNota(): number{
        return this.nota
    }

    public setNota(nota: number): void{
        this.nota = nota
    }

    public getFecha(): string{
        return this.fecha
    }

    public setFecha(fecha: string): void{
        this.fecha = fecha
    }

    public getAllAttributes(): object{
        return{
            id: this.id,
            legajo: this.legajo,
            idMateria: this.idMateria,
            nota: this.nota,
            fecha: this.fecha
        }
    }
}
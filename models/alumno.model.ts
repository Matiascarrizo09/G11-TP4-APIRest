import { PersonaModel } from "./persona.model";

export class AlumnoModel extends PersonaModel {
  constructor(
    nombre: string,
    apellido: string,
    email: string,
    private legajo: number,
    private fechaAlta: Date = new Date(),
    private modificacion: Date = new Date(),
    private isActive: boolean = true,
  ) {
    super(nombre, apellido, email);
  }

  // Nombre
  public setNombre(nombre: string): void {
    super.setNombre(nombre);
    this.modificacion = new Date();
  }

  // Apellido
  public setApellido(apellido: string): void {
    super.setApellido(apellido);
    this.modificacion = new Date();
  }

  // e-mail
  public setEmail(email: string): void {
    super.setEmail(email);
    this.modificacion = new Date();
  }

  // Legajo
  public getLegajo(): number {
    return this.legajo;
  }

  // Fecha de alta
  public getFechaAlta(): Date {
    return this.fechaAlta;
  }

  // Fecha de última modificación
  public getModificacion(): Date {
    return this.modificacion;
  }

  // Estado de actividad
  public getActivity(): boolean {
    return this.isActive;
  }

  // Alterna el estado de actividad (inactivo/activo)
  public setActivity(isActive: boolean): void {
    this.isActive = !isActive;
    this.modificacion = new Date();
  }

  // Ver todo
  public getAllAttributes(): object {
    const datosPersona = super.getAllAttributes();
    return {
      Legajo: this.legajo,
      ...datosPersona,
      "Fecha de alta": this.fechaAlta,
      "Fecha de última modificación": this.modificacion,
      "Estado de actividad": this.isActive,
    };
  }
}

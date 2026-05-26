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
    if (!nombre || nombre.trim() === "" || nombre.trim().length < 3) {
      throw new Error(
        "Nombre inválido.\nEl nombre no puede estar vacío y debe contener al menos tres (3) caracteres.",
      );
    } else {
      super.setNombre(nombre);
      this.modificacion = new Date();
    }
  }

  // Apellido
  public setApellido(apellido: string): void {
    if (!apellido || apellido.trim() === "" || apellido.trim().length < 3) {
      throw new Error(
        "Apellido inválido.\nEl apellido no puede estar vacío y debe contener al menos tres (3) caracteres.",
      );
    } else {
      super.setApellido(apellido);
      this.modificacion = new Date();
    }
  }

  // e-mail
  public setEmail(email: string): void {
    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.trim().length < 5
    ) {
      throw new Error(
        "E-mail inválido. Revise el formato del e-mail.\nEl e-mail no debe estar vacío, debe contener al menos 5 caracteres y debe incluir '@' y '.'",
      );
    } else {
      super.setEmail(email);
      this.modificacion = new Date();
    }
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
    this.isActive = isActive; // Eliminé el '!', ya que me di cuenta que sino, se establecía el valor opuesto al introducido, contraintuitivo.
    this.modificacion = new Date();
  }

  // Ver todo
  public getAllAttributes(): object {
    // Cambié el tipo de retorno para que devuelva algo más parecido a un JSON.
    const datosPersona = super.getAllAttributes();
    return {
      legajo: this.legajo,
      ...datosPersona,
      fechoaAlta: this.fechaAlta,
      modificacion: this.modificacion,
      isActive: this.isActive, // Prettier agrega una coma al final automáticamente, aunque creo que no deberia ir. Imagino que no altera el funcionamiento.
    };
  }
}

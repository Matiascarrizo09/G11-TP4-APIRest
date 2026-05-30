import { PersonaModel } from "../persona.model";

export class ProfesorModel extends PersonaModel {
  constructor(
    nombre: string,
    apellido: string,
    email: string,
    private dniProfesor: string,
    private materias: string[],
  ) {
    if (!ProfesorModel.validarNombre(nombre)) {
      throw new Error(
        "Nombre inválido.\nEl nombre no puede estar vacío y debe contener al menos tres (3) caracteres.",
      );
    }
    if (!ProfesorModel.validarApellido(apellido)) {
      throw new Error(
        "Apellido inválido.\nEl apellido no puede estar vacío y debe contener al menos tres (3) caracteres.",
      );
    }
    if (!ProfesorModel.validarEmail(email)) {
      throw new Error(
        "E-mail inválido. Revise el formato del e-mail.\nEl e-mail no debe estar vacío, debe contener al menos 5 caracteres y debe incluir '@' y '.'",
      );
    }
    if (!ProfesorModel.validarMaterias(materias)) {
      throw new Error(
        "Materia(s) inválida(s).\nLa lista de materias no puede estar vacía, y cada materia debe contener al menos tres (3) caracteres.",
      );
    }
    super(nombre.trim(), apellido.trim(), email.trim());
  }

  // Nombre
  public setNombre(nombre: string): void {
    if (!ProfesorModel.validarNombre(nombre)) {
      throw new Error(
        "Nombre inválido.\nEl nombre no puede estar vacío y debe contener al menos tres (3) caracteres.",
      );
    } else {
      super.setNombre(nombre.trim());
    }
  }

  // Apellido
  public setApellido(apellido: string): void {
    if (!ProfesorModel.validarApellido(apellido)) {
      throw new Error(
        "Apellido inválido.\nEl apellido no puede estar vacío y debe contener al menos tres (3) caracteres.",
      );
    } else {
      super.setApellido(apellido.trim());
    }
  }

  // E-mail
  public setEmail(email: string): void {
    if (!ProfesorModel.validarEmail(email)) {
      throw new Error(
        "E-mail inválido. Revise el formato del e-mail.\nEl e-mail no debe estar vacío, debe contener al menos 5 caracteres y debe incluir '@' y '.'",
      );
    } else {
      super.setEmail(email.trim());
    }
  }

  // DNI Profesor
  public getDniProfesor(): string {
    return this.dniProfesor;
  }

  // Materias
  public setMaterias(materias: string[]): void {
    if (!ProfesorModel.validarMaterias(materias)) {
      throw new Error(
        "Materia(s) inválida(s).\nLa lista de materias no puede estar vacía, y cada materia debe contener al menos tres (3) caracteres.",
      );
    } else {
      this.materias = materias.map((materia) => materia.trim());
    }
  }

  public getMaterias(): string[] {
    return this.materias;
  }

  // Validaciones
  private static validarNombre(nombre: string): boolean {
    return typeof nombre === "string" && nombre.trim().length >= 3;
  }

  private static validarApellido(apellido: string): boolean {
    return typeof apellido === "string" && apellido.trim().length >= 3;
  }

  private static validarEmail(email: string): boolean {
    return (
      typeof email === "string" &&
      email.includes("@") &&
      email.includes(".") &&
      email.trim().length >= 5
    );
  }

  private static validarMaterias(materias: string[]): boolean {
    return (
      Array.isArray(materias) &&
      materias.length > 0 &&
      materias.every(
        (materia) => typeof materia === "string" && materia.trim().length >= 3,
      )
    );
  }
}

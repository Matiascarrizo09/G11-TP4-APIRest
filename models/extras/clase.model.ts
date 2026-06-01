export class ClaseModel {
  constructor(
    private idClase: number,
    private idMateria: string,
    private dniProfesor: number,
    private horarioInicio: number,
    private horarioFin: number,
  ) {}

  // idClase:
  public getIdClase(): number {
    return this.idClase;
  }

  public setIdClase(idClase: number): void {
    if (!this.validarIDClase()) {
      throw new Error(
        "ID inválida.\nEl ID de la clase debe ser un número entero positivo.",
      );
    }
    this.idClase = idClase;
  }

  // idMateria:
  public getIdMateria(): string {
    return this.idMateria;
  }

  public setIdMateria(idMateria: string): void {
    if (!this.validarIDMateria()) {
      throw new Error(
        "ID de materia inválida.\nEl campo no puede estar vacío.",
      );
    }
    this.idMateria = idMateria;
  }

  // dniProfesor:
  public getDniProfesor(): number {
    return this.dniProfesor;
  }

  public setDniProfesor(dniProfesor: number): void {
    if (!this.validarDNIProfesor()) {
      throw new Error(
        "DNI inválido.\nEl DNI debe ser un número entero positivo.",
      );
    }
    this.dniProfesor = dniProfesor;
  }

  // horarios:
  public getHorarioInicio(): number {
    return this.horarioInicio;
  }

  public getHorarioFin(): number {
    return this.horarioFin;
  }

  public setHorario(horarioInicio: number, horarioFin: number): void {
    if (!this.validarHorario()) {
      throw new Error(
        "Horario inválido.\nUno o ambos datos ingresados son inválidos. Asegurese de que:\n- Ambos horarios sean números enteros entre 0 y 23.\n- El horario de inicio sea menor al horario de fin.",
      );
    }
    this.horarioInicio = horarioInicio;
    this.horarioFin = horarioFin;
  }

  // getAll:
  public getDatosClase(): object {
    return {
      idClase: this.idClase,
      idMateria: this.idMateria,
      dniProfesor: this.dniProfesor,
      horarioInicio: this.horarioInicio,
      horarioFin: this.horarioFin,
    };
  }

  // Validaciones:

  private validarIDClase(): boolean {
    return this.idClase > 0 && typeof this.idClase === "number";
  }

  private validarIDMateria(): boolean {
    return typeof this.idMateria === "string" && this.idMateria.trim() !== "";
  }

  private validarDNIProfesor(): boolean {
    return this.dniProfesor > 0 && typeof this.dniProfesor === "number";
  }

  private validarHorario(): boolean {
    return (
      typeof this.horarioInicio === "number" &&
      typeof this.horarioFin === "number" &&
      this.horarioInicio >= 0 &&
      this.horarioInicio <= 23 &&
      this.horarioFin >= 0 &&
      this.horarioFin <= 23 &&
      this.horarioInicio < this.horarioFin
    );
  }
}

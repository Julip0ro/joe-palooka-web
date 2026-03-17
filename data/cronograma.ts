// data/cronograma.ts

export interface Clase {
  horario: string;
  profesor: string;
}

export interface Dia {
  dia: string;
  clases: Clase[];
}

export const cronograma: Dia[] = [
  {
    dia: "Lunes",
    clases: [
      { horario: "6:00 AM", profesor: "Victor P." },
      { horario: "8:00 AM", profesor: "Victor P." },
      { horario: "10:00 AM", profesor: "Luis P." },
      { horario: "5:00 PM", profesor: "Luis P." },
      { horario: "6:30 PM", profesor: "Alan P." },
      { horario: "8:00 PM", profesor: "Victor P." },
    ],
  },
  {
    dia: "Martes",
    clases: [
      { horario: "7:00 AM", profesor: "Alan P." },
      { horario: "12:00 PM", profesor: "Alan P." },
      { horario: "6:30 PM", profesor: "Sin asignar" },
      { horario: "8:00 PM", profesor: "Sin asignar" },
    ],
  },
  {
    dia: "Miércoles",
    clases: [
      { horario: "6:00 AM", profesor: "Luis P." },
      { horario: "8:00 AM", profesor: "Victor P." },
      { horario: "10:00 AM", profesor: "Luis P." },
      { horario: "5:00 PM", profesor: "Luis P." },
      { horario: "6:30 PM", profesor: "Alan P." },
      { horario: "8:00 PM", profesor: "Victor P." },
    ],
  },
  {
    dia: "Jueves",
    clases: [
      { horario: "7:00 AM", profesor: "Alan P." },
      { horario: "12:00 PM", profesor: "Alan P." },
      { horario: "6:30 PM", profesor: "Sin asignar" },
      { horario: "8:00 PM", profesor: "Sin asignar" },
    ],
  },
  {
    dia: "Viernes",
    clases: [
      { horario: "6:00 AM", profesor: "Luis P." },
      { horario: "8:00 AM", profesor: "Victor P." },
      { horario: "10:00 AM", profesor: "Luis P." },
      { horario: "5:00 PM", profesor: "Luis P." },
      { horario: "6:30 PM", profesor: "Alan P." },
      { horario: "8:00 PM", profesor: "Victor P." },
    ],
  },
  {
    dia: "Sábado",
    clases: [
      { horario: "8:00 AM", profesor: "Alan P." },
      { horario: "10:00 AM", profesor: "Victor P." },
    ],
  },
];

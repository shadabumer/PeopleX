export interface Project {
    id?: string,
    name: string,
    sector: string,
    state: string,
    authority: string,
    status: boolean,
    totalCost: number,
    dateOfAward: Date,
    description?: string,
  }
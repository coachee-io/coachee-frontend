export interface CreateCoacheeRequest {
  birthDate: number,
  email: string,
  firstName: string,
  lastName: string,
  password: string
}

export interface CreateCoacheeResponse {
  token: string,
  expiry: number,
  user: {
    id: string,
    firstName: string,
    lastName: string
  }
}

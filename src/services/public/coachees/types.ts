export interface CreateCoacheeRequest {
  birthDate: number,
  email: string,
  firstName: string,
  lastName: string,
  password: string,
  acceptTerms: boolean
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

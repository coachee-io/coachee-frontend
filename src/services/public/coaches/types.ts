export interface CreateCoachRequest {
  city: string,
  country: string,
  description: string,
  email: string,
  firstName: string,
  lastName: string,
  introCall: number,
  phone: string,
  tags: string,
  vat: string,
  textAvailability?: string,
  textCertifications: string,
  textPrograms: string,
  password: string
}

export interface CreateExpressCoachRequest {
  authorizationCode: string
}

export interface GetCoachRequest {
  id: string,
  firstName: string,
  lastName: string,
  tags: string,
  description: string,
  city: string,
  country: string,
  pictureUrl: string,
  certifications: GetCoachProgramRequest[],
  programs: GetCoachCertificateRequest[],
  availability: GetCoachAvailabilityRequest[]
}


interface GetCoachProgramRequest {
  id: string,
  titlte: string,
  description: string,
  institution: string,
  month: number,
  year: number
}
interface GetCoachCertificateRequest {
  id: string,
  name: string,
  sessions: number,
  duration: number,
  description: string,
  totalPrice: number,
  taxPercent: number
}

interface GetCoachAvailabilityRequest {
  id: string,
  start: number,
  end: number,
  weekDay: number
}

export interface Params {
  tag?: string,
  limit?: number,
  page?: number
}

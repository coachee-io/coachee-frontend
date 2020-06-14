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
  password: string,
}

export interface CreateExpressCoachRequest {
  authorizationCode: string,
  state: string
}

export interface GetCoachRequest {
  id: string,
  firstName: string,
  lastName: string,
  tags: string,
  description: string,
  city: string,
  country: string,
  pictureURL: string,
  certifications: GetCoachProgramRequest[],
  programs: GetCoachCertificateRequest[],
  availability: GetCoachAvailabilityRequest[],
  firstCallDuration: number,
}

export interface GetCoachProgramRequest {
  id: string,
  name: string,
  sessions: number,
  duration: number,
  description: string,
  totalPrice: number,
  taxPercent: number
}

export interface GetCoachCertificateRequest {
  id: string,
  name: string,
  duration: number,
  title: string,
  description: string,
  institution: string,
  month: number,
  year: number
}

export interface GetCoachAvailabilityRequest {
  dateLabel: string,
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

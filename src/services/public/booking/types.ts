export interface BookingResponse {
  clientSecret: string,
  publishingKey: string
}

export interface BookingRequest {
  coachId: string | number | any,
  programId: string | number | any,
  introCall: string | number | any
}

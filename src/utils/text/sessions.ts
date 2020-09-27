import {
  GetCoachProgramRequest,
} from 'services/public/coaches/types'

export const convertTextSession = (program: GetCoachProgramRequest) => {
  const isPluralSession = (sessions: number) => (sessions > 1 ? 'sessions' : 'session')

  if (program?.extraSessions?.length > 0) {
    return `${program.sessions} ${isPluralSession(program.sessions)} 
    of ${program.duration} minutes and ${program.extraSessions.length} 
    ${isPluralSession(program.extraSessions.length)} of ${program.extraSessions[0].duration} minutes`
  }

  return `${program.sessions} sessions of ${program.duration} minutes`
}

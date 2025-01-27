import { Message, MessageFilter } from './messages'

const shortenedNames: { [character: string]: string } = {
  'Quinn Wheatsteal': 'Quinn',
  'Sergeant Agata': 'Agata',
  'Corporal Loth': 'Loth',
  'Ba\' Raknul': 'Ba\'Raknul',
  'Ric (GM)': 'GM',
  'Commander101#9473': 'Chris',
  'Ric#0018': 'Ric',
  'Micky#1032': 'Mark',
  'Tempest#7268': 'Morgan'
}

export const shorten: MessageFilter = (messages: Message[]) =>
  messages
    .map((message) => {
      const shortened: Message = {
        ...message,
        actor: shortenedNames[message.actor] !== undefined ? shortenedNames[message.actor] : message.actor
      }
      return shortened
    })

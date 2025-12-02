export interface Speaker {
  id: string
  name: string
  title: string
  image?: string
  company?: string
}

export interface Session {
  id: string
  time: string
  title: string
  description?: string
  speakers?: Speaker[]
  type: "keynote" | "panel" | "break" | "registration" | "networking"
  chair?: string // Oturum başkanı
}

export interface AgendaItem {
  id: string
  sessions: Session[]
}

export interface TeamMember {
  id: number
  name: string
  role: string
  company: string
  bio: string
  image: string
  skills: string[]
  accentColor: string
}

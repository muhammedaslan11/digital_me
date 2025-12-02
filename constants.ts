import { Session, Speaker, TeamMember } from "./types"

// Team Members Data
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    role: "Etkinlik Direktörü",
    company: "DijitalMe",
    bio: "Dijital etkinliklerde 15+ yıllık deneyime sahip. Uluslararası zirveler ve teknoloji konferansları düzenledi.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1200",
    skills: ["Etkinlik Yönetimi", "Strateji", "Liderlik"],
    accentColor: "bg-blue-500",
  },
  {
    id: 2,
    name: "Ayşe Demir",
    role: "İçerik Koordinatörü",
    company: "DijitalMe",
    bio: "İçerik stratejisi ve yaratıcı yönetimde uzman. Dijital hikaye anlatıcılığı konusunda ödüllü projeler gerçekleştirdi.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1200",
    skills: ["İçerik Stratejisi", "Yaratıcı Yönetim", "Hikaye Anlatımı"],
    accentColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    role: "Teknik Koordinatör",
    company: "DijitalMe",
    bio: "Etkinlik teknolojileri ve canlı yayın sistemlerinde 10+ yıllık tecrübe. Hibrit etkinlik altyapıları konusunda danışman.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200",
    skills: ["Etkinlik Teknolojisi", "Canlı Yayın", "AV Sistemleri"],
    accentColor: "bg-green-500",
  },
  {
    id: 4,
    name: "Zeynep Şahin",
    role: "Pazarlama Müdürü",
    company: "DijitalMe",
    bio: "Dijital pazarlama ve marka yönetiminde 12 yıllık deneyim. B2B etkinlik pazarlama stratejileri konusunda uzman.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
    skills: ["Dijital Pazarlama", "Marka Yönetimi", "B2B Stratejisi"],
    accentColor: "bg-pink-500",
  },
  {
    id: 5,
    name: "Can Öztürk",
    role: "Sponsorluk Koordinatörü",
    company: "DijitalMe",
    bio: "Kurumsal ilişkiler ve sponsorluk geliştirme alanında başarılı projeler yürüttü. Stratejik ortaklıklar kurmada uzman.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200",
    skills: ["Sponsorluk", "İş Geliştirme", "Kurumsal İlişkiler"],
    accentColor: "bg-orange-500",
  },
  {
    id: 6,
    name: "Elif Yıldız",
    role: "İletişim Müdürü",
    company: "DijitalMe",
    bio: "Halkla ilişkiler ve kurumsal iletişimde 8 yıllık deneyim. Etkinlik PR'ı ve medya ilişkileri yönetiminde uzman.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
    skills: ["Halkla İlişkiler", "Medya İlişkileri", "Kurumsal İletişim"],
    accentColor: "bg-teal-500",
  },
]

// Speakers Data
export const OPENING_SPEAKERS: Speaker[] = [
  {
    id: "1",
    name: "Prof. Dr. Ayşegül Komşuoğlu Çıtıpıtıoğlu",
    title: "Üniversite Rektörü",
    image: "https://picsum.photos/200/200?random=1",
  },
  {
    id: "2",
    name: "Prof. Dr. Selma Karatepe",
    title: "İ.İ.S.B.F. Dekanı",
    image: "https://picsum.photos/200/200?random=2",
  },
  {
    id: "3",
    name: "Prof. Dr. Funda Yalım",
    title: "Halkla İlişkiler ve Tanıtım Bölüm Başkanı",
    image: "https://picsum.photos/200/200?random=3",
  },
]

export const AD_SPEAKERS: Speaker[] = [
  {
    id: "4",
    name: "Hulusi Derici",
    title: "Kurucu",
    company: "M.A.R.K.A. Reklam Ajansı",
    image: "https://picsum.photos/200/200?random=4",
  },
  {
    id: "5",
    name: "Cüneyt Devrim",
    title: "Chief Growth Officer",
    company: "Havas Group Turkiye",
    image: "https://picsum.photos/200/200?random=5",
  },
  {
    id: "6",
    name: "Can Faga",
    title: "Kurucu Ortak",
    company: "aRthuR İstanbul",
    image: "https://picsum.photos/200/200?random=6",
  },
  {
    id: "7",
    name: "Ergin Binyıldız",
    title: "Kurucu Ortak",
    company: "Untold",
    image: "https://picsum.photos/200/200?random=7",
  },
  {
    id: "8",
    name: "İnanç Savaş Dedebaş",
    title: "CEO",
    company: "Publicis Groupe Turkey",
    image: "https://picsum.photos/200/200?random=8",
  },
]

export const PR_SPEAKERS: Speaker[] = [
  {
    id: "9",
    name: "Arzu Çekirge Paksoy",
    title: "Kurucu",
    company: "Arya Sponsorluk",
    image: "https://picsum.photos/200/200?random=9",
  },
  {
    id: "10",
    name: "Kaan Ünver",
    title: "Kurumsal İletişim Grup Direktörü",
    company: "Migros",
    image: "https://picsum.photos/200/200?random=10",
  },
  {
    id: "11",
    name: "Didem Cengiz",
    title: "İletişim ve Tüketici Hizm. Müdürü",
    company: "Tchibo",
    image: "https://picsum.photos/200/200?random=11",
  },
  {
    id: "12",
    name: "Kerem Ayırtman",
    title: "Kurucu",
    company: "Communication Partner",
    image: "https://picsum.photos/200/200?random=12",
  },
  {
    id: "13",
    name: "Sevda Solak",
    title: "Genel Müdür",
    company: "TimePR",
    image: "https://picsum.photos/200/200?random=13",
  },
  {
    id: "14",
    name: "Meltem Turhan",
    title: "Kurucu Ortak",
    company: "FM İletişim",
    image: "https://picsum.photos/200/200?random=14",
  },
]

export const INFLUENCERS: Speaker[] = [
  {
    id: "15",
    name: "Gizem Öztürk",
    title: "Tech Influencer",
    image: "https://picsum.photos/200/200?random=15",
  },
  {
    id: "16",
    name: "Burak Demir",
    title: "Content Creator",
    image: "https://picsum.photos/200/200?random=16",
  },
]

// Schedule Data
export const SCHEDULE: Session[] = [
  {
    id: "s1",
    time: "09.00 – 09.30",
    title: "Kayıt ve Karşılama Kahvesi",
    description:
      "Katılımcı kayıtlarının alınması, tanışma ve networking alanı.",
    type: "registration",
  },
  {
    id: "s2",
    time: "09.30 – 10.00",
    title: "Açılış Konuşmaları",
    description:
      "Dijital dünyada yapay zekânın iletişim, yaratıcılık ve insan merkezli stratejiler üzerindeki etkisine dair vizyoner bir açılış.",
    speakers: OPENING_SPEAKERS,
    type: "keynote",
  },
  {
    id: "s3",
    time: "10.00 – 11.30",
    title: "AI & Creativity: Yapay Zekâ ve Dijital Reklam Trendleri",
    description:
      "Kişiselleştirilmiş reklam stratejileri, AI tabanlı hedefleme ve performans optimizasyonu. Reklamcılıkta yapay zekânın yaratıcılığı nasıl yeniden şekillendirdiğini keşfedin.",
    chair: "Dr. Fatma Kamiloğlu",
    speakers: AD_SPEAKERS,
    type: "panel",
  },
  {
    id: "s4",
    time: "11.30 – 11.45",
    title: "Kahve Arası",
    type: "break",
  },
  {
    id: "s5",
    time: "11.45 – 13.15",
    title: "Dijital Halkla İlişkiler ve Yapay Zeka Entegrasyonu",
    description:
      "Algı Yönetimi, Kriz Simülasyonları ve Yeni Hikaye Anlatıcılığı. Halkla ilişkilerde yapay zekâ destekli analizler ve kriz yönetimi.",
    chair: "Dr. Fatma Kamiloğlu",
    speakers: PR_SPEAKERS,
    type: "panel",
  },
  {
    id: "s6",
    time: "13.15 – 14.00",
    title: "Öğle Arası",
    type: "break",
  },
  {
    id: "s7",
    time: "14.00 – 15.00",
    title: "Dijital Çağda Yapay Zekâ Destekli Sosyal Medya Yönetimi",
    description:
      "İçerik Optimizasyonu, Trend Analizi ve Toplulukların Dijital Zekâsı.",
    chair: "Dr. Fatma Kamiloğlu",
    speakers: INFLUENCERS,
    type: "panel",
  },
  {
    id: "s8",
    time: "15.00",
    title: "Kapanış & Networking",
    description:
      "Kapanış konuşması, fotoğraf çekimi, katılım sertifikası dağıtımı ve işbirliklerin imzalanması.",
    type: "networking",
  },
]

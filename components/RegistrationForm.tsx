import React, { useState } from "react"
import { createRegistration, RegistrationData } from "../lib/pocketbase"
import { CheckCircle, AlertCircle, Loader } from "lucide-react"

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationData>({
    name: "",
    surname: "",
    identity: "",
    department: "",
    university: "",
    phone: "",
    email: "",
  })

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [kvkkAccepted, setKvkkAccepted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const result = await createRegistration(formData)

    if (result.success) {
      setStatus("success")
      setFormData({
        name: "",
        surname: "",
        identity: "",
        department: "",
        university: "",
        phone: "",
        email: "",
      })
      setKvkkAccepted(false)
      setTimeout(() => setStatus("idle"), 5000)
    } else {
      setStatus("error")
      setErrorMessage(result.error || "Bir hata oluştu")
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section
      id="register"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#020010" }}
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-2 block">
              Kayıt Ol
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Etkinliğe Katılın
            </h2>
            <p className="text-gray-400 text-lg">
              Dijital Dönüşüm Zirvesi'nde yerinizi alın. Tüm alanlar zorunludur.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Ad */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Ad <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="Adınız"
                />
              </div>

              {/* Soyad */}
              <div>
                <label
                  htmlFor="surname"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Soyad <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="Soyadınız"
                />
              </div>

              {/* TC Kimlik */}
              <div>
                <label
                  htmlFor="identity"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  TC Kimlik No <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  id="identity"
                  name="identity"
                  value={formData.identity}
                  onChange={handleChange}
                  required
                  maxLength={11}
                  pattern="[0-9]{11}"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="12345678901"
                />
              </div>

              {/* Telefon */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Telefon <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="05XX XXX XX XX"
                />
              </div>

              {/* Bölüm */}
              <div>
                <label
                  htmlFor="department"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Bölüm <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="Bölümünüz"
                />
              </div>

              {/* Üniversite */}
              <div>
                <label
                  htmlFor="university"
                  className="block text-sm font-semibold text-white mb-2"
                >
                  Üniversite <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  placeholder="Üniversiteniz"
                />
              </div>
            </div>

            {/* Email - Full Width */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white mb-2"
              >
                E-posta <span className="text-brand-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                placeholder="ornek@email.com"
              />
            </div>

            {/* KVKK ve Gizlilik Sözleşmeleri */}
            <div className="mb-8 space-y-4">
              {/* KVKK Aydınlatma Metni */}
              <div className="flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-brand-accent/30 transition-all">
                <input
                  type="checkbox"
                  id="kvkk"
                  checked={kvkkAccepted}
                  onChange={(e) => setKvkkAccepted(e.target.checked)}
                  required
                  className="mt-1 w-5 h-5 rounded border-white/20 bg-white/5 text-brand-accent focus:ring-brand-accent focus:ring-offset-0 cursor-pointer"
                />
                <label
                  htmlFor="kvkk"
                  className="text-sm text-gray-200 cursor-pointer leading-relaxed"
                >
                  <a
                    href="/kvkk.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-accent hover:underline font-semibold"
                  >
                    KVKK Aydınlatma Metni
                  </a>
                  'ni okudum ve kabul ediyorum. Kişisel verilerimin etkinlik
                  organizasyonu kapsamında işlenmesini onaylıyorum.{" "}
                  <span className="text-brand-accent font-bold">*</span>
                </label>
              </div>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center gap-3 text-green-400">
                <CheckCircle size={20} />
                <span>Kaydınız başarıyla oluşturuldu!</span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400">
                <AlertCircle size={20} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading" || !kvkkAccepted}
              className="w-full bg-brand-accent text-white font-bold py-4 px-8 rounded-xl hover:bg-brand-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
            >
              {status === "loading" ? (
                <>
                  <Loader className="animate-spin" size={20} />
                  Kaydediliyor...
                </>
              ) : (
                "Kayıt Ol"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegistrationForm

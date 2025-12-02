import PocketBase from "pocketbase"

export const pb = new PocketBase("https://aslan.pockethost.io")

export interface RegistrationData {
  name: string
  surname: string
  identity: string
  department: string
  university: string
  phone: string
  email: string
}

export const createRegistration = async (data: RegistrationData) => {
  try {
    const record = await pb.collection("digital_me").create(data)
    return { success: true, record }
  } catch (error: any) {
    return { success: false, error: error.message || "Kayıt oluşturulamadı" }
  }
}

import { Header } from '../../../components/Header/Header'
import { RegisterLogin } from '../../../pages/RegisterLogin/RegisterLogin'

export const logout = () => {
  localStorage.clear()
  RegisterLogin()
  Header()
}

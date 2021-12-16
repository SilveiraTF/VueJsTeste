import { http } from './config'

export default class GitService {
  static async getUser(user) {
    const res = await http.get(`https://api.github.com/users/${user}`)
    return res.data
  }

  static async getRepos(url) {
    const res = await http.get(url)
    return res.data
  }
}

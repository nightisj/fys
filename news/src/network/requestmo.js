import axios from 'axios'

const requestmo = axios.create({
	baseURL: 'http://toutiao.itheima.net'
  })
  export default requestmo
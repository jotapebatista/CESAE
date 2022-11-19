import './style.css'
import { htmlElement } from './assets/index'
import { fetchApi } from './fetchApi'

const data = await fetchApi('http://localhost:3000/url')

htmlElement(data)

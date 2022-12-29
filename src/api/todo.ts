import axios from 'axios'
import type { ITodoItem } from './types'

const baseUrl = 'http://127.0.0.1:8000/'

export async function queryTodoPage() {
  return axios.get(`${baseUrl}v1/app/todo`).then(res => res.data)
}

export async function queryTodoList() {
  return axios.get(`${baseUrl}v1/app/todo/list`).then(res => res.data)
}

export async function deleteTodo(id: number) {
  return axios.delete(`${baseUrl}v1/app/todo/${id}`).then(res => res.data)
}

export async function saveTodo(params: ITodoItem) {
  if (params.id)
    return axios.put(`${baseUrl}v1/app/todo`, params).then(res => res.data)

  return axios.post(`${baseUrl}v1/app/todo`, params).then(res => res.data)
}

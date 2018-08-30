import http from '../../services/http'

import { ADD_CLIENT, FETCH_CLIENTS } from '../types'
import { setAlert } from './commonActions'

export const addClient = (clientData, history) => dispatch => {
  http.post('/admin/clients', clientData).then(res => {
    dispatch({
      type: ADD_CLIENT,
      payload: res.data
    })

    dispatch(setAlert('Cadastro realizado com sucesso!', 'success'))

    history.push('/')
  })
}

export const fetchClients = (page = 1) => dispatch => {
  http.get(`/admin/clients?page=${page}`).then(res => {
    dispatch({
      type: FETCH_CLIENTS,
      payload: res.data
    })
  })
}

import axios from 'axios'
export const getAllVariable = (id) => {
    return axios.get(`http://localhost:5000/api/v1/variable/list`)
}
export const findOneVariable = (id) => {
    //console.log('==',id)
    return axios.get(`http://localhost:5000/api/v1/variable/list/${id}`)
}

export const deleteVariable = (id) => {
    console.log('==',id)
    return axios.get(`http://localhost:5000/api/v1/variable/delete/${id}`)
}
export const addVariable = (Variable) => {
    //console.log("===",Variable)
    return axios.post('http://localhost:5000/api/v1/variable/add', Variable)
}
export const updateVariable = (Variable) => {
    //console.log("====",Variable)
    return axios.post(`http://localhost:5000/api/v1/variable/update/${Variable.id}`, Variable)
}

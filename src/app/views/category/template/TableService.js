import axios from 'axios'

export const getAllCategory = () => {
    return axios.get('http://localhost:5000/api/v1/category/list')
}
export const getAllSubCategory = () => {
    return axios.get('http://localhost:5000/api/v1/subcategory/list')
}

export const findOneCategory = (id) => {
    return axios.get(`http://localhost:5000/api/v1/category/list/${id}`)
}


export const deleteCategory = (id) => {
    //console.log('==',id)
    return axios.get(`http://localhost:5000/api/v1/category/delete/${id}`)
}
export const addCategory = (Category) => {
    //console.log("===",Category)
    return axios.post('http://localhost:5000/api/v1/category/add', Category)
}
export const updateCategory = (Category) => {
    //console.log("====",Category)
    return axios.post(`http://localhost:5000/api/v1/category/update/${Category.id}`, Category)
}

import axios from 'axios'

export const getAllModel = () => {
    return axios.get('http://localhost:5000/api/v1/model/list')
}


export const findOnemodel = (id) => {
    return axios.get(`http://localhost:5000/api/v1/model/list/${id}`)
}
export const deletemodel = (id) => {
    //console.log('==',id)
    return axios.get(`http://localhost:5000/api/v1/model/delete/${id}`)
}

export const getAllCategory = () => {
    return axios.get('http://localhost:5000/api/v1/category/list')
}
export const findSubCategoryByCategoryId = (id) => {
    //console.log("===",id)
    return axios.get(`http://localhost:5000/api/v1/subcategorybycategory/${id}`)
}

export const getAllSubCategory = () => {
    return axios.get('http://localhost:5000/api/v1/subcategory/list')
}
export const getProductBySubCategory = (id) => {
    return axios.get(`http://localhost:5000/api/v1/productbysubcategory/${id}`)
}

export const getAllVariable = (id) => {
    return axios.get(`http://localhost:5000/api/v1/variable/list`)
}
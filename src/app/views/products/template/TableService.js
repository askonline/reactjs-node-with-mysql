import axios from 'axios'

export const getAllProducts = () => {
    return axios.get('http://localhost:5000/api/v1/product/list')
}

export const findOneProduct = (id) => {
    return axios.get(`http://localhost:5000/api/v1/product/list/${id}`)
}


export const deleteProduct = (id) => {
    console.log('==',id)
    return axios.get(`http://localhost:5000/api/v1/product/delete/${id}`)
}
export const addProduct = (Product) => {
    //console.log("===",Product)
    return axios.post('http://localhost:5000/api/v1/product/add', Product)
}
export const updateProduct = (Product) => {
    //console.log("====",Product)
    return axios.post(`http://localhost:5000/api/v1/product/update/${Product.id}`, Product)
}
export const getAllCategory = () => {
    return axios.get('http://localhost:5000/api/v1/category/list')
}
export const getAllSubCategory = () => {
    return axios.get('http://localhost:5000/api/v1/subcategory/list')
}

export const findOneCategory = (id) => {
    return axios.get(`http://localhost:5000/api/v1/category/list/${id}`)
}
export const findSubCategoryByCategoryId = (id) => {
    //console.log("===",id)
    return axios.get(`http://localhost:5000/api/v1/subcategorybycategory/${id}`)
}

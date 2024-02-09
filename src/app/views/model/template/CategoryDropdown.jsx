import React, {useEffect, useState } from 'react';
import { getAllCategory} from './TableService'

const CategoryDropdown = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryList, setCategoryList] = useState([])
  
  //console.log("==pp===",props)
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    props.onCategoryChange(event.target.value);
  };

  const getCategoryData = () => {
    getAllCategory().then(({ data }) => {
        setCategoryList(data)
    })
    }
    useEffect(() => {
      getCategoryData()
    
    }, [])


  return (
    <div>
      
      <select id="category"  onChange={handleCategoryChange} style={{ 
          padding:"8px",
          margin: "0px",
          width: "724px" 
        }} name='categoryid' 
        required> 
        <option value={'12'}>Select Category</option>
        {categoryList.map((citem, ind) => (
          <option value={citem.id} >{citem.name}</option>
          ))}
        </select> 
        
        
    </div>
  );
};

export default CategoryDropdown;
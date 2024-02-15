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

    const options = categoryList.map((citem , ind) => {
      return <option 
                  value={citem.id} 
                  selected={citem.id === 7}>{citem.name}
             </option>
  })

  return (
    <div>
      
      <select id="category"  onChange={handleCategoryChange} style={{ 
          padding:"8px",
          margin: "0px",
          width: "724px" 
        }} name='categoryid' 
        required> 
        <option value={'12'}>Select Category</option>
         {options}
       
        </select> 
        
        
    </div>
  );
};

export default CategoryDropdown;
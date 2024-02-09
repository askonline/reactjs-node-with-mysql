import React, { useState, useEffect } from 'react';
import { findSubCategoryByCategoryId} from './TableService'

const SubcategoryDropdown = (props) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    findSubCategoryByCategoryId(props.category).then(({ data }) => {
      setSelectedSubcategory(data)
      setSubcategories(data)
    })
}, [props.category])

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    props.onSubcategoryChange(event.target.value);
  };
  return (
    <div>
      <select id="subcategory"  onChange={handleSubcategoryChange} style={{ 
          padding:"8px",
          margin: "0px",
          width: "724px" 
        }} name='categoryid' 
        value={selectedSubcategory}
        required> 
        <option value={''}>Select Sub Category</option>
        {subcategories.map((citem, ind) => (
          <option value={citem.id} >{citem.name}</option>
          ))}
        </select> 
      
    </div>
  );
};

export default SubcategoryDropdown;
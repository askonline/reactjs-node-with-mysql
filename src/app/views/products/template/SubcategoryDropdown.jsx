import React, { useState, useEffect } from 'react';
import { findOneProduct,findSubCategoryByCategoryId} from './TableService'
import { useParams } from "react-router-dom";

const SubcategoryDropdown = (props) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const { id } = useParams();
  const [findOne, setfindOne] = useState([])
  
  const findOneData = () => {
    findOneProduct(id).then(({ data }) => {
      setfindOne(data)
    })
    }

  useEffect(() => {
    findOneData()
  
  }, [])
 
 //let categoryId=(findOne.parent_category_id)?findOne.parent_category_id:props.category;
  
 //console.log("=====",findOne.parent_category_id)

  useEffect(() => {
    if(id)
    {
      findSubCategoryByCategoryId(7).then(({ data }) => {
        setSelectedSubcategory(data)
        setSubcategories(data)
      })
    }
    if(props.category)
    {
      findSubCategoryByCategoryId(props.category).then(({ data }) => {
        setSelectedSubcategory(data)
        setSubcategories(data)
      })
    }
    
}, [props.category])


  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
    props.onSubcategoryChange(event.target.value);
  };
  const subcatoptions = subcategories.map((citem , ind) => {
    return <option 
                value={citem.id} 
                selected={citem.id === Number(findOne.parent_id)}>{citem.name}
           </option>
    })

  return (
    <div>
      
      <select id="subcategory"  onChange={handleSubcategoryChange} style={{ 
          padding:"8px",
          margin: "0px",
          width: "724px" 
        }} name='subcategoryid' 
        required> 
        <option value={''}>Select Sub Category</option>
          {subcatoptions}
      </select> 
      
    </div>
  );
};

export default SubcategoryDropdown;
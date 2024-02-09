import React, { useState, useEffect } from 'react';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
import { getProductBySubCategory} from './TableService'

const ProductDropdown = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const animatedComponents = makeAnimated();
  const [prodeuctsList, setProdeuctsList] = useState([])
  //console.log("==pp===",props)

  useEffect(() => {
    getProductBySubCategory(props.subcategory).then(({ data }) => {
      setProdeuctsList(data)
    })
}, [props.subcategory])

  
  return (
    <div>
      {/*
      <select id="products"  onChange={handleProductsChange} style={{ 
          padding:"8px",
          margin: "0px",
          width: "724px" 
        }} name='projectname' 
        value={selectedSubcategory}
        multiple
        required> 
        <option value={''}>Select Products</option>
        {subcategories.map((citem, ind) => (
          <option value={citem.id} >{citem.name}</option>
          ))}
        </select> */}
        <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[prodeuctsList[1], prodeuctsList[1]]}
        isMulti
        options={prodeuctsList}
        name="products[]"
        
      /> 
    </div>
  );
};

export default ProductDropdown;
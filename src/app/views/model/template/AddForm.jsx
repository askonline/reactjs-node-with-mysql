import React from 'react'
import { Formik } from 'formik'

import {
    TextField,
    Button,
    FormControlLabel,
    Grid,
    Icon,
    Radio,
    RadioGroup,
    MenuItem,
    Divider,
    Checkbox
    
  } from "@mui/material";
  import { Span } from "app/components/Typography";

  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  
  import { getAllSubCategory,getAllCategory,findOnemodel,findSubCategoryByCategoryId} from './TableService'
  import * as yup from 'yup'
  import { useParams,useNavigate } from "react-router-dom";
  import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select';
  import 'react-responsive-select/dist/react-responsive-select.css';
const AddProductForm = () => {
  const [state, setState] = useState({ date: new Date() });
  const [subcategoryList, setSubCategoryList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const [subcategoryByCategoryList, setSubcategoryByCategoryList] = useState([])
  const [subcategoryByCategoryList1, setSubcategoryByCategoryList1] = useState([])
  const [subcategoryByCategoryList7, setSubcategoryByCategoryList7] = useState([])
  const navigate = useNavigate();
  const { id } = useParams();
  const [findOne, setfindOne] = useState([])
  const [selected, setSelected] = useState([4]); 
 
  const getCategoryData = () => {
    getAllCategory().then(({ data }) => {
        setCategoryList(data)
    })
    }


    const getSubCategoryData = () => {
      getAllSubCategory().then(({ data }) => {
        setSubCategoryList(data)
      })
      }

  

  //---------------------- Start Subcategory
  console.log("===",selected)
  const getSubCategoryByCategoryId = () => {
    findSubCategoryByCategoryId(4).then(({ data }) => {
      setSubcategoryByCategoryList(data)
    })
    findSubCategoryByCategoryId(1).then(({ data }) => {
      setSubcategoryByCategoryList1(data)
    })
    findSubCategoryByCategoryId(7).then(({ data }) => {
      setSubcategoryByCategoryList7(data)
    })
    
    }

  let datatype=null;
  if(selected==1)
  { 
    datatype = subcategoryByCategoryList1; 
  }
  else if(selected==7)
  { 
    datatype = subcategoryByCategoryList7; 
  }
  else
  { 
    datatype = subcategoryByCategoryList; 
  }
  
  //---------------------- End Subcategory
   /* ----------------- Get Category Id */
   const findOneModelData = () => {
    findOnemodel(id).then(({ data }) => {
      setfindOne(data)
    })
    }

    const handleSubmit = async (values, { isSubmitting }) => {
        console.log("==",values)
        const formData = new FormData();
       
            /* if (id) {
                updateCategory({id,
                    ...values,
                })
            } else {
                addCategory({
                    ...values,
                })
            }
        
            setState({ parent_id:'',name: '', status: '' });
            navigate('/subcategory/list');*/
    }

  

    const initialValues = {
      categoryid:'',
      subcat: '',
      projectname:'',
     
    }
    
    //console.log("===",findOne)
    useEffect(() => {
      getSubCategoryByCategoryId()
      getCategoryData()
      getSubCategoryData()
      findOneModelData()
    }, [])

    return (
        <div className="m-sm-30">
                
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                    validationSchema={subCategorySchema}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                    }) => (
                    <form className="p-4" onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item sm={6} xs={12}>
                        <select onChange={e => setSelected(e.target.value)} style={{ 
                          padding:"8px",
                          margin: "0px",
                          width: "724px" 
                        }} name='categoryid' 
                        value={findOne.parent_cat_id}
                        required> 
                        <option value={''}>Select Category</option>
                        {categoryList.map((citem, ind) => (
                          <option value={citem.id} >{citem.name}</option>
                          ))}
                        </select> 
               
                    </Grid>
                    <Grid item sm={6} xs={12}>
                            
                            <TextField
                                className="min-w-188"
                                label="Select Sub Category"
                                name="subcat"
                                size="small"
                                variant="outlined"
                                select
                                value={values.subcat || findOne.parent_id}
                                onChange={handleChange}
                                fullWidth
                                error={Boolean(
                                    touched.subcat && errors.subcat
                                )}
                                helperText={touched.subcat && errors.subcat}
                            >
                                {datatype.map((sitem, ind) => (
                                    <MenuItem value={sitem.id} key={sitem.id}>
                                        {sitem.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                    <TextField
                        type="text"
                        name="projectname"
                        id="standard-basic"
                        value={values.projectname || findOne.name}
                        fullWidth
                        onChange={handleChange}
                        label="Product Name"
                        error={Boolean(
                            touched.projectname && errors.projectname
                        )}
                        helperText={touched.projectname && errors.projectname}
                    />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                    <TextField
                        type="text"
                        name="modelno"
                        id="standard-basic"
                        value={values.modelno || findOne.model_number}
                        fullWidth
                        onChange={handleChange}
                        label="Model No"
                        error={Boolean(
                            touched.projectname && errors.projectname
                        )}
                        helperText={touched.projectname && errors.projectname}
                    />
                    </Grid>
                    <Grid item sm={12} xs={12}> <Divider className="mb-6" /><h4>Product Specifications</h4></Grid>
                    <Grid item sm={6} xs={12}>
                      <span>Variable </span>
                        <TextField
                            className="min-w-188"
                            label="Select Variable"
                            name="variable"
                            size="small"
                            variant="outlined"
                            select
                            value={values.variable || ''}
                            onChange={handleChange}
                            fullWidth
                            error={Boolean(
                                touched.variable && errors.variable
                            )}
                            helperText={touched.variable && errors.variable}
                        >
                            {datatype.map((sitem, ind) => (
                                <MenuItem value={sitem.id} key={sitem.id}>
                                    {sitem.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <span>Input Type</span>
                      <RadioGroup
                        row
                        name="inputtype"
                        sx={{ mb: 2 }}
                        value={values.inputtype || 0}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="1"
                          label="Single Value"
                          labelPlacement="end"
                          control={<Radio color="secondary" 
                          />}
                        />
          
                        <FormControlLabel
                          value="2"
                          label="Range Values"
                          labelPlacement="end"
                          control={<Radio color="secondary" 
                          />}
                        />
                         <FormControlLabel
                          value="3"
                          label="Multiple Lines Value"
                          labelPlacement="end"
                          control={<Radio color="secondary" 
                          />}
                        />
                        
                      </RadioGroup>
                      
                    </Grid>
                    <Grid item sm={12} xs={12}> <Divider className="mb-6" /></Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                          type="text"
                          name="metatitle"
                          id="standard-othertitle"
                          value={values.metatitle || ''}
                          fullWidth
                          onChange={handleChange}
                          label="Meta Title"
                          error={Boolean(
                              touched.metatitle && errors.metatitle
                          )}
                          helperText={touched.metatitle && errors.metatitle}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <TextField
                          type="text"
                          name="metakeyword"
                          id="standard-metakeyword"
                          value={values.metakeyword || ''}
                          fullWidth
                          onChange={handleChange}
                          label="Meta Keyword"
                          error={Boolean(
                              touched.metakeyword && errors.metakeyword
                          )}
                          helperText={touched.metakeyword && errors.metakeyword}
                      />
                    </Grid>

                    <Grid item sm={12} xs={12}>
                   
                      <TextField
                          type="text"
                          name="metakdesc"
                          id="standard-metakdesc"
                          value={values.metakeyword || ''}
                          fullWidth
                          multiline
                          rows={4}
                          onChange={handleChange}
                          label="Meta Description"
                         
                      />
                    </Grid>


                    <Grid item sm={12} xs={12}>
                        <Button color="primary" variant="contained" type="submit" >
                            <Icon>send</Icon>
                            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span> 
                        </Button>
                        <Link to={'/subcategory/list'}>
                       
                        </Link>
                    </Grid>
                   
                    </Grid>
                    
                    </form>
                    )}
                </Formik>
          
        </div>
    )
}

const subCategorySchema = yup.object().shape({
//    categoryid: yup.number().required('Category is required'),
   subcat: yup.number().required('Select Subcategory is required'),
    projectname: yup.string().required('Prodect name is required'),
    url: yup.string().required('URL is required'),
    feature_highlight: yup.string().required('Feature highlight is required'),
    datasheetno: yup.string().required('Data sheet no is required'),
    datasheetrevno: yup.string().required('Data sheet revison no is required'),
    //status: yup.number().required('Status is required'),
    
})


export default AddProductForm

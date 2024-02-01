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
  
  import { getAllSubCategory,getAllCategory,findOneCategory,addCategory,updateCategory} from './TableService'
  import * as yup from 'yup'
  import { useParams,useNavigate } from "react-router-dom";

 
const AddProductForm = () => {
  const [state, setState] = useState({ date: new Date() });
  const [subcategoryList, setSubCategoryList] = useState([])
  const [categoryList, setCategoryList] = useState([])
  const navigate = useNavigate();
  const { id } = useParams();
  const [findOne, setfindOne] = useState([])
  

  

  const getCategoryData = () => {
    getAllCategory().then(({ data }) => {
        setCategoryList(data)
    })
    }

    useEffect(() => {
        getCategoryData()
    }, [])

    const getSubCategoryData = () => {
      getAllSubCategory().then(({ data }) => {
        setSubCategoryList(data)
      })
      }

    useEffect(() => {
      getSubCategoryData()
  }, [])
    
  
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

    /* ----------------- Get Category Id */
  const findOneCategoryData = () => {
    findOneCategory(id).then(({ data }) => {
      setfindOne(data)
    })
    }

    useEffect(() => {
      findOneCategoryData()
    }, [])

 
    const initialValues = {
      categoryid:'',
      subcat: '',
      projectname:'',
      url:'',
      feature_highlight:'',
      datasheetno:'',
      datasheetrevno:''
    }
    
    //console.log("===",findOne)

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
                       
                            <TextField
                                className="min-w-188"
                                label="Select Category"
                                name="categoryid"
                                size="small"
                                variant="outlined"
                                select
                                value={values.categoryid || ''}
                                onChange={handleChange}
                                fullWidth
                                error={Boolean(
                                    touched.categoryid && errors.categoryid
                                )}
                                helperText={touched.categoryid && errors.categoryid}
                            >
                                {categoryList.map((item, ind) => (
                                    <MenuItem value={item.id} key={item.id}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                            <TextField
                                className="min-w-188"
                                label="Select Sub Category"
                                name="subcat"
                                size="small"
                                variant="outlined"
                                select
                                value={values.subcat || ''}
                                onChange={handleChange}
                                fullWidth
                                error={Boolean(
                                    touched.subcat && errors.subcat
                                )}
                                helperText={touched.subcat && errors.subcat}
                            >
                                {categoryList.map((item, ind) => (
                                    <MenuItem value={item.id} key={item.id}>
                                        {item.name}
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
                        name="url"
                        id="standard-basic"
                        value={values.url || ''}
                        fullWidth
                        onChange={handleChange}
                        label="URL"
                        error={Boolean(
                            touched.url && errors.url
                        )}
                        helperText={touched.url && errors.url}
                    />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                          <TextField
                              label="Feature Highlight"
                              name="feature_highlight"
                              size="small"
                              variant="outlined"
                              multiline
                              rows={4}
                              fullWidth
                              value={values.feature_highlight || ''}
                              onChange={handleChange}
                              error={Boolean(
                                touched.feature_highlight && errors.feature_highlight
                            )}
                            helperText={touched.feature_highlight && errors.feature_highlight}
                          />
                      </Grid>
                      <Grid item sm={3} xs={12}>
                        <h5>Product Type</h5>
                        <FormControlLabel
                            control={
                              <Checkbox checked={state.new} 
                                onChange={handleChange('new')} 
                                value="New" 
                                color="primary"/>
                            }
                            label="New"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.featured}
                                onChange={handleChange('featured')}
                                value="Featured"
                                color="primary"
                              />
                            }
                            label="Featured"
                          />
                      </Grid> 
                      
                      <Grid item sm={3} xs={12}>
                        <h5>Specification Table Heading</h5>
                      <RadioGroup
                          row
                          name="specification_table"
                          sx={{ mb: 2 }}
                          value={values.specification_table || 0}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="1"
                            label="Vertical Menu"
                            labelPlacement="end"
                            control={<Radio color="secondary" />}
                          />

                          <FormControlLabel
                            value="0"
                            label="Horizontal Menu"
                            labelPlacement="end"
                            control={<Radio color="secondary" />}
                          />

                         
                        </RadioGroup>
                  </Grid>
                  <Grid item sm={3} xs={12}>
                    <h4>Feature Image</h4>
                      <input type="file" 
                        onChange={(e) =>
                                setFieldValue(
                                    'featureImage',
                                    e.target.files
                                )
                            }
                       />   
                         
                    </Grid>
                    <Grid item sm={3} xs={12}>
                      <h4>Feature Image Title</h4>
                      <TextField
                          type="text"
                          name="fititle"
                          id="standard-fititle"
                          value={values.fititle || ''}
                          fullWidth
                          onChange={handleChange}
                          label=""
                          error={Boolean(
                              touched.fititle && errors.fititle
                          )}
                          helperText={touched.fititle && errors.fititle}
                      />
                    </Grid>
                    <Grid item sm={3} xs={12}>
                      <h4>Datasheet No</h4>
                      <TextField
                          type="text"
                          name="datasheetno"
                          id="standard-datasheet"
                          value={values.datasheetno || ''}
                          fullWidth
                          onChange={handleChange}
                          label=""
                          error={Boolean(
                              touched.datasheetno && errors.datasheetno
                          )}
                          helperText={touched.datasheetno && errors.datasheetno}
                      />
                    </Grid>
                    <Grid item sm={3} xs={12}>
                      <h4>Datasheet Revision No</h4>
                      <TextField
                          type="text"
                          name="datasheetrevno"
                          id="standard-datasheetrevno"
                          value={values.datasheetrevno || ''}
                          fullWidth
                          onChange={handleChange}
                          label=""
                          error={Boolean(
                              touched.datasheetrevno && errors.datasheetrevno
                          )}
                          helperText={touched.datasheetrevno && errors.datasheetrevno}
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}>
                      <TextField
                          label="Description"
                          name="description"
                          size="small"
                          variant="outlined"
                          multiline
                          rows={4}
                          fullWidth
                          value={values.description}
                          onChange={handleChange}
                      />
                  </Grid>         
                  <Grid item sm={12} xs={12}> <Divider className="mb-6" /></Grid>
                  <Grid item sm={3} xs={12}>
                    <h4>Website Outline Drawing Image</h4>
                    <input type="file" 
                        onChange={(e) =>
                                setFieldValue(
                                    'wodimage',
                                    e.target.files
                                )
                            }
                       />  
                         
                    </Grid>
                    <Grid item sm={3} xs={12}>
                      <h4>Website Outline Drawing Title</h4>
                      <TextField
                          type="text"
                          name="wodtitle"
                          id="standard-basic"
                          value={values.wodtitle || ''}
                          fullWidth
                          onChange={handleChange}
                          label=""
                          error={Boolean(
                              touched.wodtitle && errors.wodtitle
                          )}
                          helperText={touched.wodtitle && errors.wodtitle}
                      />
                    </Grid>

                  <Grid item sm={3} xs={12}>
                    <h4>Datasheet PDF Outline Drawing Image</h4>
                    <input type="file" 
                        onChange={(e) =>
                                setFieldValue(
                                    'dpdfodimage',
                                    e.target.files
                                )
                            }
                       /> 
                         
                    </Grid>
                    <Grid item sm={3} xs={12}>
                      <h4>Datasheet PDF Outline Drawing Title</h4>
                      <TextField
                          type="text"
                          name="dpodtitle"
                          id="standard-dpodtitle"
                          value={values.dpodtitle || ''}
                          fullWidth
                          onChange={handleChange}
                          label=""
                          error={Boolean(
                              touched.dpodtitle && errors.dpodtitle
                          )}
                          helperText={touched.dpodtitle && errors.dpodtitle}
                      />
                    </Grid>
                    <Grid item sm={3} xs={12}>
                    <h4>Website Block Diagram Image</h4>
                    <input type="file" 
                        onChange={(e) =>
                                setFieldValue(
                                    'wbdimage',
                                    e.target.files
                                )
                            }
                       />  
                         
                    </Grid>
                    <Grid item sm={3} xs={12}>
                      <h4>Website Block Diagram Title</h4>
                      <TextField
                          type="text"
                          name="wbdtitle"
                          id="standard-wbdtitle"
                          value={values.wbdtitle || ''}
                          fullWidth
                          onChange={handleChange}
                          label=""
                          error={Boolean(
                              touched.wbdtitle && errors.wbdtitle
                          )}
                          helperText={touched.wbdtitle && errors.wbdtitle}
                      />
                    </Grid>
                    <Grid item sm={3} xs={12}>
                    <h4>Datasheet PDF Block Diagram Image</h4>
                    <input type="file" 
                        onChange={(e) =>
                                setFieldValue(
                                    'spdfbdimage',
                                    e.target.files
                                )
                            }
                       />   
                         
                    </Grid>
                    <Grid item sm={3} xs={12}>
                      <h4>Datasheet PDF Block Diagram Title</h4>
                      <TextField
                          type="text"
                          name="dpbdtitle"
                          id="standard-dpbdtitle"
                          value={values.dpbdtitle || ''}
                          fullWidth
                          onChange={handleChange}
                          label=""
                          error={Boolean(
                              touched.dpbdtitle && errors.dpbdtitle
                          )}
                          helperText={touched.dpbdtitle && errors.dpbdtitle}
                      />
                    </Grid>
                    <Grid item sm={12} xs={12}> <Divider className="mb-6" /><h5>Others Add Extra Details</h5></Grid>
                    
                    <Grid item sm={6} xs={12}>
                      <h4>Other Title</h4>
                      <TextField
                          type="text"
                          name="othertitle"
                          id="standard-othertitle"
                          value={values.othertitle || ''}
                          fullWidth
                          onChange={handleChange}
                          label=""
                          error={Boolean(
                              touched.othertitle && errors.othertitle
                          )}
                          helperText={touched.othertitle && errors.othertitle}
                      />
                    </Grid>
                    
                    <Grid item sm={6} xs={12}>
                    <h4>Image</h4>
                    <input type="file" 
                        onChange={(e) =>
                                setFieldValue(
                                    'otherimage',
                                    e.target.files
                                )
                            }
                       /> 
                         
                    </Grid>
                    <Grid item sm={12} xs={12}>
                    <TextField
                          label="Other Description"
                          name="otherdescription"
                          size="small"
                          variant="outlined"
                          multiline
                          rows={4}
                          fullWidth
                          value={values.otherdescription}
                          onChange={handleChange}
                      />
                      
                    </Grid>
                    
                    <Grid item sm={12} xs={12}> <Divider className="mb-6" /></Grid>
                    <Grid item sm={12} xs={12}>
                    <h4>Upload Datasheet PDF</h4>
                    <input type="file" 
                        onChange={(e) =>
                                setFieldValue(
                                    'datasheetpdf',
                                    e.target.files
                                )
                            }
                       /> 
                         
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
    /*categoryid: yup.number().required('Category is required'),
    subcat: yup.number().required('Select Subcategory is required'),
    projectname: yup.string().required('Prodect name is required'),
    url: yup.string().required('URL is required'),
    feature_highlight: yup.string().required('Feature highlight is required'),
    datasheetno: yup.string().required('Data sheet no is required'),
    datasheetrevno: yup.string().required('Data sheet revison no is required'),*/
    //status: yup.number().required('Status is required'),
    
})


export default AddProductForm
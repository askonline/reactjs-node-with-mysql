import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Button,
  Grid,
  Icon,
  styled,

} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import { SimpleCard } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import { findOneEvents,addEvents,updateEvents } from './TableService'
import { useParams,useNavigate } from "react-router-dom";
import LocalizationProvider from "@mui/lab/LocalizationProvider";


const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
  }));

  const AddForm = () => {
  const [findOne, setfindOne] = useState([])
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFromDateChange = (date) => setState({ ...state, date });
  const handleToDateChange = (to_date) => setState({ ...state, date });
  
  const [state, setState] = useState({
    name: '',
    description:'',
    image:'',
    from_date:'',
    to_date:'',
    status:'1',
        
    })
  const {
        name,
        description,
        date,
        to_date,
        status,
      } = state;

  /* ----------------- Get Category Id */
  const findOneEventsData = () => {
    findOneEvents(id).then(({ data }) => {
      setfindOne(data)
    })
    }

    useEffect(() => {
      findOneEventsData()
    }, [])
    
   
    //console.log(findOne)

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("submitted",event);
    if (id) {
      updateEvents({id,
            ...state,
        })
    } else {
      addEvents({
            ...state,
        })
    }
    setState({ Events_name: '', status: '' });
    navigate('/events/list');
    
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))
  const classes = useStyles()
  
  let eventName=(findOne.name)?findOne.name:"";
  

  return (
    <div>
     
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={1}>
          <Grid item lg={12} md={6} >
            <TextField
              type="text"
              name="name"
              id="standard-basic"
              value={name || eventName}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Events (Min length 3)"
              validators={["required", "minStringLength: 3", "maxStringLength: 500"]}
            />
            </Grid>
            <Grid item sm={12} xs={12}>
            <TextField
              type="text"
              name="description"
              id="standard-basic-description"
              rows={4}
              multiline
              value={description || findOne.description}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Description"
              //validators={["required", "minStringLength: 3", "maxStringLength: 500"]}
            />
            
            </Grid>
            <Grid item sm={6} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={date}
                    onChange={handleFromDateChange}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        label="From Date"
                        id="mui-pickers-datefrom"
                        sx={{ mb: 2, width: "100%" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item sm={6} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={date}
                    onChange={handleToDateChange}
                    renderInput={(props) => (
                      <TextField
                        {...props}
                        label="To Date"
                        id="mui-pickers-dateto"
                        sx={{ mb: 2, width: "100%" }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            <Grid item sm={12} xs={12}>
              <h4>Feature Image</h4>
                <input type="file" 
                  
                  />   
                    
              </Grid>
              
            
        </Grid>
        <SimpleCard>
        <Button color="primary" variant="contained" type="submit" className={classes.button}>
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
        </Button>

        <Link to={'/Events/list'}>
        <Button color="primary" variant="contained" type="submit" className={classes.button}>
          <Icon>send</Icon>
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Back</Span>
        </Button>
        </Link>
        </SimpleCard>

      </ValidatorForm>
    </div>
  );
};
export default AddForm;

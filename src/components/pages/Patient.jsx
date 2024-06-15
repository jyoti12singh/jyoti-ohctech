import { Box, Button, ButtonGroup, Stack, Grid, FormControl } from '@mui/material';

import useAxiosPrivate from '../../utils/useAxiosPrivate';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from '../common/Input';
import SingleSelect from "../common/SingleSelect";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import { Login } from '@mui/icons-material';
import { useState } from 'react';

const PatientValidationForm = Yup.object({
  selectpatientcategory: Yup.string().required("Please choose patient category "),
  pname: Yup.string().required("Please enter patient name"),
  fhname: Yup.string().required("Please enter father anme "),
  date: Yup.string().required("Please enter birth date"),
  genderchoose: Yup.string().required("Please  genderchoose"),
  blood: Yup.string().required("Please enter  blood"),
  aadhar: Yup.string().required("Please enter aadhar"),
  phone: Yup.string().required("Please enter phone number"),
  village: Yup.string().required("Please enter village"),
  post: Yup.string().required("Please enter post"),
  ps: Yup.string().required("Please enter ps"),
  tehsil:Yup.string().required("Please enter tehsil "),
  district:Yup.string().required("Please enter district "),
  state:Yup.string().required("Please enter sat"),
  pin:Yup.string().required("Please enter pin"),
});



// const PatientForm = ({ values, touched, handleBlur, errors, handleChange, handleSubmit }) => {
//     PatientForm.propTypes = {
//         values: PropTypes.object.isRequired,
//         touched: PropTypes.object.isRequired,
//         errors: PropTypes.object.isRequired,
//         handleBlur: PropTypes.func.isRequired,
//         handleChange: PropTypes.func.isRequired,
//         handleSubmit: PropTypes.func.isRequired,
//     };
    
//     // let b = true;


//     const genderselect=["Femail","Mail","Third Gender"]
//     const bloodgroupselect=["A+","AB+","B+","B-","O+","O-"]
//     const Patientselect=["A Grade","B Grade","A + Grade"]

//     return (
        
//       );
//     };
    


const Patient = () => {
    // const [rowData, setRowData] = useState([]);
    // const [colDefs, setColDefs] = useState([]);
    const [showForm, setShowForm] = useState(true);
    const axiosClientPrivate = useAxiosPrivate();
    // const [fetchTrigger, setFetchTrigger] = useState(0);
    // const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

    

    const initialValues = {
      selectpatientcategory: "",
      patientName: "",
      fatherName: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      aadharNo: "",
      primaryPhone: "",
      village: "",
      post: "",
      ps: "",
      tehsil: "",
      district: "",
      state: "",
      pinCode: "",
      lastModified: "",
      modifiedBy: ""
    };


    const genderselect=["Femail","Mail","Third Gender"]
    const bloodgroupselect=["A+","AB+","B+","B-","O+","O-"]
    const Patientselect=["A Grade","B Grade","A + Grade"]

    const {
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        setFieldValue,
        handleSubmit,
        resetForm,
    } = useFormik({
        initialValues: initialValues,
        validationSchema: PatientValidationForm,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axiosClientPrivate.post('/medicallist', values);
                toast.success("Saved Successfully!", {
                    position: "top-center"
                });
                // setFetchTrigger(prev => prev + 1);
                console.log('Response:', response.data);
                resetForm();
            } catch (error) {
                console.log(values);
                console.error('Error:', error);
            }
        },
    });

    const handleEdit = async (id) => {
      // alert(id);
      
        try {
            const response = await axiosClientPrivate.get(`/patients/${id}`);
            // const items = response.data.content;

            setFieldValue("id", response.data.id);
            setFieldValue("selectpatientcategory", response.data.selectpatientcategory);
            setFieldValue("patientName", response.data.patientName);
            setFieldValue("fatherName", response.data.fatherName);
            setFieldValue("dob", response.data.dob);
            setFieldValue("gender", response.data.gender);
            setFieldValue("bloodGroup", response.data.bloodGroup);
            setFieldValue("aadharNo", response.data.aadharNo);
            setFieldValue("primaryPhone", response.data.primaryPhone);
            setFieldValue("village", response.data.village);
            setFieldValue("post", response.data.post);
            setFieldValue("ps", response.data.ps);
            setFieldValue("tehsil", response.data.tehsil);
            setFieldValue("district", response.data.district);
            setFieldValue("state", response.data.state);
            setFieldValue("pinCode", response.data.pinCode);
            setFieldValue("lastModified", response.data.lastModified);
            setFieldValue("modifiedBy", response.data.modifiedBy);
            setShowForm(true);
        } catch (error) {
            console.error('Error fetching item for edit:', error);
        }
    };

    const handleUpdate = async (id) => {
      alert(id);
      const update = values;
      try {
          console.log(values);
          await axiosClientPrivate.put(`/patients/${id}`, update);
          toast.success("Updated Successfully!", {
              position: "top-center",
              autoClose: 3000,
          });
          resetForm();
          // setFetchTrigger(prev => prev + 1);
      } catch (err) {
          console.log(values);
          console.log(err);
      }
  }
   

   

    const { id } = useParams();
    if(id){
      // alert(id);
      handleEdit(id);
    }

    // /Patient/:id

    return (
        <Box m="20px">
            <ToastContainer />
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
                <ButtonGroup spacing={2}>
                <Link to="/Patient/:id">
                    <Button
                        variant="contained"
                        // sx={{ marginRight: 1 }}
                        startIcon={<AddCircleOutlineRoundedIcon />}
                        // onClick={() => setShowForm(!showForm)}
                    >
                        {/* {showForm ? 'Cancel' : 'Patient'} */}
                        Patient Profile
                    </Button>
                  </Link>
                    <Link to="/ContactList">
                    <Button
                        variant="contained"
                        startIcon={<AddCircleOutlineRoundedIcon />}
                        // onClick={() => setShowForm(!showForm)}
                    >
                        {/* {showForm ? 'Cancel' : 'Patient'} */}
                        Contact
                    </Button>
                     </Link>
                    {/* <Button
                        variant="contained"
                        startIcon={<PictureAsPdfIcon />}
                        onClick={exportpdf}
                    >
                        Export PDF
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        onClick={exportexcel}
                    >
                        Export Excel
                    </Button> */}
                </ButtonGroup>
            </Stack>
            {showForm && (
                <Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ width: '100%' }}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                        <form onSubmit={handleSubmit}>
                          <Grid container spacing={0} justifyContent="center" alignItems="center"  >
                          
                            <Grid itemxs={3} sm={12}  justifyContent="center" alignItems="center">
                              <FormControl  fullWidth>
                                <Grid container spacing={3} justifyContent="center" alignItems="center">
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                  <SingleSelect
                                      arr={Patientselect}
                                      label="Patient Category"
                                      name="selectpatientcategory"
                                      value={values.selectpatientcategory}
                                      onChange={(event, newValue) => {
                                        const syntheticEvent = {
                                          target: {
                                            name: "selectpatientcategory",
                                            value: newValue,
                                          },
                                        };
                                        handleChange(syntheticEvent);
                                      }}
                                      onBlur={handleBlur}
                                      type="text"
                                      helperText={
                                        errors.selectpatientcategory && touched.selectpatientcategorye ? (
                                          <span style={{ color: "red" }}>{errors.selectpatientcategory}</span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"   alignItems="center">
                                  <Input
                                      label="Patient Name"
                                      name="patientName"
                                      type="text"
                                      size="large"
                                      value={values.patientName}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.patientName && touched.patientName ? (
                                          <span style={{ color: "red" }}>
                                            {errors.patientName}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                                  <Input
                                      label="Father's/Husband Name"
                                      name="fatherName"
                                      type="text"
                                      size="large"
                                      value={values.fatherName}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.fatherName && touched.fatherName ? (
                                          <span style={{ color: "red" }}>
                                            {errors.fatherName}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="D.O.B"
                                      name="dob"
                                      type="date"
                                      size="large"
                                      value={values.dob}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.dob && touched.dob ? (
                                          <span style={{ color: "red" }}>
                                            {errors.dob}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                  <SingleSelect
                                      arr={genderselect}
                                      label="Gender"
                                      name="gender"
                                      value={values.gender}
                                      onChange={(event, newValue) => {
                                        const syntheticEvent = {
                                          target: {
                                            name: "gender",
                                            value: newValue,
                                          },
                                        };
                                        handleChange(syntheticEvent);
                                      }}
                                      onBlur={handleBlur}
                                      type="text"
                                      helperText={
                                        errors.gender && touched.gender ? (
                                          <span style={{ color: "red" }}>{errors.gender}</span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                  <SingleSelect
                                      arr={bloodgroupselect}
                                      label="Blood Group"
                                      name="bloodGroup"
                                      value={values.bloodGroup}
                                      onChange={(event, newValue) => {
                                        const syntheticEvent = {
                                          target: {
                                            name: "bloodGroup",
                                            value: newValue,
                                          },
                                        };
                                        handleChange(syntheticEvent);
                                      }}
                                      onBlur={handleBlur}
                                      type="text"
                                      helperText={
                                        errors.bloodGroup && touched.bloodGroup ? (
                                          <span style={{ color: "red" }}>{errors.bloodGroup}</span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                  
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="Aadhar Number"
                                      name="aadharNo"
                                      type="text"
                                      size="large"
                                      value={values.aadharNo}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.aadharNo && touched.aadharNo ? (
                                          <span style={{ color: "red" }}>
                                            {errors.aadharNo}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="Phone Number"
                                      name="primaryPhone"
                                      type="text"
                                      size="large"
                                      value={values.primaryPhone}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.primaryPhone && touched.primaryPhone ? (
                                          <span style={{ color: "red" }}>
                                            {errors.primaryPhone}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="Residing Village"
                                      name="village"
                                      type="text"
                                      size="large"
                                      value={values.village}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.village && touched.village ? (
                                          <span style={{ color: "red" }}>
                                            {errors.village}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="Post"
                                      name="post"
                                      type="text"
                                      size="large"
                                      value={values.post}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.post && touched.post ? (
                                          <span style={{ color: "red" }}>
                                            {errors.post}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="PS"
                                      name="ps"
                                      type="text"
                                      size="large"
                                      value={values.ps}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.ps && touched.ps ? (
                                          <span style={{ color: "red" }}>
                                            {errors.ps}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="Tehsil"
                                      name="tehsil"
                                      type="text"
                                      size="large"
                                      value={values.tehsil}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.tehsil && touched.tehsil ? (
                                          <span style={{ color: "red" }}>
                                            {errors.tehsil}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="District"
                                      name="district"
                                      type="text"
                                      size="large"
                                      value={values.district}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.district && touched.district ? (
                                          <span style={{ color: "red" }}>
                                            {errors.district}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  
                                  
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="State"
                                      name="state"
                                      type="text"
                                      size="large"
                                      value={values.state}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.state && touched.state ? (
                                          <span style={{ color: "red" }}>
                                            {errors.state}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                  <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                    <Input
                                      label="Pin Code"
                                      name="pinCode"
                                      type="text"
                                      size="large"
                                      value={values.pinCode}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      helperText={
                                        errors.pinCode && touched.pinCode ? (
                                          <span style={{ color: "red" }}>
                                            {errors.pinCode}
                                          </span>
                                        ) : null
                                      }
                                    />
                                  </Grid>
                                </Grid>
                              </FormControl>
                            </Grid>
                          </Grid>
                        </form>
                      </div>
                        </FormControl>
                        <Box mt={6} display="flex" justifyContent="center">
                        <Button type="submit" onClick={()=> handleUpdate(id)}  variant="outlined" >Update</Button>                        </Box>
                    </form>
                </Box>
            )}
            {/* <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
                <AgGridReact rowData={rowData} columnDefs={colDefs} />
            </div> */}
        </Box>
    );
};

export default Patient;

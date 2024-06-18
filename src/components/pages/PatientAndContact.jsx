import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Stack,
  Grid,
  FormControl,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import SingleSelect from '../common/SingleSelect';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import Input from '../common/Input';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import EmpHealthDasboard from './EmpHealthDashboard';

const genderselect=["Femail","Mail","Third Gender"]
const bloodgroupselect=["A+","AB+","B+","B-","O+","O-"]
const Patientselect=["A Grade","B Grade","A + Grade"]

const PatientValidationSchema = Yup.object({
  gender: Yup.string().required('Please select a gender'),
});

const ContactValidationSchema = Yup.object({
  email: Yup.string().required('Please enter an email'),
});

const PatientAndContact = () => {
  const axiosClientPrivate = useAxiosPrivate();
  const { id } = useParams();

  // State for visibility of forms
  const [showPatientForm, setShowPatientForm] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  // State for fetched data
  const [rowData, setRowData] = useState([]);
  const [colDefs, setColDefs] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(0);

  const [showDashboard, setShowDashboard] = useState(false);
  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
};    

  // Initial form values
  const initialPatientValues = {
    gender: '',
  };

  const initialContactValues = {
    email: '',
  };

  // Formik for patient form
  const {
    values: patientValues,
    touched: patientTouched,
    errors: patientErrors,
    handleBlur: patientHandleBlur,
    handleChange: patientHandleChange,
    handleSubmit: patientHandleSubmit,
    resetForm: patientResetForm,
  } = useFormik({
    initialValues: initialPatientValues,
    validationSchema: PatientValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axiosClientPrivate.post('/patients', values);
        toast.success('Patient Saved Successfully!', {
          position: 'top-center',
        });
        setFetchTrigger((prev) => prev + 1);
        console.log('Patient Response:', response.data);
        patientResetForm();
      } catch (error) {
        console.error('Error saving patient:', error);
      }
    },
  });

  // Formik for contact form
  const {
    values: contactValues,
    touched: contactTouched,
    errors: contactErrors,
    handleBlur: contactHandleBlur,
    handleChange: contactHandleChange,
    handleSubmit: contactHandleSubmit,
    resetForm: contactResetForm,
  } = useFormik({
    initialValues: initialContactValues,
    validationSchema: ContactValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axiosClientPrivate.post('/contacts', values);
        toast.success('Contact Saved Successfully!', {
          position: 'top-center',
        });
        setFetchTrigger((prev) => prev + 1);
        console.log('Contact Response:', response.data);
        contactResetForm();
      } catch (error) {
        console.error('Error saving contact:', error);
      }
    },
  });

  // Fetch all patients for AG Grid
  useEffect(() => {
    const controller = new AbortController();

    const fetchPatients = async () => {
      try {
        const response = await axiosClientPrivate.get('/patients');
        const items = response.data;
        setRowData(items);
        if (items.length > 0) {
          const columns = Object.keys(items[0]).map((key) => ({
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            filter: true,
            sortable: true,
          }));

          columns.unshift({
            field: 'Actions',
            headerName: 'Actions',
            cellRenderer: ({ data }) => (
              <div>
                <Button onClick={() => handleEditPatient(data.id)}>
                  <EditNoteRoundedIcon />
                </Button>
                <Button onClick={() => handleDeletePatient(data.id)}>
                  <DeleteSweepRoundedIcon />
                </Button>
              </div>
            ),
          });

          setColDefs(columns);
        }
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();

    return () => {
      controller.abort();
    };
  }, [axiosClientPrivate, fetchTrigger]);

  // Function to handle editing patient
  const handleEditPatient = async (patientId) => {
    try {
      const response = await axiosClientPrivate.get(`/patients/${patientId}`);
      patientHandleChange({ target: { name: 'gender', value: response.data.gender } });
      setShowPatientForm(true);
      setShowContactForm(false);
    } catch (error) {
      console.error('Error fetching patient for edit:', error);
    }
  };

  // Function to handle deleting patient
  const handleDeletePatient = async (patientId) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      try {
        await axiosClientPrivate.delete(`/patients/${patientId}`);
        setFetchTrigger((prev) => prev + 1);
      } catch (error) {
        console.error('Error deleting patient:', error);
      }
    }
  };

  // Function to handle toggling patient form visibility
  const togglePatientForm = () => {
    setShowPatientForm(!showPatientForm);
    setShowContactForm(false);
  };

  // Function to handle toggling contact form visibility
  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
    setShowPatientForm(false);
  };

  return (
    <Box m="20px">
      <EmpHealthDasboard/>
      <ToastContainer />
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <ButtonGroup>
            {/* <Button
                variant="contained"
                onClick={toggleDashboard}
            >
                 Employee Health Dashboard
            </Button> */}
          <Button variant="contained" startIcon={<AddCircleOutlineRoundedIcon />} onClick={togglePatientForm}>
            Patient Profile
          </Button>
          <Button variant="contained" startIcon={<AddCircleOutlineRoundedIcon />} onClick={toggleContactForm}>
            Contact
          </Button>
        </ButtonGroup>
      </Stack>
      {showDashboard && <EmpHealthDasboard />}

      {/* Patient form */}
      {showPatientForm && (
        <Box mb={4}>
          <form onSubmit={patientHandleSubmit}>
            <FormControl sx={{ width: '100%' }}>
            <Grid container spacing={0} justifyContent="center" alignItems="center"  >
                          
                          <Grid itemxs={3} sm={12}  justifyContent="center" alignItems="center">
                            <FormControl  fullWidth>
                              <Grid container spacing={3} justifyContent="center" alignItems="center">
                                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                <SingleSelect
                                    arr={Patientselect}
                                    label="Patient Category"
                                    name="selectpatientcategory"
                                    value={patientValues.selectpatientcategory}
                                    onChange={(event, newValue) => {
                                      const syntheticEvent = {
                                        target: {
                                          name: "selectpatientcategory",
                                          value: newValue,
                                        },
                                      };
                                      patientHandleChange(syntheticEvent);
                                    }}
                                    onBlur={patientHandleBlur}
                                    type="text"
                                    helperText={
                                      patientErrors.selectpatientcategory && touched.selectpatientcategorye ? (
                                        <span style={{ color: "red" }}>{patientErrors.selectpatientcategory}</span>
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
                                    value={patientValues.patientName}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.patientName && touched.patientName ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.patientName}
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
                                    value={patientValues.fatherName}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.fatherName && touched.fatherName ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.fatherName}
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
                                    value={patientValues.dob}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.dob && touched.dob ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.dob}
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
                                    value={patientValues.gender}
                                    onChange={(event, newValue) => {
                                      const syntheticEvent = {
                                        target: {
                                          name: "gender",
                                          value: newValue,
                                        },
                                      };
                                      patientHandleChange(syntheticEvent);
                                    }}
                                    onBlur={patientHandleBlur}
                                    type="text"
                                    helperText={
                                      patientErrors.gender && touched.gender ? (
                                        <span style={{ color: "red" }}>{patientErrors.gender}</span>
                                      ) : null
                                    }
                                  />
                                </Grid>
                                <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                                <SingleSelect
                                    arr={bloodgroupselect}
                                    label="Blood Group"
                                    name="bloodGroup"
                                    value={patientValues.bloodGroup}
                                    onChange={(event, newValue) => {
                                      const syntheticEvent = {
                                        target: {
                                          name: "bloodGroup",
                                          value: newValue,
                                        },
                                      };
                                      patientHandleChange(syntheticEvent);
                                    }}
                                    onBlur={patientHandleBlur}
                                    type="text"
                                    helperText={
                                      patientErrors.bloodGroup && touched.bloodGroup ? (
                                        <span style={{ color: "red" }}>{patientErrors.bloodGroup}</span>
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
                                    value={patientValues.aadharNo}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.aadharNo && touched.aadharNo ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.aadharNo}
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
                                    value={patientValues.primaryPhone}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.primaryPhone && touched.primaryPhone ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.primaryPhone}
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
                                    value={patientValues.village}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.village && touched.village ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.village}
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
                                    value={patientValues.post}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.post && touched.post ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.post}
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
                                    value={patientValues.ps}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.ps && touched.ps ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.ps}
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
                                    value={patientValues.tehsil}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.tehsil && touched.tehsil ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.tehsil}
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
                                    value={patientValues.district}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.district && touched.district ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.district}
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
                                    value={patientValues.state}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.state && touched.state ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.state}
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
                                    value={patientValues.pinCode}
                                    onChange={patientHandleChange}
                                    onBlur={patientHandleBlur}
                                    helperText={
                                      patientErrors.pinCode && touched.pinCode ? (
                                        <span style={{ color: "red" }}>
                                          {patientErrors.pinCode}
                                        </span>
                                      ) : null
                                    }
                                  />
                                </Grid>
                              </Grid>
                            </FormControl>
                          </Grid>
                        </Grid>
              <Box mt={2} display="flex" justifyContent="center">
                <Button type="submit" variant="outlined">
                  Save Patient
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      )}

      {/* Contact form */}
      {showContactForm && (
        <Box mb={4}>
          <form onSubmit={contactHandleSubmit}>
            <FormControl sx={{ width: '100%' }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ maxWidth: 900, marginLeft:26, marginTop:2}}>
                    <Grid item xs={12} sm={6}>
                        <Input
                            label="Email"
                            name="email"
                            type="text"
                            value={contactValues.email}
                            onChange={contactHandleChange}
                            onBlur={contactHandleBlur}
                            helperText={contactErrors.email && touched.email ? <span style={{ color: "red" }}>{contactErrors.email}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            label="Personal Phone"
                            name="pphone"
                            type="text"
                            value={contactValues.pphone}
                            onChange={contactHandleChange}
                            onBlur={contactHandleBlur}
                            helperText={contactErrors.pphone && touched.pphone ? <span style={{ color: "red" }}>{contactErrors.pphone}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            label="Primary Contact Person"
                            name="pcperson"
                            type="text"
                            value={contactValues.pcperson}
                            onChange={contactHandleChange}
                            onBlur={contactHandleBlur}
                            helperText={contactErrors.pcperson && touched.pcperson ? <span style={{ color: "red" }}>{contactErrors.pcperson}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            label="Primary Contact Number"
                            name="pcnumber"
                            type="text"
                            value={contactValues.pcnumber}
                            onChange={contactHandleChange}
                            onBlur={contactHandleBlur}
                            helperText={contactErrors.pcnumber && touched.pcnumber ? <span style={{ color: "red" }}>{contactErrors.pcnumber}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            label="Sec Contact Person"
                            name="scperson"
                            type="text"
                            value={contactValues.scperson}
                            onChange={contactHandleChange}
                            onBlur={contactHandleBlur}
                            helperText={contactErrors.scperson && touched.scperson ? <span style={{ color: "red" }}>{contactErrors.scperson}</span> : null}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input
                            label="Sec Contact Number"
                            name="scnumber"
                            type="text"
                            value={contactValues.scnumber}
                            onChange={contactHandleChange}
                            onBlur={contactHandleBlur}
                            helperText={contactErrors.scnumber && touched.scnumber ? <span style={{ color: "red" }}>{contactErrors.scnumber}</span> : null}
                        />
                    </Grid>
                </Grid>
              <Box mt={2} display="flex" justifyContent="center">
                <Button type="submit" variant="outlined">
                  Save Contact
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
      )}

      {/* AG Grid for Patients */}
      <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
        {/* Render your AG Grid here */}
      </div>
    </Box>
  );
};

export default PatientAndContact;

import { Box, Button, ButtonGroup, Stack, Grid, FormControl, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import ExcelJS from 'exceljs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PropTypes from "prop-types";
import Input from '../common/Input';
import SingleSelect from "../common/SingleSelect";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

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

const PatientForm = ({ values, touched, handleBlur, errors, handleChange, handleSubmit }) => {
    PatientForm.propTypes = {
        values: PropTypes.object.isRequired,
        touched: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
        handleBlur: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
    };

    const genderselect=["Femail","Mail","Third Gender"]
    const bloodgroupselect=["A+","AB+","B+","B-","O+","O-"]
    const Patientselect=["A Grade","B Grade","A + Grade"]

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={0} justifyContent="center" alignItems="center"  >
            
              <Grid itemxs={3} sm={12}  justifyContent="center" alignItems="center">
                <FormControl  fullWidth>
                  <Grid container spacing={2} justifyContent="center" alignItems="center">
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
                        name="pname"
                        type="text"
                        size="large"
                        value={values.pname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.pname && touched.pname ? (
                            <span style={{ color: "red" }}>
                              {errors.pname}
                            </span>
                          ) : null
                        }
                      />
                    </Grid>
                    <Grid item  xs={12} sm={4} container spacing={1} justifyContent="center"  alignItems="center">
                    <Input
                        label="Father's/Husband Name"
                        name="fhname"
                        type="text"
                        size="large"
                        value={values.fhname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.fhname && touched.fhname ? (
                            <span style={{ color: "red" }}>
                              {errors.fhname}
                            </span>
                          ) : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                      <Input
                        label=""
                        name="date"
                        type="date"
                        size="large"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.date && touched.date ? (
                            <span style={{ color: "red" }}>
                              {errors.date}
                            </span>
                          ) : null
                        }
                      />
                    </Grid>
                  
                    <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                    <SingleSelect
                        arr={genderselect}
                        label="Gender"
                        name="genderchoose"
                        value={values.genderchoose}
                        onChange={(event, newValue) => {
                          const syntheticEvent = {
                            target: {
                              name: "genderchoose",
                              value: newValue,
                            },
                          };
                          handleChange(syntheticEvent);
                        }}
                        onBlur={handleBlur}
                        type="text"
                        helperText={
                          errors.genderchoose && touched.genderchoose ? (
                            <span style={{ color: "red" }}>{errors.genderchoose}</span>
                          ) : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                    <SingleSelect
                        arr={bloodgroupselect}
                        label="Blood Group"
                        name="blood"
                        value={values.blood}
                        onChange={(event, newValue) => {
                          const syntheticEvent = {
                            target: {
                              name: "blood",
                              value: newValue,
                            },
                          };
                          handleChange(syntheticEvent);
                        }}
                        onBlur={handleBlur}
                        type="text"
                        helperText={
                          errors.blood && touched.blood ? (
                            <span style={{ color: "red" }}>{errors.blood}</span>
                          ) : null
                        }
                      />
                    </Grid>
    
                    <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                      <Input
                        label="Aadhar Number"
                        name="aadhar"
                        type="text"
                        size="large"
                        value={values.aadhar}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.aadhar && touched.aadhar ? (
                            <span style={{ color: "red" }}>
                              {errors.aadhar}
                            </span>
                          ) : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} container spacing={1} justifyContent="center" alignItems="center">
                      <Input
                        label="Phone Number"
                        name="phone"
                        type="text"
                        size="large"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.phone && touched.phone ? (
                            <span style={{ color: "red" }}>
                              {errors.phone}
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
                        name="pin"
                        type="text"
                        size="large"
                        value={values.pin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          errors.pin && touched.pin ? (
                            <span style={{ color: "red" }}>
                              {errors.pin}
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
      );
    };
    
const Patient = () => {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([]);
    const [showForm, setShowForm] = useState(true);
    const axiosClientPrivate = useAxiosPrivate();
    const [fetchTrigger, setFetchTrigger] = useState(0);
    // const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const initialValues = {
        selectpatientcategory: "",
        pname: "",
        fhname: "",
        date: "",
        genderchoose: "",
        blood: "",
        aadhar: "",
        phone: "",
        village: "",
        post: "",
        ps: "",
        tehsil: "",
        district: "",
        state: "",
        pin: "",
        lastModified: "",
        modifiedBy: ""
    };

    const {
        values,
        touched,
        errors,
        handleBlur,
        handleChange,
        setFieldValue,
        handleSubmit,
        resetForm
    } = useFormik({
        initialValues: initialValues,
        validationSchema: PatientValidationForm,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axiosClientPrivate.post('/medicallist', values);
                toast.success("Saved Successfully!", {
                    position: "top-center"
                });
                setFetchTrigger(prev => prev + 1);
                console.log('Response:', response.data);
                resetForm();
            } catch (error) {
                console.log(values);
                console.error('Error:', error);
            }
        },
    });

    const handleEdit = async (id) => {
        try {
            const response = await axiosClientPrivate.get(`/business-units/${id}`);
            setFieldValue("id", response.data.id);
            setFieldValue("selectpatientcategory", response.data.selectpatientcategory);
            setFieldValue("pname", response.data.pname);
            setFieldValue("fhname", response.data.fhname);
            setFieldValue("date", response.data.date);
            setFieldValue("genderchoose", response.data.genderchoose);
            setFieldValue("blood", response.data.blood);
            setFieldValue("aadhar", response.data.aadhar);
            setFieldValue("phone", response.data.phone);
            setFieldValue("village", response.data.village);
            setFieldValue("post", response.data.post);
            setFieldValue("ps", response.data.ps);
            setFieldValue("tehsil", response.data.tehsil);
            setFieldValue("district", response.data.district);
            setFieldValue("state", response.data.state);
            setFieldValue("pin", response.data.pin);
            setFieldValue("lastModified", response.data.lastModified);
            setFieldValue("modifiedBy", response.data.modifiedBy);
            setShowForm(true);
        } catch (error) {
            console.error('Error fetching item for edit:', error);
        }
    };

    const handleDeleteRow = async (id) => {
        if (window.confirm('Are you sure you want to delete this data?')) {
            try {
                await axiosClientPrivate.delete(`/business-units/${id}`);
                setFetchTrigger(prev => prev + 1);
            } catch (error) {
                console.error('Error deleting row:', error);
            }
        }
    };

    const CustomActionComponent = ({ id }) => {
        CustomActionComponent.propTypes = {
            id: PropTypes.number.isRequired,
        };
        return (
            <div>
                <Button onClick={() => handleEdit(id)}>
                    <EditNoteRoundedIcon />
                </Button>
                <Button color="error" onClick={() => handleDeleteRow(id)}>
                    <DeleteSweepRoundedIcon />
                </Button>
            </div>
        );
    };

    useEffect(() => {
        const controller = new AbortController();

        const getAllOhc = async () => {
            try {
                const response = await axiosClientPrivate.get('business-units', { signal: controller.signal });
                const items = response.data.content;
                setRowData(items);
                if (items.length > 0) {
                    const columns = Object.keys(items[0]).map(key => ({
                        field: key,
                        headerName: key.charAt(0).toUpperCase() + key.slice(1),
                        filter: true,
                        floatingFilter: true,
                        sortable: true
                    }));

                    columns.unshift({
                        field: "Actions", cellRenderer: (params) => {
                            const id = params.data.id;
                            return <CustomActionComponent id={id} />
                        }
                    });

                    setColDefs(columns);
                }
            } catch (err) {
                console.error("Failed to fetch data: ", err);
                setRowData([]);
            }
        };

        getAllOhc();

        return () => {
            controller.abort();
        };
    }, [fetchTrigger]);

    const exportpdf = async () => {
        const doc = new jsPDF();
        const header = [['id', 'email', 'pphone', "pcperson", "pcnumber", "scperson", "scnumber"]];
        const tableData = rowData.map(item => [
            item.id,
            item.email,
            item.pphone,
            item.pcperson,
            item.pcnumber,
            item.scperson,
            item.scnumber,
        ]);
        doc.autoTable({
            head: header,
            body: tableData,
            startY: 10,
            styles: { fontSize: 8 },
            headStyles: { fillColor: '#4CAF50', textColor: '#FFFFFF', fontSize: 10 },
            bodyStyles: { fillColor: '#F5F5F5', textColor: '#333333', fontSize: 8 },
            alternateRowStyles: { fillColor: '#FFFFFF' },
            tableLineWidth: 0.1,
            tableLineColor: '#4CAF50'
        });
        doc.save('Patient.pdf');
    };

    const exportexcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Contact List');
        worksheet.columns = [
            { header: 'ID', key: 'id', width: 10 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Personal Phone', key: 'pphone', width: 15 },
            { header: 'Primary Contact Person', key: 'pcperson', width: 20 },
            { header: 'Primary Contact Number', key: 'pcnumber', width: 20 },
            { header: 'Sec Contact Person', key: 'scperson', width: 20 },
            { header: 'Sec Contact Number', key: 'scnumber', width: 20 }
        ];

        rowData.forEach(item => {
            worksheet.addRow({
                id: item.id,
                email: item.email,
                pphone: item.pphone,
                pcperson: item.pcperson,
                pcnumber: item.pcnumber,
                scperson: item.scperson,
                scnumber: item.scnumber
            });
        });

        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Patient.xlsx';
        link.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <Box m="20px">
            <ToastContainer />
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
                <ButtonGroup>
                    <Button
                        variant="contained"
                        startIcon={<AddCircleOutlineRoundedIcon />}
                        // onClick={() => setShowForm(!showForm)}
                    >
                        {/* {showForm ? 'Cancel' : 'Patient'} */}
                        Patient Profile
                    </Button>
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
                    <Button
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
                    </Button>
                </ButtonGroup>
            </Stack>
            {showForm && (
                <Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ width: '100%' }}>
                            <PatientForm
                                values={values}
                                errors={errors}
                                touched={touched}
                                handleBlur={handleBlur}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                            />
                        </FormControl>
                        <Box mt={2} display="flex" justifyContent="center">
                            <Button type="submit" variant="contained">Submit</Button>
                        </Box>
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

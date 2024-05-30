import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Popup from './Popup';
//import RefferedByForm from './RefferedByForm';
//import { AbnormValidationForm } from './Validationform';
// import { DiagnosisValidationForm } from './Validationform';
import { DeviceValidationForm } from './Validationform';
import { useFormik } from "formik";
//import AbnormalityForm from './AbnormalityForm';
//import DiagnosisForm from './AbnormalityForm';
import DeviceForm from './DeviceForm';
// import axios from 'axios';
import PropTypes from "prop-types";


const DeviceList = () => {

    const initialValues = {
    
      //  healthadvice:"",
      devicename:"",
      Isstatus:""
        
      };

      const axiosClientPrivate = useAxiosPrivate();
    
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
        validationSchema: DeviceValidationForm,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
          },
        // onSubmit: async (values, {resetForm}) => {
        // try {
        //     const response = await axiosClientPrivate.post('/ohcs', values);
        //setFetchTrigger(prev => prev+1);

        //     console.log('Response:', response.data);
        //     resetForm();
        //   } catch (error) {
        //     console.log(values);
        //     console.error('Error:', error);
        //   }
        //},
      });


    // const handleDelete = (id)=>{
    //         // alert("Delete item!")
    //         alert(id);
    // } 

    const handleDeleteRow = async (id) => {
        alert(id)
        try {
            await axiosClientPrivate.delete(`/ohcs/${id}`);

            // Update the grid data by filtering out the deleted row
            const newData = rowData.filter(row => row.id !== id);
            // setRowData(newData);
            setFetchTrigger(prev => prev+1);

        } catch (error) {
            console.error('Error deleting row:', error);
        }
    };

    const [rowData, setRowData] = useState([]);

    const [colDefs, setColDefs] = useState([]);

    const [openPopup, setOpenPopup] = useState(false);
    const [fetchTrigger, setFetchTrigger] = useState(0);




    const CustomActionComponent = ({id}) => {
        CustomActionComponent.propTypes = {
            id: PropTypes.number.isRequired,
          };
        return <div> <Button  > <EditNoteRoundedIcon /></Button>
           <Button color="error" onClick={() => handleDeleteRow(id)}> <DeleteSweepRoundedIcon /> </Button> </div>
    
    };

    const pagination = true;
    const paginationPageSize = 50;
    const paginationPageSizeSelector = [50, 100, 200, 500];

    useEffect(() => {
        const controller = new AbortController();

        const getAllOhc = async () => {
            try {
                const response = await axiosClientPrivate.get('ohcs', { signal: controller.signal });
                const items = response.data;
                    // console.log(items);
                
                if (items.length > 0) {
                   const  columns = Object.keys(items[0]).map(key => ({
                        field: key,
                        headerName: key.charAt(0).toUpperCase() + key.slice(1),
                        filter: true,
                        floatingFilter: true,
                        sortable: true
                    }));

                    columns.push({
                        // field: "Actions", cellRenderer: CustomActionComponent
                        field: "Actions", cellRenderer:  (params) =>{
                            const id = params.data.id;
                            return <CustomActionComponent id={id} />
                        }
                    });

                    setColDefs(columns);
                }

                setRowData(items);

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

    return (
        <>
            <Box
                className="ag-theme-quartz" // applying the grid theme
                style={{ height: 500 }} // adjust width as necessary
            >

                <Stack sx={{ display: 'flex', flexDirection: 'row' }} marginY={1} paddingX={1}>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button variant="contained" endIcon={<AddCircleOutlineRoundedIcon />} onClick={() => { setOpenPopup(true) }}>Add New</Button>
                        <Button variant="contained" color="success" endIcon={<ImportExportRoundedIcon />}>Export Data</Button>
                    </ButtonGroup>

                </Stack>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    animateRows={true} // Optional: adds animation to row changes
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                />
            </Box>

            <Popup resetForm={resetForm} handleSubmit={handleSubmit}  openPopup={openPopup} setOpenPopup={setOpenPopup} title="Device Status">

                <DeviceForm values={values} touched={touched} errors={errors} handleBlur={handleBlur} handleChange={handleChange} setFieldValue={setFieldValue} handleSubmit={handleSubmit} />
                
            </Popup>
        </>
    );
};

export default DeviceList;

import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Popup from './Popup';
import OhcForm from './OhcForm';
import { ValidationForm } from './Validationform';
import { Formik, useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

const OhcList = ()=> {


    const [id,setId] = useState(1);

    const [showupdate,setShowupdate] = useState(false);

    const [rowData, setRowData] = useState([]);

    const axiosClientPrivate = useAxiosPrivate();

    const [colDefs, setColDefs] = useState([]);

    const [openPopup, setOpenPopup] = useState(false);


    let initialValues = {
        ohcName: "",
        ohcCode: "",
        ohcDescription: "",
        address: "",
        state: "",
        fax: "",
        primaryPhone: "",
        primaryEmail: "",
        pinCode: "",
        ohcType: "",
        ohcLogo: "",
        ohcLogoType: "",
        iconColor: "",
        iconText: "",
        ohcCategory: "",
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
        validationSchema: ValidationForm,
        // onSubmit: (values, action) => {
        //     console.log(values);
        //     action.resetForm();
        //   },
        onSubmit: async (values, {resetForm}) => {
        try {
                 await axiosClientPrivate.post('/ohcs', values);
                 toast.success("Saved Successfully!",{
                    position:"top-center"
                 });
                //  setRowData(prevRowData => [...prevRowData, values]);
                 setRowData(rowData => [...rowData, values]);
                 resetForm();
          } catch (error) {
            console.log(values);
            console.error('Error:', error);
          }
        },
      });


      
  
  const CustomActionComponent = (props) => {
          
    return <> <Button  onClick={() =>  handleEdit(props.id)}> <EditNoteRoundedIcon /></Button>
        <Button color="error" onClick={()=>handleDeleteRow(props.id)}><DeleteSweepRoundedIcon /></Button> </>
};
    

// to fetch data
useEffect(() => {
  const controller = new AbortController();

  const getAllOhc = async () => {
      try {
          const response = await axiosClientPrivate.get('ohcs', { signal: controller.signal });
          const items = response.data;
              console.log(items);
          // setRowData(items);

          if (items.length > 0) {
              // columns.push({
              //     // field: "Actions", cellRenderer: CustomActionComponent
              //     field: "Actions", cellRenderer:  (params) =>{
              //         const id = params.data.id;
              //         return <CustomActionComponent id={id} />
              //     }
              // });

              const columns = Object.keys(items[0]).map(key => ({
                  field: key,
                  headerName: key.charAt(0).toUpperCase() + key.slice(1),
                  filter: true,
                  floatingFilter: true,
                  sortable: true
              }));

              columns.unshift({
                  // field: "Actions", cellRenderer: CustomActionComponent
                  field: "Actions", cellRenderer:  (params) =>{
                      const id = params.data.id;
                      return <CustomActionComponent id={id} />
                  }
              });

              setColDefs(columns);
          }

          // setRowData(items);

      } catch (err) {
          console.error("Failed to fetch data: ", err);
          setRowData([]);
      }
  };

  getAllOhc();

  return () => {
      controller.abort();
  };

}, []);

    
const handleEdit = async (id) => {
  try {
    const response = await axiosClientPrivate.get(`/ohcs/${id}`);
      console.log(response.data);
      setFieldValue("id",response.data.id);
      setFieldValue("ohcName",response.data.ohcName);
      setFieldValue("ohcCode",response.data.ohcCode);
      setFieldValue("ohcDescription",response.data.ohcDescription);
      setFieldValue("address", response.data.address);
      setFieldValue( "state", response.data.state);
      setFieldValue("fax", response.data.fax);
      setFieldValue("primaryPhone", response.data.primaryPhone);
      setFieldValue("primaryEmail", response.data.primaryEmail);
      setFieldValue("pinCode", response.data.pinCode);
      setFieldValue("ohcType", response.data.ohcType);
      setFieldValue("ohcLogo", response.data.ohcLogo);
      setFieldValue("ohcLogoType", response.data.ohcLogoType);
      setFieldValue("iconColor", response.data.iconColor);
      setFieldValue("iconText", response.data.iconText);
      setFieldValue("ohcCategory", response.data.ohcCategory);
      setFieldValue("lastModified", response.data.lastModified);
      setFieldValue("modifiedBy", response.data.modifiedBy);
    setId(id);
    setShowupdate(true);
    setOpenPopup(true);
  } catch (error) {
    console.error('Error fetching item for edit:', error);
  }
};

const handleUpdate = async (id)=> {
  alert(id);
  const update = values;
  try{
       console.log(values);
       await axiosClientPrivate.put(`/ohcs/${id}`,update);
       toast.success("Updated Successfully!",{
          position:"top-center",
          autoClose: 3000,
       });
       resetForm();
  }
  catch(err){
      console.log(values);
      console.log(err);
  }
}


// to delete a row
        const handleDeleteRow = async (id) => {
             // alert(id)
            if(window.confirm('Are you sure you want to delete this data?')){
            try {
                await axiosClientPrivate.delete(`/ohcs/${id}`);
                setRowData(prevData => prevData.filter(row => row.id !== id));
            } catch (error) {
                console.error('Error deleting row:', error);
            }
        }
        };

    const pagination = true;
    const paginationPageSize = 50;
    // const paginationPageSize = 2;
    const paginationPageSizeSelector = [50, 100, 200, 500];
    // const paginationPageSizeSelector = [2, 4, 8, 10];


    // useEffect(() => {
    //     fetchData(0, paginationPageSizeSelector[0]); // Fetch initial data
    //   }, []); // Empty dependency array to fetch data only once
    
    //   const fetchData = async (startRow, endRow) => {
    //     // Make API call to fetch data based on startRow and endRow
    //     // Replace this with your actual API call
    //     const response = await fetch(`your-api-endpoint?start_row=${startRow}&end_row=${endRow}`);
    //     const jsonData = await response.json();
    //     setRowData(jsonData);
    //   };
    
    //   const onGridReady = (params) => {
    //     setGridApi(params.api);
    //     setGridColumnApi(params.columnApi);
    //   };
    
    //   const onPageSizeChanged = (newPageSize) => {
    //     const startRow = 0;
    //     const endRow = newPageSize;
    //     fetchData(startRow, endRow);
    //   };
    


    




    
      


        



    return (
        <>
          <ToastContainer />
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

            <Popup handleUpdate={handleUpdate} setShowupdate={setShowupdate} showupdate={showupdate}   id= {id} resetForm={resetForm} handleSubmit={handleSubmit}  openPopup={openPopup} setOpenPopup={setOpenPopup} title="Fill The Details To Add New Ohc">

                <OhcForm values={values} touched={touched} errors={errors} handleBlur={handleBlur} handleChange={handleChange} setFieldValue={setFieldValue} handleSubmit={handleSubmit} />
                
            </Popup>
        </>
    );
};

export default OhcList;

import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
// import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Popup from './Popup';
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import ExcelJS from 'exceljs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import BioMedicalWasteForm from './BioMedicalWasteForm';
import PropTypes from "prop-types";
//import MultipleSelect from '../common/MultipleSelect';
//import TextField from '@mui/material';
import { BioMedicalwasteform } from './Validationform';
const BioMedicalWasteList = () => {


    const [rowData, setRowData] = useState([]);

    const [colDefs, setColDefs] = useState([]);

    const [openPopup, setOpenPopup] = useState(false);

    const axiosClientPrivate = useAxiosPrivate();

    const [id,setId] = useState(1);

    const [showupdate,setShowupdate] = useState(false);

    const [fetchTrigger, setFetchTrigger] = useState(0);

    const initialValues = {
        agency:"",
        collected:"",
        surveillance:"",
        remark:"",
        date:"",
        yellow:"",
        red:"",
        blue:"",
        white:"",
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
        validationSchema: BioMedicalwasteform,
        onSubmit: async (values, {resetForm}) => {
        try {
            const response = await axiosClientPrivate.post('/medicallist', values);
            toast.success("Saved Successfully!",{
                position:"top-center"
             }); 
                   // getting id(key,value) of last index
               // const id = rowData[rowData.length-1].buId;
              //  const obj = {
                  //  buId : id+1,
                   // ...values
             //   }
             //console.log(obj);
             //setRowData(rowData => [...rowData, obj]);
            setFetchTrigger(prev => prev+1);
            console.log('Response:', response.data);
            resetForm();
          } catch (error) {
            console.log(values);
            console.error('Error:', error);
          }
        },
      });
      const handleEdit = async (id) => {
        alert(id);
        try {
          const response = await axiosClientPrivate.get(`/business-units/${id}`);
            console.log(response.data);
            setFieldValue("id",response.data.id);
       
            setFieldValue("agency", response.data.agency);
            setFieldValue("collected",response.data.collected);
            setFieldValue("surveillance", response.data.surveillance);
            setFieldValue("remark",response.data.remark);
            setFieldValue("lastModified", response.data.lastModified);
            setFieldValue("modifiedBy", response.data.modifiedBy);
            setFieldValue("date",response.data.data);
            setFieldValue("yellow", response.data.yellow);
            setFieldValue("red",response.data.red);
            setFieldValue("blue", response.data.blue);
            setFieldValue("white", response.data.white);
         
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
             await axiosClientPrivate.put(`/medicalitem/${id}`,update);
             toast.success("Updated Successfully!",{
                position:"top-center",
                autoClose: 3000,
             });
             resetForm();
             //setRowData(rowData => [...rowData,values]);
             setFetchTrigger(prev => prev+1);

        }
        catch(err){
            console.log(values);
            console.log(err);
        }
      }

     // to delete a row
     const handleDeleteRow = async (id) => {
        alert(id)
       if(window.confirm('Are you sure you want to delete this data?')){
       try {
           await axiosClientPrivate.delete(`/business-units/${id}`);
           //setRowData(prevData => prevData.filter(row => row.buId !== id));
           setFetchTrigger(prev => prev+1);
       } catch (error) {
           console.error('Error deleting row:', error);
       }
   }
   };

   const CustomActionComponent = ({id}) => {
    CustomActionComponent.propTypes = {
        id: PropTypes.number.isRequired,
      };
    return <div> <Button onClick={() =>  handleEdit(id)} > <EditNoteRoundedIcon /></Button>
       <Button color="error" onClick={() => handleDeleteRow(id)}> <DeleteSweepRoundedIcon /> </Button> </div>

};
    const pagination = true;
    const paginationPageSize = 50;
    const paginationPageSizeSelector = [50, 100, 200, 500];
    
       

    useEffect(() => {
        const controller = new AbortController();
        

        const getAllOhc = async () => {
            try {
                const response = await axiosClientPrivate.get('business-units', { signal: controller.signal });
                const items = response.data.content;
                    // console.log(items);
                setRowData(items);
                if (items.length > 0) {
                    const headerMappings = {
                        agency: "Disposal Agency ",
                        collected : "Collected by",
                        surveillance : "Surveillance by",
                        remark : "Remark",
                        date: "Date",
                        yellow : "Yellow",
                        red : "Red",
                        blue : "Blue",
                        white : "White",
                    };  
                   const  columns = Object.keys(items[0]).map(key => ({
                        field: key,
                        headerName: headerMappings[key] || key.charAt(0).toUpperCase() + key.slice(1),
                        filter: true,
                        floatingFilter: true,
                        sortable: true,
                        width: key === 'id' ? 100 : undefined,

                    }));

                    columns.unshift({
                        field: "Actions", cellRenderer:  (params) =>{
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
        const header = [['Id',"Disposal Agency","Collected by","Surveillance by","Remark","Date","Yellow","Red","Blue","White"]];
        const tableData = rowData.map(item => [
            item.id,
            item.agency,
            item.collected,
            item.surveillance,
            item.remark,
            item.date,
            item.yellow,
            item.red,
            item.blue,
            item.white,
        ]);
        doc.autoTable({
          head: header,
          body: tableData,
          startY: 20, // Start Y position for the table
          theme: 'grid', // Optional theme for the table
          margin: { top: 30 }, // Optional margin from top
          styles: { fontSize: 5 },
          columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'auto' } }
      });
        doc.save("BioMedicalWasteList.pdf");
    };
    const exportExcelfile = async () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('My Sheet');
         const headerStyle = {
        alignment: { horizontal: 'center' }
          
      };
  
      sheet.getRow(1).font = { bold: true };
        
        const columnWidths = {
            Id: 10,
             agency: 20,
            collected: 20,
            surveillance: 20,
            remark: 20,
            date: 10,
            yellow: 20,
           red: 20,
           blue: 20,
           white: 20,
         };
  
        sheet.columns = [
          { header: "Id", key: 'Id', width: columnWidths.Id, style: headerStyle },
       
          { header: "Disposal Agency", key: 'agency', width: columnWidths.agency, style: headerStyle },
         
          { header: "Collected by", key: 'collected', width: columnWidths.collected, style: headerStyle },
        
          { header: "Surveillance by", key: 'surveillance', width: columnWidths.surveillance, style: headerStyle },
          { header: "Remarks", key: 'remark', width: columnWidths.remark, style: headerStyle },

          { header: "Date", key: 'date', width: columnWidths.date, style: headerStyle },
          { header: " Yellow", key: 'yellow', width: columnWidths.yellow, style: headerStyle },
          { header: " Red", key: 'red', width: columnWidths.red, style: headerStyle },
          { header: " Blue", key: 'blue', width: columnWidths.blue, style: headerStyle },
          { header: "White", key: 'white', width: columnWidths.white, style: headerStyle },
        ];
  
        rowData.map(product =>{
            sheet.addRow({
                Id: product.id,   
                agency: product.agency,
                collected: product.collected,
                surveillance: product.surveillance,
                remark: product.remark,
                date: product.date,   
                yellow: product.yellow,
                red: product.red,
                blue: product.blue,
                white: product.white,
            })
        });
  
        workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'BiomedicalWasteList.xlsx';
            anchor.click();
            // anchor.URL.revokeObjectURL(url);
        })
    }
   
    return (
        <>
        <ToastContainer />
            <Box
                className="ag-theme-quartz" 
                style={{ height: 500 }}
            >

                <Stack sx={{ display: 'flex', flexDirection: 'row' }} marginY={1} paddingX={1}>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button variant="contained" endIcon={<AddCircleOutlineRoundedIcon />} onClick={() => { setOpenPopup(true) }}>Add New</Button>
                        <Button variant="contained" onClick={exportpdf} color="success" endIcon={<PictureAsPdfIcon/>}>PDF</Button>
                        <Button variant="contained" onClick={()=> exportExcelfile()}  color="success" endIcon={<DownloadIcon/>}>Excel</Button>
                    </ButtonGroup>

                </Stack>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    animateRows={true} 
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                />
            </Box>

            <Popup showupdate={showupdate} id= {id} handleUpdate={handleUpdate} setShowupdate={setShowupdate} resetForm={resetForm} handleSubmit={handleSubmit}  openPopup={openPopup} setOpenPopup={setOpenPopup} title="Bio Medical Waste Management Form">

                < BioMedicalWasteForm values={values} touched={touched} errors={errors} handleBlur={handleBlur} handleChange={handleChange} setFieldValue={setFieldValue} handleSubmit={handleSubmit} />
                
            </Popup>
        </>
    );
};

export default  BioMedicalWasteList;

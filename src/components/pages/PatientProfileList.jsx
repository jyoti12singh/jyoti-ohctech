import { Box, Button, ButtonGroup, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import useAxiosPrivate from '../../utils/useAxiosPrivate';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import DeleteSweepRoundedIcon from '@mui/icons-material/DeleteSweepRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import Popup from './Popup';
import { PatientInfoValidationForm } from './Validationform';
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import ExcelJS from 'exceljs';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import PatientInfoForm from "./PatientProfileForm"
import PropTypes from "prop-types";
import VisibilityIcon from '@mui/icons-material/Visibility';

const PatientProfileList = () => {
    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [viewMode, setViewMode] = useState(false);
    const axiosClientPrivate = useAxiosPrivate();
    const [id, setId] = useState(1);
    const [showupdate, setShowupdate] = useState(false);
    const [fetchTrigger, setFetchTrigger] = useState(0);

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
        validationSchema: PatientInfoValidationForm,
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
        alert(id);
        try {
            const response = await axiosClientPrivate.get(`/business-units/${id}`);
            console.log(response.data);
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
            setId(id);
            setShowupdate(true);
            setOpenPopup(true);
        } catch (error) {
            console.error('Error fetching item for edit:', error);
        }
    };

    const handleView = async (id) => {
        alert(id);
        try {
            const response = await axiosClientPrivate.get(`/business-units/${id}`);
            console.log(response.data);
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
            setId(id);
            setViewMode(true);
            setOpenPopup(true);
        } catch (error) {
            console.error('Error fetching item for view:', error);
        }
    };

    const handleUpdate = async (id) => {
        alert(id);
        const update = values;
        try {
            console.log(values);
            await axiosClientPrivate.put(`/medicalitem/${id}`, update);
            toast.success("Updated Successfully!", {
                position: "top-center",
                autoClose: 3000,
            });
            resetForm();
            setFetchTrigger(prev => prev + 1);
        } catch (err) {
            console.log(values);
            console.log(err);
        }
    }

    const handleDeleteRow = async (id) => {
        alert(id)
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
        return <div>
            <Button onClick={() => handleView(id)}><VisibilityIcon /></Button>
            <Button onClick={() => handleEdit(id)}><EditNoteRoundedIcon /></Button>
            <Button color="error" onClick={() => handleDeleteRow(id)}><DeleteSweepRoundedIcon /></Button>
        </div>
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
                setRowData(items);
                if (items.length > 0) {
                    const headerMappings = {
                        selectpatientcategory: "Patient Category",
                        pname : "Patient name",
                        fhname : "FH Name",
                        date : "Date",
                        genderchoose : "Gender Choose",
                        blood : "Blood",
                        aadhar : "Aadhar",
                        phone : "Phone",
                        village : "Village",
                        post : "Post",
                        ps : "PS",
                        tehsil : "Tehsil",
                        district : "District",
                        pin : "Pin",
                        lastModified : "Last Modified",
                        modifiedBy : "Modified By",
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
        const header = [['id', 'selectpatientcategory', 'pname', "fhname", "date", "genderchoose", "blood", "aadhar", "phone", "village", "post", "ps", "tehsil", "district", "state", "status", "pin"]];
        const tableData = rowData.map(item => [
            item.id,
            item.selectpatientcategory,
            item.pname,
            item.fhname,
            item.date,
            item.genderchoose,
            item.blood,
            item.aadhar,
            item.phone,
            item.village,
            item.post,
            item.ps,
            item.tehsil,
            item.district,
            item.state,
            item.pin,
        ]);
        doc.autoTable({
            head: header,
            body: tableData,
            startY: 20,
            theme: 'grid',
            margin: { top: 30 },
            styles: { fontSize: 5 },
            columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'auto' } }
        });
        doc.save("PatientProfileList.pdf");
    };

    const exportExcelfile = async () => {
        const workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet('My Sheet');

        const headerStyle = {
            alignment: { horizontal: 'center' }
        };

        sheet.getRow(1).font = { bold: true };

        const columnWidths = {
            id: 10,
            selectpatientcategory: 20,
            pname: 20,
            fhname: 20,
            date: 20,
            genderchoose: 20,
            blood: 20,
            aadhar: 20,
            phone: 20,
            village: 20,
            post: 20,
            ps: 20,
            tehsil: 20,
            district: 20,
            state: 20,
            pin: 20,
        };

        sheet.columns = [
            { header: "id", key: 'buId', width: columnWidths.buId, style: headerStyle },
            { header: "selectpatientcategory", key: 'cpname', width: columnWidths.cpname, style: headerStyle },
            { header: "pname", key: 'healthkeyname', width: columnWidths.healthkeyname, style: headerStyle },
            { header: "fhname", key: 'startingrange', width: columnWidths.startingrange, style: headerStyle },
            { header: "date", key: 'endingrange', width: columnWidths.endingrange, style: headerStyle },
            { header: "genderchoose", key: 'lessrisk', width: columnWidths.lessrisk, style: headerStyle },
            { header: "blood", key: 'morerisk', width: columnWidths.morerisk, style: headerStyle },
            { header: "aadhar", key: 'lessadvice', width: columnWidths.lessadvice, style: headerStyle },
            { header: "phone", key: 'moreadvice', width: columnWidths.moreadvice, style: headerStyle },
            { header: "village", key: 'section', width: columnWidths.section, style: headerStyle },
            { header: "post", key: 'columnorder', width: columnWidths.columnorder, style: headerStyle },
            { header: "ps", key: 'placeholder', width: columnWidths.placeholder, style: headerStyle },
            { header: "tehsil", key: 'parametervaluename', width: columnWidths.parametervaluename, style: headerStyle },
            { header: "district", key: 'inputtype', width: columnWidths.inputtype, style: headerStyle },
            { header: "state", key: 'checkuptype', width: columnWidths.checkuptype, style: headerStyle },
            { header: "pin", key: 'status', width: columnWidths.status, style: headerStyle },
        ];

        rowData.map(product => {
            sheet.addRow({
                id: product.id,
                selectpatientcategory: product.selectpatientcategory,
                pname: product.pname,
                fhname: product.fhname,
                date: product.date,
                genderchoose: product.genderchoose,
                blood: product.blood,
                aadhar: product.aadhar,
                phone: product.phone,
                village: product.village,
                post: product.post,
                ps: product.ps,
                tehsil: product.tehsil,
                district: product.district,
                state: product.state,
                pin: product.pin,
            })
        });

        workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet",
            });
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'PatientProfileList.xlsx';
            anchor.click();
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
                        <Button variant="contained" onClick={exportpdf} color="success" endIcon={<PictureAsPdfIcon />}>PDF</Button>
                        <Button variant="contained" onClick={() => exportExcelfile()} color="success" endIcon={<DownloadIcon />}>Excel</Button>
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

            <Popup showupdate={showupdate} id={id} handleUpdate={handleUpdate} setShowupdate={setShowupdate} resetForm={resetForm} handleSubmit={handleSubmit} openPopup={openPopup} setOpenPopup={setOpenPopup} title="Patient Profile" viewMode={viewMode} setViewMode={setViewMode}>
                <PatientInfoForm values={values} touched={touched} errors={errors} handleBlur={handleBlur} handleChange={handleChange} setFieldValue={setFieldValue} handleSubmit={handleSubmit} viewMode={viewMode} />
            </Popup>
        </>
    );
};

export default PatientProfileList;

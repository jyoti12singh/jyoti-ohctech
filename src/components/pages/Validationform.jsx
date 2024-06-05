import * as Yup from 'yup';

  // validation for ohcform
export const ValidationForm = Yup.object({
  ohcName: Yup.string().min(2).max(25).required("Please enter Ohccc Name"),
  ohcDescription: Yup.string().min(2).max(25).required("Please enter Description"),
  ohcCode: Yup.string().min(2).max(25).required("Please enter OHC Code"),
  state: Yup.string().min(2).max(25).required("Please enter State Code"),
  pinCode: Yup.number().min(6).required("Please enter Pin Code"),
    primaryPhone: Yup.number().required("Please enter Pin Code"),
    primaryEmail: Yup.string().email().required("Please enter your email"),
    iconText: Yup.string().required("Please enter your icon text"),
    iconColor: Yup.string().required("Please enter your icon text"),
    // homeohc: Yup.string().required("Please enter home ohc"),
    ohcType: Yup.string().required("Please enter ohc type"),
    address: Yup.string().required("Please enter address"),
    ohcCategory: Yup.string().required("Please enter ohc category"),
    fax: Yup.string().required("Please enter fax"),
});

// validation for userform

export const userValidationForm = Yup.object({
  employee: Yup.string().min(2).max(25).required("Please enter Employee Name"),
  username: Yup.string().min(2).max(25).required("Please enter User Name"),
  password : Yup.string().min(4).required("Please enter password"),
  confirmpass : Yup.string().min(4).required("Please enter password"),
  vendor: Yup.string().required("Please enter Vendor"),
  status: Yup.string().required("Please enter status"),
});


export const menuValidationForm = Yup.object({
  menuid: Yup.number().required("Please enter Menu Id"),
  menuname: Yup.string().min(2).max(25).required("Please enter Menu Name"),
  menudescription : Yup.string().max(50).required("Please enter Menu Description"),
  menuurl : Yup.string().required("Please enter Menu Url"),
  parentmanu: Yup.string().required("Please enter Parent Menu"),
  displaysequence: Yup.string().required("Please enter Display Sequence"),
});


export const roleValidationForm = Yup.object({
  rolename: Yup.string().required("Please enter Role Name"),
  roledes: Yup.string().required("Please enter Role Description"),
  homepage : Yup.string().required("Please enter Role Home Page"),
  rolecode : Yup.number().required("Please enter Role code"),
  iconcolor: Yup.string().required("Please enter Icon Colour"),
  icontext: Yup.string().required("Please enterIcon Text"),
});


export const MedTimeValidationForm = Yup.object({
  medicineTiming: Yup.string().min(2).max(25).required("Please enter medicine timing"),
  timingDescription: Yup.string().min(2).max(25).required("Please enter Description"),
});

export const MedValidationForm = Yup.object({
  MedicineFrequency: Yup.number().min(1).required("Please enter medicine frequency"),
  MedicineDescription: Yup.string().min(2).max(25).required("Please enter medicine Description"),
  calculatedCity: Yup.string().min(2).max(25).required("Please enter calculated city"),
  displayOrder: Yup.number().min(1).max(25).required("Please enter display order"),
  statusType: Yup.string().required("Please select Status Type"),
  isDefault: Yup.string().required("Please select Default"),
});


export const AilValidationForm = Yup.object({
  ailmentSysName: Yup.string().min(2).max(25).required("Please enter ailment Name"),
  ailmentSysDesc: Yup.string().min(2).max(25).required("Please enter Description"),
  ailmentSysCode: Yup.string().min(2).max(25).required("Please enter ailment code"),
});

export const AddDocValidationForm = Yup.object({
  doctorName: Yup.string().min(2).max(25).required("Please enter Doctor Name"),
  doctorEmpId: Yup.string().min(2).max(25).required("Please enter Doctor Emp Code"),
  doctorDesc: Yup.string().min(2).max(25).required("Please enter Doctor Details"),
});

export const AilmentValidationForm = Yup.object({
  ailmentName: Yup.string().min(2).max(25).required("Please enter ailment Name"),
  ailmentDesc: Yup.string().min(2).max(25).required("Please enter Description"),
  ailmentCode: Yup.string().min(2).max(25).required("Please enter ailment code"),
  isActive: Yup.string().min(2).max(25).required("Please enter ailment Action"),
});

export const RefferalValidationForm = Yup.object({
  referralPointName: Yup.string(2).min(1).required("Please enter refferal point name"),
  city: Yup.string().min(2).max(25).required("Please enter specialist name"),
  hospitalName: Yup.string().min(2).max(25).required("Please enter hospital name"),
  address: Yup.string().min(2).max(25).required("Please enter address"),
  contactDetail: Yup.string().required("Please enter contact detail"),
});

export const EmployeeCadreValidationForm = Yup.object({
  empCadre: Yup.string().required("Please enter Employee Cadre Name"),
  remarks: Yup.string().required("Please enter Remarks"),
  medicalClaimLimit : Yup.number().required("Please enter Claim Limit"),
});
export const empcontValidationForm = Yup.object({
  employerContractorName: Yup.string().required("Please enter Employee Name"),
  employerContractorCode: Yup.string().required("Please enter Code"),
  employerContractorAddress : Yup.string().required("Please enter Address"),
  employerContractorContact : Yup.number().required("Please enter Contact Details"),
  employerContractorEmail: Yup.string().required("Please enter Emails"),
  employerContractorDesc: Yup.string().required("Please enter Remarks of Employee"),
});

// Ailment/Injury forms
  export const InjuryTypeValidationForm = Yup.object({
    injuryTypeName: Yup.string().required("Please enter Injury part Name"),
    injuryTypeDesc: Yup.string().required("Please Injury part  Description"),
    injuryTypeCode: Yup.string().required("Please enter Injury part code"),
  });

export const InjuryClassValidationForm = Yup.object({
  injClassName: Yup.string().required("Please enter Injury  Name"),
  injClassDesc: Yup.string().required("Please Injury   Description"),
  injClassCode: Yup.string().required("Please enter Injury  code"),
});

export const designationForm = Yup.object({
  designationName: Yup.string().min(2).max(25).required("Please enter Designation Name"),
  designationDesc: Yup.string().min(2).max(25).required("Please enter Designation Description"),
  designationCode: Yup.string().min(2).max(25).required("Please enter DesignationCode"),
  designationCollar: Yup.string().required("Please enter Designation Collar"),
    
});


export const bussinessForm = Yup.object({
  buName: Yup.string().min(2).max(25).required("Please enter Bussiness Unit Name"),
  buHeadName: Yup.string().min(2).max(25).required("Please enter Bussiness Unit Head Name"),
  buEmail:Yup.string().email().required("Please enter Bussiness Unit Head Email"),
     
});

export const departmentForm = Yup.object({
  buId: Yup.string().min(2).max(25).required("Please enter Bussiness Unit "),
  departmentName: Yup.string().min(2).max(25).required("Please enter Department Name"),
  departmentHeadName: Yup.string().min(2).max(25).required("Please enter Department Head Email"),
  departmentEmail: Yup.string().email().required("Please enter Department Head Email"),
     
});

export const InjuryPartValidationForm = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter Injury Name"),
  description: Yup.string().min(2).max(25).required("Please enter Injury Discription"),
  code: Yup.string().min(2).max(25).required("Please enter Bussiness Injury Code"),
     
});

export const sectionForm = Yup.object({
  buId: Yup.string().min(2).max(25).required("Please enter Bussiness Unit"),
  deptId: Yup.string().min(2).max(25).required("Please enter Department Name"),
  sectionName: Yup.string().min(2).max(25).required("Please enter Section Name"),
  sectionHeadName: Yup.string().min(2).max(25).required("Please enter Section Head"),
  sectionHeadEmail: Yup.string().email().required("Please enter Section Email"),
     
});

export const complaintForm = Yup.object({
  complaint: Yup.string().min(2).max(25).required("Please enter Complaint"),
  complaintDesc: Yup.string().min(2).max(25).required("Please enter Complaint Details"),
  isActive: Yup.string().required("Please Select deafult"),
  
     
});
export const opdmaster = Yup.object({
  DiagnosisName: Yup.string().required("Please enter Diagnosis Name"),
  ChronicIllness: Yup.string().required("Please enter Chronic Illness"),
});

export const bodysystemForm = Yup.object({
  DiagnosisName: Yup.string().required("Please enter Diagnosis Name"),
   BodySystem: Yup.string().required("Please enter Body System"),
});

// RefferalBy form
export const RefferedByValidationForm = Yup.object({
  referredBy: Yup.string().required("Please enter Reffered By"),
  description: Yup.string().required("Please Enter Description"),
  remarks: Yup.string().required("Please Enter Remarks"),
});






//Appoinment validation

export const AppointmentvalidationForm = Yup.object({
  SlotStart: Yup.string().min(2).max(25).required("Please enter Slot Start Time "),
  SlotEnd: Yup.string().min(2).max(25).required("Please enter Slot End Time"),
  NoOfAppointment: Yup.number().min(2).max(25).required("Please enter No Of Appointmentl"),
  AppointmentsType: Yup.string().email().required("Please enter Appointments Type"),
     
});

//Habit Validation
export const HabitValidationForm = Yup.object({
  HabitName: Yup.string().required("Please enter Habit Name"),
  
});

//First Aid Box Validation

export const FirstAidValidationForm = Yup.object({
  BoxName: Yup.string().min(2).max(25).required("Please enter Box Name "),
  boxCode: Yup.string().min(2).max(25).required("Please enter box Code"),
  boxLoc: Yup.number().min(2).max(25).required("Please enter box Loc"),
  firstAider: Yup.string().email().required("Please enter first Aider"),
     
});

//Grade Form Validation
export const GradeValidationForm = Yup.object({
  GradeName: Yup.string().required("Please enter Grade Name"),
  
});

//Interpretation validation
export const InterpretaionValidationForm = Yup.object({
  InterpretationHeader: Yup.string().required("Please enter Interpretaion Header"),
  Key: Yup.string().required("Please Enter Key"),
  Value: Yup.string().required("Please Enter Value"),
});

//Merge Destination

export const MergeDestinationValidationForm = Yup.object({
  DesignationUsed: Yup.string().required("Please enter Designation Used"),
  DesignationRecord: Yup.string().required("Please Designation Record"),
  
});

//Vaccine List Validation

export const VaccineValidationForm = Yup.object({
  VaccineName: Yup.string().required("Please enter Vaccine Name"),
  CompanyName: Yup.string().required("Please Enter Company Name"),
  VaccineDesc: Yup.string().required("Please Enter Vaccine Description"),
});

//Shift Status validation
export const ShiftValidationForm = Yup.object({
  shiftNo: Yup.string().required("Please enter shift No"),
  
});

export const AbnormValidationForm = Yup.object({
  AbnormalityName: Yup.string().min(2).max(25).required("Please enter Abnormality Name"),
  WellnessPrograms: Yup.string().min(2).max(25).required("Please enter Wellness Programs"),
});

export const SaltValidationForm = Yup.object({
  SaltName: Yup.string().min(2).max(25).required("Please enter salt Name")
});

export const disposalValidationForm = Yup.object({
  CollectorName: Yup.string().min(2).max(25).required("Please enter collector Name"),
  CollectingOHC: Yup.string().min(2).max(25).required("Please enter collecting OHC"),
});

export const PlantValidationForm = Yup.object({
  PlantName: Yup.string().min(2).max(25).required("Please enter Plant Name")
});

export const ReportMasterValidationForm = Yup.object({
  ReportType: Yup.string().min(2).max(25).required("Please enter report type"),
  FunctionName: Yup.string().min(2).max(25).required("Please enter Function Name"),
  url: Yup.string().min(2).max(25).required("Please enter url"),
  ReportName: Yup.string().min(2).max(25).required("Please enter Report Name"),
  ReportCode: Yup.string().email().required("Please enter Report Code"),
     
});

export const MergeDepartmentValidationForm = Yup.object({
  DepartmentUsed: Yup.string().min(2).max(25).required("Please enter department used"),
  DepartmentRecord: Yup.string().min(2).max(25).required("Please enter department record")
});

export const DiagnosisTreatmentValidationForm = Yup.object({
  duration: Yup.string().required("Please enter duration"),
  doseqty: Yup.string().required("Please Enter dose quantity"),
  healthadvice: Yup.string().required("Please give Health Advice"),
});
export const DeviceValidationForm = Yup.object({
  devicename: Yup.string().required("Please enter device name"),
 
});
export const TestDeviceValidationForm = Yup.object({
  testcatagory: Yup.string().required("Please enter test category"),
});

export const ConfigValidationForm = Yup.object({
  keyname: Yup.string().required("Please enter the Key Name"),
  valued: Yup.string().required("Please Enter the Value"),

});
export const DisposalAgencyValidationForm = Yup.object({
  
  agencyname: Yup.string().required("Please enter agency Name"),
  agencyaddress: Yup.string().required("Please enter Agency Address"),
  registrationno: Yup.string().required("Please enter registration no."),
  allocation: Yup.string().required("Please enter allocation"),
  hodname: Yup.string().required("Please enter hod name"),
  hodemail: Yup.string().required("Please enter hod mail"),
  
});
export const MedicalitemValidationForm = Yup.object({
  
  itemName: Yup.string().required("Please enter Item Name"),
  itemCode: Yup.string().required("Please enter Item Code"),
  subClassification: Yup.string().required("Please enter subclassification"),
  salt: Yup.string().required("Please enter what salt"),
  indication: Yup.string().required("Please enter indication"),
  contraindication: Yup.string().required("Please enter contraindication"),
  sideEffect: Yup.string().required("Please enter sideeffect"),
  interaction: Yup.string().required("Please enter interaction"),
  medicineprecaution: Yup.string().required("Please enter medicine precaution"),
  reorderstorelevel: Yup.string().required("Please enter store level"),
  ministorelevel: Yup.string().required("Please enter mini store level"),
  minindentlevel: Yup.string().required("Please enter min indent level"),
  maxiindentlevel: Yup.string().required("Please enter max indent level"),
  reorderpercentagelevel: Yup.string().required("Please enter record percentage level"),
  remark: Yup.string().required("Please enter remark"),
  
  
});
export const GroupitemsValidationForm = Yup.object({
  cost: Yup.string().required("Please enter the cost"),
  convertedquantity: Yup.string().required("Please enter converted quantity"),
  unit: Yup.string().required("Please enter unit"),
  delete: Yup.string().required("Please enter delete"),

});

export const HealthReporatbleParameterValidationForm = Yup.object({
  kid: Yup.string().required("Please enter Key Id"),
  parametername: Yup.string().required("Please enter Parameter Name"),
  
  
});
export const ParameterUnitMasterValidationForm = Yup.object({
  unitname: Yup.string().required("Please enter Unit Name"),
  
  
});
export const CheckupParameterValidationForm = Yup.object({
  cpname: Yup.string().required("Please enter checkup parameter"),
  startingrange: Yup.string().required("Please enter starting range"),
  endingrange: Yup.string().required("Please enter ending range"),
  columnorder: Yup.string().required("Please enter column order"),
  placeholder: Yup.string().required("Please enter Place holder"),
  parametervaluename: Yup.string().required("Please enter Parameter Name"),
  checkuptype: Yup.string().required("Please enter the checkup type"),
  refrange: Yup.string().required("Please enter ref range"),
  default: Yup.string().required("Please enter the default"),
  
});


export const ChronicIllnessValidationForm = Yup.object({
  pname: Yup.string().required("Please enter Patient Name"),
  date: Yup.string().required("Please enter Date of Diagnosis"),
  duedate: Yup.string().required("Please enter date Of Remission"),
  remark: Yup.string().required("Please enter remark"),
  duration: Yup.string().required("Please enter the duration"),
  
});
export const MergeAilmentValidationForm = Yup.object({

  delete: Yup.string().required("Please delete"),
  
});

export const AddCityValidationForm = Yup.object({
  city: Yup.string().min(2).max(25).required("Please enter city name"),
  AcPerKMCost: Yup.string().min(2).max(25).required("Please enter Ac perKM Cost"),
  AcAmbulanceCharge: Yup.string().min(2).max(25).required("Please enter AC Ambulance Charge"),
  NonAcPerKMCost: Yup.string().min(2).max(25).required("Please enter Non AC cost"),
  NonAcAmbulanceCharge: Yup.string().email().required("Please enter Non AC Ambulance charge"),
     
});

export const UnitValidationForm = Yup.object({
  unitId: Yup.string().required("Please enter unit id"),
  UnitName: Yup.string().required("Please Enter unit name"),
  Remarks: Yup.string().required("Please Enter Remarks"),
});

export const CategoryValidationForm = Yup.object({
  CategoryName: Yup.string().required("Please enter Category Name"),
  status: Yup.string().required("Please Enter status"),
  remarks: Yup.string().required("Please Enter Remarks"),
});

//Merge Complaint

export const MergeComplaintValidationForm = Yup.object({
  ComplaintRecordUsed: Yup.string().required("Please Choose primary complaint"),
  ComplaintRecordMerged: Yup.string().required("Please choose duplicate complaint"),
  
});

//addFilterMaster

export const AddFilterMasterform = Yup.object({
  filterName: Yup.string().required("Please Enter filter name"),
  filterCode: Yup.string().required("Please enter filter code"),
  
});


export const taskFrequencyForm = Yup.object({
 
  frequencyName:Yup.string().required("Please enter Frequency Name"),
  frequencyCode:Yup.number().min(6).required("Please enter Frequency Name"),
    
});
export const checkListManageForm = Yup.object({
  delete: Yup.string().min(2).max(25).required("Please enter Deleting obj"),
  unit: Yup.string().min(2).max(25).required("Please enter Unit"),
  qty: Yup.number().min(6).required("Please enter QTY"),
  issueto: Yup.string().required("Please enter Issue to"),
  itemtype:Yup.string().required("Please enter Issue Type"),
  ohclocation: Yup.string().required("Please enter OHC Location"),
  item: Yup.string().required("Please enter items"),
    
});
export const AmbulanceitemForm = Yup.object({
  issueto: Yup.string().required("Please enter Check Type Name"),
  itemcatagories: Yup.string().required("Please enter Check Type Code  "),
  ohclocation: Yup.string().required("Please enter  Cost"),


});
export const routeadminForm = Yup.object({
 
  routeAdmin:Yup.string().required("Please enter RouteAdmin"),
  remarks:Yup.string().required("Please enter remarks"),
    
});
export const ambulanceForm = Yup.object({
  ambulancenumber: Yup.string().required("Please enter ambulance Number"),
  ambulanceform: Yup.string().required("Please enter ambulance Form "),
  ambulances:Yup.string().required("Please enter ambulances "),
  cardiacs: Yup.string().required("Please enter cardiacs "),  
});
export const calibrationform = Yup.object({
  modelbrand: Yup.string().required("Please enter modelbrand"),
  idnumber: Yup.string().required("Please enter idnumber"),
  location: Yup.string().required("Please enter location"),
  date: Yup.string().required("Please enter date"),

   duedate: Yup.string().required("Please enter duedate "),
   docupdate: Yup.string().required("Update file"),

    calibration: Yup.string().required("Please enter calibration Equipment"),
  
});
export const businessReportform = Yup.object({

  filtername: Yup.string().required("Please enter ohc type"),
 reportname: Yup.string().required("Please enter ohc category"),
  specific: Yup.string().required("Please enter fax"),
});
export const AddFilterform = Yup.object({
 
  filterName:Yup.string().required("Please enter filter Name"),
  filterCode:Yup.string().required("Please enter filter Code"),
    
});
export const MedicineCategoryform = Yup.object({
  categoryDescription:Yup.string().required("Please enter description Category"),
  medicineCategory:Yup.string().required("Please enter Medicine Category"),
  code : Yup.number().required("Please enter Code"),  
});
export const medicalform = Yup.object({
  medicalname: Yup.string().required("Please enter Medical Name"),
  medicalcode: Yup.number().min(6).required("Please enter Medical Code"),
  QTY: Yup.string().required("Please enter Qty"),
    

});

export const canteenLocationform = Yup.object({
  location: Yup.string().required("Please enter Canteen Location "),
  code: Yup.number().min(4).required("Please enter Canteen Code"),
  type: Yup.string().required("Please Select Type"),
 
});
export const jobProfileform = Yup.object({
  Name: Yup.string().required("Please enter Profile Name"),
  code: Yup.number().min(4).required("Please enter Profile Code"),

});
export const questionaireMasterform = Yup.object({
  secname: Yup.string().required("Please enter Section Name"),
  seq: Yup.string().required("Please enter Sequence"),
  locallanguage: Yup.string().required("Please enter Local Language "),
  question: Yup.string().required("Please enter  Question"),
  order: Yup.string().required("Please enter order"),
  type: Yup.string().required("Please enter  type"),
  secavailable: Yup.string().required("Please enter Section Available"),
  
});
export const covidWahMasterform = Yup.object({

  hindi: Yup.string().required("Please enter in Hindi"),
  english: Yup.string().required("Please enter in English"),
  seq: Yup.string().required("Please enter Sequence"),
  type: Yup.string().required("Please enter  type"),
});
export const RulegenerationValidationForm = Yup.object({
  bracket: Yup.string().required("Please enter Bracket"),
  age: Yup.string().required("Please enter Age"),
  risk: Yup.string().required("Please enter Risk  "),
  ageend: Yup.string().required("Please enter Age End"),
  advice: Yup.string().required("Please enter  Advice"),
  condition: Yup.string().required("Please enter Condition"),
  value: Yup.string().required("Please enter  Value"),
  gender: Yup.string().required("Please enter  Gender"),
  abnormality: Yup.string().required("Please enter  Abnormality"),
  result: Yup.string().required("Please enter Result"),
  close: Yup.string().required("Please enter Close Bracket"),
  range:Yup.string().required("Please enter Range Type "),
  checkup:Yup.string().required("Please enter Checkup Parameter  "),
  rule:Yup.string().required("Please enter Text Comparsion Rule"),
  res:Yup.string().required("Please enter Result Field "),

});
export const CheckupParameterGroupValidationForm = Yup.object({
  group: Yup.string().required("Please enter Group"),
  groupnumber: Yup.string().required("Please enter Group Number"),
    groupsec: Yup.string().required("Please enter Group Section "),
   
});
export const MergeStationValidationForm = Yup.object({
 
  record: Yup.string().required("Please enter Steation Record To Be Used "),
 
  records: Yup.string().required("Please enter Steation Record To Be Merged "),

});
import * as Yup from 'yup';

  // validation for ohcform
export const ValidationForm = Yup.object({
  ohcName: Yup.string().min(2).max(25).required("Please enter Ohc Name"),
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



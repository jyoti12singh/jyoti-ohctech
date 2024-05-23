import { FormControl, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Input from "../common/Input";
import SingleSelect from "../common/SingleSelect";

const GroupitemsForm = ({
  values,
  touched,
  handleBlur,
  errors,
  handleChange,
  // setFieldValue,
  handleSubmit,
}) => {
    GroupitemsForm.propTypes = {
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

 const itemtypeselect=["Capital/non consumeble instruments","other"]
 const itemnameSelect=["Active","Not Active"]
 const itemSelect=["Yes","No"]
 
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center" alignItems="center"  >
        
          <Grid itemxs={12} sm={8}  justifyContent="center" alignItems="center">
            <FormControl fullWidth>
              <Grid container spacing={2} justifyContent="center" alignItems="center">
               
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={itemtypeselect}
                    label="Item Type"
                    name="itemtype"
                    value={values.itemtype}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "itemtype",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.itemtype && touched.itemtype ? (
                        <span style={{ color: "red" }}>{errors.itemtype}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={itemnameSelect}
                    label="Choose Item Name"
                    name="itemname"
                    value={values.itemname}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "itemname",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.itemname && touched.itemname ? (
                        <span style={{ color: "red" }}>{errors.itemname}</span>
                      ) : null
                    }
                  />
                </Grid>
                
                
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Cost"
                    name="cost"
                    type="text"
                    size="large"
                    value={values.cost}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.cost && touched.cost ? (
                        <span style={{ color: "red" }}>
                          {errors.cost}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                <SingleSelect
                    arr={itemSelect}
                    label="Choose a item "
                    name="item"
                    value={values.item}
                    onChange={(event, newValue) => {
                      const syntheticEvent = {
                        target: {
                          name: "item",
                          value: newValue,
                        },
                      };
                      handleChange(syntheticEvent);
                    }}
                    onBlur={handleBlur}
                    type="text"
                    helperText={
                      errors.item && touched.item ? (
                        <span style={{ color: "red" }}>{errors.item}</span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Converted Qunatity"
                    name="convertedquantity"
                    type="text"
                    size="large"
                    value={values.convertedquantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.convertedquantity && touched.convertedquantity? (
                        <span style={{ color: "red" }}>
                          {errors.convertedquantity}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Unit"
                    name="unit"
                    type="text"
                    size="large"
                    value={values.unit}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.unit && touched.unit ? (
                        <span style={{ color: "red" }}>
                          {errors.unit}
                        </span>
                      ) : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6} container spacing={1} justifyContent="center" alignItems="center">
                  <Input
                    label="Delete"
                    name="delete"
                    type="text"
                    size="large"
                    value={values.delete}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.delete && touched.delete ? (
                        <span style={{ color: "red" }}>
                          {errors.delete}
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

export default GroupitemsForm;

  
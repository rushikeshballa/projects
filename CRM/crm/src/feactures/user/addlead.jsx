import React from "react";
import { ErrorMessage, Form, Formik,Field } from "formik";
import *as Yup from 'yup';
import { Link } from "react-router-dom";
const Addlead=(()=>{
    var Onsubmit=((values)=>{
        // console.log(values)
        // AddLeadFn(values).then((res)=>{
        //     console.log(res)
        // })
    })
    var initialValues={
        name:String,
        experience:String,
        intrestedCourse:String,
        mode:String,
        academics:String,
        mobile:Number,
        email:String,
        address:String,
        referredBy:String,
        remarks:Array,
    }
    var validationSchema=Yup.object({
        name:Yup.string().min(3,'please Enter Three Characters').required('Please enter your name'),
        experience:Yup.string().required('Please enter your experience'),
        intrestedCourse:Yup.string().required('Please enter your intrestedCourse'),
        mode:Yup.string().required('Please enter your mode'),
        academics:Yup.string().required('Please enter your academics'),
        mobile:Yup.string().required('Please enter your mobile'),
        email:Yup.string().required('Please enter your mobile'),
        address:Yup.string().required('Please enter your mobile'),
        referredBy:Yup.string().required('Please enter your referredBy'),
        remarks:Yup.string().required('Please enter your referredBy')
    })
    return(
        <div className="container" style={{marginTop:"50px"}}>
            <Formik onSubmit={Onsubmit} validationSchema={validationSchema} initialValues={initialValues} >
                {
                    ()=>(
                        <div  className="form-floating mb-3">
                            <Form>
                                <Field type="text" className="form-control" id="name" name="name" placeholder="Enter Your Name"></Field>
                                 <ErrorMessage name='name'></ErrorMessage>&nbsp; &nbsp;
                                <Field  name="mode" className="form-control" id="mode" placeholder="Enter Your Mode"></Field>
                                <ErrorMessage name="mode"></ErrorMessage>&nbsp; &nbsp;
                               <Field type="text" className="form-control" id="intrestedCourse"  placeholder="Enter Your intrestedCourse" name="intrestedCourse"></Field>
                                <ErrorMessage name='intrestedCourse'></ErrorMessage>&nbsp; &nbsp;
                               <Field type="text" className="form-control" id="academics"  placeholder="Enter Your academics" name="academics"></Field>
                               <ErrorMessage name="academics"></ErrorMessage>&nbsp; &nbsp;
                               <Field type="text" className="form-control" id="mobile"  placeholder="Enter Your mobile" name="mobile"></Field>
                               <ErrorMessage name="mobile"></ErrorMessage>&nbsp; &nbsp;
                               <Field type="text" className="form-control" id="email"  placeholder="Enter Your email" name="email"></Field>
                                <ErrorMessage name='email'></ErrorMessage>&nbsp; &nbsp;
                               <Field type="text" className="form-control" id="address"  placeholder="Enter Your address" name="address"></Field>
                               <ErrorMessage name="address"></ErrorMessage>&nbsp; &nbsp;
                               <Field type="text" className="form-control" id="referredBy"  placeholder="Enter Your referredBy" name="referredBy"></Field> 
                               <ErrorMessage name='referredBy'></ErrorMessage>&nbsp; &nbsp;
                               <Field type="text" className="form-control" id="remarks"  placeholder="Enter Your remarks" name="remarks"></Field>
                               &nbsp; &nbsp;   
                               <ErrorMessage name="remarks"></ErrorMessage>                      
                            </Form>
                            <Link to="" className="text-decoration-none">
                            <div className="d-flex mb-3">
                            <button className=" btn btn-success ms-auto p-2" type="submit">Submit</button>
                            </div>
                            </Link>
                        </div>
                        ) 
                }
            </Formik>
        </div>
    )

})
export default Addlead;
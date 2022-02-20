import React, { useState } from "react";
//import React from 'react'
//import '../../node_modules/bootstrap/dist/css/bootstram.min.css';
//import '../../node_modules/bootstrap/dist/js/bootstram.min.js';
import './Table.css';

function Table() {

    const [rows, setRows] = useState([
        { id: 1, Name: "", Email: "", Contact: "" , DOB: "" },
    ]);

    const [open, setOpen] = React.useState(false);
    const [isEdit, setEdit] = React.useState(false);
    const [disable, setDisable] = React.useState(true);
    const [showConfirm, setShowConfirm] = React.useState(false);

    const handleAdd = () => {
        setRows([
            ...rows,
            {
                id: rows.length + 1, Name: "",
                Email: "", Contact: "", DOB: ""
            },
        ]);

        setEdit(true);
    };

   

    const handleEdit = (i) => {
        // If edit mode is true setEdit will 
        // set it to false and vice versa
        setEdit(!isEdit);
    };

    const handleSave = () => {
        setEdit(!isEdit);
        setRows(rows);
        console.log("saved : ", rows);
        setDisable(true);
        setOpen(true);
    };

    const handleInputChange = (e, index) => {
        setDisable(false);
        const { name, value } = e.target;
        const list = [...rows];
        list[index][name] = value;
        setRows(list);
    };

    const handleConfirm = () => {
        setShowConfirm(true);
    };

    const handleRemoveClick = (i) => {
        const list = [...rows];
        list.splice(i, 1);
        setRows(list);
        setShowConfirm(false);
    };

    const handleNo = () => {
        setShowConfirm(false);
    };

    
  return (
    <>
     
     <div className="container p-30">
        <div className="row">
            <div className="col-md-12 main-datatable">
                <div className="card_body">
                    <div className="row d-flex">

                        <div> 
                        
                        <div className="col-sm-4 createSegment mt-5"> 
                         <a className="btn btn-danger dim_button create_new " data-toggle="modal"   > <span className="glyphicon glyphicon-plus"></span> Create New</a>
                        </div>
                       
		
                        </div>
                        



        








                         
                        <div className="overflow-x">
                        <table className="tablew table cust-datatable dataTable no-footer" >
                            <thead>
                                <tr>
                                    <th className='chead'>Name</th>
                                    <th className='chead'>Email</th>
                                    <th className='chead'>Phone</th>
                                    <th className='chead'>D.O.B</th>
                                    
                                </tr>
                            </thead>
                            
                            
                            <tbody>
                            <tr id="tbl">
                            
                                    <td contentEditable = "true" >Yashodhan </td>
                                    <td contentEditable = "true">yash@gmail.com</td>
                                    <td contentEditable = "true">9999999999</td>
                                    <td contentEditable = "true" type="date">9-10-99</td>
                                    
                            </tr>
                                        
                                      
                            </tbody>
                            </table>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default Table

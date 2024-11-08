import React from "react";
import { useLeadesQuery } from "../../services/crmApi";

const Leads =(()=>{
const {isLoading,data}=useLeadesQuery();
console.log(data);

    return(
        <div>
            {
                isLoading && <h1>loding...</h1>
            }
            {
                !isLoading && <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>mode</th>
                            <th>number</th>
                            <th>email</th>
                            <th>intrestedCourse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((lead)=>{
                               return <tr>
                                    <td>{lead.name}</td>
                                    <td>{lead.mode}</td>
                                    <td>{lead.mobile}</td>
                                    <td>{lead.email}</td>
                                    <td>{lead.intrestedCourse}</td>
                                    <td>{(lead.referredBy)}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
})
export default Leads;
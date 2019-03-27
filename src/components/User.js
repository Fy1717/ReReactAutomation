import React , {Component} from "react";

class User extends Component{
    render(){
        return(
            <tr>
                <td>1</td>
                <td>FY</td>
                <td>fy@gmail.com</td>
                <td>
                    <button className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default User;
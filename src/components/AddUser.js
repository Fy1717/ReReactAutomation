import React , {Component} from "react" ;

class AddUser extends Component{     // Sınıfın componente extend edilmesi gerekir

    render(){
        return(
            <div className="card" >
                <h4 className="card-header">Form</h4>
                <div className="card-body">
                    <form>

                        <div className="form-group">
                            <label htmlFor="name" > Name </label>
                            <input type="text" name="name" id="name" placeholder="Enter Name" className="form-control"/>         
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" > E-mail </label>
                            <input type="text" name="email" id="email" placeholder="Enter E-mail" className="form-control"/>
                        </div>

                        <button type="submit" className="btn btn-danger btn-block">Add New User</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddUser; // Başka componentlerin içinde kullanabilmek için export edilir 
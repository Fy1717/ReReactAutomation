import React , {Component} from "react" ;

class AddUser extends Component{     // Sınıfın componente extend edilmesi gerekir

    state = {
        name :"",
        email :""
    };

    onNameChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onEmailChange(e){
        this.setState({
            [e.target.email] : e.target.value
        });
    }

    onAddSubmit(e){
        console.log("Form Submit");

        const {addUser} = this.props;
        const {name,email} = this.state;

        const newUser = {
            id : Math.random(),
            name : name,
            email : email
        };

        addUser(newUser);
        e.preventDefault();
    }

    render(){
        const {name,email} = this.state;

        return(
            <div className="card" >
                <h4 className="card-header">Form</h4>
                <div className="card-body">
                    <form onSubmit = {this.onAddSubmit.bind(this)}>

                        <div className="form-group">
                            <label htmlFor="name" > Name </label>
                            <input type="text" name="name" id="name" 
                                placeholder="Enter Name" 
                                className="form-control" 
                                value={name} 
                                onChange = {this.onNameChange.bind(this)}
                            />         
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" > E-mail </label>
                            <input type="text" name="email" id="email" 
                                placeholder="Enter E-mail" 
                                className="form-control" 
                                value={email}
                                onChange = {this.onEmailChange.bind(this)}
                            />
                        </div>

                        <button type="submit" className="btn btn-danger btn-block">Add New User</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddUser; // Başka componentlerin içinde kullanabilmek için export edilir 
import React, {Component} from 'react';
import Button from '../components/button';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <Button button_name={'LOGIN'} onClickFunction={()=>alert('LOGGED IN SUCCESSFULLY!')}/>
            </div>
        )
    }
}
export default Login;
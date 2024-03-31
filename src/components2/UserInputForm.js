import React from "react";
import { Button, Card, CardBody, CardTitle, Container, Form, FormGroup } from "react-bootstrap";


class UserInputForm extends React.Component {

    constructor(){
        super();
        this.state={
            UserName:"",
            Password:""
        }
    }

    changeData=()=>{
           console.log(`${this.state.UserName}`)
           console.log(`${this.state.Password}`)
    }


    render() {
        return (
            <Container>
                <Card>
                    <CardTitle style={{textAlign:'center', color:'blue'}}>User Input Form</CardTitle>
                    <CardBody>
                        <Form>
                          <FormGroup>
                            <label for='uname'>Enter Your Name</label>
                            <div>
                                <input type="text" id='uname' name="uname"
                                value={this.state.UserName} 

                                onChange={(event)=>this.setState({UserName:event.target.value})}
                                
                                placeholder="Your Name Here"/>
                            </div>
                            
                          </FormGroup>
                          <FormGroup>
                          <label for='pass'>Enter Your Password</label>
                            <div>
                                <input type="text" id='pass' name="pass"
                                value={this.state.Password}
                                onChange={(event)=>this.setState({Password:event.target.value})}

                                placeholder="Your Password Here"/>
                            </div>
                          </FormGroup>
                          <br/>
                          <div>
                            <Button onClick={this.changeData}>Submit Data</Button>
                          </div>
                        </Form>
                    </CardBody>
                </Card>

                {this.state.UserName}
                {this.state.Password}
            </Container>

              


        )
    }
}

export default UserInputForm
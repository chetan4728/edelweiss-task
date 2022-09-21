import {Row,Col,Form, Container, Card} from 'react-bootstrap';
import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import {connect} from "react-redux";
import { addData } from "../redux/actions/action";
import '../assets/css/userfrom.css'
import { useNavigate } from "react-router-dom";

const GetUserDetails = ({ dispatch }) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        //console.log(data);
        dispatch(addData(data))
        if(data)
        {
            navigate('/details', { replace: true });
        }
       
    }

    return <>
   <div className="_container">
    <div className="_formbox">
            <Card>
        <Container style={{padding:20}}>
        <Row>
        <Col md={6}>
            <h1 style={{textAlign:"center"}}>Fill Your Details</h1>
            <div className="_anim"></div>
            </Col>
            <Col md={6}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group  className="mb-3">
                    <Form.Label className='_lable'>First name</Form.Label>
                    <Form.Control
                    placeholder="Enter First name"       
                    type="text"
                    {...register("firstName", { required: true, maxLength: 10 })}
                    
                        
                    />
                {errors.firstName && <p className="error">Please check the First Name</p>}
                    </Form.Group>
                    <Form.Group  className="mb-3">
                    <Form.Label className='_lable'>Last name</Form.Label>
                    <Form.Control
                        
                        placeholder="Enter Last name"       
                        type="text"
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                    {errors.lastName && <p className="error">Please check the Last Name</p>}
                    </Form.Group>
                    <Form.Group  className="mb-3">
                    <Form.Label className='_lable'>Email</Form.Label>
                    <Form.Control
                        
                        placeholder="Enter Email"       
                        type="text"
                        {...register("email", { 
                            required: true,
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                    />
                        {errors.email && <p className="error">Please enter email</p>}
                    </Form.Group>
                    <Form.Group  className="mb-3">
                    <Form.Label className='_lable'>Mobile No</Form.Label>
                    <Form.Control
                         type="number"
                        placeholder="Enter Mobile no"       
                        {...register("mobile", {
                            
                            required: true, 
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Please enter a number',
                            },
                        })}
                    
                    />
                {errors.mobile && <p className="error">Please enter mobile</p>}
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label className='_lable' >Gender</Form.Label>
                    <Form.Select defaultValue="Choose..." {...register("gender", { required: true })}>
                        <option value="">Choose...</option>
                        <option value={'male'}>Male</option>
                        <option value={'female'}>Female</option>
                    </Form.Select>
                    {errors.gender && <p className="error">Please select gender</p>}
                    </Form.Group>
                    <Form.Group  className="mb-3">
                    <Form.Label className='_lable'>Date of birth</Form.Label>
                    <Form.Control
                        
                        placeholder="Enter DOB"       
                        type="date"
                        {...register("dob", { required: true })}
                    
                    />
                    {errors.dob && <p className="error">Please enter dob</p>}
                    </Form.Group>

                    
                    <Button type="submit">Submit form</Button>
                </Form>
            </Col>
        </Row>
        </Container>
           </Card>
       </div>
     </div>
  
    </>
}
function mapDispatchToProps(dispatch){
    return{
      addData: data => dispatch(addData(data))
    }
  }
export default connect(mapDispatchToProps)(GetUserDetails);
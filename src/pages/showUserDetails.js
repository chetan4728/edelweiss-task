import store from "../redux/store/store";
import {Row,Col,Form, Container, Card} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../assets/css/userfrom.css'
import { useEffect, useState } from "react";
import Details from "../components/details";
const ShowUserDetails = () => {
    //console.log(store.getState().data)
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [sunday, setSunday] = useState(0);

    // calculate number of sunday between @startDate and @endDate
    const submit = () =>{
        var sundays = 0;
            for (var i = startDate; i <= endDate; i.setDate(i.getDate()+1)){
                //console.log(i.getDay())
                if (i.getDay() == 0 ) {sundays = sundays + 1};
            }
         setSunday(sundays)
         setShow(true)
    }
    const back = () =>{
        navigate('/', { replace: true });
    }
    return <>
     <div className="_container">
        <div className="_formbox">
        <Card>
        <Container style={{padding:20}}>
        <Row>
        <Col md={6}>
            <h1 style={{textAlign:"center"}}>Select Date Range </h1>
            <div className="_anim2"></div>
            </Col>
            <Col md={6}>
            <Form.Group  className="mb-3">
                    <Form.Label className='_lable'>Select Start Date</Form.Label>
                    <DatePicker className="form-control" placeholderText="Start Date" selected={startDate} onChange={(start) => setStartDate(start)} />
                    </Form.Group>
                    <Form.Group  className="mb-3">
                    <Form.Label className='_lable'>Select End Date</Form.Label>
                    <DatePicker className="form-control" placeholderText="End Date" selected={endDate}  minDate={startDate} onChange={(end) => setEndDate(end)} />
                    </Form.Group>      
                    <Button onClick={submit}>Submit</Button>  
                    <Button variant="danger" className="m-2" onClick={back}>Back</Button> 
                    
                    {show && <Details data={store.getState().data} totalSunday={sunday} />}
            </Col>
          
        </Row>
        </Container>
           </Card>
        </div>
    </div>
    </>
}
export default ShowUserDetails;
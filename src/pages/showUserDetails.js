import store from "../redux/store/store";
import {Row,Col,Form, Container, Card} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../assets/css/userfrom.css'
import { useState } from "react";
import Details from "../components/details";
const ShowUserDetails = () => {
    //console.log(store.getState().data)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [total, setTotal] = useState(0);
    const submit = () =>{
        var sundays = 0;
            for (var i = startDate; i <= endDate; i.setDate(i.getDate()+1)){
                if (i.getDay() == 0 ) sundays++;
            }
         setTotal(sundays)
         setShow(true)
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
                    <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </Form.Group>
                    <Form.Group  className="mb-3">
                    <Form.Label className='_lable'>Select End Date</Form.Label>
                    <DatePicker className="form-control" minDate={startDate} selected={endDate} onChange={(date) => setEndDate(date)} />
                    </Form.Group>      
                    <Button onClick={submit}>Submit</Button>  

                    {show && <Details data={store.getState().data} totalSunday={total} />}
            </Col>
          
        </Row>
        </Container>
           </Card>
        </div>
    </div>
    </>
}
export default ShowUserDetails;
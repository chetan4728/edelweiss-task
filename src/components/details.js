import { Container, Row,Col } from "react-bootstrap";

const Details = (props) => {
    console.log(props)
    return <>
    <Container className="details_container">
        <Row>
            <Col md={4}>Total Sundays</Col>
            <Col md={8}>{props && props.totalSunday}</Col>
        </Row>
        <Row>
            <Col md={4}>Name</Col>
            <Col md={8}>{props.data && props.data.firstName +" "+props.data.lastName}</Col>
        </Row>
        <Row>
            <Col md={4}>Email</Col>
            <Col md={8}>{props.data && props.data.email}</Col>
        </Row>
        <Row>
            <Col md={4}>Mobile</Col>
            <Col md={8}>{props.data && props.data.mobile}</Col>
        </Row>
        <Row>
            <Col md={4}>Gender</Col>
            <Col md={8}>{props.data && props.data.gender}</Col>
        </Row>
        <Row>
            <Col md={4}>Dob</Col>
            <Col md={8}>{props.data && props.data.dob}</Col>
        </Row>
    </Container>
    </>
}
export default Details;
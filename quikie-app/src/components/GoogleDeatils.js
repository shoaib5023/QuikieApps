

import { Button, Card } from 'react-bootstrap';
import img3 from '../Assets/GOOGL.png';
import { Link } from 'react-router-dom'

const GoogleDetails = () => {
    return (
        <div style={{ margin: '5px auto' }}>
            <h5 style={{ color: 'blue', textAlign: 'center' }} > Google</h5>
            < Card style={{ width: '35rem', padding: '10px', margin: '10px auto' }}>
                <Card.Img variant="top" src={img3} style={{ width: '10rem', margin: "2px auto" }} />
                <hr></hr>
                <Card.Body>
                    <Card.Title>Google </Card.Title>

                    < Card.Text > Stock Symbol:<b>Google </b> </Card.Text>
                    < Card.Text > Market Cap:<b>$ 4.56</b>  </Card.Text>
                    < Card.Text > Current price:<b>$55.90</b> </Card.Text>
                    <Link to={`/`}> <Button variant='primary'  >Buy Shares</Button></Link>


                </Card.Body>
            </Card>




        </div >
    );
}

export default GoogleDetails;

import React,{Fragment} from 'react'
import { Container } from 'react-bootstrap';

export default function Inbox() {
    return (
        <div>
        <Container fluid={true}>
        <div style={{height:"75px",borderBottom:"1px solid black",backgroundColor:"rgba(233,235,238,0.5)"}}>
            <div style={{float:"left",width:"20%",marginRight:"2%"}}>
            <div style={{width:"50px",margin:"10px 5px 0px 0px",height:"50px",background:"#E5E9F2",borderRadius:"25px"}}></div>
            </div>
            <div style={{float:"left",width:"77%",marginTop:"8px"}}>
                <h5 style={{marginBottom:"unset",fontSize:"18px"}}>John Doe</h5>
                <p style={{fontSize:"14px",marginBottom:"unset"}}>lorem ipsum dollar iset collection</p>
            </div>
        </div>
        <div style={{height:"75px",borderBottom:"1px solid black",background:"white"}}>
            <div style={{float:"left",width:"20%",marginRight:"2%"}}>
            <div style={{width:"50px",margin:"10px 5px 0px 0px",height:"50px",background:"#E5E9F2",borderRadius:"25px"}}></div>
            </div>
            <div style={{float:"left",width:"77%",marginTop:"8px"}}>
                <h5 style={{marginBottom:"unset",fontSize:"18px"}}>Eugene Lawson</h5>
                <p style={{fontSize:"14px",marginBottom:"unset"}}>lorem ipsum dollar iset collection</p>
            </div>
        </div>
        <div style={{height:"75px",borderBottom:"1px solid black",background:"white"}}>
            <div style={{float:"left",width:"20%",marginRight:"2%"}}>
            <div style={{width:"50px",margin:"10px 5px 0px 0px",height:"50px",background:"#E5E9F2",borderRadius:"25px"}}></div>
            </div>
            <div style={{float:"left",width:"77%",marginTop:"8px"}}>
                <h5 style={{marginBottom:"unset",fontSize:"18px"}}>John Doe</h5>
                <p style={{fontSize:"14px",marginBottom:"unset"}}>lorem ipsum dollar iset collection</p>
            </div>
        </div>
        <div style={{height:"75px",borderBottom:"1px solid black",background:"white"}}>
            <div style={{float:"left",width:"20%",marginRight:"2%"}}>
            <div style={{width:"50px",margin:"10px 5px 0px 0px",height:"50px",background:"#E5E9F2",borderRadius:"25px"}}></div>
            </div>
            <div style={{float:"left",width:"77%",marginTop:"8px"}}>
                <h5 style={{marginBottom:"unset",fontSize:"18px"}}>Eugene Lawson</h5>
                <p style={{fontSize:"14px",marginBottom:"unset"}}>lorem ipsum dollar iset collection</p>
            </div>
        </div>
        
</Container>
</div>
    )
}

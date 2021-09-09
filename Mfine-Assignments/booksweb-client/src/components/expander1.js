import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Collapse} from 'react-bootstrap';


const Expander=()=> {
    const[expanded, setExpanded]=React.useState(false); //by default expand is false
    return(
        <div className='main'>
           <h4 className='expander'>{book.description}</h4>
        </div>
    )
    
    
    <ExpandmoreIcon onClick={()=> {setExpanded(!open)};
        aria-controls="collapse"
        />,

        <Collapse in={open}>
        <div id='collapse' >
            <h4>{book.description}</h4>
            <ExpandLessIcon/>
        </div>
        </Collapse>         //true-expand else collapse
    };
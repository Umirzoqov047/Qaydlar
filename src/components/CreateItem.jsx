import { ReactComponent as Add } from "../assets/add.svg";
import { Link } from 'react-router-dom';
export default function CreateItem(){
  return(
    <Link to="/note/new" className="floating-button">
      <Add />
    </Link>
  )
}
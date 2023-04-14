import { Link } from "react-router-dom";
import AnimationElement from "./Animation";

const DUMMY_DATA = [
  {id:'i1',path:'1'},
  {id:'i2',path:'2'},
  {id:'i3',path:'3'},
  {id:'i4',path:'4'},
  {id:'i4',path:'5'},
  {id:'i4',path:'6'},
  {id:'i4',path:'7'},
  {id:'i4',path:'8'},
  {id:'i4',path:'9'},
  {id:'i4',path:'10'},
]

function HomePage() {
  return(
    <>
    {DUMMY_DATA.map(el => {
      return(
      <div key={el.id}>
        <Link to={`/${el.path}`}>
          <AnimationElement/>
        </Link>
      </div>

      );
    })}
    </>

  );
}

export default HomePage;

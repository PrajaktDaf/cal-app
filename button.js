
import './button.css';

const button = (props)  =>{
   
   // const btClick = ()=>{
        // console.log("PropsValue", props)
  //} 

  const {btFun, btName} = props;
    return(

        <div>

            <button class = "bt-cal" onClick = { btFun }> {btName} </button>
            

        </div>
    )
}
export default button
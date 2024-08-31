
import Button from "../../common/button/button"

const Calwrapper = (props)  =>{

   

   const allButton = props.allBtArr.map( (btObj)=>{

        return   <Button key = {btObj.value} btName = {btObj.value} btFun = {btObj.btFun}>  </Button>;
   });


   const allOprBtn = props.operationArr.map( (btObj)=>{
         return   <Button key = {btObj.value} btName = {btObj.value} btFun = {btObj.btFun}>  </Button>;
   });

   console.log("allButton" ,allButton)
    return(

        <div >

          {allButton} 
          {allOprBtn} 
            

        </div>
    )
}
export default Calwrapper
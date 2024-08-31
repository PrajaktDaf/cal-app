
import { useState } from "react";
import Calwrapper from "../calwrapper/calwrapper";


const Cal = ()  =>{

   const [inputVall , setInputVall] = useState(0);
   const [operationValue, setOperationValue] = useState(0);
   const [currentOperation, setCurrentOperation] = useState();

    const allBtArr = [

        {
            value : 0,
             btFun: () => {
              
              setInputVall( (prevValue) => parseInt(prevValue.toString() + 0)); 
                  
               },
        },

       
        {value : 1,
            btFun: () => {

                setInputVall( (prevValue) => parseInt(prevValue.toString() + 1)); 

                      // OR
               /* setInputVall ( (prevValue) => {
                 console.log("PrevValue" , prevValue);
                 const newValue = inputVall.toString() + 1;
                 console.log("NewValue", newValue );
                 return parseInt(newValue);
              })*/

             }

       },

       {value : 2,
        btFun: () => {
           
        const newValue = inputVall.toString() + 2 ;
          setInputVall(parseInt(newValue))}
   },

   {value : 3,
    btFun: () => {
       
    const newValue = inputVall.toString() + 3 ;
      setInputVall(parseInt(newValue))}
  },


  ];

  const operationArr = [

    {
        value : '+',
         btFun: () => {
           setCurrentOperation('+');
           setOperationValue(inputVall);
           setInputVall(0);
              
           },
    },


    {
        value : '-',
         btFun: () => {
           setCurrentOperation('-');
           setOperationValue(inputVall);
           setInputVall(0);
              
           },
    },


    {
      value : '=',
       btFun: () => {
         
        if(currentOperation === '+'){
             setInputVall( (prevValue) => {
                return prevValue + operationValue;
             })

        }else if(currentOperation === '-'){
            setInputVall( (prevValue)=> {
               return operationValue - prevValue
            })
        }


        

         },
  },


  ];


    return(

        <div>

            <h1> This is cal {inputVall} </h1>
            <h1> {currentOperation} {operationValue}</h1>
            
            <Calwrapper allBtArr = {allBtArr} operationArr = {operationArr}></Calwrapper>

        </div>
    )
}
export default Cal
import React,{useEffect,useState} from 'react';


const Test = ()=>{
    const [state,setState]=useState([]);
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
       const data =  fetch('http://shtmed.com/api/v1/get-news/0/10')
       .then(response => response.json())
       .then(data => console.log(data.news));
    //   setState([...state,data]);
    //   setFlag(true);
    console.log(data);

    },[])
    return(
        <div>
            {/* {
                flag ? console.log(state) : "nothing"
            } */}
        </div>
    )

    }
export default Test;
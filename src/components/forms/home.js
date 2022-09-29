import { Button } from '@material-ui/core';
import React, { useEffect,useState } from 'react'

const Home = () => {

    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        const token=localStorage.getItem("token");
        if(token == null){
            window.location.replace("/loginForm");
        }
        setIsLoading(false);
    },[])

    const handleClick=()=>{
        localStorage.removeItem("token");
        window.location.replace("/loginForm")
    }
  return (
    <div>
    {isLoading?
        (
            <div>Loading</div>
        ):
        (
            <div>
                <div>Welcome</div>
                <Button onClick={handleClick}>Logout</Button>
            </div>
        )}
    </div>

  )
}

export default Home
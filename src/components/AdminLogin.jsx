import React,{useState} from 'react'

const AdminLogin = () => {
    const[inputs,setinputs]=useState({
        email:"",
        password:""
        });
        const[warnemail,setwarnemail]=useState(false);
        const[warnpass,setwarnpass]=useState(false);
        const[danger,setdanger]=useState(true);
        
        const[eye,seteye]=useState(true);
        const[pass,setpass]=useState("password");
        const inputEvent=(event)=>{
            const name=event.target.name;
            const value=event.target.value;
            if(name=="email"){
            if(value.length>0){
            setdanger(true);
            }
            }
            setinputs((lastValue)=>{
            return{
            ...lastValue,
            [name]:value
            }
            });
            };
            const submitForm=(e)=>{
                e.preventDefault();
                setwarnemail(false);
                setwarnpass(false);
                if(inputs.email.length<1){ setdanger(false); } if(inputs.email=="" ){ setwarnemail(true); } else if(inputs.password=="" ){ setwarnpass(true); } else{ alert("Logged in Successfully"); } }; const Eye=()=>{
                    if(pass=="password"){
                    setpass("text");
                    seteye(false);
                    }else{
                    setpass("password");
                    seteye(true);
                    }
                    };         
  return (
    <div className='user'>
        
        <div className="container">
            <div className="card">
                <div className="form">
                    <div className="left-side">
                        <img src="https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_960_720.jpg" />
                    </div>

                    <div className="right-side">
                        

                        <div className="hello">
                            <h2>Hello Again!</h2>
                            <h4>Welcome back you have been missed! </h4>
                        </div>
                        <form onSubmit={submitForm}>

                            <div className="input_text">
                                <input className={` ${warnemail ? "warning" : "" }`} type="text" placeholder="Enter Email" name="email" value={inputs.email} onChange={inputEvent} />
                                <p className={` ${danger ? "danger" : "" }`}><i className="fa fa-warning"></i>Please enter a valid email address.</p>
                            </div>
                            <div className="input_text">
                                <input className={` ${warnpass ? "warning" : "" }`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                                <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                            </div>
                            <div className="recovery">
                                <p>Recovery Password</p>
                            </div>
                            <div className="btn">
                                <button type="submit">Sign in</button>
                            </div>

                        </form>
                       
                        
                    </div>
                </div>
            </div>
        </div>

                        </div>
  )
}

export default AdminLogin
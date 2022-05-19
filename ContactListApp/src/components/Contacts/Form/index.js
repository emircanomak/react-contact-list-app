import { useState } from "react" 

const initalFormValues= {fullname : "" , phone_number:""};

function Form({addContact,contacts}) {
    
    const [form,setForm] = useState({fullname:"", phone_number:""});
    const onChangeInput = (e) => {
        setForm({...form , [e.target.name]:e.target.value})
    };
    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === "" || form.phone_number ===""){
            return false ; 
        }
        addContact([...contacts , form])
        setForm(initalFormValues)
    };
  return (
    
    <form onSubmit={onSubmit}>
    <div>
    <input name='fullname' 
    placeholder='Fullname' 
    value={form.fullname}
    onChange={onChangeInput} />
    </div>
    <div>
    <input name='phone_number' 
    value={form.phone_number}
    placeholder='Phone Number'
     onChange={onChangeInput} />
    </div>
    <div className="btn">
        <button>Add</button>
    </div>
   
 
    </form>
  )
}

export default Form
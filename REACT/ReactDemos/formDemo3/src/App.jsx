// import {useState} from "react";
import {useForm} from "react-hook-form";
import {object, string, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const App = () => {
    const initialState = {
        fname: "",
        age: 0
    }
    const userSchema = object({
        fname:string()
            .required("This field is required.")
            .max(3,"Cannot be larger than 3 characters"),
        age:number()
            .min(21,"You must be 21 years old.")
            .max(99,"You must be younger than 99 years old.")

    })

    const {register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors}}
        = useForm({resolver:yupResolver(userSchema)});
    // const [firstName, setFirstName] = useState("");
    // const [age, setAge] = useState(0);

    const onSubmit = (data) => {
        console.log(data)
        //send it to a database or whatever we do with it...

        reset();
    }
    // const [formData, setFormData] = useState(initialState)
    // const {fname,age} = formData;

    // const handleDatSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(formData)
        //send to database
        //axios call
    // }

    const handleChange = (event) => {
        setValue(event.target.name,event.target.value)
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="" className="fname" >First Name</label>
                <input
                    // required
                    // maxLength={3}
                    onChange={handleChange}
                    type="text"
                    {...register("fname")}
                    // id=""
                    // value={fname}
                />
                {errors.fname && <span>{errors.fname.message}</span>}
                <br/>
                <label htmlFor="" className="age">Age</label>
                <input
                    // min={21}
                    // max={99}
                    onChange={handleChange}
                    type="number"
                    {...register("age")}
                    // id=""
                    // value={age}
                />
                {errors.age && <span>{errors.age.message}</span>}
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
            
        
    );
};

export default App;



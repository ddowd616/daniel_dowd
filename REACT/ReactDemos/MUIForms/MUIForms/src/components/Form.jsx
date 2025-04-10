import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {object,string} from "yup";
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";


export default function Form() {
    //create a blueprint
    const userSchema = object({fname:string()
            .required("This field is required.")
            .max(3,"can not exceed 3 characters"),
        email:string().required("put in yo email").email()}

    )
    const{
        register,
        setValue,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm({resolver:yupResolver(userSchema)});


    function handleChange(e) {
        setValue(e.target.name,e.target.value)
    }
    const onSubmit = (data) => {
        //flatten the data into a string
        //this is what is sent to the server...
        const JSON_data = JSON.stringify(data);
        console.log(JSON_data);
        //axios post
        // if everything is good it will reset...
        // axios(options).then(response => {})
        reset();
    }

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField id="outlined-basic"
                       label="First Name"
                       variant="outlined"
                       {...register("fname")}
                        onChange={handleChange}
                       error={errors.fname !== undefined}
                       helperText={errors.fname && <span>{errors.fname.message}</span>}
            />
            <br/>
            <TextField id="outlined-basic"
                       label="email"
                       variant="outlined"
                       {...register("email")}
                       onChange={handleChange}
                       error={errors.email !== undefined}
                       helperText={errors.email && <span>{errors.email.message}</span>}
            />
            <br/>
            <Button type="submit" variant="contained" color={"success"}>Submit Guy</Button>
        </Box>
    );
}


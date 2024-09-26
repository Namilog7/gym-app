"use client"

import { useEffect, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Alert } from "@mui/material"

type Inputs = {
    name: string,
    lastname: string,
    email: string,
    paymentday: Date,
    payment: boolean,
    age: string,
    problems: string
}

type ModalProps = {
    title: string
}

export const ModalAdd: React.FC<ModalProps> = ({ title }) => {
    let method: string;
    if (title == "AGREGAR") method = "POST"
    if (title == "EDITAR") method = "PUT"
    const [viewAlert, setViewAlert] = useState(false)
    const [dataResponse, setDataResponse] = useState({ message: {} })
    const handleClick = () => {
        setViewAlert(true)

    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { age, paymentday } = data
        const day = new Date(paymentday).toISOString()
        let ageDto
        console.log(method)
        if (!Number.isNaN(age)) ageDto = parseInt(age)
        else window.alert("Envie datos correctos")
        fetch("http://localhost:3000/api/members", {
            method: method,
            body: JSON.stringify({ ...data, paymentday: day, age: ageDto })
        }).then((data) => data.json())
            .then((response) => window.alert(response.message))
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        return () => {
            const select = document.getElementById("select");
            select.selectedIndex = 0
        }
    }, [])
    return (
        <>
            <h2 style={{ margin: 0, marginBottom: "5px", color: "black" }}>{title} </h2>
            <form action="" style={{ display: "flex", flexDirection: "column", gap: "8px" }} className="formAdd" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name"></label>
                <input className="inputs" type="text" id="name" placeholder="Nombre" defaultValue="" {...register("name", { required: true, minLength: 2 })} />
                {errors.name && <span style={{ color: "red" }}>Complete correctamente los campos</span>}
                <label htmlFor="lastname"></label>
                <input className="inputs" type="text" id="lastname" placeholder="Apellido" defaultValue="" {...register("lastname", { required: true })} />
                {errors.lastname && <span style={{ color: "red" }}>Complete correctamente los campos</span>}
                <label htmlFor="email"></label>
                <input className="inputs" type="email" id="email" placeholder="Email" defaultValue="" {...register("email", { required: true, pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ })} />
                {errors.email && <span style={{ color: "red" }}>Complete correctamente los campos</span>}
                <label htmlFor="paymentday"></label>
                <input className="inputs" type="datetime-local" id="paymentday" placeholder="Fecha Abonada" defaultValue="" {...register("paymentday", { required: true })} />
                <label htmlFor="payment"></label>
                <select id="payment" {...register("payment", { required: true })} >
                    <option value="" selected disabled>Estado Membresia</option>
                    <option value="ABONADO">Abonado</option>
                    <option value="VENCIDO">Vencido</option>
                </select>
                {errors.payment && <span style={{ color: "red" }}>Complete correctamente los campos</span>}
                <label htmlFor="age"></label>
                <input className="inputs" type="text" id="age" placeholder="Edad" defaultValue="" {...register("age", { required: true })} />
                <label htmlFor="problems"></label>
                <textarea id="problems" placeholder="Problemas Fisicos" rows={12} {...register("problems")}></textarea>
                <button className="buttonAdd">Agregar</button>
            </form>
            {viewAlert && <Alert severity="success" >Todo ok </Alert>}
        </>
    )
}
"use client"

import { useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { Members } from "@prisma/client"
import useNumberStore from "@/app/store/store"

type Inputs = {
    name: string,
    lastname: string,
    email: string,
    paymentday: Date,
    payment: boolean,
    age: string,
    problems: string
}
type AlertProps = {
    isView: boolean,
    info: string
}
type ModalProps = {
    title: string,
    member: Members,
    setShowAlert: React.Dispatch<React.SetStateAction<AlertProps>>
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalAdd: React.FC<ModalProps> = ({ title, member, setShowAlert, setIsOpen }) => {
    let method: string;
    const { setStateReload } = useNumberStore()
    if (title == "AGREGAR") method = "POST"
    if (title == "EDITAR") method = "PUT"
    if (title == "ELIMINAR") method = "DELETE"
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
            .then((response) => setShowAlert({ isView: true, info: response.message }))
            .then((response) => setIsOpen(false))
            .then((response) => setTimeout(() => setShowAlert({ isView: false, info: "" }), 2000))
            .then((response) => setStateReload(true))
            .catch((error) => console.log(error))
    }

    const formatDateTime = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son 0-indexados, por eso +1
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const day = formatDateTime(new Date(member?.paymentday!))

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
                <input className="inputs" type="text" id="name" placeholder="Nombre" defaultValue={title !== "AGREGAR" ? member?.name : ""} {...register("name", { required: true, minLength: 2 })} />
                {errors.name && <span style={{ color: "red" }}>Complete correctamente los campos</span>}
                <label htmlFor="lastname"></label>
                <input className="inputs" type="text" id="lastname" placeholder="Apellido" defaultValue={title !== "AGREGAR" ? member?.lastname : ""} {...register("lastname", { required: true })} />
                {errors.lastname && <span style={{ color: "red" }}>Complete correctamente los campos</span>}
                <label htmlFor="email"></label>
                <input className="inputs" type="email" id="email" placeholder="Email" defaultValue={title !== "AGREGAR" ? member?.email : ""} {...register("email", { required: true, pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ })} />
                {errors.email && <span style={{ color: "red" }}>Complete correctamente los campos</span>}
                <label htmlFor="paymentday"></label>
                <input className="inputs" type="datetime-local" id="paymentday" placeholder="Fecha Abonada" defaultValue={title !== "AGREGAR" ? day : ""} {...register("paymentday", { required: true })} />
                <label htmlFor="payment"></label>
                <select id="payment" defaultValue={title !== "AGREGAR" ? member?.payment : ""} {...register("payment", { required: true })} >
                    <option value="" selected disabled>Estado Membresia</option>
                    <option value="ABONADO">Abonado</option>
                    <option value="VENCIDO">Vencido</option>
                </select>
                {errors.payment && <span style={{ color: "red" }}>Complete correctamente los campos</span>}
                <label htmlFor="age"></label>
                <input className="inputs" type="text" id="age" placeholder="Edad" defaultValue={title !== "AGREGAR" ? member?.age : ""} {...register("age", { required: true })} />
                <label htmlFor="problems"></label>
                <textarea id="problems" placeholder="Problemas Fisicos" rows={12} defaultValue={title !== "AGREGAR" ? member?.problems : ""} {...register("problems")}></textarea>
                <button className="buttonAdd">{title}</button>
            </form>
        </>
    )
}
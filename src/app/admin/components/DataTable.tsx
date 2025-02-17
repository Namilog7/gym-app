"use client"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import useNumberStore from '@/app/store/store';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'lastname', headerName: 'Apellido', width: 130 },
    { field: "payment", headerName: "Membresia", width: 130 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "paymentday", headerName: "Fecha membresia", width: 180 },
    {
        field: 'age',
        headerName: 'Edad',
        type: 'number',
        width: 90,
    },
    { field: "problems", headerName: "Problemas Fisicos", width: 300 }

];


const paginationModel = { page: 0, pageSize: 10 };

interface Member {
    id: number;
    name: string;
    lastname: string;
    email: string;
    problems: string | null;
    paymentday: Date;
    payment: "ABONADO" | "VENCIDO"; // Suponiendo que 'payment' es un string
    age: number;
}

export default function DataTable() {
    const { setNumbers, stateReload, setStateReload, numbers } = useNumberStore();
    const [rows1, setRows1] = React.useState<Member[]>([]); // Ahora rows1 tiene el tipo Member[]

    const handlerRows = (members: number[]) => {
        // Filtramos rows1 para obtener solo los miembros que coinciden con los IDs seleccionados
        const membersInfo = rows1.filter((member) => members.includes(member.id));
        setNumbers(membersInfo); // Establecemos el estado con los miembros seleccionados
    };

    const viewIds = () => {
        return numbers?.map((member) => member.id); // Devolvemos los IDs de los miembros seleccionados
    };

    React.useEffect(() => {
        if (stateReload) {
            fetch("http://localhost:3000/api/members")
                .then((data) => data.json())
                .then((response) => setRows1(response)) // Asegúrate de que los datos sean del tipo Member
                .then(() => setStateReload(false)) // No necesitamos el segundo 'response'
                .catch((error) => window.alert(`Algo salió mal: ${error}`));
        }
        console.log(stateReload);
    }, [stateReload]);

    return (
        <Paper sx={{ height: "85vh", width: '100%' }}>
            <DataGrid
                rows={rows1} // rows1 ahora está correctamente tipado como `Member[]`
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
                rowSelection={viewIds()}
                onRowSelectionModelChange={(members) => handlerRows(members)} // members ahora es un array de IDs
            />
        </Paper>
    );
}

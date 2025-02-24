"use client"
import * as React from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import useNumberStore from '@/app/store/store';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'lastname', headerName: 'Apellido', width: 130 },
    { field: "payment", headerName: "Membresia", width: 130 },
    { field: "email", headerName: "Email", width: 160 },
    { field: "paymentday", headerName: "Fecha membresia", width: 180 },
    { field: "telefono", headerName: "Telefono" },
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
    telefono: string
}

export default function DataTable() {
    const { setNumbers, stateReload, setStateReload, numbers } = useNumberStore();
    const [rows1, setRows1] = React.useState<Member[]>([]); // Ahora rows1 tiene el tipo Member[]

    const handlerRows = (members: GridRowSelectionModel) => {
        // Filtramos rows1 para obtener solo los miembros que coinciden con los IDs seleccionados
        const membersInfo = rows1.filter((member) => members.includes(member.id));
        setNumbers(membersInfo); // Establecemos el estado con los miembros seleccionados
    };

    const viewIds = () => {
        return numbers?.map((member) => member.id) || []; // Devolvemos los IDs de los miembros seleccionados
    };

    React.useEffect(() => {
        if (stateReload) {
            fetch("https://gym-app-rust-sigma.vercel.app//api/members")
                .then((data) => data.json())
                .then((response) => {
                    setRows1(response); // Actualiza el estado de `rows1`
                    setStateReload(false); // Reinicia el `stateReload`
                })
                .catch((error) => window.alert(`Algo salió mal: ${error}`));
        }
        console.log(stateReload);
    }, [stateReload]);

    return (
        <Paper sx={{ height: "85vh", width: '100%' }}>
            <DataGrid
                rows={rows1}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
                rowSelectionModel={viewIds()} // Cambiado aquí, ahora usa rowSelectionModel
                onRowSelectionModelChange={(newSelection: GridRowSelectionModel) => handlerRows(newSelection)} // Cambio aquí, usando el tipo GridRowSelectionModel
            />
        </Paper>
    );
}

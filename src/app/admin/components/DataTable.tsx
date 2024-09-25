"use client"
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

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


export default function DataTable() {
    const [rows1, setRows1] = React.useState([])
    React.useEffect(() => {
        fetch("http://localhost:3000/api/members")
            .then((data) => data.json())
            .then((response) => setRows1(response))
    }, [])
    return (
        <Paper sx={{ height: "85vh", width: '100%' }}>
            <DataGrid
                rows={rows1}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}

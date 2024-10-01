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


export default function DataTable() {
    const { setNumbers, stateReload, setStateReload, numbers } = useNumberStore()
    const [rows1, setRows1] = React.useState([])

    const handlerRows = (members: any) => {
        const membersInfo = rows1.filter((member) => members.includes(member.id))
        setNumbers(membersInfo)
    }
    const viewIds = () => {
        return numbers?.map((member) => member.id)
    }
    console.log(viewIds())
    React.useEffect(() => {
        if (stateReload) {
            fetch("http://localhost:3000/api/members")
                .then((data) => data.json())
                .then((response) => setRows1(response))
                .then((response) => setStateReload(false))
                .catch((error) => window.alert(`Algo salio mal: ${error}`))
        }
        console.log(stateReload)
    }, [stateReload])

    return (
        <Paper sx={{ height: "85vh", width: '100%' }}>
            <DataGrid
                rows={rows1}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
                rowSelection={viewIds()}
                onRowSelectionModelChange={(members) => handlerRows(members)}
            />
        </Paper>
    );
}

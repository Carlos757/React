import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'color', headerName: 'color', width: 130 },
  {
    field: 'value',
    headerName: 'Valor',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.value || ''}`,
  },
];

let rows = [
  {
    // id: 1,
    color: "red",
    value: "#f00"
  },
  {
    // id: 2,
    color: "green",
    value: "#0f0"
  },
  {
    // id: 3,
    color: "blue",
    value: "#00f"
  },
  {
    // id: 4,
    color: "cyan",
    value: "#0ff"
  },
  {
    // id: 5,
    color: "magenta",
    value: "#f0f"
  },
  {
    // id: 6,
    color: "yellow",
    value: "#ff0"
  },
  {
    // id: 7,
    color: "black",
    value: "#000"
  }
];

rows.map((row, index) => {
  return row.id = index + 1;
})

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '80%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sortingMode="client"
      />
    </div>
  );
}

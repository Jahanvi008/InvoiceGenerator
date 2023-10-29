//Add ag-grid table to store invoice tables

import { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const DeleteRowButtonRenderer = (props) => {
  const onCellDeleteClick = () => {
    if (props.onDeleteClick) {
      props.onDeleteClick(props.node);
    }
  };

  return (
    <button className="btn btn-error" onClick={onCellDeleteClick}>
      Delete Row
    </button>
  );
};

const InvoiceItemsTable = ({ onRowDataChange }) => {
  const gridRef = useRef();

  const [rowData, setRowData] = useState([{}]);

  // column headers and their definitions
  const columnDefs = [
    {
      headerName: "Sr No",
      valueGetter: "node.rowIndex + 1",
      width: 80,
    },
    {
      headerName: "Item/Service Name",
      field: "itemName",
      editable: true,
      width: 150,
    },
    {
      headerName: "Item/Service Description",
      field: "itemDescription",
      editable: true,
      width: 250,
      wrapText: true,
    },
    {
      headerName: "Quantity/Hours",
      field: "quantity",
      editable: true,
      width: 150,
    },
    {
      headerName: "Price/Rate per Hour",
      field: "price",
      editable: true,
      width: 150,
    },
    {
      headerName: "Tax Deduction(in %)",
      field: "tax",
      editable: true,
      width: 150,
    },
    {
      headerName: "Subtotal(After Tax)",
      field: "subtotal",
      valueGetter: "(data.quantity * data.price) * (1 - (data.tax/100))",
      width: 150,
    },
    {
      header: "Delete",
      cellRenderer: DeleteRowButtonRenderer,
      cellRendererParams: {
        onDeleteClick: (node) => {
          handleRowDelete(node);
        },
      },
      width: 250,
    },
  ];

  //default column headers properties applied to all colums
  const defaultColDef = {
    sortable: true, //allows to sort based on columns
    resizable: true, //allows to resize columns
    wrapText: true, //wraps text to fit in column
    autoHeight: true, //sets height to fit content
  };

  //add empty row to the grid
  const addEmptyRow = () => {
    const newRow = {};
    setRowData([...rowData, newRow]);
  };

  //handle row deletion
  const handleRowDelete = (params) => {
    const updatedRowData = rowData.filter((row) => row !== params.data); //returns everything except the deleted row
    setRowData(updatedRowData);
  };

  return (
    <div>
      {/* Invoice title and Add Row Button -- Start */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl">Invoice Data Items Table</h1>
        <button onClick={addEmptyRow} className="btn btn-primary">
          ADD ROW
        </button>
      </div>
      {/* Invoice title and Add Row Button -- End */}

      {/* AgGrid Table Start */}
      <div
        className="ag-theme-alpine-dark"
        style={{ height: 500, width: "70vw" }}
      >
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          onCellValueChanged={(params) => {
            console.log("Cell value changed: ", params.data);
            onRowDataChange(rowData);
          }}
        />
      </div>
      {/* AgGrid Table End */}
    </div>
  );
};

export default InvoiceItemsTable;

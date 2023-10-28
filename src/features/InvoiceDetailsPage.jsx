import { useState } from "react";
import InvoiceInfoHeader from "./InvoiceInfoHeader";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoicePDF from "./InvoicePDF";

import TempInvoiceDetailsOutput from "./Temp/TempInvoiceDetailsOutput";

const InvoiceDetailsPage = () => {
  const [infoHeaderData, setInfoHeaderData] = useState({
    companyName: "",
    companyAddress: "",
    customerName: "",
    customerAddress: "",
    invoiceNumber: "",
    invoiceDate: "",
  });

  const handleInfoHeaderDataChange = (name, value) => {
    setInfoHeaderData({ ...infoHeaderData, [name]: value });
  };

  const [rowItemData, setRowItemData] = useState([]);

  const handleRowDataChange = (data) => {
    setRowItemData(data);
  };

  return (
    <>
      {/* InvoiceInfoHeader start */}
      <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
          <InvoiceInfoHeader
            invoiceInfoData={infoHeaderData}
            onInfoHeaderDataChange={(name, value) =>
              handleInfoHeaderDataChange(name, value)
            }
          />
        </div>
      </div>
      {/* InvoiceInfoHeader End */}

      {/* InvoiceItemsTable Start  */}
      <div className="card w-full bg-base-300 shadow-xl my-4">
        <div className="flex justify-center items-center m-6">
          <InvoiceItemsTable onRowDataChange={handleRowDataChange} />
        </div>
      </div>
      {/* InvoiceItemsTable End  */}

      {/* InvoicePDF Start  */}
      <InvoicePDF
        invoiceInfoHeaderData={infoHeaderData}
        invoiceItemsTableData={rowItemData}
      />
      {/* InvoicePDF End */}

      {/* TempInvoiceDetailsOutput Start */}
      {/* <div className="card w-auto m-8 bg-neutral">
        <TempInvoiceDetailsOutput
          invoiceInfoHeaderData={infoHeaderData}
          invoiceItemsTableData={rowItemData}
        />
      </div> */}
      {/* TempInvoiceDetailsOutput End */}
    </>
  );
};

export default InvoiceDetailsPage;



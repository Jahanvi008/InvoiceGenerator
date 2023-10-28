// Create and download PDF file of the invoice

import { jsPDF } from "jspdf";
import "jspdf-autotable";

const InvoicePDF = ({ invoiceInfoHeaderData, invoiceItemsTableData }) => {
  const timeStamp = new Date().toISOString();

  const generatePDF = () => {
    const doc = new jsPDF();

    //Set font size
    doc.setFontSize(18).setFont(undefined, "bold");

    //add content to invoice PDF
    doc.text("Invoice", 10, 10).setFontSize(12).setFont(undefined, "normal");
    doc.text("From:", 10, 20);
    doc.text(`Company Name: ${invoiceInfoHeaderData.companyName}`, 10, 30);
    doc.text(
      `Company Address: ${invoiceInfoHeaderData.companyAddress}`,
      10,
      40,
    );
    doc.text("To:", 10, 50);
    doc.text(`Customer Name: ${invoiceInfoHeaderData.customerName}`, 10, 60);
    doc.text(
      `Customer Address: ${invoiceInfoHeaderData.customerAddress}`,
      10,
      70,
    );
    doc.text(`Invoice Number: ${invoiceInfoHeaderData.invoiceNumber}`, 10, 90);
    doc.text(`Invoice Date: ${invoiceInfoHeaderData.invoiceDate}`, 10, 100);
    doc.text(`Due Date: ${invoiceInfoHeaderData.invoiceDueDate}`, 10, 110);

    //create a table for Invoice Items

    //Define columns
    const columns = [
      "Item/Service Name",
      "Item/Service Description",
      "Quantity/Hours",
      "Price/Rate per Hour",
      "Total Price",
    ];

    //Define rows
    const rows = invoiceItemsTableData.map((item) => [
      item.itemName,
      item.itemDescription,
      item.quantity,
      item.price,
      item.quantity * item.price,
    ]);

    //Create the table in PDF using jspdf-autotable
    doc.autoTable(columns, rows, {
      startY: 130,
      theme: "grid",
      styles: {
        fontSize: 12,
        cellWidth: "wrap",
        cellPadding: 2,
      },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 70 },
        2: { cellWidth: 30 },
        3: { cellWidth: 30 },
        4: { cellWidth: 30 },
      },
      margin: { left: 10, right: 10 },
    });

    doc.save(`${invoiceInfoHeaderData.invoiceNumber}_${timeStamp}.pdf`);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={generatePDF} className="btn btn-primary">
        Generate PDF
      </button>
    </div>
  );
};

export default InvoicePDF;

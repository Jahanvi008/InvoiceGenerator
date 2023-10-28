// This page contains:
// Invoice information like Company Name and Address, Customer Name and Address, Invoice Date, Invoice Number, etc.

const InvoiceInfoHeader = ({ invoiceInfoData, onInfoHeaderDataChange }) => {
  //An array of invoice information
  const infoHeaderArray = [
    {
      label: "Company/Service Provider Name",
      value: invoiceInfoData.companyName,
      onChange: (value) => onInfoHeaderDataChange("companyName", value),
    },
    {
      label: "Company/Service Provider Address",
      value: invoiceInfoData.companyAddress,
      onChange: (value) => onInfoHeaderDataChange("companyAddress", value),
    },
    {
      label: "Customer Name",
      value: invoiceInfoData.customerName,
      onChange: (value) => onInfoHeaderDataChange("customerName", value),
    },
    {
      label: "Customer Address",
      value: invoiceInfoData.customerAddress,
      onChange: (value) => onInfoHeaderDataChange("customerAddress", value),
    },
    {
      label: "Invoice number",
      value: invoiceInfoData.invoiceNumber,
      onChange: (value) => onInfoHeaderDataChange("invoiceNumber", value),
    },
    {
      label: "Invoice Date",
      value: invoiceInfoData.invoiceDate,
      onChange: (value) => onInfoHeaderDataChange("invoiceDate", value),
    },
    {
      label: "Invoice Due Date",
      value: invoiceInfoData.invoiceDueDate,
      onChange: (value) => onInfoHeaderDataChange("invoiceDueDate", value),
    },
  ];

  return (
    <div>
      <h1 class="text-2xl font-bold dark:text-white">Enter Invoice Details</h1>

      {/* Map over infoHeaderArray Start*/}
      <div className="flex flex-wrap">
        {infoHeaderArray.map((item) => (
          <div key={item.label} className="w-full sm:w-1/2 md:w-1/4 p-2">
            <label className="block text-sm text-neutral-content p-2">
              {" "}
              {item.label}
            </label>
            <input
              className="input input-bordered w-full"
              type="text"
              value={item.value}
              onChange={(e) => item.onChange(e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default InvoiceInfoHeader;

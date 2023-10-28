# React Invoice Generator
https://all-invoice-generator.netlify.app/

This is a web application built with React.js and Vite, designed to help users generate invoices for items and services. It offers a user-friendly interface for adding company and customer details, creating itemized invoices, and generating downloadable PDF invoices. The app is styled with Tailwind CSS and DaisyUI, utilizes React Router for page navigation, and uses ag-Grid React for displaying invoice details. It also integrates jspdf and jspdf-autotable for PDF generation and enforces code quality standards with ESLint and Prettier. Deployment is made easy with Netlify.

## Goal and Use Case

The primary goal of this React Invoice Generator is to provide a straightforward and efficient tool for generating invoices. The specific use case this app targets is to make charges clear for freelancers and service providers who often bill clients based on the number of hours worked and their charge per hour. This app enables users to:

- Enter the number of hours worked and the charge per hour for each task or service provided.
- Optionally specify tax deductions to accurately calculate the subtotal after tax.
- Create professional invoices that clearly display the itemized details, helping freelancers maintain transparency and professionalism in their billing process.

By addressing the unique needs of freelancers and service providers, this application aims to simplify the invoicing process and ensure that charges are presented in a clear and organized manner, fostering better client relationships and financial transparency.

## Features

### Header & Item Details
- **Header Section:** Easily add provider company name, company address, billed company name, company address, invoice number, invoice date, and due date.
- **Table Section:** Add and manage item details like item name, item description, quantity/No. of hours, price/Rate per hour, and subtotal.
- **Calculations:** Option to calculate subtotals of all items' in real-time.
- **Row Management:** Easily delete individual rows, update any cell, and add multiple rows.
- **PDF Generation:** Generate a PDF of the invoice with all entered information.

### Next Steps

I'm actively working on enhancing the functionalities of Invoice Generator app. Here's the current roadmap for the next steps:

- **Separating Item and Service Invoices:** I'm in the process of implementing a feature that will allow users to choose between creating itemized invoices or service-based invoices. This separation will provide users with a tailored experience, enabling them to generate invoices specific to their business needs.
  - *Step 1*: Creating separate sections or templates for item invoices and service invoices.
  - *Step 2*: Developing user-friendly interfaces for entering item details or service descriptions.
  - *Step 3*: Enabling users to customize the appearance and content of both invoice types.
  - *Step 4*: Implementing logic for calculating totals, taxes, and subtotals based on the selected invoice type.
  - *Step 5*: Ensuring that generated PDF invoices reflect the chosen invoice type and contain relevant details.

- **Adding a Total Button:** I'm also in the process of adding a "Total" button, which, when clicked, will calculate and display the total of all items or services entered. This feature will provide users with a quick summary of the invoice's total amount, enhancing clarity.

- **Integrate react-datepicker:** I'm considering the integration of the `react-datepicker` module to enable users to conveniently select invoice date and due date directly from a calendar. This will improve user experience and ensure accurate date selection.

- **Database Integration:** As part of the long-term plan, I'm exploring options for integrating a database to store all generated invoices. This addition will empower users to access and manage their past invoices, supporting their ongoing business operations.

- **Additional Functionalities:** Depending on user feedback and business requirements, I will continue to explore additional functionalities that enhance the app's utility and user experience.

I'm committed to making this Invoice Generator even more versatile and user-friendly. I'm actively seeking input from users and open to contributions that can help shape the future of this tool.

## Deployment

This app is deployed on Netlify, making it accessible online for creating invoices on the go. Here is the link of the app: https://all-invoice-generator.netlify.app/

Thank you for using the React Invoice Generator! I hope this tool simplifies your invoicing process, and please look forward to it's exciting features in the future.
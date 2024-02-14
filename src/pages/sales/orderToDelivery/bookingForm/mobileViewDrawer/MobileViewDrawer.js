import React, { useEffect, useMemo, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import GridContent from "../components/drawer/gridContent/GridContent";
import AccordionTable from "../components/responsiveTable/ResponsiveTable";
import AccordionNTH from "../components/drawer/accordionNTH/AccordionNTH";
import Accordion from "../components/drawer/accordion/Accordion";

function MobileViewDrawer({
  setDrawerType,
  drawerType,
  data,
  isDrawerOpen,
  setIsDrawerOpen,
}) {
  const theme = useSelector((state) => state.theme);
  const userNameSplit = data.two ? data.two?.split(" ") : null;
  const firstLetter = userNameSplit?.[0]?.[0] || "";
  const lastLetter = userNameSplit?.[userNameSplit?.length - 1]?.[0] || "";
  const [currentTabsTitle, setCurrentTabsTitle] = useState("");
  const [indicator, setIndicator] = useState(0);
  //   Right side Drawer open
  const [rightSideDrawer, setRightSideDrawer] = useState(false);

  const [contentsType, setContentsType] = useState("gridContents");
  const [tabsStatus, setTabsStatus] = useState(1);

  const [formDataSubmitted, setFormDataSubmitted] = useState(false);

  const thankyou = {
    key: 12,
    name: "Thank You",
    type: "thankyou",
  };

  //   table data
  const tabsList = useMemo(() => {
    return [
      {
        key: 1,
        name: "Booking Details",
        type: "gridContents",
        contents: [
          {
            title: "Initial Promise Delivery Date",
            text: "23 Jan 2023",
            inputType: "text",
            placeholder: "Enter Initial Promise Delivery Date",
            input: "date",
          },
          {
            title: "Cust. Expected Delivery Date",
            text: "15 Jan 2023",
            inputType: "text",
            placeholder: "Enter Cust. Expected Delivery Date",
            input: "date",
          },
          {
            title: "Sale Type",
            text: "SGST",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "SGST",
              },
              {
                name: "SGST 2",
              },
              {
                name: "SGST 3",
              },
            ],
          },
          {
            title: "Price Type",
            text: "Individual",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "Individual",
              },
              {
                name: "Individual 2",
              },
              {
                name: "Individual 3",
              },
            ],
          },
          {
            title: "Booking Amount",
            text: `250000`,
            inputType: "text",
            placeholder: "Enter Booking Amount",
            input: "number",
          },
          {
            title: "Sales Consultant",
            text: "Vimal Kumar",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "Vimal Kumar",
              },
              {
                name: "Paul Deo",
              },
              {
                name: "John Micheal",
              },
            ],
          },
          {
            title: "Special Request",
            text: "Special",
            inputType: "text",
            placeholder: "Enter Special Request",
            input: "text",
          },
          {
            title: "Place of Registration",
            text: "Noida",
            inputType: "text",
            placeholder: "Enter Place of Registration",
            input: "text",
          },
          {
            title: "Delivery At",
            text: "Showroom",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "Showroom",
              },
              {
                name: "Showroom 2",
              },
              {
                name: "Showroom 3",
              },
            ],
          },

          {
            title: "Influencer/Mitra Type",
            text: "Mitra Type",
          },
          {
            title: "Influencer/Mitra Name",
            text: "Type",
          },
          {
            title: "Mode of Payment",
            text: "HDFC",
          },
          {
            title: "Finance Arranged By",
            text: "Dealer",
          },
          {
            title: "Exchange",
            text: "Yes",
            textColor: "#70C922",
          },
          {
            title: "Loyalty Scheme",
            text: "No",
          },
          {
            title: "Referral",
            text: "Yes",
            textColor: "#70C922",
          },
        ],
      },
      {
        key: 2,
        name: "Customer Details",
        type: "accordion",
        contents: [
          {
            title: "Booking Customer",
            type: "gridContents",
            default: "gridContents",
            contents: [
              {
                title: "Mobile Number",
                text: "+91-9893473843",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Customer ID",
                text: "CFG4554564787",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Customer Type",
                text: "Individual",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Salutation",
                text: "Mr.",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Customer Name",
                text: "Vinayshambhu",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Address",
                text: "Address Details",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "City/District",
                text: "Mumbai",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "PIN Code",
                text: "123456",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "State",
                text: "Maharashtra",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Alternate Number",
                text: "9349923939",
                inputType: "phoneNumber",
                placeholder: "Enter Mobile Number",
                input: "tel",
                notEdit: false,
              },
              {
                title: "Email",
                text: "vinay.sk@gmail.com",
                inputType: "text",
                placeholder: "Enter email address",
                input: "email",
              },
              {
                title: "PAN",
                text: "ABCTY1234D",
                inputType: "text",
                placeholder: "Enter pan number",
                input: "text",
              },
              {
                title: "Aadhar",
                text: "**** **** 2222",
                placeholder: "Enter aadhar number",
                input: "text",
                inputType: "text",
              },
              {
                title: "GSTIN",
                text: "27AAAAP0267H2ZN",
                inputType: "text",
                placeholder: "Enter GSTIN number",
                input: "text",
              },
              {
                title: "Driving Licence",
                text: "DL-1420110012345",
                inputType: "text",
                placeholder: "Enter Driving Licence number",
                input: "text",
              },
              {
                title: "Trade Licence",
                text: "********3432",
                inputType: "text",
                placeholder: "Enter Trade Licence number",
                input: "text",
              },
              {
                title: "Birthdate",
                text: "12 Jan 2021",
                inputType: "text",
                placeholder: "Enter birth date",
                input: "date",
              },
            ],
          },
          {
            title: "Billing Customer",
            type: "gridContents",
            default: "gridContents",
            contents: [
              {
                title: "Mobile Number",
                text: "9349923939",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Customer ID",
                text: "CUST12433461T",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Customer Type",
                text: "Individual",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Salutation",
                text: "Mr.",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Customer Name",
                text: "Vinayshambhu",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Address",
                text: "Address Details",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "City/District",
                text: "Mumbai",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "PIN Code",
                text: "123456",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "State",
                text: "Maharashtra",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Alternate Number",
                text: "9349923939",
                inputType: "phoneNumber",
                placeholder: "Enter Mobile Number",
                input: "tel",
                notEdit: false,
              },
              {
                title: "Email",
                text: "vinay.sk@gmail.com",
                inputType: "text",
                placeholder: "Enter email address",
                input: "email",
              },
              {
                title: "PAN",
                text: "ABCTY1234D",
                inputType: "text",
                placeholder: "Enter pan number",
                input: "text",
              },
              {
                title: "Aadhar",
                text: "**** **** 2222",
                inputType: "text",
                placeholder: "Enter aadhar number",
                input: "text",
              },
              {
                title: "GSTIN",
                text: "27AAAAP0267H2ZN",
                inputType: "text",
                placeholder: "Enter GSTIN number",
                input: "text",
              },
              {
                title: "Driving Licence",
                text: "DL-1420110012345",
                inputType: "text",
                placeholder: "Enter Driving Licence number",
                input: "text",
              },
              {
                title: "Trade Licence",
                text: "********3432",
                inputType: "text",
                placeholder: "Enter Trade Licence number",
                input: "text",
              },

              {
                title: "Birthdate",
                text: "12 Jan 2021",
                inputType: "text",
                placeholder: "Enter birth date",
                input: "date",
              },
            ],
          },
        ],
      },
      {
        key: 3,
        name: "Vehicle Details",
        type: "accordion",
        default: "accordion",
        contents: [
          {
            title: "Vehicle Information",
            type: "gridContents",
            default: "gridContents",
            contents: [
              {
                title: "Vehicle Usage Type ",
                text: "Non-Taxi",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Non-Taxi",
                  },
                  {
                    name: "Non-Taxi 2",
                  },
                  {
                    name: "Non-Taxi 3",
                  },
                ],
              },
              {
                title: "Model",
                text: "SCORPIO",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "SCORPIO",
                  },
                  {
                    name: "XUV700",
                  },
                  {
                    name: "XUV400",
                  },
                  {
                    name: "SCORPIO N",
                  },
                ],
              },
              {
                title: "Model Code",
                text: "AX7-L",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Available Stock",
                text: "14",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Vehicle Allocated Status",
                text: "PO Generated",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "PO Number",
                text: "123122737328",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "PO Date",
                text: "12 Jan 2023",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "PO Status",
                text: "Status",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "SO Number",
                text: "653728438213",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "SO Status",
                text: "Status",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "SO Date",
                text: "12 Jan 2023",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Booking Amount",
                text: "24500",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Total Tax Amount",
                text: "245679",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "VIN Number",
                text: "MAFCL723849203VIN",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Vehicle Selling Price",
                text: "12780",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Discount Amount",
                text: "245000",
                inputType: "text",
                placeholder: "Enter Discount Amount",
                input: "text",
              },
              {
                title: "Vehicle Amount",
                text: "150000",
                inputType: "disabled",
                input: "text",
              },
            ],
          },
          // {
          //   title: "Po/SO Details",
          //   type: "gridContents",
          //   contents: [
          //     {
          //       title: "PO Date",
          //       text: "12 May 2023",
          //     },
          //     {
          //       title: "PO Status",
          //       text: "Status",
          //     },
          //     {
          //       title: "PO Number",
          //       text: "653728438213",
          //     },
          //     {
          //       title: "SO Date",
          //       text: "12 May 2013",
          //     },
          //     {
          //       title: "SO Date",
          //       text: "Status",
          //     },
          //     {
          //       title: "SO Number",
          //       text: "123122737328",
          //     },
          //   ],
          // },
          {
            title: "Tax Details",
            type: "gridTable",
            contents: [
              {
                tbody: [
                  {
                    textOne: "1",
                    textTwo: "CGST @18%",
                    textOne: "18%",
                    textOne: "90,0000",
                  },
                  {
                    textOne: "2",
                    textTwo: "CGST @18%",
                    textOne: "18%",
                    textOne: "80,0000",
                  },
                  {
                    textOne: "3",
                    textTwo: "CGST @18%",
                    textOne: "14%",
                    textOne: "50,0000",
                  },
                ],
              },
            ],
          },
          {
            title: "Optional Service",
            type: "gridTable",
            contents: [
              {
                headContent: [
                  {
                    text: "#",
                  },
                  {
                    text: "Description",
                  },
                  {
                    text: "Amount",
                  },
                ],
                bodyContent: [
                  {
                    one: "1",
                    two: "Registration Charges",
                    three: "90,000.00",
                  },
                  {
                    one: "2",
                    two: "Incidental Charges",
                    three: "80,000.00",
                  },
                  {
                    one: "3",
                    two: "INV5621547",
                    three: "90,000.00",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 3,
        name: "Scheme and Offer Details",
        title: "Company Address",
        type: "accordion",
        // default: "normalData",
        default: "accordionGridFlex",
        contents: [
          {
            title: "Scheme 1",
            type: "gridContents",
            contents: [
              {
                type: "gridContents",
                contents: [
                  {
                    title: "Scheme Type",
                    text: "Type Data",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Scheme Category",
                    text: "Scheme Category",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Total Amount",
                    text: "25900",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Valid From",
                    text: "12 Jan 2022",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Valid To",
                    text: "12 Jan 2022",
                    inputType: "disabled",
                    input: "text",
                  },
                ],
              },
              {
                type: "flexColumnData",
                contents: [
                  {
                    title: "Description",
                    text: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts",
                    // VIPDealerChecked: true,
                    inputType: "disabled",
                    input: "textarea",
                    placeholder: "Enter description",
                  },
                ],
              },
            ],
          },
          {
            title: "Scheme 2",
            type: "gridContents",
            contents: [
              {
                type: "gridContents",
                contents: [
                  {
                    title: "Scheme Type",
                    text: "Type Data",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Scheme Category",
                    text: "Scheme Category",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Total Amount",
                    text: "25900",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Valid From",
                    text: "12 Jan 2022",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Valid To",
                    text: "12 Jan 2022",
                    inputType: "disabled",
                    input: "text",
                  },
                ],
              },
              {
                type: "flexColumnData",
                contents: [
                  {
                    title: "Description",
                    text: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts",
                    // VIPDealerChecked: true,
                    inputType: "disabled",
                    input: "textarea",
                    placeholder: "Enter description",
                  },
                ],
              },
            ],
          },
          {
            title: "Scheme 3",
            type: "gridContents",
            contents: [
              {
                type: "gridContents",
                contents: [
                  {
                    title: "Scheme Type",
                    text: "Type Data",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Scheme Category",
                    text: "Scheme Category",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Total Amount",
                    text: "25900",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Valid From",
                    text: "12 Jan 2022",
                    inputType: "disabled",
                    input: "text",
                  },
                  {
                    title: "Valid To",
                    text: "12 Jan 2022",
                    inputType: "disabled",
                    input: "text",
                  },
                ],
              },
              {
                type: "flexColumnData",
                contents: [
                  {
                    title: "Description",
                    text: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts",
                    // VIPDealerChecked: true,
                    inputType: "disabled",
                    input: "textarea",
                    placeholder: "Enter description",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 4,
        name: "Insurance Details",
        type: "gridContents",
        contents: [
          {
            title: "Insurance company",
            text: "TATA AIG",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Insurance Cover Note",
            text: "Whole cover",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Insurance Amount",
            text: "25876",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Date",
            text: "12 Jan 2022",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Registration Number",
            text: `UP16BL2094`,
            inputType: "disabled",
            input: "text",
          },
        ],
      },
      {
        key: 5,
        name: "Finance Details",
        type: "gridContents",
        contents: [
          {
            title: "Financier",
            text: "HDFC",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "HDFC",
              },
              {
                name: "ICICI",
              },
              {
                name: "SBI",
              },
            ],
          },
          {
            title: "Branch",
            text: "Noida",
            inputType: "text",
            placeholder: "Enter branch name",
            input: "text",
          },
          {
            title: "File Number",
            text: "FA123214532",
            inputType: "text",
            placeholder: "Enter file name",
            input: "text",
          },
          {
            title: "Loan Amount",
            text: "1500000",
            inputType: "text",
            placeholder: "Enter loan amount",
            input: "text",
          },
          {
            title: "EMI",
            text: `60`,
            inputType: "text",
            placeholder: "Enter emi",
            input: "text",
          },
          {
            title: "Finance Done",
            text: "Yes",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "Yes",
              },
              {
                name: "No",
              },
            ],
          },
          {
            title: "D.O. Received",
            text: "Yes",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "Yes",
              },
              {
                name: "No",
              },
            ],
          },
          {
            title: "D.O. Number",
            text: "542367862487236",
            inputType: "text",
            placeholder: "Enter D.O. number",
            input: "text",
          },
          {
            title: "D.O. Date",
            text: "12 Nov 2023",
            inputType: "text",
            placeholder: "Enter D.O. date",
            input: "date",
          },
        ],
      },
      {
        key: 6,
        name: "Exchange Vehicle",
        type: "gridContents",
        contents: [
          {
            title: "Registration No.",
            text: "MO1085585",
            inputType: "text",
            placeholder: "Enter registration number",
            input: "text",
          },
          {
            title: "Customer Name",
            text: "Vimal Kumar",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Make",
            text: "Maruti Suzuki",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Modal Group",
            text: "Swift",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Variant",
            text: `Vdi`,
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Old Chassis Number",
            text: "MACF527736276",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Relationship",
            text: "Wife",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Month of Registration",
            text: "June",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Year of Registration",
            text: "2012",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Usage",
            text: "Private",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Scheme Name",
            text: "Scheme",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Scheme Amount",
            text: "25000",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "KM",
            text: "78354",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Customer Expected Price",
            text: "450000",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Procurement Price",
            text: "35000",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Hypothecated To",
            text: "ICICI",
            inputType: "disabled",
            input: "text",
          },
        ],
      },
      {
        key: 7,
        name: "Invoice Information",
        type: "accordionTable",
        default: "accordion",
        contents: [
          {
            type: "table",
            title: "Invoice Information",
            headContent: [
              {
                text: "#",
              },
              {
                text: "Invoice number",
              },
              {
                text: "Invoice date",
              },
              {
                text: "Invoice status",
              },
            ],
            bodyContent: [
              {
                one: "1",
                two: "INV5621545",
                three: "18 Aug 2023",
                four: "Status",
              },
              {
                one: "2",
                two: "INV5621546",
                three: "19 Aug 2023",
                four: "Status",
              },
              {
                one: "3",
                two: "INV5621547",
                three: "20 Aug 2023",
                four: "Status",
              },
            ],
          },

          {
            type: "table",
            title: "Delivery Information",
            headContent: [
              {
                text: "#",
              },
              {
                text: "Delivery Note Number",
              },
              {
                text: "Delivery Note date",
              },
              {
                text: "Delivery Note status",
              },
            ],
            bodyContent: [
              {
                one: "1",
                two: "DEL4321515231",
                three: "18 Aug 2023",
                four: "",
              },
              {
                one: "2",
                two: "DEL4321515232",
                three: "19 Aug 2023",
                four: "",
              },
              {
                one: "3",
                two: "DEL4321515233",
                three: "20 Aug 2023",
                four: "",
              },
            ],
          },
        ],
      },

      {
        key: 8,
        name: "Referrals",
        type: "gridContents",
        contents: [
          {
            title: "Referral ID",
            text: "Ref00615396",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Registration Number",
            text: "UP16BL2123",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Chassis Number",
            text: "MAFCL213214547",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Customer ID",
            text: "MO1085585",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Customer Type",
            text: `Individual`,
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Customer Name",
            text: "Vimal Kumar",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Mobile Number",
            text: "+91-9876543212",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Email ID",
            text: "vimalkumar@gmail.com",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Date of Birth",
            text: "04 Mar 1998",
            inputType: "disabled",
            input: "text",
          },
        ],
      },

      {
        key: 9,
        name: "Loyalty Scheme",
        type: "gridContents",
        contents: [
          {
            title: "Customer ID",
            text: "MO1085585",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Customer Name",
            text: "Vishal Kumar",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Make",
            text: "Maruti Suzuki",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Model Group",
            text: "Swift",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Variant",
            text: `Vdi`,
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Old Reg. Number",
            text: "UP13AB4325",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Old Chassis Number",
            text: "MACF527736276",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Date of Birth",
            text: "04 Mar 1998",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Relationship",
            text: "Wife",
            inputType: "disabled",
            input: "text",
          },

          {
            title: "Year of Registration",
            text: "2012",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Month of Registration",
            text: "June",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Usage",
            text: "Private",
            inputType: "disabled",
            input: "text",
          },

          {
            title: "Scheme Name",
            text: "Scheme",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Scheme Amount",
            text: "25000",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Remarks",
            text: "Good Condition",
            inputType: "disabled",
            input: "text",
          },
        ],
      },

      {
        key: 10,
        name: "Add-On Details",
        type: "accordionNTH",
        default: "accordion",
        contents: [
          {
            title: "Accessories Information",
            type: "accordion",
            contents: [
              {
                title: "Part Description | ALTD16554",
                text: "Required Quantity 12",
                type: "accordion",
                contents: [
                  {
                    type: "gridContents",
                    contents: [
                      {
                        title: "Mobile Number",
                        text: "9893473843",
                        inputType: "disabled",
                        input: "text",
                      },
                      {
                        title: "Customer ID",
                        text: "CFG4554564787",
                        inputType: "disabled",
                        input: "text",
                      },
                      {
                        title: "Customer Type",
                        text: "Individual",
                        inputType: "disabled",
                        input: "text",
                      },
                    ],
                  },
                ],
              },
              {
                title: "Part Description | ALTD16554",
                text: "Required Quantity 12",
                type: "gridContents",
                contents: [
                  {
                    type: "gridContents",
                    contents: [
                      {
                        title: "Mobile Number",
                        text: "+91-9893473843",
                        inputType: "disabled",
                        input: "text",
                      },
                      {
                        title: "Customer ID",
                        text: "CFG4554564787",
                        inputType: "disabled",
                        input: "text",
                      },
                      {
                        title: "Customer Type",
                        text: "Individual",
                        inputType: "disabled",
                        input: "text",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "Shield",
            type: "accordionInput",
            contents: [
              {
                label: "Shield",
                text: "Shield name",
                inputType: "disabled",
                input: "text",
              },
              {
                label: "Shield Rate",
                text: "Shield rate",
                inputType: "disabled",
                input: "text",
              },
            ],
          },
          {
            title: "AMC",
            type: "accordionInput",
            contents: [
              {
                label: "AMC",
                text: "AMC name",
                inputType: "disabled",
                input: "text",
              },
              {
                label: "AMC Rate",
                text: "340000",
                inputType: "disabled",
                input: "text",
              },
            ],
          },
          {
            title: "RSA",
            type: "accordionInput",
            contents: [
              {
                label: "RSA",
                text: "RSA name",
                inputType: "disabled",
                input: "text",
              },
              {
                label: "RSA Rate",
                text: "34000",
                inputType: "disabled",
                input: "text",
              },
            ],
          },
          {
            title: "FMS",
            type: "accordionInput",
            contents: [
              {
                label: "FMS",
                text: "FMS name",
                inputType: "disabled",
                input: "text",
              },
              {
                label: "FMS Rate",
                text: "34000",
                inputType: "disabled",
                input: "text",
              },
            ],
          },
        ],
      },
    ];
  }, [data]);

  useEffect(() => {
    if (!currentTabsTitle) {
      setCurrentTabsTitle(tabsList[0].name);
    } else {
      setCurrentTabsTitle(currentTabsTitle);
    }
  }, [currentTabsTitle, tabsList]);

  const handleDrawerRightSide = (ele) => {
    // console.log(ele);
    setRightSideDrawer(true);
    setCurrentTabsTitle(ele.name);
    setContentsType(ele.type);

    setTabsStatus(ele.key);
  };

  const handleTabsActiveNext = (value) => {
    if (typeof value === "number") {
      tabsList.map((value) => {
        if (tabsStatus + 1 === value.key) {
          setCurrentTabsTitle(value.name);
          setContentsType(value.type);
          setTabsStatus(value.key);
        }
      });
    } else {
      // setCurrentTabsTitle(value.name);
      // setContentsType(value.type);
      // setTabsStatus(value.key);
      // setRightSideDrawer(true);
      setCurrentTabsTitle(value.name);
      setContentsType(value.type);
      setTabsStatus(value.key);
    }
  };

  const handleTabsActiveBack = (value) => {
    if (typeof value === "number") {
      tabsList.map((value) => {
        if (tabsStatus - 1 === value.key) {
          setCurrentTabsTitle(value.name);
          setContentsType(value.type);
          setTabsStatus(value.key);
        }
      });
    }
  };

  // handleSubmitted
  const handleSubmitted = () => {
    console.log("Submitted");
    setFormDataSubmitted(true);
    setCurrentTabsTitle(thankyou.name);
    setTabsStatus(thankyou.key);
  };

  return (
    <>
      <div
        className="otfMobileTableDrawerContainer"
        style={{
          right: isDrawerOpen ? "0" : "-150%",
          backgroundColor: theme === "light" ? "#fff" : "#0B0B0C",
        }}
      >
        {/* header */}
        <div
          className="drawerTypeText"
          style={{
            backgroundColor: theme === "light" ? "#fff" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
        >
          <h3>{drawerType} Customer Details</h3>
          <span onClick={() => setIsDrawerOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.45505 3.95529C3.61777 3.79257 3.88158 3.79257 4.0443 3.95529L9.99967 9.91066L15.955 3.95529C16.1178 3.79257 16.3816 3.79257 16.5443 3.95529C16.707 4.11801 16.707 4.38183 16.5443 4.54455L10.5889 10.4999L16.5443 16.4553C16.707 16.618 16.707 16.8818 16.5443 17.0445C16.3816 17.2073 16.1178 17.2073 15.955 17.0445L9.99967 11.0892L4.0443 17.0445C3.88158 17.2073 3.61777 17.2073 3.45505 17.0445C3.29233 16.8818 3.29233 16.618 3.45505 16.4553L9.41042 10.4999L3.45505 4.54455C3.29233 4.38183 3.29233 4.11801 3.45505 3.95529Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </div>

        {/* data */}
        <div className="drawerData">
          {/* left side */}
          <div
            className="leftSide"
            style={{
              // backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              boxShadow:
                theme === "light"
                  ? "1px 0px 1px 0px rgba(0, 0, 0, 0.15)"
                  : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
            }}
          >
            {/* user profile */}
            <div
              className={`userProfile ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
              style={{
                border: `1px solid ${
                  theme === "light" ? "#B5B5B6" : "#545454"
                }`,
              }}
            >
              {/* user header section */}
              <div className="userImgNameId">
                {/* user images */}
                <div
                  className="userImg"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#545454",
                    border: `1px solid ${
                      theme === "light" ? "#B5B5B6" : "#545454"
                    }`,
                  }}
                >
                  {data.userImg ? (
                    <img src={data.userImg} alt={data.username} />
                  ) : (
                    <span
                      style={{
                        borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
                      }}
                    >
                      {firstLetter + "" + lastLetter}
                    </span>
                  )}
                </div>
                {/* user name and Id */}
                <div className="userName_id">
                  <h3>{data.two}</h3>
                  <p>C{data.one}</p>
                </div>
              </div>
              {/* divider */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                }}
              ></div>
              {/* customer types */}
              <div className="customerType">
                <p style={{ fontWeight: 500 }}>Customer Type:</p>
                <p
                  style={{
                    color: theme === "light" ? "black" : "white",
                    fontWeight: 400,
                  }}
                >
                  {/* {data.three} */}
                  Corporate
                </p>
              </div>

              {/* More data */}
              <p
                style={{
                  width: "100%",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Mobile no.:</span>
                <span style={{ fontWeight: 700 }}>
                  +91-9893473843
                  {/* {data.four} */}
                </span>
              </p>
            </div>
            {/* tabs steps */}
            <div
              className={`tabsSteps ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
            >
              {tabsList.map((ele, index) => (
                <div
                  key={index}
                  className={`tabsItems ${
                    theme === "light" ? "lightTheme" : "darkTheme"
                  }`}
                  onClick={() => {
                    //   setCurrentTabsTitle(ele.name);
                    //   setContentsType(ele.type);
                    // console.log(ele);
                    handleDrawerRightSide(ele);
                  }}
                  style={{
                    backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  }}
                >
                  {/* left side */}
                  <div
                    // onClick={() => {
                    //   setCurrentTabsTitle(ele.name);
                    //   setContentsType(ele.type);
                    // }}
                    className="tabsText"
                  >
                    <span
                      style={{
                        // color:
                        //   currentTabsTitle === ele.name
                        //     ? theme === "light"
                        //       ? "#0B0B0C"
                        //       : "#ffffff"
                        //     : "#858585",
                        fontWeight:
                          currentTabsTitle === ele.name ? "500" : "400",
                      }}
                      className={`${
                        theme === "light" ? "lightTheme" : "darkTheme"
                      }`}
                    >
                      {ele.name}
                    </span>
                  </div>

                  {/* right side view Icons */}
                  <span className="mobileViewIcons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.63523 2.65803C5.8241 2.45657 6.14052 2.44637 6.34197 2.63523L14.342 10.1352C14.4428 10.2298 14.5 10.3618 14.5 10.5C14.5 10.6382 14.4428 10.7702 14.342 10.8648L6.34197 18.3648C6.14052 18.5536 5.8241 18.5434 5.63523 18.342C5.44637 18.1405 5.45657 17.8241 5.65803 17.6352L13.2689 10.5L5.65803 3.36477C5.45657 3.17591 5.44637 2.85949 5.63523 2.65803Z"
                        fill="#FF3E5B"
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      {isDrawerOpen && (
        <div
          className="rightSideDrawer"
          style={{
            right: rightSideDrawer === true ? "0" : "-150%",
            backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
          }}
        >
          {/* contents */}
          <div
            className={`contents ${
              theme === "light" ? "lightTheme" : "darkTheme"
            }`}
          >
            {/* title text */}
            <h2
              style={{
                boxShadow:
                  theme === "light"
                    ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                    : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
                backgroundColor: theme === "light" ? "#FFFFFF" : "#0B0B0C",
              }}
            >
              <span
                onClick={() => {
                  formDataSubmitted === false && setRightSideDrawer(false);
                  formDataSubmitted === true && setIsDrawerOpen(false);
                }}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  left: 20,
                  top: 16,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3648 2.15803C14.1759 1.95657 13.8595 1.94637 13.658 2.13523L5.65803 9.63523C5.5572 9.72976 5.5 9.8618 5.5 10C5.5 10.1382 5.5572 10.2702 5.65803 10.3648L13.658 17.8648C13.8595 18.0536 14.1759 18.0434 14.3648 17.842C14.5536 17.6405 14.5434 17.3241 14.342 17.1352L6.73106 10L14.342 2.86477C14.5434 2.67591 14.5536 2.35949 14.3648 2.15803Z"
                    fill="#FF3E5B"
                  />
                </svg>
              </span>
              {currentTabsTitle}
            </h2>
            {/* right side contents */}
            <div className="rightSideContents">
              {/* user data details */}
              <div
                className="customerDetails"
                style={{
                  backgroundColor:
                    contentsType === "gridContents"
                      ? theme === "light"
                        ? "#F2F2F2"
                        : "#1C1C1C"
                      : "",
                  border:
                    contentsType === "gridContents"
                      ? `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`
                      : "",
                  padding: contentsType === "gridContents" ? "20px" : "",
                  borderRadius: 6,
                }}
              >
                {tabsList?.map((ele, index) => {
                  if (ele.name === currentTabsTitle) {
                    return (
                      <div
                        key={index}
                        className={`detailsContainer ${ele.type} ${ele.default}`}
                        style={{
                          paddingBottom: ele.type === "accordion" && 120,
                          paddingBottom: ele.default === "accordionTwo" && 0,
                          backgroundColor:
                            ele.default === "accordionTwo"
                              ? theme === "light"
                                ? "#F2F2F2"
                                : "#1C1C1C"
                              : "",
                        }}
                      >
                        {ele.type === "gridContents" &&
                          ele.contents.map((el, index) => {
                            return (
                              <GridContent
                                key={index}
                                data={el}
                                drawerType={drawerType}
                              />
                            );
                          })}

                        {ele.type === "accordion" &&
                          ele.contents.map((el, index) => {
                            return (
                              <Accordion
                                key={index}
                                addressType={el.addressType}
                                checked={el.checked}
                                id={index}
                                drawerType={drawerType}
                                indicator={indicator}
                                setIndicator={setIndicator}
                                data={el}
                                type={ele.default}
                                defaultType={el.default}
                              />
                            );
                          })}

                        {ele.type === "accordionTable" &&
                          ele.contents.map((el, index) => {
                            // console.log(el)
                            return (
                              <AccordionTable
                                type={el.type}
                                key={index}
                                data={el}
                                drawerType={drawerType}
                              />
                            );
                          })}

                        {ele.type === "accordionNTH" &&
                          ele.contents.map((el, index) => {
                            return (
                              <AccordionNTH
                                key={index}
                                data={el}
                                type={ele.default}
                                drawerType={drawerType}
                              />
                            );
                          })}
                      </div>
                    );
                  }
                })}
                {/* form data submitted */}
                {formDataSubmitted === true && (
                  <div className="thankYouContainer">
                    <div
                      className={`animations ${
                        theme === "light" ? "lightTheme" : "darkTheme"
                      }`}
                    >
                      {/* ${theme === "light" && "light"} */}
                      <span className={`checkIcons light `}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="62"
                          height="62"
                          viewBox="0 0 62 62"
                          fill="none"
                        >
                          <path
                            d="M31.0406 0.560547C14.2483 0.560547 0.564453 14.2444 0.564453 31.0367C0.564453 47.8291 14.2483 61.5129 31.0406 61.5129C47.833 61.5129 61.5168 47.8291 61.5168 31.0367C61.5168 14.2444 47.833 0.560547 31.0406 0.560547ZM45.6083 24.0272L28.3283 41.3072C27.9016 41.7339 27.3225 41.9777 26.713 41.9777C26.1035 41.9777 25.5245 41.7339 25.0978 41.3072L16.473 32.6824C15.5892 31.7986 15.5892 30.3358 16.473 29.452C17.3568 28.5682 18.8197 28.5682 19.7035 29.452L26.713 36.4615L42.3778 20.7967C43.2616 19.9129 44.7245 19.9129 45.6083 20.7967C46.4921 21.6805 46.4921 23.1129 45.6083 24.0272Z"
                            fill="#56AC18"
                          />
                        </svg>
                      </span>
                      <span className="fadeInOut"></span>
                    </div>
                    <h1>Booking Form updated successfully</h1>
                    <p
                      style={{
                        color: theme === "light" ? "#858585" : "#858585",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* footer side */}
          <div
            className="footerSide"
            style={{
              boxShadow:
                theme === "light"
                  ? "1px 0px 0px 1px rgba(0, 0, 0, 0.15)"
                  : "0px -1px 1px 0px rgba(255, 255, 255, 0.15)",
              backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
              marginLeft: theme === "light" ? "1px" : "0px",
            }}
          >
            {/* left close btn */}
            <button
              type="button"
              className="buttons"
              // style={{
              //   color: tabsStatus === 1 ? "rgba(255, 62, 91,0.5)" : "#FF3E5B",
              //   borderColor:
              //     tabsStatus === 1 ? "rgba(255, 62, 91,0.5)" : "#ff3e5b",
              //   cursor: tabsStatus === 1 ? "not-allowed" : "pointer",
              // }}
              // disabled={tabsStatus === 1}
              style={{
                color: tabsList === 1 ? "rgba(255, 62, 91,0.5)" : "#FF3E5B",
              }}
              onClick={() => {
                formDataSubmitted === false && handleTabsActiveBack(1);
                formDataSubmitted === true && setIsDrawerOpen(false);
              }}
            >
              {formDataSubmitted === false ? "Back" : "Close"}
            </button>
            {/* right side button */}
            {formDataSubmitted === false && (
              <div className="rightSideBtn">
                {/* <button
                type="button"
                className="buttons"
                style={{ color: "#FF3E5B" }}
                onClick={() =>
                  setDrawerType((prev) => {
                    if (prev === "edit") return "view";
                    if (prev === "view") return "edit";
                  })
                }
              >
                {drawerType === "edit" ? "View" : "Edit"}
              </button>
              <button
                type="button"
                className="buttons"
                style={{
                  color:
                    tabsList.length === tabsStatus
                      ? "rgba(255,255,255,0.6)"
                      : "#ffffff",
                  borderColor:
                    tabsList.length === tabsStatus
                      ? "rgba(255, 62, 91,0.5)"
                      : "#ff3e5b",
                  // cursor:
                  //   tabsList.length === tabsStatus ? "not-allowed" : "pointer",
                  backgroundColor:
                    tabsList.length === tabsStatus
                      ? "rgba(255, 62, 91,0.5)"
                      : "#FF3E5B",
                }}
                // disabled={tabsList.length === tabsStatus}
                onClick={() => handleTabsActiveNext(1)}
              >
                Next
              </button> */}
                {drawerType === "view" && (
                  <button
                    type="button"
                    className="buttons"
                    style={{ color: "#FF3E5B" }}
                    onClick={() =>
                      formDataSubmitted === false &&
                      setDrawerType((prev) => {
                        if (prev === "edit") return "view";
                        if (prev === "view") return "edit";
                      })
                    }
                  >
                    Edit
                  </button>
                )}

                {drawerType === "view" ? (
                  <button
                    type="button"
                    className="secondaryBtn buttons"
                    style={{
                      border: "1px solid",
                      borderColor:
                        tabsList.length === tabsStatus
                          ? "rgba(255, 62, 91,0.5)"
                          : "#ff3e5b",
                      display: tabsList.length - 1 === tabsStatus && "none",
                    }}
                    onClick={() => {
                      formDataSubmitted === false && handleTabsActiveNext(1);
                      tabsList.length === tabsStatus &&
                        drawerType === "edit" &&
                        handleSubmitted();
                    }}
                  >
                    {tabsList.length === tabsStatus ? "" : "Next"}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="secondaryBtn"
                    style={{
                      border: "1px solid",
                      borderColor:
                        tabsList.length === tabsStatus
                          ? "rgba(255, 62, 91,0.5)"
                          : "#ff3e5b",
                      // cursor:
                      //   tabsList.length === tabsStatus ? "not-allowed" : "pointer",
                    }}
                    onClick={() => {
                      formDataSubmitted === false && handleTabsActiveNext(1);
                      tabsList.length - 1 === tabsStatus && handleSubmitted();
                      // drawerType === "edit" &&
                      // handleSubmitted();
                    }}
                  >
                    {drawerType === "edit"
                      ? tabsList.length - 1 === tabsStatus
                        ? "Save"
                        : "Save & Next"
                      : "Next"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MobileViewDrawer;

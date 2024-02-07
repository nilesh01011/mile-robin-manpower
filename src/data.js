// Sidebar Menu Items =>
export const menuItems = [
  {
    key: 1,
    name: "Home",
    link: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.9743 8.67366L13.7383 3.59271C12.7754 2.80397 11.2186 2.80397 10.2648 3.58353L4.02872 8.67366C3.32683 9.24228 2.87689 10.4437 3.02987 11.3425L4.22669 18.643C4.44266 19.9453 5.66647 21 6.96228 21H17.0408C18.3276 21 19.5604 19.9361 19.7763 18.643L20.9732 11.3425C21.1171 10.4437 20.6672 9.24228 19.9743 8.67366ZM12.0015 15.2129C10.7597 15.2129 9.75186 14.1857 9.75186 12.92C9.75186 11.6544 10.7597 10.6272 12.0015 10.6272C13.2433 10.6272 14.2512 11.6544 14.2512 12.92C14.2512 14.1857 13.2433 15.2129 12.0015 15.2129Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 2,
    name: "Mile/HR",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20.7728 10.1917L18.9003 9.8483C18.7728 9.43569 18.6011 9.03139 18.3933 8.64092L19.4847 7.0763C19.5595 6.96556 19.5484 6.81601 19.4515 6.72183L17.2742 4.55076C17.18 4.45662 17.0304 4.44276 16.9197 4.52031L15.3545 5.60582C14.9751 5.4009 14.5706 5.23479 14.1467 5.10461L13.806 3.2271C13.7811 3.09418 13.6675 3 13.5346 3H10.4654C10.3324 3 10.216 3.09418 10.1939 3.2271L9.85041 5.10461C9.42935 5.23479 9.02493 5.4009 8.64263 5.60582L7.07201 4.52031C6.96116 4.44276 6.81157 4.45662 6.71743 4.55077L4.55121 6.72183C4.457 6.81878 4.44598 6.96556 4.5207 7.0763L5.60662 8.64092C5.39609 9.03139 5.22716 9.43569 5.09968 9.8483L3.2271 10.1917C3.09691 10.2139 3 10.3301 3 10.4631V13.5286C3 13.6643 3.09691 13.7778 3.2271 13.8028L5.09968 14.1434C5.22716 14.556 5.39609 14.9603 5.60662 15.3563L4.5207 16.9237C4.44597 17.0317 4.457 17.1812 4.55398 17.2754L6.71743 19.4409C6.81157 19.5351 6.96116 19.5489 7.07201 19.4714L8.63708 18.3859C9.03318 18.5963 9.44044 18.768 9.85041 18.8926L10.1939 20.7729C10.216 20.9031 10.3324 21 10.4654 21H13.5346C13.6675 21 13.7811 20.9031 13.806 20.7729L14.1467 18.8926C14.5596 18.768 14.964 18.5963 15.3601 18.3859L16.9197 19.4714C17.0304 19.5489 17.18 19.5351 17.2742 19.4409L19.4515 17.2754C19.5484 17.1812 19.5595 17.0317 19.4847 16.9209L18.3905 15.3563C18.6011 14.9603 18.7728 14.556 18.8975 14.1434L20.7728 13.8028C20.903 13.7778 21 13.6643 21 13.5286V10.4631C21 10.3301 20.903 10.2139 20.7728 10.1917ZM11.9999 17.1064C9.17723 17.1064 6.89192 14.8191 6.89192 12C6.89192 9.17817 9.17723 6.89356 11.9999 6.89356C14.8199 6.89356 17.108 9.17817 17.108 12C17.108 14.8191 14.8199 17.1064 11.9999 17.1064Z"
          fill="currentColor"
        />
        <path
          d="M10.4849 10.2719C10.4849 9.48538 11.1247 8.8457 11.9114 8.8457C12.6981 8.8457 13.338 9.48538 13.338 10.2719C13.338 11.05 12.7147 11.9528 11.9114 11.9528C11.1081 11.9528 10.4849 11.05 10.4849 10.2719Z"
          fill="currentColor"
        />
        <path
          d="M14.6509 14.8218C14.6509 14.8966 14.5872 14.9603 14.5124 14.9603C14.5096 14.9603 14.5069 14.9603 14.5069 14.9603H9.493C9.41543 14.9603 9.35449 14.8966 9.35449 14.8218C9.35449 13.4649 10.457 12.3628 11.8143 12.3628H12.1855C13.529 12.3628 14.6232 13.4455 14.6425 14.7803C14.6481 14.7942 14.6509 14.808 14.6509 14.8218Z"
          fill="currentColor"
        />
      </svg>
    ),
    isFolder: true,
    items: [
      {
        name: "Employee Management",
        key: 2.1,
        link: "/mile-hr/employee-management",
      },
      {
        name: "Reports",
        key: 2.2,
        isFolder: true,
        items: [
          {
            name: "Reports 1",
            key: "2.2.1",
            link: "/mile-hr/reports/reports-1",
          },
          {
            name: "Reports 2",
            key: "2.2.2",
            link: "/mile-hr/reports/reports-2",
          },
        ],
      },
      {
        name: "Training Management",
        key: 2.3,
        isFolder: true,
        items: [
          {
            name: "Training Management 1",
            key: "2.3.1",
            link: "/mile-hr/training-management/training-management-1",
          },
          {
            name: "Training Management 2",
            key: "2.3.2",
            link: "/mile-hr/training-management/training-management-1",
          },
        ],
      },
      {
        name: "Masters",
        key: 2.4,
        isFolder: true,
        items: [
          {
            name: "Masters 1",
            key: "2.4.1",
            link: "/mile-hr/masters/masters-1",
          },
          {
            name: "Masters 2",
            key: "2.4.2",
            link: "/mile-hr/masters/masters-2",
          },
        ],
      },
    ],
  },
];

// search items
export const searchItems = [
  {
    name: "Home",
    link: "/home",
  },
  // Favourites
  {
    name: "Employee Management",
    link: "/mile-hr/employee-management",
  },
  {
    name: "Reports 1",
    link: "/mile-hr/reports/reports-1",
  },
  // HR Mile
  {
    name: "Reports 2",
    link: "/mile-hr/reports/reports-2",
  },
  {
    name: "Training Management 1",
    link: "/mile-hr/training-management/training-management-1",
  },
  {
    name: "Training Management 2",
    link: "/mile-hr/training-management/training-management-2",
  },
  {
    name: "Masters 1",
    link: "/mile-hr/masters/masters-1",
  },
  {
    name: "Masters 2",
    link: "/mile-hr/masters/masters-2",
  },
];

// Notifications
export const notification = [
  {
    key: 1,
    title: "Inbox",
    items: [
      {
        key: 1.1,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: 1.2,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: false,
      },
      {
        key: 1.3,
        title:
          "Delivery Note Details Need To Be Approval and Forward To Next Process.",
        text: "The Delivery Note contains the list of Items that are sent in the shipment and updates that inventory details. The Delivery Note is an optional step and a Sales Invoice.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: 1.4,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 1.5,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 1.6,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: false,
      },
      {
        key: 1.7,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: 1.8,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: false,
      },
      {
        key: 1.9,
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
    ],
  },
  {
    key: 2,
    title: "Archive",
    items: [
      {
        key: "2.1",
        title: "Vehicle Tracking Details Will Be Updated Archive.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: false,
      },
      {
        key: "2.2",
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: "2.3",
        title:
          "Delivery Note Details Need To Be Approval and Forward To Next Process.",
        text: "The Delivery Note contains the list of Items that are sent in the shipment and updates that inventory details. The Delivery Note is an optional step and a Sales Invoice.",
        master: "Application Master",
        date: "",
        time: "2 Min Ago",
        readMark: true,
      },
      {
        key: "2.4",
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: false,
      },
      {
        key: "2.5",
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: "2.6",
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: "2.7",
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: "2.8",
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: "2.9",
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
      {
        key: "2.10",
        title: "Vehicle Tracking Details Will Be Updated.",
        text: "Vehicle Tracking Details Will Be Updated.",
        master: "Application Master",
        date: "16 Apr 2023",
        time: "01:30 AM",
        readMark: true,
      },
    ],
  },
];

// Employee Management
export const tableHead = [
  {
    key: "1",
    label: "#",
  },
  {
    key: "2",
    label: "Emp. Code",
  },
  {
    key: "3",
    label: "Emp. Name",
  },
  {
    key: "4",
    label: "Business Name",
  },
  {
    key: "5",
    label: "Designation",
  },
  {
    key: "6",
    label: "Approval Status",
  },
  {
    key: "7",
    label: "Location",
  },
  {
    key: "8",
    label: "Emp. Status",
  },
  {
    key: "9",
    label: "Action",
  },
];

export const employeeManagementContent = [
  {
    id: 1,
    name: "Sales",
    data: [
      {
        key: "1",
        one: "13OU0376",
        two: "Prashant Kamble",
        three: "LMM",
        four: "Dealer Principle",
        five: "Pending for ASM Approval",
        six: "MALAD_SR",
        seven: true,
        eight: "",
      },
    ],
  },
  {
    id: 2,
    name: "Service",
    data: [
      {
        key: "1",
        one: "13OU0375",
        two: "Prashant Rane 2",
        three: "LMM",
        four: "Dealer Principle",
        five: "Pending for ASM Approval",
        six: "MALAD_SR",
        seven: true,
        eight: "",
      },
    ],
  },
  {
    id: 3,
    name: "Common",
    data: [
      {
        key: "1",
        one: "13OU0375",
        two: "Prashant Rane",
        three: "LMM",
        four: "Dealer Principle",
        five: "Pending for ASM Approval",
        six: "MALAD_SR",
        seven: true,
        eight: "",
      },
    ],
  },
];

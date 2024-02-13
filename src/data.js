import { AVATAR, AVATAR2, NEWSCARIMAGES, USERIMG } from "./assets";

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
    name: "Favourites",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.99333 4.52115C8.47218 3.53114 10.2114 3.00178 11.991 3C13.1737 2.99882 14.3449 3.23074 15.4379 3.6825C16.5309 4.13427 17.5241 4.79701 18.3608 5.63286C19.1975 6.4687 19.8612 7.46126 20.3141 8.55377C20.7669 9.64629 21 10.8173 21 12C21 13.7797 20.4724 15.5194 19.4839 16.9992C18.4953 18.479 17.0902 19.6326 15.4462 20.3141C13.8022 20.9955 11.9931 21.1743 10.2475 20.8277C8.50191 20.4812 6.89825 19.6249 5.63922 18.3671C4.38019 17.1094 3.52232 15.5066 3.17404 13.7613C2.82575 12.0161 3.0027 10.2068 3.68251 8.56208C4.36232 6.91739 5.51447 5.51116 6.99333 4.52115ZM12.0001 15.105L15.8071 17.4L14.7991 13.062L18.1561 10.155L13.7281 9.777L12.0001 5.7L10.2721 9.786L5.84414 10.164L9.20114 13.071L8.19314 17.4L12.0001 15.105Z"
          fill="currentColor"
        />
      </svg>
    ),
    isFolder: true,
    items: [
      {
        name: "Product Hierarchy Master",
        key: 2.1,
        // link: "/favourites/product-hierarchy-master",
      },
      {
        name: "Vehicle Allotment",
        key: 2.2,
        // link: "/favourites/vehicle-allotment",
      },
    ],
  },
  {
    key: 3,
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
        key: 3.1,
        link: "/mile-hr/employee-management",
      },
      {
        name: "Reports",
        key: 3.2,
        isFolder: true,
        items: [
          {
            name: "Reports 1",
            key: "3.2.1",
            link: "/mile-hr/reports/reports-1",
          },
          {
            name: "Reports 2",
            key: "3.2.2",
            link: "/mile-hr/reports/reports-2",
          },
        ],
      },
      {
        name: "Training Management",
        key: 3.3,
        isFolder: true,
        items: [
          {
            name: "Training Management 1",
            key: "3.3.1",
            link: "/mile-hr/training-management/training-management-1",
          },
          {
            name: "Training Management 2",
            key: "3.3.2",
            link: "/mile-hr/training-management/training-management-1",
          },
        ],
      },
      {
        name: "Masters",
        key: 3.4,
        isFolder: true,
        items: [
          {
            name: "Masters 1",
            key: "3.4.1",
            link: "/mile-hr/masters/masters-1",
          },
          {
            name: "Masters 2",
            key: "3.4.2",
            link: "/mile-hr/masters/masters-2",
          },
        ],
      },
    ],
  },
  {
    key: 4,
    name: "Sales",
    isFolder: true,
    items: [
      {
        name: "Vin Block Master",
        key: "4.1.1",
        // link: "/Sales/vin-block-master",
      },
      {
        name: "Order to Delivery",
        key: "4.1.2",
        isFolder: true,
        items: [
          {
            name: "Booking Form",
            key: "4.1.1",
            // link: "/sales/order-to-delivery/booking-form",
          },
          {
            name: "Delivery Note/Invoice Cancellation Request",
            key: "4.1.2",
            // link: "/sales/order-to-delivery/delivery-note-invoice-cancellation-request",
          },
          {
            name: "Delivery Note (Vehicles)",
            key: "4.1.3",
            // link: "/sales/order-to-delivery/delivery-note-vehicles",
          },
          {
            name: "Vehicles Allotment",
            key: "4.1.4",
            // link: "/sales/order-to-delivery/vehicles-allotment",
          },
        ],
      },

      {
        name: "Vehicle Price",
        key: "4.1.3",
        isFolder: true,
        items: [
          {
            name: "Vehicle Price Master",
            key: "4.1.1",
            // link: "/Sales/vehicle-price/vehicle-price-master",
          },
        ],
      },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.3725 4.27655C18.6272 4.45774 18.8187 4.71427 18.92 5.01001L21 11V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8947 20.2652 20 20 20H19C18.7348 20 18.4804 19.8947 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V18H6V19C6 19.2652 5.89464 19.5196 5.70711 19.7071C5.51957 19.8947 5.26522 20 5 20H4C3.73478 20 3.48043 19.8947 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V11L5.08 5.01001C5.18205 4.71476 5.37373 4.45873 5.6283 4.27767C5.88286 4.09661 6.18761 3.99954 6.5 4.00001H17.5C17.8126 3.99864 18.1178 4.09536 18.3725 4.27655ZM5.66665 14.7472C5.91333 14.9121 6.20333 15 6.50001 15C6.89783 15 7.27936 14.842 7.56067 14.5607C7.84197 14.2794 8.00001 13.8979 8.00001 13.5C8.00001 13.2034 7.91203 12.9133 7.74721 12.6667C7.58239 12.42 7.34812 12.2277 7.07403 12.1142C6.79994 12.0007 6.49834 11.971 6.20737 12.0288C5.9164 12.0867 5.64913 12.2296 5.43935 12.4394C5.22957 12.6491 5.08671 12.9164 5.02883 13.2074C4.97095 13.4984 5.00066 13.8 5.11419 14.0741C5.22772 14.3481 5.41998 14.5824 5.66665 14.7472ZM17.5 15C17.2033 15 16.9133 14.9121 16.6667 14.7472C16.42 14.5824 16.2277 14.3481 16.1142 14.0741C16.0007 13.8 15.971 13.4984 16.0288 13.2074C16.0867 12.9164 16.2296 12.6491 16.4394 12.4394C16.6491 12.2296 16.9164 12.0867 17.2074 12.0288C17.4983 11.971 17.7999 12.0007 18.074 12.1142C18.3481 12.2277 18.5824 12.42 18.7472 12.6667C18.912 12.9133 19 13.2034 19 13.5C19 13.8979 18.842 14.2794 18.5607 14.5607C18.2794 14.842 17.8978 15 17.5 15ZM6.50001 5.50002L5.00001 10H19L17.5 5.50002H6.50001Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    key: 5,
    name: "Financial Accounting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <mask id="path-1-inside-1_157_1055" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32386 20.0518 9.61305 21 12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89471 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987ZM11.0952 7.554H8.94844V6.6H15.2484V7.5468H13.5648C13.9081 7.9041 14.1262 8.4054 14.1892 9.1056H15.2484V10.0515H14.1759C14.0002 11.4672 13.0954 12.7794 11.2716 12.7956H10.5982L14.1042 17.4H12.4426L8.94844 12.7875V11.6022H11.144C12.0984 11.6022 12.7717 11.1009 12.9261 10.0515H8.94844V9.1056H12.9261C12.7647 8.0715 12.0559 7.554 11.0952 7.554Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32386 20.0518 9.61305 21 12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89471 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987ZM11.0952 7.554H8.94844V6.6H15.2484V7.5468H13.5648C13.9081 7.9041 14.1262 8.4054 14.1892 9.1056H15.2484V10.0515H14.1759C14.0002 11.4672 13.0954 12.7794 11.2716 12.7956H10.5982L14.1042 17.4H12.4426L8.94844 12.7875V11.6022H11.144C12.0984 11.6022 12.7717 11.1009 12.9261 10.0515H8.94844V9.1056H12.9261C12.7647 8.0715 12.0559 7.554 11.0952 7.554Z"
          fill="currentColor"
        />
        <path
          d="M4.51677 6.99987L3.6853 6.4443V6.4443L4.51677 6.99987ZM5.63604 18.364L4.92893 19.0711H4.92893L5.63604 18.364ZM17.0001 19.4832L17.5557 20.3147H17.5557L17.0001 19.4832ZM20.8271 10.2442L19.8463 10.4393L20.8271 10.2442ZM18.364 5.63604L17.6568 6.34315V6.34315L18.364 5.63604ZM13.7558 3.17294L13.9509 2.19215L13.7558 3.17294ZM8.55585 3.68509L8.93853 4.60897L8.55585 3.68509ZM8.94844 7.554H7.94844V8.554H8.94844V7.554ZM8.94844 6.6V5.6H7.94844V6.6H8.94844ZM15.2484 6.6H16.2484V5.6H15.2484V6.6ZM15.2484 7.5468V8.5468H16.2484V7.5468H15.2484ZM13.5648 7.5468V6.5468H11.2169L12.8437 8.23969L13.5648 7.5468ZM14.1892 9.1056L13.1933 9.19521L13.2752 10.1056H14.1892V9.1056ZM15.2484 9.1056H16.2484V8.1056H15.2484V9.1056ZM15.2484 10.0515V11.0515H16.2484V10.0515H15.2484ZM14.1759 10.0515V9.0515H13.2922L13.1835 9.9284L14.1759 10.0515ZM11.2716 12.7956V13.7956L11.2804 13.7956L11.2716 12.7956ZM10.5982 12.7956V11.7956H8.57992L9.80264 13.4014L10.5982 12.7956ZM14.1042 17.4V18.4H16.1225L14.8998 16.7942L14.1042 17.4ZM12.4426 17.4L11.6455 18.0038L11.9456 18.4H12.4426V17.4ZM8.94844 12.7875H7.94844V13.1235L8.15133 13.3913L8.94844 12.7875ZM8.94844 11.6022V10.6022H7.94844V11.6022H8.94844ZM12.9261 10.0515L13.9155 10.197L14.0839 9.0515H12.9261V10.0515ZM8.94844 10.0515H7.94844V11.0515H8.94844V10.0515ZM8.94844 9.1056V8.1056H7.94844V9.1056H8.94844ZM12.9261 9.1056V10.1056H14.0943L13.9141 8.95135L12.9261 9.1056ZM4 12C4 10.4178 4.46919 8.87103 5.34824 7.55544L3.6853 6.4443C2.58649 8.08879 2 10.0222 2 12H4ZM6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12H2C2 14.6522 3.05357 17.1957 4.92893 19.0711L6.34315 17.6569ZM12 20C9.87827 20 7.84344 19.1571 6.34314 17.6569L4.92893 19.0711C6.80429 20.9464 9.34783 22 12 22V20ZM16.4446 18.6518C15.129 19.5308 13.5822 20 12 20V22C13.9778 22 15.9112 21.4135 17.5557 20.3147L16.4446 18.6518ZM19.391 15.0615C18.7855 16.5233 17.7602 17.7727 16.4446 18.6518L17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8268L19.391 15.0615ZM19.8463 10.4393C20.155 11.9911 19.9965 13.5997 19.391 15.0615L21.2388 15.8268C21.9957 13.9996 22.1937 11.9889 21.8078 10.0491L19.8463 10.4393ZM17.6568 6.34315C18.7757 7.46197 19.5376 8.88743 19.8463 10.4393L21.8078 10.0491C21.422 8.10929 20.4696 6.32746 19.0711 4.92894L17.6568 6.34315ZM13.5607 4.15372C15.1126 4.4624 16.538 5.22433 17.6568 6.34315L19.0711 4.92894C17.6725 3.53041 15.8907 2.578 13.9509 2.19215L13.5607 4.15372ZM8.93853 4.60897C10.4003 4.00347 12.0089 3.84504 13.5607 4.15372L13.9509 2.19215C12.0111 1.8063 10.0004 2.00433 8.17316 2.76121L8.93853 4.60897ZM5.34824 7.55544C6.22729 6.23985 7.47672 5.21447 8.93853 4.60897L8.17316 2.76121C6.3459 3.51808 4.78412 4.79981 3.6853 6.4443L5.34824 7.55544ZM8.94844 8.554H11.0952V6.554H8.94844V8.554ZM7.94844 6.6V7.554H9.94844V6.6H7.94844ZM15.2484 5.6H8.94844V7.6H15.2484V5.6ZM16.2484 7.5468V6.6H14.2484V7.5468H16.2484ZM13.5648 8.5468H15.2484V6.5468H13.5648V8.5468ZM15.1852 9.01599C15.1071 8.14776 14.8231 7.41303 14.2858 6.85391L12.8437 8.23969C12.9931 8.39516 13.1454 8.66304 13.1933 9.19521L15.1852 9.01599ZM15.2484 8.1056H14.1892V10.1056H15.2484V8.1056ZM16.2484 10.0515V9.1056H14.2484V10.0515H16.2484ZM14.1759 11.0515H15.2484V9.0515H14.1759V11.0515ZM11.2804 13.7956C12.4536 13.7851 13.3998 13.3474 14.0708 12.6329C14.7231 11.9383 15.0606 11.0428 15.1683 10.1746L13.1835 9.9284C13.1155 10.4759 12.9128 10.9444 12.6128 11.2638C12.3315 11.5634 11.9133 11.7899 11.2627 11.7956L11.2804 13.7956ZM10.5982 13.7956H11.2716V11.7956H10.5982V13.7956ZM14.8998 16.7942L11.3939 12.1898L9.80264 13.4014L13.3086 18.0058L14.8998 16.7942ZM12.4426 18.4H14.1042V16.4H12.4426V18.4ZM8.15133 13.3913L11.6455 18.0038L13.2397 16.7962L9.74554 12.1837L8.15133 13.3913ZM7.94844 11.6022V12.7875H9.94844V11.6022H7.94844ZM11.144 10.6022H8.94844V12.6022H11.144V10.6022ZM11.9367 9.90598C11.8873 10.2419 11.7741 10.386 11.6938 10.453C11.6086 10.5242 11.4478 10.6022 11.144 10.6022V12.6022C11.7946 12.6022 12.4477 12.4295 12.9763 11.9877C13.5099 11.5418 13.8105 10.9105 13.9155 10.197L11.9367 9.90598ZM8.94844 11.0515H12.9261V9.0515H8.94844V11.0515ZM7.94844 9.1056V10.0515H9.94844V9.1056H7.94844ZM12.9261 8.1056H8.94844V10.1056H12.9261V8.1056ZM11.0952 8.554C11.3972 8.554 11.5761 8.63368 11.6787 8.71729C11.7748 8.79556 11.889 8.94555 11.9381 9.25984L13.9141 8.95135C13.8018 8.23155 13.4808 7.60574 12.942 7.16674C12.4097 6.73307 11.7538 6.554 11.0952 6.554V8.554Z"
          fill="transparent"
          mask="url(#path-1-inside-1_157_1055)"
        />
      </svg>
    ),
    isFolder: true,
    items: [
      {
        name: "GST Related",
        key: "5.1.1",
        isFolder: true,
        items: [
          {
            name: "GST-IRN Authentication",
            key: "5.1.1.1",
            // link: "/financial-accounting/gst-related/gst-irn-authentication",
          },
          {
            name: "GST-IRN Transaction",
            key: "5.1.1.2",
            // link: "/financial-accounting/gst-related/gst-irn-transaction",
          },
          {
            name: "GST Report (Dealer to Customer & MnM)",
            key: "5.1.1.3",
            // link: "/financial-accounting/gst-related/gst-report-dealer-to-customer-&-MnM",
          },
        ],
      },
      {
        name: "Dealer Ledger Balance",
        key: "5.1.2",
        // link: "/financial-accounting/dealer-ledger-balance",
      },
      {
        name: "Financial Reports",
        key: "5.1.3",
        isFolder: true,
        items: [
          {
            name: "Dealer Credit Balance",
            key: "5.1.1.1",
            // link: "/financial-accounting/financial-reports/dealer-credit-balance",
          },
          {
            name: "Customer Outstanding",
            key: "5.1.1.2",
            // link: "/financial-accounting/financial-reports/customer-outstanding",
          },
        ],
      },
      {
        name: "Vouchers",
        key: "5.1.4",
        isFolder: true,
        items: [
          {
            name: "Credit / Debit Note",
            key: "5.1.1.1",
            // link: "/financial-accounting/vouchers/credit-debit-note",
          },
        ],
      },
      {
        name: "Account, Tax & Charges Setup",
        key: "5.1.5",
        isFolder: true,
        items: [
          {
            key: "5.1.1.1",
            name: "Tax & Charges",
            link: "/financial-accounting/accout-tax-charges-setup/tax-charges",
          },
        ],
      },
    ],
  },
  {
    key: 6,
    name: "Admin",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M17 11C17.3351 11.0047 17.6694 11.0348 18 11.09V6.27L10.5 3L3 6.27V11.18C3.0057 13.4114 3.74204 15.5795 5.09644 17.3529C6.45084 19.1263 8.34876 20.4073 10.5 21C11.0491 20.8664 11.5848 20.6823 12.1 20.45C11.4651 19.5527 11.0893 18.498 11.0138 17.4014C10.9383 16.3048 11.166 15.2085 11.672 14.2327C12.178 13.2569 12.9427 12.4391 13.8825 11.8689C14.8222 11.2987 15.9008 10.9981 17 11Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 13C16.2088 13 15.4355 13.2346 14.7777 13.6741C14.1199 14.1136 13.6072 14.7383 13.3045 15.4692C13.0017 16.2001 12.9225 17.0044 13.0768 17.7803C13.2312 18.5563 13.6121 19.269 14.1715 19.8284C14.731 20.3878 15.4437 20.7688 16.2196 20.9231C16.9955 21.0775 17.7998 20.9982 18.5307 20.6955C19.2616 20.3927 19.8863 19.88 20.3259 19.2223C20.7654 18.5645 21 17.7911 21 17C21 15.9391 20.5785 14.9217 19.8284 14.1715C19.0783 13.4214 18.0608 13 17 13ZM16.9989 14.3798C17.2955 14.3811 17.5796 14.4996 17.7894 14.7093C17.9991 14.9191 18.1175 15.2032 18.1189 15.4998C18.116 15.796 17.9971 16.0792 17.7877 16.2886C17.5782 16.498 17.295 16.617 16.9989 16.6198C16.7027 16.617 16.4195 16.498 16.2101 16.2886C16.0006 16.0792 15.8817 15.796 15.8789 15.4998C15.8802 15.2032 15.9986 14.9191 16.2084 14.7093C16.4181 14.4996 16.7022 14.3811 16.9989 14.3798ZM15.7359 19.4403C16.126 19.6441 16.5596 19.7503 16.9997 19.7499C17.4398 19.7503 17.8735 19.6441 18.2636 19.4403C18.6537 19.2366 18.9886 18.9414 19.2397 18.5799C19.1897 17.8599 17.7297 17.4999 16.9997 17.4999C16.2697 17.4999 14.8097 17.8599 14.7597 18.5799C15.0109 18.9414 15.3458 19.2366 15.7359 19.4403Z"
          fill="currentColor"
        />
      </svg>
    ),
    isFolder: true,
    items: [
      {
        name: "Customer Master",
        key: 6.1,
        // link: "/admin/customer-master",
      },
      {
        name: "Admin 1.2",
        key: 6.2,
        // link: "/admin/admin-1-2",
      },
    ],
  },
  {
    key: 7,
    name: "Common",
    isFolder: true,
    items: [
      {
        key: 7.1,
        name: "Customer Related",
        // link: "/common/customer-related"
      },
      {
        key: 7.2,
        name: "Vehicle Related",
        // link: "/common/vehicle-related"
      },
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.75 12.75H18.75V13.5112C18.75 14.748 17.748 15.75 16.5112 15.75H16.4888C15.252 15.75 14.25 14.748 14.25 13.5112V12.75H12.75V15C12.75 15.414 12.414 15.75 12 15.75H10.5C10.086 15.75 9.75 16.086 9.75 16.5C9.75 16.914 10.086 17.25 10.5 17.25H12C12.414 17.25 12.75 17.586 12.75 18V21.75H19.5C20.7428 21.75 21.75 20.7428 21.75 19.5V12.75ZM2.25 12.75V19.5C2.25 20.7428 3.25725 21.75 4.5 21.75H11.25V18.75H10.5C9.25725 18.75 8.25 17.7428 8.25 16.5C8.25 15.2572 9.25725 14.25 10.5 14.25H11.25V12.75H9C8.586 12.75 8.25 12.414 8.25 12V10.4887C8.25 10.0807 7.91925 9.75 7.51125 9.75H7.48875C7.08075 9.75 6.75 10.0807 6.75 10.4887V12C6.75 12.414 6.414 12.75 6 12.75H2.25ZM12.75 2.25V5.25H13.5015C14.7435 5.25 15.75 6.2565 15.75 7.4985V7.5C15.75 8.74275 14.7428 9.75 13.5 9.75H12.75V11.25H15C15.414 11.25 15.75 11.586 15.75 12V13.5112C15.75 13.9192 16.0808 14.25 16.4888 14.25H16.5112C16.9192 14.25 17.25 13.9192 17.25 13.5112V12C17.25 11.586 17.586 11.25 18 11.25H21.75V4.5C21.75 3.25725 20.7428 2.25 19.5 2.25H12.75ZM11.25 2.25H4.5C3.25725 2.25 2.25 3.25725 2.25 4.5V11.25H5.25V10.4887C5.25 9.252 6.252 8.25 7.48875 8.25H7.51125C8.748 8.25 9.75 9.252 9.75 10.4887V11.25H11.25V9C11.25 8.586 11.586 8.25 12 8.25H13.5C13.914 8.25 14.25 7.914 14.25 7.5V7.4985C14.25 7.08525 13.9148 6.75 13.5015 6.75H12C11.586 6.75 11.25 6.414 11.25 6V2.25Z"
          fill="currentColor"
        />
      </svg>
    ),
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

// ============== Dashboard ===========
// Dashboard =>
// Carousel
export const keyHighlights = [
  {
    key: 1,
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing.",
    time: "5min ago",
  },
  {
    key: 2,
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing 2.",
    time: "10min ago",
  },
  {
    key: 3,
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing 3.",
    time: "15min ago",
  },
  {
    key: 4,
    link: "",
    description:
      "Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing 4.",
    time: "30min ago",
  },
];

// Recently Visited
export const recentlyVisited = [
  {
    name: "Employee Management",
    // link: "/admin/customer-master",
    link: "/mile-hr/employee-management",
  },
  {
    name: "Customer Master",
    // link: "/admin/customer-master",
    link: "/home",
  },
  {
    name: "Order Booking Form",
    // link: "/sales/order-to-delivery/booking-form",
    link: "/home",
  },
  {
    name: "Reciepts",
    link: "/home",
  },
  {
    name: "Vehicle Delivery Note",
    // link: "/sales/order-to-delivery/delivery-note-vehicles",
    link: "/home",
  },
  {
    name: "Product Hierarchy Master",
    link: "/home",
    // link:"/favourites/product-hierarchy-master",
  },
  {
    name: "GST Report Dealer To Customer & MnM",
    link: "/home",
    // link: "/financial-accounting/gst-related/gst-report-dealer-to-customer-&-MnM",
  },
  {
    name: "manage Dealers",
    link: "/home",
    // link:"/hr-mile/manage-dealers",
  },
  {
    name: "Vehicle Allotment",
    link: "/home",
    // link: "/favourites/vehicle-allotment",
  },
  {
    name: "Customer Related",
    link: "/home",
    // link:"/common/customer-related",
  },
  {
    name: "Stock Status Report",
    link: "/home",
    // link: "/reports/procurement-inventory-management-reports/stock-status-report",
  },
];

// Action Items
export const actionItems = [
  {
    id: 1,
    text: "Pending For Invoice Approval",
    count: 10,
    contents: [
      {
        id: "1.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.3",
        title: "Pending POs to be released",
        date: "4 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.4",
        title: "Pending POs to be released",
        date: "4 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.5",
        title: "Pending POs to be released",
        date: "5 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.6",
        title: "Pending POs to be released",
        date: "5 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.7",
        title: "Pending POs to be released",
        date: "6 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.8",
        title: "Pending POs to be released",
        date: "8 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.9",
        title: "Pending POs to be released",
        date: "12 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "1.10",
        title: "Pending POs to be released",
        date: "12 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 2,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 8,
    contents: [
      {
        id: "2.1",
        title: "Pending POs to be released",
        date: "1 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: " 2.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.3",
        title: "Pending POs to be released",
        date: "3 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.4",
        title: "Pending POs to be released",
        date: "3 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.5",
        title: "Pending POs to be released",
        date: "4 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.6",
        title: "Pending POs to be released",
        date: "8 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.7",
        title: "Pending POs to be released",
        date: "10 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "2.8",
        title: "Pending POs to be released",
        date: "12 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 3,
    text: "Pending For Invoice Approva",
    count: 4,
    contents: [
      {
        id: "3.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "3.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "3.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "3.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 4,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 5,
    contents: [
      {
        id: "4.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "4.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "4.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "4.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "4.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },

  {
    id: 5,
    text: "Pending For Invoice Approval",
    count: 12,
    contents: [
      {
        id: "5.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.6",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.7",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.8",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.9",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.10",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.11",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "5.12",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 6,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 8,
    contents: [
      {
        id: "6.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.6",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.7",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "6.8",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 7,
    text: "Pending For Invoice Approva",
    count: 7,
    contents: [
      {
        id: "7.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.6",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "7.7",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 8,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 5,
    contents: [
      {
        id: "8.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "8.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "8.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "8.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "8.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },

  {
    id: 9,
    text: "Pending For Invoice Approva",
    count: 7,
    contents: [
      {
        id: "9.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "9.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "9.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "9.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "9.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "9.6",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "9.7",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
  {
    id: 10,
    text: "Pending PO approval & SO created with Amount: 182207.23",
    count: 5,
    contents: [
      {
        id: "10.1",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "10.2",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "10.3",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "10.4",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
      {
        id: "10.5",
        title: "Pending POs to be released",
        date: "2 Min Ago",
        links: "#pendingLinks",
      },
    ],
  },
];

// Latest News
export const latestNews = [
  {
    id: 1,
    title: "Mahindra & Mahindra sells 36,205 SUVs in July 2023",
    desc: "Mahindra & Mahindra, the popular Indian car manufacturing brand...",
    date: "21 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 2,
    title: "Mahindra Sales in July hits highest mark as per TOI Survey",
    desc: "Mahindra & Mahindra is popularly known for their rugged luxury...",
    date: "21 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 3,
    title: "Mahindra Scorpio Sales Rise By Over 2-Folds",
    desc: "Greeting and welcoming the custom Mahindra & Mahindra...",
    date: "20 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 4,
    title: "Mahindra & Mahindra July auto sales up 18% YoY on Sales",
    desc: "Mahindra & Mahindra, the popular Indian car manufacturing brand...",
    date: "19 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 5,
    title: "Mahindra & Mahindra July auto sales up 18% YoY on Sales",
    desc: "Mahindra & Mahindra, the popular Indian car manufacturing brand...",
    date: "19 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 6,
    title: "Mahindra & Mahindra sells 36,205 SUVs in July 2023",
    desc: "Mahindra & Mahindra, the popular Indian car manufacturing brand...",
    date: "21 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
  {
    id: 7,
    title: "Mahindra Sales in July hits highest mark as per TOI Survey",
    desc: "Mahindra & Mahindra is popularly known for their rugged luxury...",
    date: "21 Jun 2023",
    newsTitle:
      "Mahindra records highest ever monthly sales in July 2023 led by  XUV700, Scorpio-N and Thar",
    newsText:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
    newsText1:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV.",
    newsImgSrc: NEWSCARIMAGES,
    newsText2:
      "Mahindra & Mahindra, the popular Indian car manufacturing brand, has recorded its highest ever sales in the month of July 2023. Mahindra & Mahindra is popularly known for their rugged luxury SUV’s such as XUV 700, Scorpio-N, Scorpio Classic, Thar and compact SUV’s such as XUV 300 and XUV 400 EV.",
  },
];

export const todayBirthday = [
  {
    id: 1,
    username: "Vimal Kumar Bhati",
    date: "21, July 2023 Wednesday",
    userImg: AVATAR,
  },
  {
    id: 2,
    username: "Aman Yadav",
    date: "21, July 2023 Wednesday",
    // userImg: "",
    userImg: USERIMG,
  },
];

export const upcomingBirthday = [
  {
    id: 1,
    username: "Arvind Kumar Singh",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
  {
    id: 2,
    username: "Shreya Yadav",
    date: "22, July 2023 Wednesday",
    userImg: AVATAR2,
  },
  {
    id: 3,
    username: "Rubina Sharma",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
  {
    id: 4,
    username: "Shally Gupta",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },

  {
    id: 5,
    username: "Arvind Kumar Singh",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
  {
    id: 6,
    username: "Shreya Yadav",
    date: "22, July 2023 Wednesday",
    userImg: AVATAR2,
  },
  {
    id: 7,
    username: "Rubina Sharma",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
  {
    id: 10,
    username: "Shally Gupta",
    date: "22, July 2023 Wednesday",
    userImg: "",
  },
];

// Graphs
export const retailBarGraphs = [
  {
    key: 1,
    count: 130,
    name: "scorpio-N",
    bgColor: "#264554",
  },
  {
    key: 2,
    count: 100,
    name: "XUV700",
    bgColor: "#299F91",
  },
  {
    key: 3,
    count: 60,
    name: "Thar",
    bgColor: "#EAC566",
  },
  {
    key: 4,
    count: 140,
    name: "XUV300",
    bgColor: "#F1A367",
  },
  {
    key: 5,
    count: 180,
    name: "marazzo",
    bgColor: "#E96E4F",
  },
  {
    key: 6,
    count: 120,
    name: "bolero neo",
    bgColor: "#5F6E37",
  },
  {
    key: 7,
    count: 90,
    name: "bolero",
    bgColor: "#283612",
  },
  {
    key: 8,
    count: 190,
    name: "scorpio classic",
    bgColor: "#BE6E24",
  },
  {
    key: 9,
    count: 60,
    name: "scorpio 1",
    bgColor: "#BB3E03",
  },
  {
    key: 10,
    count: 120,
    name: "xuv700 1",
    bgColor: "#BE7230",
  },
  {
    key: 11,
    count: 80,
    name: "thar 1",
    bgColor: "#AE2012",
  },
  {
    key: 12,
    count: 50,
    name: "xuv300 1",
    bgColor: "#9B2226",
  },
  {
    key: 13,
    count: 10,
    name: "marazzo 1",
    bgColor: "#E9B8A6",
  },
  {
    key: 13,
    count: 75,
    name: "bolero neo 1",
    bgColor: "#E9B8A6",
  },
  {
    key: 14,
    count: 120,
    name: "bolero 1",
    bgColor: "#34A195",
  },
  {
    key: 15,
    count: 50,
    name: "scorpio classic 1",
    bgColor: "#304E5C",
  },
];

export const billingBarGraphs = [
  {
    key: 1,
    count: 130,
    // count: 60,
    name: "scorpio",
    bgColor: "#264653",
  },
  {
    key: 2,
    count: 100,
    // count: 120,
    name: "XUV700",
    bgColor: "#2A9D8F",
  },
  {
    key: 3,
    count: 80,
    name: "Thar",
    bgColor: "#E9C46A",
  },
  {
    key: 4,
    count: 50,
    name: "XUV300",
    bgColor: "#F4A261",
  },
  {
    key: 5,
    count: 180,
    // count: 10,
    name: "marazzo",
    bgColor: "#E76F51",
  },
  {
    key: 6,
    count: 120,
    // count: 75,
    name: "bolero neo",
    bgColor: "#606C38",
  },
  {
    key: 7,
    count: 120,
    name: "bolero",
    bgColor: "#283612",
  },
  {
    key: 8,
    count: 190,
    // count: 50,
    name: "scorpio classic",
    bgColor: "#BC6C25",
  },
];

export const ibndstock = [
  {
    key: 1,
    count: 245,
    name: "0-15 Days",
    bgColor: "#264653",
  },
  {
    key: 2,
    count: 120,
    name: "16-30 Days",
    bgColor: "#2A9D8F",
  },
  {
    key: 3,
    count: 180,
    name: "31-60 Days",
    bgColor: "#E9C46A",
  },
];

// =============== HR - Mile =============
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
        employeeCode: "13OU0376",
        employeeName: "Sheldon Quigley",
        employeeBusinessName: "LMM",
        employeeDesignation: "Dealer Principle",
        employeeApprovalStatus: "Pending for ASM Approval",
        employeeLocation: "MALAD_SR",
        employeeStatus: true,
      },
    ],
  },
  {
    id: 2,
    name: "Service",
    data: [
      {
        employeeCode: "13OU0376",
        employeeName: "Terry Medhurst",
        employeeBusinessName: "LMM",
        employeeDesignation: "Dealer Principle",
        employeeApprovalStatus: "Pending for ASM Approval",
        employeeLocation: "MALAD_SR",
        employeeStatus: true,
      },
    ],
  },
  {
    id: 3,
    name: "Common",
    data: [
      {
        employeeCode: "13OU0376",
        employeeName: "Terry Bloom",
        employeeBusinessName: "LMM",
        employeeDesignation: "Dealer Principle",
        employeeApprovalStatus: "Pending for ASM Approval",
        employeeLocation: "MALAD_SR",
        employeeStatus: true,
      },
    ],
  },
];

// search results
export const mileTableData = [
  {
    employeeCode: "13OU0376",
    employeeName: "Sheldon Quigley",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terry Medhurst",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terry Bloom",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Bloom Medhurst",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Jeanne Medhurst",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "John Medhurst",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terry Medhursts",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terry Paul",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Jones Marcel",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Miles Cummerata",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terrill Hills",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Alison Reichert",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: false,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terry Medhurst",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: false,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terry Reichert",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Paul Medhurst",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "John Bloom",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Alison Paul",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terry Medhursts",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Miles Cummeratas",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: false,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Paul Reichert",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: false,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terry Hills",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: false,
  },

  {
    employeeCode: "13OU0376",
    employeeName: "John Paul",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "John Micheal",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Alison Reichert",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Terrill Hills",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Paul Deo",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: false,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Miles Cummerata",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Nilesh Rathod",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Jones Marcel",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: true,
  },
  {
    employeeCode: "13OU0376",
    employeeName: "Jeanne Bloom",
    employeeBusinessName: "LMM",
    employeeDesignation: "Dealer Principle",
    employeeApprovalStatus: "Pending for ASM Approval",
    employeeLocation: "MALAD_SR",
    employeeStatus: false,
  },
];

export const mileTableHead = [
  {
    label: "#",
  },
  {
    label: "Emp. Code",
  },
  {
    label: "Emp. Name",
  },
  {
    label: "Business Name",
  },
  {
    label: "Designation",
  },
  {
    label: "Approval Status",
  },
  {
    label: "Location",
  },
  {
    label: "Emp. Status",
  },
  {
    label: "Action",
  },
];

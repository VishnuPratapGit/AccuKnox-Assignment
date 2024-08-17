const data = {
  categories: [
    {
      id: "cspm-dashboard",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          text: "2 Total",
          flag: true, // Example flag value
        },
        {
          id: "cloud-risk-assessment",
          name: "Cloud Account Risk Assessment",
          text: "9659 Total",
          flag: true, // Example flag value
        },
        {
          id: "compliance-status",
          name: "Compliance Status",
          text: "78% Compliant",
          flag: true, // Example flag value
        },
        {
          id: "misconfigurations",
          name: "Misconfigurations",
          text: "135 Detected",
          flag: false, // Example flag value
        },
      ],
    },
    {
      id: "cwpp-dashboard",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "workload-security",
          name: "Workload Security",
          text: "15 Active Alerts",
          flag: true, // Example flag value
        },
        {
          id: "host-vulnerabilities",
          name: "Host Vulnerabilities",
          text: "32 Critical Issues",
          flag: false, // Example flag value
        },
        {
          id: "container-compliance",
          name: "Container Compliance",
          text: "85% Compliant",
          flag: true, // Example flag value
        },
      ],
    },
    {
      id: "images-dashboard",
      name: "Images Dashboard",
      widgets: [
        {
          id: "image-risk-assessment",
          name: "Image Risk Assessment",
          text: "1470 Total Vulnerabilities",
          flag: false, // Example flag value
        },
        {
          id: "image-security-issues",
          name: "Image Security Issues",
          text: "2 Total Images",
          flag: true, // Example flag value
        },
        {
          id: "scan-results",
          name: "Scan Results",
          text: "25 Images Scanned",
          flag: false, // Example flag value
        },
        {
          id: "vulnerability-severity",
          name: "Vulnerability Severity",
          text: "12 High, 8 Medium, 5 Low",
          flag: true, // Example flag value
        },
      ],
    },
    {
      id: "ticket-dashboard",
      name: "Ticket Dashboard",
      widgets: [
        {
          id: "open-tickets",
          name: "Open Tickets",
          text: "5 Open",
          flag: true, // Example flag value
        },
        {
          id: "closed-tickets",
          name: "Closed Tickets",
          text: "20 Closed",
          flag: false, // Example flag value
        },
        {
          id: "response-time",
          name: "Average Response Time",
          text: "2 Hours",
          flag: true, // Example flag value
        },
        {
          id: "escalated-tickets",
          name: "Escalated Tickets",
          text: "3 Escalated",
          flag: false, // Example flag value
        },
      ],
    },
  ],
};

export default data;

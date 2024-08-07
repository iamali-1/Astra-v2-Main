import { MdOutlineCreate, MdOutlineManageHistory } from "react-icons/md";
import { BsTicket } from "react-icons/bs";
import { PiChartLineUpLight } from "react-icons/pi";

import { MdCastForEducation } from "react-icons/md";
import { RiChatSmile2Line, RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineProject, AiOutlineShopping } from "react-icons/ai";
import { BiCube } from "react-icons/bi";

export const projects_data = [
  {
    slug: "lms",
    title: "LMS - Learning Management System",
    icon: <MdCastForEducation size={28} />,
    para1:
      "Managing any kind of learning platform without any digital aid can be extremely exhausting. To keep pace with the ever-evolving digital world, you need a robust LMS system that can help you efficiently manage all your task. ",
    para2:
      "Astra Analytica’s LMS is a ready-to-use system that can elevate and remold your learning platform instantly. With our system, you can easily access some of the most functional and convenient features out there. From organizing all the learning material to tracking the learner's progress and performance, our learning management system can handle your learning platform like no other.",

    features: [
      "Live classes",
      "Profiling",
      "Data visualizations",
      "Multiple dashboards",
      "Track all records",
      "Lessons",
      "Assets",
      "Folders",
      "Content Management",
    ],
    tech: [
      "NodeJs",
      "ReactJs",
      "NextJs",
      "NoSql",
      "ExpressJs",
      "MongoDB",
      "Ant Design",
    ],

    portfolio:
      "We are a leading provider of LMS services. We have successfully created over 2,300 LMSs for our clients, and 98% of our clients are happy with our services. Our LMSs are used by a wide range of organizations, including businesses, educational institutions, and government agencies. We offer a variety of features, including course management, content delivery, and reporting. We are committed to providing our clients with the best possible LMS services.",
  },
  {
    slug: "crm",
    title: "CRM - Customer Relationship Management ",
    icon: <MdOutlineManageHistory size={28} />,
    para1:
      "I am sure you will fully agree that customer relationships are the backbone of any successful business. The formula is simple, customer relationship management is directly proportional to your revenue generation. ",
    para2:
      "With Astra Analytica’s CRM readymade solution, you can easily elevate your customer relationship game hence improving your customer acquisition rate. It can perform your everyday tedious tasks pretty efficiently and with no room for any error. ",

    para3:
      "But you must be wondering why Astra Analytica. Well, it's because we can offer you a ready-to-implement CRM system that is fully packed with the most useful features, and that too at a very competitive price. We can also help you add more features and customize this system according to the unique needs of your business. Amazing right? ",

    features: [
      "Contact management",
      "Interaction tracking",
      "Reports and dashboards",
      "Sales analytics",
      "Lead management",
    ],

    tech: [
      "NodeJs",
      "ReactJs",
      "NextJs",
      "NoSql",
      "ExpressJs",
      "MongoDB",
      "Ant Design",
    ],
    portfolio:
      "We are a leading provider of CRM services. We have successfully implemented CRM systems for over 1,200 businesses, and 95% of our clients are happy with our services. Our CRM systems are used by a wide range of industries, including retail, healthcare, and manufacturing. We offer a variety of features, including lead management, sales tracking, and customer support. We are committed to providing our clients with the best possible CRM services.",
  },

  {
    slug: "ticketing-system",
    title: "TS -Ticketing System",
    icon: <BsTicket size={28} />,
    para1:
      "Ticketing systems have revolutionized many businesses and have multiplied their customer acquisition rate by many folds. A professional ticketing system can enhance your functionality and capabilities on so many levels, ultimately boosting your revenues.",
    para2:
      "Astra Analytica’s ticketing system is exclusively designed to achieve and maintain the highest customer service standards. Our TS is embedded with special features that help you in organizing larger volumes of data pretty swiftly allowing you to function seamlessly through modern multi-channel environments.",

    para3: "",
    features: [
      "Multi-channel accessibility",
      "Full customization",
      "Workflow automation",
      "Ticket categories and tags",
    ],

    tech: ["NodeJs", "ReactJs", "MySql", "ExpressJs", "SQL", "Ant Design"],
    portfolio:
      "We are a leading provider of TS - Ticketing System services. We have successfully implemented TS - Ticketing Systems for over 1,000 businesses, and 90% of our clients are happy with our services. Our TS - Ticketing Systems are used by a wide range of industries, including IT, healthcare, and manufacturing. We offer a variety of features, including ticket creation, assignment, and tracking. We are committed to providing our clients with the best possible TS - Ticketing System services.",
  },

  {
    slug: "pos",
    title: "POS - Point of Sales System",
    icon: <PiChartLineUpLight size={28} />,
    para1:
      "Tracking significant sale data is essential for any business but we know how tedious this task can be. This is where the efficiency of a professional POS can make a real difference. In POS system can streamline sales operations by automating many underlying processes. Hence, it saves you a ton of effort and time.",
    para2:
      "Astra Analytica had developed one of a kind ready-to-use POS system that helps in making your sales data more organized, accessible, and transparent. It improves your business’s productivity and leaves no room for errors that can lead to adverse consequences.",
    para3: "",
    features: [
      "Invoicing",
      "Inventory Management",
      "Customer Orders and Suppliers Orders Management",
      "Integrated Supplier Purchasing",
      "Consistent and Customizable Reports",
      "Multi-Store Management",
    ],
    tech: [
      "NodeJs",
      "ReactJs",
      "MySql",
      "ExpressJs",
      "Redux",
      "SQL",
      "Tailwind css",
    ],
    portfolio:
      "We are a leading provider of POS - Point of Sales System services. We have successfully implemented POS - Point of Sales Systems for over 1,500 businesses, and 92% of our clients are happy with our services. Our POS - Point of Sales Systems are used by a wide range of industries, including retail, restaurants, and hospitality. We offer a variety of features, including inventory management, customer loyalty, and payment processing. We are committed to providing our clients with the best possible POS - Point of Sales System services.",
  },
  {
    slug: "hrms",
    title: "HRMS - Human Resource Management System",
    icon: <RiUserSettingsLine size={28} />,
    para1:
      "Managing human resources effectively is crucial for the success of any organization. Astra Analytica’s HRMS offers a comprehensive solution to streamline your HR operations, automate processes, and enhance employee management.",
    para2:
      "With our ready-to-use HRMS, you can efficiently handle employee onboarding, attendance management, leave and time-off tracking, performance evaluations, and more. Our system provides a user-friendly interface and robust features to support your HR department's daily activities.",
    features: [
      "Employee database management",
      "Attendance and leave management",
      "Performance evaluation and goal tracking",
      "Employee self-service portal",
      "Recruitment and onboarding",
      "Training and development",
      "Payroll and benefits administration",
      "Analytics and reporting",
    ],
    tech: ["NodeJs", "ReactJs", "MongoDB", "ExpressJs", "Ant Design"],
    portfolio:
      "We are a leading provider of HRMS - Human Resource Management System services. We have successfully implemented HRMS - Human Resource Management Systems for over 1,000 businesses, and 93% of our clients are happy with our services. Our HRMS - Human Resource Management Systems are used by a wide range of industries, including retail, healthcare, and manufacturing. We offer a variety of features, including payroll management, benefits administration, employee data management, employee performance management, training, and competency tracking. We are committed to providing our clients with the best possible HRMS - Human Resource Management System services.",
  },

  {
    slug: "e-commerce-platform",
    title: "E-commerce Platform",
    icon: <AiOutlineShopping size={28} />,
    para1:
      "In today's digital age, having a robust e-commerce platform is essential for businesses to thrive online. Astra Analytica’s E-commerce Platform offers a feature-rich solution to help you create and manage your online store effectively.",
    para2:
      "With our platform, you can easily showcase your products, manage inventory, process orders, handle payments, and provide a seamless shopping experience to your customers. We integrate secure payment gateways and implement best practices to ensure the safety of transactions and protect customer data.",
    features: [
      "Product catalog and inventory management",
      "Shopping cart and checkout functionality",
      "Payment gateway integration",
      "Order management and fulfillment",
      "Customer reviews and ratings",
      "Discounts and promotions",
      "Analytics and reporting",
      "Responsive design for mobile and desktop",
    ],
    tech: ["NodeJs", "ReactJs", "MongoDB", "ExpressJs", "Ant Design"],
    portfolio:
      "We are a leading provider of HRMS - Human Resource Management System services. We have successfully implemented HRMS - Human Resource Management Systems for over 1,000 businesses, and 93% of our clients are happy with our services. Our HRMS - Human Resource Management Systems are used by a wide range of industries, including retail, healthcare, and manufacturing. We offer a variety of features, including payroll management, benefits administration, employee data management, employee performance management, training, and competency tracking. We are committed to providing our clients with the best possible HRMS - Human Resource Management System services.",
  },

  {
    slug: "project-management-tool",
    title: "Project Management Tool",
    icon: <AiOutlineProject size={28} />,
    para1:
      "Efficient project management is crucial for delivering successful outcomes and meeting deadlines. Astra Analytica’s Project Management Tool offers a comprehensive solution to plan, track, and collaborate on projects effectively.",
    para2:
      "With our tool, you can create and assign tasks, set milestones, track project progress, manage resources, and facilitate team communication. Our user-friendly interface and intuitive features empower project managers to streamline their workflows and deliver projects on time and within budget.",
    features: [
      "Task and milestone management",
      "Gantt chart visualization",
      "Team collaboration and communication",
      "Resource allocation and tracking",
      "Document sharing and version control",
      "Time tracking and productivity analysis",
      "Customizable project templates",
      "Integration with popular productivity tools",
    ],
    tech: ["NodeJs", "ReactJs", "MongoDB", "ExpressJs", "Ant Design"],
    portfolio: "",
  },

  {
    slug: "blogging-platform",
    title: "Blogging Platform",
    icon: <MdOutlineCreate size={28} />,
    para1:
      "Create and manage your own blogging platform with Astra Analytica’s feature-rich solution. Our platform allows users to create and publish blog posts, engage with readers through comments, and customize the design to reflect their personal brand.",
    para2:
      "With our easy-to-use interface and powerful backend, bloggers can focus on creating great content while our platform takes care of the technical aspects. Our platform also supports SEO optimization, social sharing, and integration with popular analytics tools.",
    features: [
      "Blog post creation and publishing",
      "Comments and discussions",
      "User profiles and subscriptions",
      "Customizable themes and layouts",
      "SEO optimization",
      "Social media integration",
      "Analytics and reporting",
      "Multi-author support",
    ],
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript"],
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    icon: <BiCube size={28} />,
    para1:
      "Efficiently track and manage your inventory with Astra Analytica’s Inventory Management System. Our system provides real-time visibility into stock levels, automates order management, and streamlines the entire inventory workflow.",
    para2:
      "With our system, you can easily create and update product listings, manage suppliers, generate purchase orders, track sales, and generate reports for informed decision-making. Our solution helps you optimize inventory levels, reduce stockouts, and improve overall operational efficiency.",
    features: [
      "Product catalog and SKU management",
      "Inventory tracking and stock alerts",
      "Purchase order management",
      "Sales order management",
      "Supplier management",
      "Barcode scanning and integration",
      "Reporting and analytics",
      "Integration with e-commerce platforms",
    ],
    tech: ["C#", ".NET", "SQL Server", "WPF", "MVVM"],
  },

  {
    slug: "chat-application",
    title: "Chat Application",
    icon: <RiChatSmile2Line size={28} />,
    para1:
      "Stay connected and communicate seamlessly with Astra Analytica’s Chat Application. Our application provides real-time messaging, group chats, and multimedia sharing features to facilitate instant communication between users.",
    para2:
      "With our intuitive interface and robust backend, users can exchange messages, create chat groups, share files, and even make voice or video calls. Our application supports end-to-end encryption to ensure the privacy and security of conversations.",
    features: [
      "Real-time messaging",
      "Group chats and channels",
      "Multimedia sharing (images, videos, files)",
      "Voice and video calls",
      "Emojis and stickers",
      "Push notifications",
      "User authentication and authorization",
      "End-to-end encryption",
    ],
    tech: ["JavaScript", "Node.js", "React", "MongoDB", "Socket.io"],
  },
];

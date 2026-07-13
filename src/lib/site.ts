import type { NavigationItem, Profile, SiteConfig } from "@/types/content";
import { isValidExternalUrl } from "@/lib/links";

export const profile: Profile = {
  name: "Pushpak Vootla",
  professionalTitle: "Azure Data Engineer",
  location: "Chennai, Tamil Nadu, India",
  shortLocation: "Chennai, India",
  email: "vootlapushpakwork2001@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/pushpakvootla",
  portfolioUrl: "https://pushpakvootla.cloud",
  resumeFile: "/resume/pushpak-vootla-resume.pdf",
  profileImage: null,
  brandLabel: "Azure Data Engineering",
  heroLabel: "Azure Data Engineer · Chennai, India",
  headline: "Building Reliable Data Pipelines and Lakehouse Platforms on Azure",
  introduction:
    "Azure Data Engineer with 3+ years of professional experience and hands-on experience building data pipelines using Azure Data Factory, Azure Databricks, PySpark, Delta Lake, ADLS Gen2 and Microsoft Fabric.",
  supportingIntroduction:
    "Focused on metadata-driven orchestration, data validation, operational visibility and dependable downstream data delivery.",
  availability: "Open to Azure Data Engineering opportunities.",
  about: [
    "I have more than three years of overall IT experience and am currently focused on Azure Data Engineering. My background includes working with production operations and developing hands-on projects using Microsoft Fabric, Azure Data Factory, Azure Databricks, PySpark and Delta Lake.",
    "My project work focuses on practical data engineering problems such as metadata-driven ingestion, incremental loading, schema validation, duplicate detection, quarantine handling and analytics-ready dataset preparation.",
    "I aim to build pipelines that are maintainable and operationally clear, with attention to monitoring, error handling, secure connectivity and safe rerun behaviour.",
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pushpakvootla" },
  ],
  experience: [
    {
      organisation: "Ensono",
      role: "Associate Data Engineer",
      location: "Chennai, India",
      startDate: "2023-01",
      endDate: null,
      dateLabel: "January 2023 — Present",
      employmentType: "Professional experience",
      summary: "Contributing in an enterprise technology environment with a current focus on Azure data engineering, pipeline implementation and operational reliability.",
      responsibilities: [
        "Contribute to metadata-driven Azure Data Factory orchestration for parameterised data-pipeline execution.",
        "Implement Azure Databricks and PySpark processing from ADLS Gen2 Landing storage into Raw Delta Lake tables.",
        "Validate runtime parameters, source paths, source files, schemas, row counts and quarter partitions before downstream processing.",
        "Integrate structured Databricks notebook results with Azure Data Factory so pipeline status reflects Raw-processing outcomes.",
        "Apply framework logging, watermark protection and rerun-safe controls to improve operational visibility and incremental-processing reliability.",
        "Support Delta Lake processing and Unity Catalog registration for governed downstream data access.",
        "Investigate pipeline failures and validate downstream data readiness before implementation handoff.",
        "Document pipeline behaviour, validation controls and operational procedures for technical handoff.",
      ],
      technologies: ["Azure Data Factory", "Azure Databricks", "PySpark", "Delta Lake", "ADLS Gen2", "Unity Catalog", "SQL", "Framework logging", "Watermark processing"],
      current: true,
    },
    {
      organisation: "StackRoute",
      role: "Trainee",
      location: "Bengaluru, India",
      startDate: "2022-03",
      endDate: "2022-09",
      dateLabel: "March 2022 — September 2022",
      employmentType: "Early-career training",
      summary: "Completed a Wipro-assigned Java Full Stack and AWS Cloud training programme with hands-on development exercises.",
      responsibilities: ["Worked with Java, JSP, Servlets, SQL and HTML.", "Developed backend and database fundamentals.", "Gained exposure to cloud deployment and application-development workflows.", "Used Git-based source-control practices."],
      technologies: ["Java", "JSP", "Servlets", "SQL", "HTML", "AWS", "Git"],
      current: false,
    },
    {
      organisation: "Wipro",
      role: "Project Trainee — Cloud and Application Development",
      location: "Chennai, India",
      startDate: "2022-02",
      endDate: "2022-09",
      dateLabel: "February 2022 — September 2022",
      employmentType: "Early-career project experience",
      summary: "Worked on an early-career application-development project involving Java, MySQL and AWS deployment services.",
      responsibilities: ["Developed a job-portal application using JSP, Servlets, MySQL and JDBC.", "Deployed the application using AWS Elastic Beanstalk.", "Used Amazon RDS for database hosting.", "Used CloudWatch for basic application monitoring.", "Used GitHub for source control and collaboration."],
      technologies: ["Java", "JSP", "Servlets", "MySQL", "JDBC", "AWS Elastic Beanstalk", "Amazon RDS", "CloudWatch", "GitHub"],
      current: false,
    },
  ],
  education: [
    {
      institution: "Hindustan University",
      qualification: "Bachelor of Technology",
      field: "Mechanical Engineering",
      startDate: "2018-05",
      endDate: "2022-05",
      dateLabel: "May 2018 — May 2022",
      note: "Transitioned from engineering studies into software, cloud and data engineering through technical training and hands-on project work.",
    },
  ],
  certifications: [
    { id: "microsoft-azure-data-fundamentals", name: "Microsoft Certified: Azure Data Fundamentals", issuer: "Microsoft", credentialUrl: null, credentialId: null, status: "Completed" },
    { id: "microsoft-azure-ai-fundamentals", name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", credentialUrl: null, credentialId: null, status: "Completed" },
    { id: "aws-data-engineer-associate", name: "AWS Certified Data Engineer — Associate", issuer: "Amazon Web Services", credentialUrl: null, credentialId: null, status: "Completed" },
    { id: "atlassian-jira-fundamentals", name: "Jira Fundamentals Badge", issuer: "Atlassian", credentialUrl: null, credentialId: null, status: "Completed" },
  ],
};

export const navigationLinks: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? null;

export const siteConfig: SiteConfig = {
  siteName: "Pushpak Vootla Portfolio",
  siteTitle: "Pushpak Vootla | Azure Data Engineer",
  siteDescription: "Azure Data Engineering portfolio featuring hands-on projects across Azure Data Factory, Azure Databricks, Microsoft Fabric, PySpark, Delta Lake, ADLS Gen2 and production-oriented data pipeline patterns.",
  siteUrl: isValidExternalUrl(configuredSiteUrl) ? configuredSiteUrl : null,
  locale: "en_IN",
  author: profile.name,
  professionalTitle: profile.professionalTitle,
  email: profile.email,
  location: profile.location,
  linkedinUrl: profile.linkedinUrl,
  resumeFile: profile.resumeFile,
  profileImage: profile.profileImage,
  socialImage: null,
};

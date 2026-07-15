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
  profileImage: "/images/profile/pushpak-vootla.webp",
  brandLabel: "Azure Data Engineering",
  heroLabel: "Azure Data Engineer · Chennai, India",
  headline: "Building Reliable Data Pipelines and Lakehouse Platforms on Azure",
  introduction:
    "Azure Data Engineer with 3+ years of professional experience and hands-on experience building data pipelines using Azure Data Factory, Azure Databricks, PySpark, Delta Lake, ADLS Gen2 and Microsoft Fabric.",
  supportingIntroduction:
    "Focused on metadata-driven orchestration, data validation, pipeline observability, issue resolution and dependable downstream data delivery.",
  availability: "Open to Azure Data Engineering opportunities.",
  about: [
    "I have more than three years of overall IT experience and am currently focused on Azure Data Engineering development. My background includes building and supporting data pipelines with Azure Data Factory, Azure Databricks, PySpark, Delta Lake and ADLS Gen2, alongside hands-on Microsoft Fabric projects.",
    "My project work focuses on practical data engineering problems such as metadata-driven ingestion, incremental loading, schema validation, duplicate detection, quarantine handling and analytics-ready dataset preparation.",
    "I aim to build pipelines that are maintainable and supportable, with attention to observability, error handling, secure connectivity and safe rerun behaviour.",
  ],
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pushpakvootla" },
  ],
  experience: [
    {
      organisation: "Ensono Technologies LLP",
      role: "Associate Data Engineer",
      location: "Chennai, India",
      startDate: "2022-12",
      endDate: null,
      dateLabel: "December 2022 — Present",
      employmentType: "Professional experience",
      summary: "Developing and supporting Azure data pipelines and medallion lakehouse processing, with a focus on ingestion, validation, incremental loading, issue investigation and reliable downstream data delivery.",
      responsibilities: [
        "Develop and enhance a Bronze-to-Silver-to-Gold medallion lakehouse using Azure Databricks, PySpark and Delta Lake for a mid-sized US e-commerce platform.",
        "Build metadata-driven Azure Data Factory pipelines that ingest data from SQL Server, REST APIs and SFTP into the ADLS Gen2 Bronze layer.",
        "Implement JSON configuration and control-table patterns for dynamic pipeline selection, parameterised execution and reusable source onboarding.",
        "Apply watermark-based incremental loading and rerun-safe controls so eligible changes are processed and state updates occur only after successful execution.",
        "Implement PySpark transformation and validation logic for trusted Silver and Gold datasets, with Delta Lake processing and Unity Catalog registration.",
        "Validate runtime parameters, source paths, files, schemas and row counts before data proceeds to downstream processing.",
        "Integrate structured Databricks notebook results and framework logging with Azure Data Factory so orchestration status reflects processing outcomes.",
        "Investigate pipeline issues, implement fixes, verify downstream data readiness and document pipeline behaviour for technical handoff.",
      ],
      technologies: ["Azure Data Factory", "Azure Databricks", "PySpark", "Delta Lake", "ADLS Gen2", "Unity Catalog", "SQL Server", "REST APIs", "SFTP", "JSON configuration", "Control tables", "Watermark processing", "Framework logging"],
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
      summary: "Completed a Wipro-assigned Java Full Stack and AWS Cloud training programme focused on application development fundamentals.",
      responsibilities: [
        "Developed hands-on web application projects using Java, JSP, Servlets, SQL and HTML.",
        "Applied server-side development, relational database and application-integration concepts through structured practical assignments.",
        "Practised AWS cloud deployment workflows and Git-based source-control fundamentals.",
      ],
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
      summary: "Completed an early-career application-development project covering Java web development, relational database integration and AWS deployment.",
      responsibilities: [
        "Developed and deployed a job portal application using Java, JSP, Servlets, JDBC and MySQL.",
        "Hosted the application on AWS Elastic Beanstalk, used Amazon Aurora on Amazon RDS for database management and monitored the deployment with Amazon CloudWatch.",
        "Managed source control and team collaboration through GitHub.",
      ],
      technologies: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "AWS Elastic Beanstalk", "Amazon Aurora", "Amazon RDS", "Amazon CloudWatch", "GitHub"],
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
    { id: "microsoft-azure-fundamentals", name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", credentialUrl: "https://www.credly.com/badges/bc330886-43b4-4b3d-ac7a-8a17d526d667", badgeImage: "/images/certifications/microsoft-azure-fundamentals.png", credentialId: null, status: "Completed" },
    { id: "microsoft-azure-data-fundamentals", name: "Microsoft Certified: Azure Data Fundamentals", issuer: "Microsoft", credentialUrl: "https://www.credly.com/badges/2963bd31-1acb-4194-96d9-aedd40d7546f", badgeImage: "/images/certifications/microsoft-azure-data-fundamentals.png", credentialId: null, status: "Completed" },
    { id: "aws-data-engineer-associate", name: "AWS Certified Data Engineer – Associate", issuer: "Amazon Web Services Training and Certification", credentialUrl: "https://www.credly.com/badges/798d6f63-784a-4945-8d7e-8dc0927acff3", badgeImage: "/images/certifications/aws-data-engineer-associate.png", credentialId: null, status: "Completed" },
    { id: "google-cloud-digital-leader", name: "Cloud Digital Leader Certification", issuer: "Google Cloud", credentialUrl: "https://www.credly.com/badges/5969dc65-eede-42fc-b259-5cd8b0ed5e3a", badgeImage: "/images/certifications/google-cloud-digital-leader.png", credentialId: null, status: "Completed" },
    { id: "aws-cloud-practitioner", name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services Training and Certification", credentialUrl: "https://www.credly.com/badges/d250efc7-d2bf-4fe3-9548-b54113fc45be", badgeImage: "/images/certifications/aws-cloud-practitioner.png", credentialId: null, status: "Completed" },
    { id: "microsoft-azure-ai-fundamentals", name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", credentialUrl: "https://learn.microsoft.com/en-us/users/vootlapushpak-5479/credentials/54c0fb6e1020cd53", badgeImage: "/images/certifications/microsoft-azure-ai-fundamentals.svg", credentialId: "54C0FB6E1020CD53", status: "Completed" },
    { id: "data-engineering-essentials", name: "Data Engineering Essentials", issuer: "Coursera", credentialUrl: "https://www.credly.com/badges/2b4142f2-c5dd-48ae-8e92-0648c749f7e2", badgeImage: "/images/certifications/data-engineering-essentials.png", credentialId: null, status: "Completed" },
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

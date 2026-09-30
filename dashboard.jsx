"use client";

import React, { useState, useEffect } from "react";
import "./dashboard.css";

/* =========================================================
   SVG ICON COMPONENT
========================================================= */
function Icon({ name, size = 18, color = "currentColor", className = "" }) {
  const props = {
    width: size,
    height: size,
    stroke: color,
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
  };

  switch (name) {
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="3" y="3" width="7" height="9" rx="1" />
          <rect x="14" y="3" width="7" height="5" rx="1" />
          <rect x="14" y="12" width="7" height="9" rx="1" />
          <rect x="3" y="16" width="7" height="5" rx="1" />
        </svg>
      );
    case "profile":
    case "user":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "opportunities":
    case "briefcase":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "applications":
    case "file-text":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );
    case "collaborations":
    case "users":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "interactions":
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "progress":
    case "bar-chart":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      );
    case "experience":
    case "award":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case "notifications":
    case "bell":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case "logout":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      );
    case "bookmark":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    case "close":
    case "x":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      );
    case "plus":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "video":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      );
    case "edit":
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}

/* =========================================================
   INITIAL SEED MOCK DATA
========================================================= */
const DEFAULT_USER = {
  fullName: "Dr. Sarah Jenkins",
  title: "Professor & Department Chair",
  email: "s.jenkins@stanford.edu",
  phone: "+1 (555) 234-5678",
  institutionName: "Stanford University",
  department: "Computer Science & Artificial Intelligence",
  designation: "Senior Professor",
  highestDegree: "Ph.D. in Computer Science (MIT)",
  experienceYears: "14 Years",
  researchYears: "12 Years",
  bio: "Senior faculty member specializing in Applied Deep Learning, Neural Network Architectures, and Autonomous Systems. Leading multi-institutional research in AI governance and industrial automation.",
  expertise: ["Artificial Intelligence", "Deep Learning", "Computer Vision", "Robotics", "MLOps"],
  skills: ["PyTorch", "TensorFlow", "Python", "CUDA", "System Architecture", "Curriculum Design", "Grant Writing"],
  qualifications: [
    { degree: "Ph.D. in Computer Science", institution: "MIT", year: "2012" },
    { degree: "M.S. in Electrical Engineering", institution: "Stanford University", year: "2008" },
    { degree: "B.S. in Computer Engineering", institution: "UC Berkeley", year: "2006" },
  ],
  experiences: [
    { title: "Department Chair & Professor", org: "Stanford University", period: "2019 - Present" },
    { title: "Associate Professor", org: "Stanford University", period: "2015 - 2019" },
    { title: "Senior AI Researcher", org: "Google DeepMind (Consultancy)", period: "2018 - 2021" },
  ],
  researchInterests: [
    "Transformer Models in Edge Robotics",
    "Explainable AI in Healthcare Diagnostics",
    "Self-Supervised Vision Models for Industrial Defect Detection",
  ],
  careerInterests: [
    "Faculty Internship",
    "Industrial Training",
    "FDP",
    "Mentorship",
    "Consultancy",
    "Research Projects",
    "Guest Lectures",
    "Workshops",
    "Industry Interaction"
  ],
  preferredSectors: ["Technology", "Healthcare", "Manufacturing", "Automotive"],
  preferredWorkMode: "Hybrid",
  preferredDuration: "3 - 6 Months",
  preferredLocation: "Silicon Valley / Remote",
  profileCompletion: 92,
};

const INITIAL_OPPORTUNITIES = [
  {
    id: "opp-1",
    title: "Senior Faculty Industry Residency - Autonomous Robotics",
    organization: "Tesla Autonomous Systems Lab",
    type: "Faculty Internship",
    category: "Faculty Internship",
    industry: "Automotive",
    requiredExpertise: "Computer Vision & Deep Learning",
    duration: "3 Months (Summer 2026)",
    location: "Palo Alto, CA (Hybrid)",
    workMode: "Hybrid",
    deadline: "2026-10-15",
    matchScore: 98,
    status: "Open",
    matchedAreas: ["Computer Vision", "Deep Learning", "Robotics", "MLOps"],
    description: "Immersive 12-week faculty residency focused on real-time neural network deployment for perception systems in autonomous vehicles.",
    objectives: "Bridge academic AI research with production-grade edge deployment pipelines.",
    responsibilities: [
      "Collaborate with perception engineers on sensor fusion models.",
      "Evaluate self-supervised vision models on massive real-world video streams.",
      "Co-author joint industry-academic whitepapers on neural optimization."
    ],
    benefits: ["Stipend ($14,000/mo)", "Equipment Grant ($10,000)", "IP Co-authorship", "Verified Faculty Certificate"],
  },
  {
    id: "opp-2",
    title: "Industrial AI Model Deployment FDP & Lab Setup",
    organization: "NVIDIA Academic Operations",
    type: "FDP",
    category: "FDP",
    industry: "Technology",
    requiredExpertise: "Artificial Intelligence & CUDA",
    duration: "4 Weeks",
    location: "Remote / Online",
    workMode: "Remote",
    deadline: "2026-09-30",
    matchScore: 95,
    status: "Open",
    matchedAreas: ["Artificial Intelligence", "MLOps", "CUDA"],
    description: "Exclusive Faculty Development Program designed to equip professors with GPU acceleration and LLM fine-tuning toolkits for university curriculum.",
    objectives: "Modernize university AI lab infrastructure with NVIDIA Omniverse & AI Enterprise software stacks.",
    responsibilities: [
      "Complete hands-on modules on TensorRT and Triton Inference Server.",
      "Formulate 2 course modules for departmental syllabus integration."
    ],
    benefits: ["NVIDIA Deep Learning Institute Certification", "NVIDIA Cloud Credits ($5,000)", "Curriculum Toolkit"],
  },
  {
    id: "opp-3",
    title: "Healthcare Diagnostics AI Research Collaboration",
    organization: "Siemens Healthineers AI Hub",
    type: "Research Projects",
    category: "Research",
    industry: "Healthcare",
    requiredExpertise: "Explainable AI & Medical Imaging",
    duration: "6 Months",
    location: "Boston, MA / Remote",
    workMode: "Hybrid",
    deadline: "2026-11-01",
    matchScore: 92,
    status: "Open",
    matchedAreas: ["Explainable AI", "Computer Vision", "Healthcare Diagnostics"],
    description: "Joint research project investigating multi-modal transformer architectures for early oncology screening in MRI imaging.",
    objectives: "Develop interpretable AI algorithms meeting FDA validation standards.",
    responsibilities: [
      "Design attention-map visualization techniques for radiologist validation.",
      "Lead student research assistants in data preprocessing."
    ],
    benefits: ["Research Funding ($45,000)", "Siemens Clinical Dataset Access", "Ph.D. Support"],
  },
  {
    id: "opp-4",
    title: "Enterprise MLOps Architecture Consultancy",
    organization: "Microsoft Cloud & AI Division",
    type: "Consultancy",
    category: "Consultancy",
    industry: "Technology",
    requiredExpertise: "MLOps & System Architecture",
    duration: "2 Months",
    location: "Redmond, WA / Remote",
    workMode: "Remote",
    deadline: "2026-10-05",
    matchScore: 89,
    status: "Open",
    matchedAreas: ["MLOps", "System Architecture", "Artificial Intelligence"],
    description: "Consulting role to evaluate model governance frameworks and automated compliance monitoring for Azure AI Services.",
    objectives: "Formulate best-practice frameworks for continuous AI monitoring in regulated industries.",
    benefits: ["Consulting Honorarium ($12,000)", "Microsoft Azure Credits"],
  },
  {
    id: "opp-5",
    title: "Executive Industry Mentorship in Generative AI",
    organization: "Amazon Web Services (AWS)",
    type: "Mentorship",
    category: "Mentorship",
    industry: "Technology",
    requiredExpertise: "Deep Learning & Generative Models",
    duration: "3 Months",
    location: "Seattle, WA (Remote)",
    workMode: "Remote",
    deadline: "2026-10-20",
    matchScore: 88,
    status: "Open",
    matchedAreas: ["Deep Learning", "Python", "Curriculum Design"],
    description: "Mentorship program pairing academic AI pioneers with AWS AI engineering leads to guide industry R&D teams.",
    objectives: "Transfer cutting-edge academic AI breakthroughs to production enterprise teams.",
    benefits: ["Mentorship Honorarium ($8,000)", "AWS Builder Credits"],
  },
  {
    id: "opp-6",
    title: "Guest Lecture Series: Future of Vision Transformers",
    organization: "Intel Labs R&D",
    type: "Guest Lectures",
    category: "Guest Lecture",
    industry: "Technology",
    requiredExpertise: "Computer Vision & Transformers",
    duration: "2 Weeks (3 Lectures)",
    location: "Santa Clara, CA / Virtual",
    workMode: "Hybrid",
    deadline: "2026-09-25",
    matchScore: 86,
    status: "Open",
    matchedAreas: ["Computer Vision", "Deep Learning"],
    description: "Invited speaker series for Intel AI engineering teams on the latest breakthroughs in multi-modal vision transformers.",
    objectives: "Inspire Intel hardware acceleration teams with software model evolution trends.",
    benefits: ["Speaker Fee ($4,000)", "Intel AI Hardware Dev Kit"],
  },
  {
    id: "opp-7",
    title: "Industrial Automation & Robotics Workshop Facilitator",
    organization: "Bosch Smart Manufacturing",
    type: "Workshops",
    category: "Workshop",
    industry: "Manufacturing",
    requiredExpertise: "Robotics & Defect Detection",
    duration: "3 Days",
    location: "Detroit, MI (On-site)",
    workMode: "On-site",
    deadline: "2026-10-10",
    matchScore: 84,
    status: "Open",
    matchedAreas: ["Robotics", "Computer Vision"],
    description: "Hands-on intensive workshop for Bosch plant automation engineers on computer vision defect detection.",
    objectives: "Train factory engineers on deploying lightweight vision algorithms on factory floor cameras.",
    benefits: ["Honorarium ($6,000)", "Travel & Hotel Covered"],
  },
  {
    id: "opp-8",
    title: "Academic-Industry Technology Round-table",
    organization: "Qualcomm Wireless & AI Institute",
    type: "Industry Interaction",
    category: "Industry Interaction",
    industry: "Technology",
    requiredExpertise: "Edge AI & Hardware Optimization",
    duration: "1 Day Event",
    location: "San Diego, CA",
    workMode: "On-site",
    deadline: "2026-10-01",
    matchScore: 82,
    status: "Open",
    matchedAreas: ["Artificial Intelligence", "System Architecture"],
    description: "Exclusive networking and roadmap alignment session bringing top CS faculty together with Qualcomm VP of R&D.",
    objectives: "Shape joint grant proposals and university lab equipment sponsorships for 2027.",
    benefits: ["All Expenses Paid Travel", "Qualcomm Grant Eligibility"],
  }
];

const INITIAL_APPLICATIONS = [
  {
    id: "app-101",
    opportunityId: "opp-1",
    title: "Senior Faculty Industry Residency - Autonomous Robotics",
    organization: "Tesla Autonomous Systems Lab",
    type: "Faculty Internship",
    appliedDate: "2026-09-02",
    status: "Shortlisted",
    progressStep: 3,
    progressPercent: 65,
    notes: "Technical interview scheduled with VP of Perception Systems.",
  },
  {
    id: "app-102",
    opportunityId: "opp-2",
    title: "Industrial AI Model Deployment FDP & Lab Setup",
    organization: "NVIDIA Academic Operations",
    type: "FDP",
    appliedDate: "2026-08-28",
    status: "Accepted",
    progressStep: 4,
    progressPercent: 85,
    notes: "Program onboarding kit received. Lab credits activated.",
  },
  {
    id: "app-103",
    opportunityId: "opp-3",
    title: "Healthcare Diagnostics AI Research Collaboration",
    organization: "Siemens Healthineers AI Hub",
    type: "Research Projects",
    appliedDate: "2026-08-15",
    status: "Under Review",
    progressStep: 2,
    progressPercent: 40,
    notes: "Proposal undergoing technical compliance verification.",
  }
];

const INITIAL_COLLABORATIONS = [
  {
    id: "collab-1",
    title: "NVIDIA AI Lab Modernization & Curriculum Partnership",
    organization: "NVIDIA Academic Operations",
    type: "Faculty Development Program (FDP)",
    startDate: "2026-09-01",
    endDate: "2026-10-30",
    progressPercent: 68,
    status: "Active",
    contactPerson: "Dr. Marcus Vance (Director, Academic Programs)",
    contactEmail: "mvance@nvidia.com",
    overview: "Co-developing modern Deep Learning lab modules using NVIDIA Omniverse & Triton Server for Stanford CS graduate courses.",
    objectives: [
      "Train 30 graduate TAs on PyTorch TensorRT inference.",
      "Publish open-source curriculum repository on GitHub.",
      "Integrate 4 hardware-accelerated lab assignments."
    ],
    upcomingActivities: [
      { date: "2026-09-15", title: "Lab Module 2 Technical Review" },
      { date: "2026-09-22", title: "Graduate Student Sandbox Workshop" },
    ],
    documents: [
      { name: "NVIDIA_Curriculum_Grant_Agreement.pdf", size: "1.4 MB" },
      { name: "Lab_Module_1_Draft_v2.docx", size: "840 KB" },
    ],
    recentUpdates: "Module 1 on TensorRT model quantization approved by NVIDIA peer review team."
  },
  {
    id: "collab-2",
    title: "Joint Medical Vision AI Research Initiative",
    organization: "Siemens Healthineers AI Hub",
    type: "Research Project",
    startDate: "2026-06-01",
    endDate: "2026-12-15",
    progressPercent: 75,
    status: "Active",
    contactPerson: "Elena Rostova (Lead Clinical Scientist)",
    contactEmail: "elena.rostova@siemens-healthineers.com",
    overview: "Developing explainable attention-map algorithms for early MRI oncology anomaly detection.",
    objectives: [
      "Train vision transformer on anonymized Siemens clinical MRI dataset.",
      "Achieve >94% validation accuracy on test cohort.",
      "Draft paper submission for IEEE Transactions on Medical Imaging."
    ],
    upcomingActivities: [
      { date: "2026-09-18", title: "Quarterly Clinical Progress Sync" },
      { date: "2026-10-05", title: "Draft Manuscript Review" },
    ],
    documents: [
      { name: "Siemens_IRB_Data_Sharing_Protocol.pdf", size: "3.2 MB" },
      { name: "Model_Validation_Results_Q2.pdf", size: "4.5 MB" },
    ],
    recentUpdates: "Achieved 95.2% accuracy on validation set. Model explainability layer integrated."
  }
];

const INITIAL_INTERACTIONS = [
  {
    id: "inter-1",
    title: "Tesla Perception Team Technical Sync",
    organization: "Tesla Autonomous Systems Lab",
    type: "Research Sync",
    date: "2026-09-12",
    time: "10:00 AM - 11:00 AM PST",
    participants: ["Dr. Sarah Jenkins", "Andrew Karpathy (Adjunct)", "Tesla Perception Engineering Lead"],
    status: "Confirmed",
    meetingUrl: "https://meet.skillnet.edu/tesla-residency-sync",
    notes: "Discuss sensor fusion architecture and summer residency timeline."
  },
  {
    id: "inter-2",
    title: "NVIDIA FDP Mid-Program Workshop",
    organization: "NVIDIA Academic Operations",
    type: "Workshop",
    date: "2026-09-18",
    time: "02:00 PM - 04:30 PM PST",
    participants: ["Dr. Sarah Jenkins", "NVIDIA DLI Instructors", "20 Participating CS Faculty"],
    status: "Scheduled",
    meetingUrl: "https://meet.skillnet.edu/nvidia-fdp-workshop",
    notes: "Live demo of Triton Inference Server multi-GPU container scaling."
  },
  {
    id: "inter-3",
    title: "Amazon AWS Executive Mentorship Sync",
    organization: "Amazon Web Services",
    type: "Mentoring Session",
    date: "2026-09-24",
    time: "11:00 AM - 12:00 PM PST",
    participants: ["Dr. Sarah Jenkins", "AWS Principal AI Scientist"],
    status: "Scheduled",
    meetingUrl: "https://meet.skillnet.edu/aws-mentorship",
    notes: "Discuss generative model deployment frameworks."
  }
];

const INITIAL_PROGRESS = {
  currentProgram: "NVIDIA AI Lab Modernization & Curriculum Partnership",
  organization: "NVIDIA Academic Operations",
  startDate: "2026-09-01",
  expectedCompletion: "2026-10-30",
  overallProgress: 68,
  stages: [
    { name: "Application & Selection", status: "Completed", date: "2026-08-28" },
    { name: "Onboarding & Access Setup", status: "Completed", date: "2026-09-01" },
    { name: "Curriculum & Lab Co-Design", status: "In Progress", date: "2026-09-15" },
    { name: "Industry Evaluation & Pilot", status: "Upcoming", date: "2026-10-05" },
    { name: "Final Certification & Verification", status: "Upcoming", date: "2026-10-30" },
  ],
  completedMilestones: [
    "GPU Cloud Sandbox Access Provisioned",
    "Module 1: TensorRT Model Acceleration Completed",
    "Faculty Syllabus Draft Approved by Department Chair"
  ],
  pendingMilestones: [
    "Module 2: Triton Server Multi-GPU Deployment Lab",
    "Student Pilot Evaluation Feedback Collection",
    "Final Faculty Completion Report Submission"
  ],
  industryFeedback: {
    overallScore: 4.9,
    professionalSkills: 5.0,
    domainSkills: 4.9,
    communication: 4.8,
    collaboration: 5.0,
    contribution: 4.9,
    comments: "Dr. Jenkins demonstrates world-class depth in deep learning. Her curriculum design is exceptionally rigorous and perfectly aligned with industry production standards."
  },
  reflections: [
    {
      date: "2026-09-05",
      text: "Successfully integrated PyTorch quantization techniques into Module 1. Hands-on GPU labs will directly benefit 180 graduate students."
    }
  ]
};

const INITIAL_CERTIFICATES = [
  {
    id: "cert-1",
    title: "Senior Industrial AI Research & Curriculum Leader",
    organization: "NVIDIA Deep Learning Institute",
    type: "Faculty Development Program (FDP)",
    issueDate: "2026-08-30",
    certificateId: "SKL-NV-2026-88491",
    skillsGained: ["TensorRT Optimization", "Triton Inference Server", "CUDA Acceleration", "Curriculum Design"],
    outcome: "Successfully authored 4 production-grade AI lab modules integrated into university accredited curriculum.",
    issuerLogo: "NVIDIA",
  },
  {
    id: "cert-2",
    title: "Executive Industry Mentorship Recognition",
    organization: "Google Cloud AI Academic Advisory",
    type: "Mentorship",
    issueDate: "2026-05-15",
    certificateId: "SKL-GC-2026-44102",
    skillsGained: ["Generative AI Governance", "Enterprise Architecture", "Faculty Mentorship"],
    outcome: "Provided 40+ hours of executive technical guidance to Google Cloud Machine Learning engineering managers.",
    issuerLogo: "Google Cloud",
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "Application Shortlisted!",
    message: "Your application for 'Senior Faculty Industry Residency' at Tesla has been shortlisted.",
    time: "2 hours ago",
    read: false,
    type: "success",
    link: "/academician/applications",
  },
  {
    id: "notif-2",
    title: "New 98% AI Opportunity Match",
    message: "Tesla Autonomous Systems Lab posted a new residency matching your PyTorch & Vision expertise.",
    time: "5 hours ago",
    read: false,
    type: "info",
    link: "/academician/opportunities",
  },
  {
    id: "notif-3",
    title: "Technical Sync Scheduled",
    message: "Tesla Perception Team scheduled a sync for Sept 12 at 10:00 AM PST.",
    time: "1 day ago",
    read: true,
    type: "calendar",
    link: "/academician/interactions",
  },
  {
    id: "notif-4",
    title: "Industry Feedback Published",
    message: "NVIDIA Academic Operations published your mid-program evaluation score (4.9 / 5.0).",
    time: "2 days ago",
    read: true,
    type: "award",
    link: "/academician/progress",
  }
];

const INITIAL_SETTINGS = {
  profileVisibility: "Public to Verified Industry Partners",
  emailAlerts: true,
  pushNotifications: true,
  aiMatchingSensitivity: "High (80%+ Match)",
  preferredWorkMode: "Hybrid & Remote",
  theme: "Light Workspace",
};

/* =========================================================
   MAIN UNIFIED DASHBOARD COMPONENT
========================================================= */
export default function AcademicianDashboard() {
  // ROUTING STATE (Synced with window.location.pathname)
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname || "/";
    }
    return "/";
  });

  // AUTH STATE (Saved in localStorage)
  const [auth, setAuth] = useState(() => {
    try {
      const stored = localStorage.getItem("skillnet_auth_session");
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return {
      isAuthenticated: false,
      role: null,
      user: null,
      isProfileComplete: true,
    };
  });

  // MODULE DATA STATE (Saved in localStorage)
  const [userProfile, setUserProfile] = useState(() => {
    try {
      const stored = localStorage.getItem("skillnet_profile");
      if (stored) return JSON.parse(stored);
    } catch (e) { console.error(e); }
    return DEFAULT_USER;
  });

  const [opportunities, setOpportunities] = useState(INITIAL_OPPORTUNITIES);
  const [savedOppIds, setSavedOppIds] = useState(["opp-1", "opp-3"]);
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [collaborations, setCollaborations] = useState(INITIAL_COLLABORATIONS);
  const [interactions, setInteractions] = useState(INITIAL_INTERACTIONS);
  const [progressData, setProgressData] = useState(INITIAL_PROGRESS);
  const [certificates, setCertificates] = useState(INITIAL_CERTIFICATES);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [settings, setSettings] = useState(INITIAL_SETTINGS);

  // UI STATE (Modals, Toasts, Drawer)
  const [toastMessage, setToastMessage] = useState(null);
  const [selectedOppForDetails, setSelectedOppForDetails] = useState(null);
  const [selectedOppForApply, setSelectedOppForApply] = useState(null);
  const [selectedCertForPreview, setSelectedCertForPreview] = useState(null);
  const [selectedCollabForDetails, setSelectedCollabForDetails] = useState(null);
  const [activeMeetingModal, setActiveMeetingModal] = useState(null);
  const [activeNotesModal, setActiveNotesModal] = useState(null);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showUpdateProgressModal, setShowUpdateProgressModal] = useState(false);
  const [showAddReflectionModal, setShowAddReflectionModal] = useState(false);

  // MARKETPLACE FILTERS STATE
  const [oppSearch, setOppSearch] = useState("");
  const [oppCategory, setOppCategory] = useState("All");
  const [oppIndustry, setOppIndustry] = useState("All");
  const [oppWorkMode, setOppWorkMode] = useState("All");
  const [oppSort, setOppSort] = useState("Match %");
  const [aiRecommendedOnly, setAiRecommendedOnly] = useState(false);

  // ONBOARDING WIZARD FORM STATE
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState({
    fullName: "",
    designation: "Assistant Professor",
    institutionName: "",
    department: "",
    highestDegree: "Ph.D. in Computer Science",
    experienceYears: "5 Years",
    bio: "",
    expertiseInput: "Machine Learning, Artificial Intelligence, Python",
    skillsInput: "PyTorch, TensorFlow, Data Science",
    researchInterestsInput: "Neural Networks, Vision Transformers",
    selectedCareerInterests: ["Faculty Internship", "Industrial Training", "FDP"],
    selectedSectors: ["Technology", "Healthcare"],
    preferredWorkMode: "Hybrid",
  });

  // LOGIN FORM STATE
  const [loginForm, setLoginForm] = useState({ email: "s.jenkins@stanford.edu", password: "password123", role: "academician" });
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    fullName: "Dr. Alex Mercer",
    email: "a.mercer@university.edu",
    institutionName: "State Technical Institute",
    department: "Computer Science",
    designation: "Associate Professor",
  });

  // LISTEN TO HISTORY POPSTATE
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // PERSIST AUTH IN LOCALSTORAGE
  useEffect(() => {
    try {
      localStorage.setItem("skillnet_auth_session", JSON.stringify(auth));
    } catch (e) { console.error(e); }
  }, [auth]);

  // PERSIST PROFILE IN LOCALSTORAGE
  useEffect(() => {
    try {
      localStorage.setItem("skillnet_profile", JSON.stringify(userProfile));
    } catch (e) { console.error(e); }
  }, [userProfile]);

  // ROUTING & REDIRECTION HELPER
  const navigate = (path) => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
    }
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const showToast = (msg, type = "success") => {
    setToastMessage({ text: msg, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // CHECK AUTH PROTECTION GATE FOR /academician/* ROUTES
  const isProtectedPath = currentPath.startsWith("/academician");
  if (isProtectedPath && !auth.isAuthenticated) {
    // Unauthenticated user trying to access /academician route -> redirect immediately to /login
    setTimeout(() => navigate("/login"), 0);
  }

  // LOGIN HANDLERS
  const handleAcademicianLogin = (e) => {
    if (e) e.preventDefault();
    const userObj = {
      ...userProfile,
      email: loginForm.email || userProfile.email,
    };
    setAuth({
      isAuthenticated: true,
      role: "academician",
      user: userObj,
      isProfileComplete: userObj.isProfileComplete !== false,
    });
    showToast("Successfully logged in as Academician");
    
    if (userObj.isProfileComplete === false) {
      navigate("/academician/onboarding");
    } else {
      navigate("/academician");
    }
  };

  const handleAcademicianRegister = (e) => {
    if (e) e.preventDefault();
    const newUser = {
      fullName: registerForm.fullName,
      email: registerForm.email,
      institutionName: registerForm.institutionName,
      department: registerForm.department,
      designation: registerForm.designation,
      isProfileComplete: false,
      title: registerForm.designation,
      expertise: ["Artificial Intelligence", "Machine Learning"],
      skills: ["Python", "Research"],
      careerInterests: ["Faculty Internship", "FDP"],
      profileCompletion: 45,
    };
    setUserProfile((prev) => ({ ...prev, ...newUser }));
    setAuth({
      isAuthenticated: true,
      role: "academician",
      user: newUser,
      isProfileComplete: false,
    });
    showToast("Registration successful! Complete your faculty profile setup.");
    navigate("/academician/onboarding");
  };

  const handleLogout = () => {
    setAuth({
      isAuthenticated: false,
      role: null,
      user: null,
      isProfileComplete: true,
    });
    localStorage.removeItem("skillnet_auth_session");
    showToast("Logged out successfully", "info");
    navigate("/login");
  };

  // ONBOARDING WIZARD SUBMIT
  const handleFinishOnboarding = () => {
    const updated = {
      fullName: onboardingData.fullName || userProfile.fullName,
      designation: onboardingData.designation,
      institutionName: onboardingData.institutionName || userProfile.institutionName,
      department: onboardingData.department || userProfile.department,
      highestDegree: onboardingData.highestDegree,
      experienceYears: onboardingData.experienceYears,
      bio: onboardingData.bio || userProfile.bio,
      expertise: onboardingData.expertiseInput.split(",").map((s) => s.trim()).filter(Boolean),
      skills: onboardingData.skillsInput.split(",").map((s) => s.trim()).filter(Boolean),
      researchInterests: onboardingData.researchInterestsInput.split(",").map((s) => s.trim()).filter(Boolean),
      careerInterests: onboardingData.selectedCareerInterests,
      preferredSectors: onboardingData.selectedSectors,
      preferredWorkMode: onboardingData.preferredWorkMode,
      isProfileComplete: true,
      profileCompletion: 95,
    };

    setUserProfile((prev) => ({ ...prev, ...updated }));
    setAuth((prev) => ({
      ...prev,
      isProfileComplete: true,
      user: { ...prev.user, ...updated, isProfileComplete: true },
    }));
    showToast("Profile Onboarding Completed! Welcome to SkillNet.");
    navigate("/academician");
  };

  // OPPORTUNITY ACTIONS
  const handleToggleSave = (oppId) => {
    setSavedOppIds((prev) => {
      const isSaved = prev.includes(oppId);
      if (isSaved) {
        showToast("Removed from saved opportunities", "info");
        return prev.filter((id) => id !== oppId);
      } else {
        showToast("Saved opportunity to your profile");
        return [...prev, oppId];
      }
    });
  };

  const handleSubmitApplication = (appForm) => {
    if (!selectedOppForApply) return;
    const newApp = {
      id: `app-${Date.now()}`,
      opportunityId: selectedOppForApply.id,
      title: selectedOppForApply.title,
      organization: selectedOppForApply.organization,
      type: selectedOppForApply.type,
      appliedDate: new Date().toISOString().split("T")[0],
      status: "Applied",
      progressStep: 1,
      progressPercent: 20,
      notes: `Applied with motivation: "${appForm.motivation ? appForm.motivation.substring(0, 50) : "Standard application"}..."`,
    };

    const newNotif = {
      id: `notif-${Date.now()}`,
      title: "Application Submitted",
      message: `Your application for '${selectedOppForApply.title}' at ${selectedOppForApply.organization} was received.`,
      time: "Just now",
      read: false,
      type: "success",
      link: "/academician/applications",
    };

    setApplications((prev) => [newApp, ...prev]);
    setNotifications((prev) => [newNotif, ...prev]);
    showToast(`Successfully applied to ${selectedOppForApply.organization}!`);
    setSelectedOppForApply(null);
  };

  /* =========================================================
     RENDER PUBLIC UNAUTHENTICATED / LOGIN / ROLE PREVIEWS
  ========================================================= */
  if (!auth.isAuthenticated || currentPath === "/login" || currentPath === "/") {
    if (currentPath === "/student") {
      return (
        <RolePreviewScreen roleName="Student" targetRoute="/student" onSwitchAcademician={() => navigate("/login")} />
      );
    }
    if (currentPath === "/industry") {
      return (
        <RolePreviewScreen roleName="Industry Partner" targetRoute="/industry" onSwitchAcademician={() => navigate("/login")} />
      );
    }
    if (currentPath === "/institution") {
      return (
        <RolePreviewScreen roleName="Institution Admin" targetRoute="/institution" onSwitchAcademician={() => navigate("/login")} />
      );
    }

    // Default Public Landing & Academician Login Screen
    return (
      <PublicLandingLoginScreen 
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        isRegistering={isRegistering}
        setIsRegistering={setIsRegistering}
        registerForm={registerForm}
        setRegisterForm={setRegisterForm}
        onLogin={handleAcademicianLogin}
        onRegister={handleAcademicianRegister}
        navigate={navigate}
        toastMessage={toastMessage}
      />
    );
  }

  // ONBOARDING WIZARD SCREEN
  if (currentPath === "/academician/onboarding" || (auth.isAuthenticated && auth.role === "academician" && !auth.isProfileComplete)) {
    return (
      <OnboardingWizardScreen 
        step={onboardingStep}
        setStep={setOnboardingStep}
        data={onboardingData}
        setData={setOnboardingData}
        onFinish={handleFinishOnboarding}
        onCancel={() => navigate("/academician")}
      />
    );
  }

  /* =========================================================
     PROTECTED ACADEMICIAN MODULE VIEWS (/academician/*)
  ========================================================= */
  const unreadCount = notifications.filter((n) => !n.read).length;
  const activeAppsCount = applications.filter((a) => a.status !== "Completed" && a.status !== "Rejected").length;

  return (
    <div className="skillnet-dashboard">
      {/* TOAST REGION */}
      {toastMessage && (
        <div className="skillnet-toast-region">
          <div className={`skillnet-toast skillnet-toast-${toastMessage.type}`}>
            <Icon name="sparkles" size={16} color="#19c8ff" />
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      <div className="skillnet-layout">
        {/* SIDEBAR NAVIGATION */}
        <aside className="skillnet-sidebar">
          <button className="skillnet-brand" onClick={() => navigate("/academician")}>
            <span className="skill">Skill</span>
            <span className="net">Net</span>
            <span className="skillnet-badge-pill">FACULTY</span>
          </button>

          <nav className="skillnet-nav">
            <NavItem path="/academician" label="Dashboard" icon="dashboard" active={currentPath === "/academician"} onClick={navigate} />
            <NavItem path="/academician/profile" label="My Profile" icon="profile" active={currentPath === "/academician/profile"} onClick={navigate} />
            <NavItem path="/academician/opportunities" label="Opportunities" icon="opportunities" active={currentPath === "/academician/opportunities"} onClick={navigate} />
            <NavItem path="/academician/applications" label="My Applications" icon="applications" badge={activeAppsCount > 0 ? activeAppsCount : null} active={currentPath === "/academician/applications"} onClick={navigate} />
            <NavItem path="/academician/collaborations" label="Collaborations" icon="collaborations" active={currentPath === "/academician/collaborations"} onClick={navigate} />
            <NavItem path="/academician/interactions" label="Industry Interactions" icon="interactions" active={currentPath === "/academician/interactions"} onClick={navigate} />
            <NavItem path="/academician/progress" label="Progress & Feedback" icon="progress" active={currentPath === "/academician/progress"} onClick={navigate} />
            <NavItem path="/academician/experience" label="Certificates & Experience" icon="experience" active={currentPath === "/academician/experience"} onClick={navigate} />
            <NavItem path="/academician/notifications" label="Notifications" icon="notifications" badge={unreadCount > 0 ? unreadCount : null} active={currentPath === "/academician/notifications"} onClick={navigate} />
            <NavItem path="/academician/settings" label="Settings" icon="settings" active={currentPath === "/academician/settings"} onClick={navigate} />
          </nav>

          <div className="skillnet-sidebar-bottom">
            <button className="skillnet-nav-item" onClick={() => navigate("/academician/profile")}>
              <div className="skillnet-avatar-sm">
                {userProfile.fullName ? userProfile.fullName.charAt(0) : "P"}
              </div>
              <div style={{ textAlign: "left", flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis" }}>
                <div style={{ fontSize: "13px", fontWeight: "700", color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {userProfile.fullName || "Professor"}
                </div>
                <div style={{ fontSize: "11px", color: "#7c8ba1" }}>Faculty Profile</div>
              </div>
            </button>

            <button className="skillnet-nav-item" onClick={handleLogout} style={{ color: "#ef4444" }}>
              <span className="skillnet-nav-icon"><Icon name="logout" size={18} color="#ef4444" /></span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* MAIN WORKSPACE */}
        <main className="skillnet-main">

          {/* VIEW SWITCHER BASED ON ROUTE */}
          {currentPath === "/academician" && (
            <DashboardView 
              userProfile={userProfile}
              opportunities={opportunities}
              applications={applications}
              collaborations={collaborations}
              certificates={certificates}
              savedOppIds={savedOppIds}
              onSave={handleToggleSave}
              onViewDetails={setSelectedOppForDetails}
              onApply={setSelectedOppForApply}
              navigate={navigate}
            />
          )}

          {currentPath === "/academician/opportunities" && (
            <OpportunityMarketplaceView 
              opportunities={opportunities}
              savedOppIds={savedOppIds}
              onSave={handleToggleSave}
              onViewDetails={setSelectedOppForDetails}
              onApply={setSelectedOppForApply}
              search={oppSearch}
              setSearch={setOppSearch}
              category={oppCategory}
              setCategory={setOppCategory}
              industry={oppIndustry}
              setIndustry={setOppIndustry}
              workMode={oppWorkMode}
              setWorkMode={setOppWorkMode}
              sort={oppSort}
              setSort={setOppSort}
              aiRecommendedOnly={aiRecommendedOnly}
              setAiRecommendedOnly={setAiRecommendedOnly}
            />
          )}

          {currentPath === "/academician/applications" && (
            <MyApplicationsView 
              applications={applications}
              opportunities={opportunities}
              navigate={navigate}
            />
          )}

          {currentPath === "/academician/profile" && (
            <FacultyProfileView 
              profile={userProfile}
              onEdit={() => setShowEditProfileModal(true)}
              onCompleteInterests={() => navigate("/academician/onboarding")}
            />
          )}

          {currentPath === "/academician/collaborations" && (
            <CollaborationsView 
              collaborations={collaborations}
              onSelectCollab={setSelectedCollabForDetails}
            />
          )}

          {currentPath === "/academician/interactions" && (
            <IndustryInteractionsView 
              interactions={interactions}
              onJoinMeeting={setActiveMeetingModal}
              onAddNotes={setActiveNotesModal}
            />
          )}

          {currentPath === "/academician/progress" && (
            <ProgressFeedbackView 
              progress={progressData}
              onUpdateProgress={() => setShowUpdateProgressModal(true)}
              onAddReflection={() => setShowAddReflectionModal(true)}
            />
          )}

          {currentPath === "/academician/experience" && (
            <CertificatesExperienceView 
              certificates={certificates}
              onViewCertificate={setSelectedCertForPreview}
            />
          )}

          {currentPath === "/academician/notifications" && (
            <NotificationsView 
              notifications={notifications}
              onMarkRead={(id) => setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n))}
              onMarkAllRead={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
              onDelete={(id) => setNotifications((prev) => prev.filter((n) => n.id !== id))}
              navigate={navigate}
            />
          )}

          {currentPath === "/academician/settings" && (
            <SettingsView 
              settings={settings}
              setSettings={setSettings}
              showToast={showToast}
            />
          )}

        </main>
      </div>

      {/* MODAL DIALOG OVERLAYS */}
      {selectedOppForDetails && (
        <OpportunityDetailsModal 
          opportunity={selectedOppForDetails}
          isSaved={savedOppIds.includes(selectedOppForDetails.id)}
          onSave={() => handleToggleSave(selectedOppForDetails.id)}
          onApply={(opp) => {
            setSelectedOppForDetails(null);
            setSelectedOppForApply(opp);
          }}
          onClose={() => setSelectedOppForDetails(null)}
        />
      )}

      {selectedOppForApply && (
        <ApplyOpportunityModal 
          opportunity={selectedOppForApply}
          userProfile={userProfile}
          onSubmit={handleSubmitApplication}
          onClose={() => setSelectedOppForApply(null)}
        />
      )}

      {selectedCertForPreview && (
        <CertificatePreviewModal 
          certificate={selectedCertForPreview}
          userProfile={userProfile}
          onClose={() => setSelectedCertForPreview(null)}
        />
      )}

      {selectedCollabForDetails && (
        <CollaborationDetailsModal 
          collaboration={selectedCollabForDetails}
          onClose={() => setSelectedCollabForDetails(null)}
          onAddActivity={(title) => {
            setCollaborations((prev) => prev.map((c) => c.id === selectedCollabForDetails.id ? {
              ...c,
              upcomingActivities: [...c.upcomingActivities, { date: new Date().toISOString().split("T")[0], title }],
            } : c));
            showToast("Activity added to collaboration timeline");
          }}
        />
      )}

      {activeMeetingModal && (
        <MeetingRoomModal 
          meeting={activeMeetingModal}
          onClose={() => setActiveMeetingModal(null)}
        />
      )}

      {activeNotesModal && (
        <AddNotesModal 
          interaction={activeNotesModal}
          onSave={(notesText) => {
            setInteractions((prev) => prev.map((item) => item.id === activeNotesModal.id ? {
              ...item,
              notes: item.notes ? `${item.notes}\n• ${notesText}` : notesText,
            } : item));
            showToast("Interaction notes updated");
            setActiveNotesModal(null);
          }}
          onClose={() => setActiveNotesModal(null)}
        />
      )}

      {showEditProfileModal && (
        <EditProfileModal 
          profile={userProfile}
          onSave={(updatedProfile) => {
            setUserProfile((prev) => ({ ...prev, ...updatedProfile }));
            showToast("Faculty Profile updated successfully!");
            setShowEditProfileModal(false);
          }}
          onClose={() => setShowEditProfileModal(false)}
        />
      )}

      {showUpdateProgressModal && (
        <UpdateProgressModal 
          currentProgress={progressData.overallProgress}
          onSave={(newProg) => {
            setProgressData((prev) => ({ ...prev, overallProgress: newProg }));
            showToast("Progress percentage updated");
            setShowUpdateProgressModal(false);
          }}
          onClose={() => setShowUpdateProgressModal(false)}
        />
      )}

      {showAddReflectionModal && (
        <AddReflectionModal 
          onSave={(text) => {
            setProgressData((prev) => ({
              ...prev,
              reflections: [{ date: new Date().toISOString().split("T")[0], text }, ...prev.reflections]
            }));
            showToast("Faculty reflection recorded!");
            setShowAddReflectionModal(false);
          }}
          onClose={() => setShowAddReflectionModal(false)}
        />
      )}

    </div>
  );
}

/* =========================================================
   NAVITEM SUB-COMPONENT
========================================================= */
function NavItem({ path, label, icon, badge, active, onClick }) {
  return (
    <button className={`skillnet-nav-item ${active ? "active" : ""}`} onClick={() => onClick(path)}>
      <span className="skillnet-nav-icon"><Icon name={icon} size={18} /></span>
      <span>{label}</span>
      {badge && <span className="skillnet-nav-badge">{badge}</span>}
    </button>
  );
}

/* =========================================================
   PUBLIC LANDING & LOGIN SCREEN
========================================================= */
function PublicLandingLoginScreen({ loginForm, setLoginForm, isRegistering, setIsRegistering, registerForm, setRegisterForm, onLogin, onRegister, navigate, toastMessage }) {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #020617 0%, #081735 60%, #0b1d43 100%)", color: "#fff", fontFamily: "DM Sans, sans-serif" }}>
      
      {/* TOAST */}
      {toastMessage && (
        <div className="skillnet-toast-region">
          <div className={`skillnet-toast skillnet-toast-${toastMessage.type}`}>
            <Icon name="sparkles" size={16} color="#19c8ff" />
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* TOP HEADER */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 48px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "26px", fontWeight: "800" }}>
          <span style={{ color: "#fff" }}>Skill</span>
          <span style={{ color: "#19c8ff" }}>Net</span>
          <span className="skillnet-badge-pill" style={{ fontSize: "10px" }}>PLATFORM</span>
        </div>

        {/* ROLE SELECTOR NAVIGATION */}
        <div style={{ display: "flex", gap: "10px", background: "rgba(255,255,255,0.06)", padding: "4px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
          <button onClick={() => navigate("/student")} style={{ padding: "8px 14px", borderRadius: "8px", border: 0, background: "transparent", color: "#b9c7dd", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
            Student
          </button>
          <button style={{ padding: "8px 14px", borderRadius: "8px", border: 0, background: "linear-gradient(135deg, #0b6cff, #19c8ff)", color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
            Academician
          </button>
          <button onClick={() => navigate("/industry")} style={{ padding: "8px 14px", borderRadius: "8px", border: 0, background: "transparent", color: "#b9c7dd", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
            Industry
          </button>
          <button onClick={() => navigate("/institution")} style={{ padding: "8px 14px", borderRadius: "8px", border: 0, background: "transparent", color: "#b9c7dd", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
            Institution
          </button>
        </div>
      </header>

      {/* HERO & LOGIN GRID */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px", display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", alignItems: "center" }}>
        
        {/* HERO COPY */}
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", background: "rgba(25,200,255,0.12)", border: "1px solid rgba(25,200,255,0.3)", borderRadius: "999px", color: "#19c8ff", fontSize: "12px", fontWeight: "800", marginBottom: "20px" }}>
            <Icon name="sparkles" size={14} color="#19c8ff" />
            <span>ACADEMIC-INDUSTRY COLLABORATION PLATFORM</span>
          </div>

          <h1 style={{ fontSize: "48px", fontWeight: "800", lineHeight: "1.15", letterSpacing: "-1px", margin: "0 0 20px" }}>
            Connecting Higher Education Faculty with Industry Innovation
          </h1>

          <p style={{ fontSize: "16px", color: "#b9c7dd", lineHeight: "1.6", maxWidth: "560px", margin: "0 0 32px" }}>
            Access industrial residencies, collaborative research projects, FDP training, guest lecture series, and tech consultancy opportunities powered by AI matching.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontWeight: "800", color: "#19c8ff", fontSize: "20px" }}>500+</div>
              <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>Industry Residency Partners</div>
            </div>
            <div style={{ padding: "16px", background: "rgba(255,255,255,0.04)", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ fontWeight: "800", color: "#19c8ff", fontSize: "20px" }}>98%</div>
              <div style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>AI Match Accuracy</div>
            </div>
          </div>
        </div>

        {/* LOGIN / REGISTER CARD */}
        <div style={{ background: "#06112b", border: "1px solid rgba(25,200,255,0.2)", borderRadius: "24px", padding: "36px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
          
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "800", margin: "0 0 6px" }}>
              {isRegistering ? "Academician Registration" : "Academician Sign In"}
            </h2>
            <p style={{ fontSize: "13px", color: "#7c8ba1", margin: 0 }}>
              {isRegistering ? "Register your faculty profile to access opportunities" : "Sign in to access your protected faculty workspace"}
            </p>
          </div>

          {!isRegistering ? (
            <form onSubmit={onLogin} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Academic Email</label>
                <input 
                  type="email" 
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  placeholder="professor@university.edu"
                  required
                  style={{ width: "100%", height: "44px", padding: "0 14px", background: "#0b1d43", border: "1px solid #102b5c", borderRadius: "12px", color: "#fff", outline: "none" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Password</label>
                <input 
                  type="password" 
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  placeholder="••••••••"
                  required
                  style={{ width: "100%", height: "44px", padding: "0 14px", background: "#0b1d43", border: "1px solid #102b5c", borderRadius: "12px", color: "#fff", outline: "none" }}
                />
              </div>

              <button type="submit" className="skillnet-btn skillnet-btn-primary" style={{ width: "100%", height: "46px", marginTop: "10px" }}>
                <span>Sign In as Academician</span>
                <Icon name="arrow-right" size={16} />
              </button>

              <div style={{ textAlign: "center", marginTop: "12px" }}>
                <span style={{ fontSize: "13px", color: "#7c8ba1" }}>New to SkillNet? </span>
                <button type="button" onClick={() => setIsRegistering(true)} style={{ background: "transparent", border: 0, color: "#19c8ff", fontWeight: "800", cursor: "pointer" }}>
                  Register Profile
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={onRegister} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "4px" }}>Full Name & Title</label>
                <input 
                  type="text" 
                  value={registerForm.fullName}
                  onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })}
                  placeholder="Dr. Full Name"
                  required
                  style={{ width: "100%", height: "42px", padding: "0 14px", background: "#0b1d43", border: "1px solid #102b5c", borderRadius: "10px", color: "#fff" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "4px" }}>University / Institution</label>
                <input 
                  type="text" 
                  value={registerForm.institutionName}
                  onChange={(e) => setRegisterForm({ ...registerForm, institutionName: e.target.value })}
                  placeholder="University Name"
                  required
                  style={{ width: "100%", height: "42px", padding: "0 14px", background: "#0b1d43", border: "1px solid #102b5c", borderRadius: "10px", color: "#fff" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "4px" }}>Department</label>
                  <input 
                    type="text" 
                    value={registerForm.department}
                    onChange={(e) => setRegisterForm({ ...registerForm, department: e.target.value })}
                    placeholder="Computer Science"
                    style={{ width: "100%", height: "42px", padding: "0 14px", background: "#0b1d43", border: "1px solid #102b5c", borderRadius: "10px", color: "#fff" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "4px" }}>Designation</label>
                  <input 
                    type="text" 
                    value={registerForm.designation}
                    onChange={(e) => setRegisterForm({ ...registerForm, designation: e.target.value })}
                    placeholder="Professor"
                    style={{ width: "100%", height: "42px", padding: "0 14px", background: "#0b1d43", border: "1px solid #102b5c", borderRadius: "10px", color: "#fff" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "4px" }}>Academic Email</label>
                <input 
                  type="email" 
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  placeholder="faculty@university.edu"
                  required
                  style={{ width: "100%", height: "42px", padding: "0 14px", background: "#0b1d43", border: "1px solid #102b5c", borderRadius: "10px", color: "#fff" }}
                />
              </div>

              <button type="submit" className="skillnet-btn skillnet-btn-primary" style={{ width: "100%", height: "44px", marginTop: "10px" }}>
                <span>Create Faculty Profile</span>
                <Icon name="arrow-right" size={16} />
              </button>

              <div style={{ textAlign: "center", marginTop: "8px" }}>
                <span style={{ fontSize: "13px", color: "#7c8ba1" }}>Already registered? </span>
                <button type="button" onClick={() => setIsRegistering(false)} style={{ background: "transparent", border: 0, color: "#19c8ff", fontWeight: "800", cursor: "pointer" }}>
                  Sign In
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}

/* =========================================================
   NON-ACADEMICIAN ROLE PREVIEW SCREEN
========================================================= */
function RolePreviewScreen({ roleName, targetRoute, onSwitchAcademician }) {
  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "#fff", display: "flex", alignItems: "center", justifyCenter: "center", padding: "20px" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", textAlign: "center", background: "#06112b", border: "1px solid rgba(25,200,255,0.2)", borderRadius: "20px", padding: "40px" }}>
        <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(25,200,255,0.15)", color: "#19c8ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
          <Icon name="user" size={32} />
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: "800", margin: "0 0 10px" }}>{roleName} Module Selected</h2>
        <p style={{ color: "#7c8ba1", fontSize: "14px", lineHeight: "1.6", margin: "0 0 24px" }}>
          You have selected the <strong>{targetRoute}</strong> path. To explore the complete interactive Faculty & Academician module, switch to Academician mode below.
        </p>

        <button className="skillnet-btn skillnet-btn-primary" onClick={onSwitchAcademician} style={{ width: "100%", height: "44px" }}>
          <span>Switch to Academician Portal</span>
          <Icon name="arrow-right" size={16} />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   ONBOARDING WIZARD SCREEN
========================================================= */
function OnboardingWizardScreen({ step, setStep, data, setData, onFinish, onCancel }) {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #020617 0%, #06112b 60%, #081735 100%)", color: "#fff", padding: "40px 20px" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", background: "#06112b", border: "1px solid rgba(25,200,255,0.2)", borderRadius: "20px", padding: "36px", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
        
        {/* STEPPER HEADER */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: "800", color: "#19c8ff", letterSpacing: "1px" }}>FACULTY ONBOARDING • STEP {step} OF 5</span>
            <h2 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "800", color: "#fff" }}>
              {step === 1 && "Faculty Profile & Academic Info"}
              {step === 2 && "Expertise & Teaching Domains"}
              {step === 3 && "Research & Publication Interests"}
              {step === 4 && "Career & Collaboration Interests"}
              {step === 5 && "Review & Complete Onboarding"}
            </h2>
          </div>
          <button onClick={onCancel} style={{ background: "transparent", border: 0, color: "#7c8ba1", cursor: "pointer", fontWeight: "700", fontSize: "13px" }}>
            Skip for now
          </button>
        </div>

        {/* STEP 1 FORM */}
        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Full Name & Academic Title</label>
              <input type="text" value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} placeholder="Dr. Sarah Jenkins" style={{ width: "100%", height: "42px", padding: "0 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff", outline: "none" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Institution / University</label>
                <input type="text" value={data.institutionName} onChange={(e) => setData({ ...data, institutionName: e.target.value })} placeholder="Stanford University" style={{ width: "100%", height: "42px", padding: "0 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff" }} />
              </div>
              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Department</label>
                <input type="text" value={data.department} onChange={(e) => setData({ ...data, department: e.target.value })} placeholder="Computer Science" style={{ width: "100%", height: "42px", padding: "0 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff" }} />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Highest Qualification</label>
                <input type="text" value={data.highestDegree} onChange={(e) => setData({ ...data, highestDegree: e.target.value })} placeholder="Ph.D. in CS" style={{ width: "100%", height: "42px", padding: "0 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff" }} />
              </div>
              <div>
                <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Teaching / Research Experience</label>
                <input type="text" value={data.experienceYears} onChange={(e) => setData({ ...data, experienceYears: e.target.value })} placeholder="10+ Years" style={{ width: "100%", height: "42px", padding: "0 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff" }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Faculty Bio</label>
              <textarea value={data.bio} onChange={(e) => setData({ ...data, bio: e.target.value })} rows={3} placeholder="Brief summary of your academic background..." style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff", outline: "none", fontFamily: "inherit", fontSize: "13px" }} />
            </div>
          </div>
        )}

        {/* STEP 2 FORM */}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Primary Domains & Expertise (Comma-separated)</label>
              <input type="text" value={data.expertiseInput} onChange={(e) => setData({ ...data, expertiseInput: e.target.value })} placeholder="Artificial Intelligence, Computer Vision, Robotics" style={{ width: "100%", height: "42px", padding: "0 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff" }} />
            </div>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Technical Skills & Toolkits (Comma-separated)</label>
              <input type="text" value={data.skillsInput} onChange={(e) => setData({ ...data, skillsInput: e.target.value })} placeholder="PyTorch, CUDA, TensorFlow, Python" style={{ width: "100%", height: "42px", padding: "0 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff" }} />
            </div>
          </div>
        )}

        {/* STEP 3 FORM */}
        {step === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "6px" }}>Research Interests & Focus Topics (Comma-separated)</label>
              <input type="text" value={data.researchInterestsInput} onChange={(e) => setData({ ...data, researchInterestsInput: e.target.value })} placeholder="Transformer Architectures, Medical Vision, Defect Detection" style={{ width: "100%", height: "42px", padding: "0 14px", borderRadius: "10px", background: "#0b1d43", border: "1px solid #102b5c", color: "#fff" }} />
            </div>
          </div>
        )}

        {/* STEP 4 FORM */}
        {step === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label style={{ fontSize: "12px", fontWeight: "700", color: "#94a3b8", display: "block", marginBottom: "8px" }}>Select Collaboration / Opportunity Types of Interest</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {["Faculty Internship", "Industrial Training", "FDP", "Mentorship", "Consultancy", "Research Projects", "Guest Lectures", "Workshops", "Industry Interaction"].map((type) => {
                  const isSel = data.selectedCareerInterests.includes(type);
                  return (
                    <button 
                      key={type}
                      type="button"
                      onClick={() => {
                        const newSel = isSel ? data.selectedCareerInterests.filter((t) => t !== type) : [...data.selectedCareerInterests, type];
                        setData({ ...data, selectedCareerInterests: newSel });
                      }}
                      style={{ padding: "10px", borderRadius: "10px", border: isSel ? "1px solid #19c8ff" : "1px solid #102b5c", background: isSel ? "rgba(25,200,255,0.15)" : "#0b1d43", color: isSel ? "#19c8ff" : "#94a3b8", fontWeight: "700", fontSize: "12px", cursor: "pointer", textAlign: "left" }}
                    >
                      {isSel ? "✓ " : "+ "} {type}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 5 REVIEW */}
        {step === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ padding: "16px", background: "#0b1d43", borderRadius: "12px", border: "1px solid #102b5c" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "16px", fontWeight: "800", color: "#fff" }}>{data.fullName || "Professor Profile"}</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>{data.institutionName} • {data.department}</p>
            </div>
            <div style={{ fontSize: "13px", color: "#94a3b8" }}>
              <strong style={{ color: "#fff" }}>Selected Opportunity Types:</strong> {data.selectedCareerInterests.join(", ")}
            </div>
          </div>
        )}

        {/* STEPPER FOOTER BUTTONS */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px", paddingTop: "16px", borderTop: "1px solid #102b5c" }}>
          {step > 1 ? (
            <button className="skillnet-btn skillnet-btn-secondary" onClick={() => setStep(step - 1)} style={{ background: "#0b1d43", borderColor: "#102b5c", color: "#fff" }}>Back</button>
          ) : <div />}

          {step < 5 ? (
            <button className="skillnet-btn skillnet-btn-primary" onClick={() => setStep(step + 1)}>Continue</button>
          ) : (
            <button className="skillnet-btn skillnet-btn-primary" onClick={onFinish}>Save Profile & Go to Dashboard</button>
          )}
        </div>

      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 1: DASHBOARD
========================================================= */
function DashboardView({ userProfile, opportunities, applications, collaborations, certificates, savedOppIds, onSave, onViewDetails, onApply, navigate }) {
  const activeAppsCount = applications.filter((a) => a.status !== "Completed" && a.status !== "Rejected").length;

  return (
    <div>
      {/* WELCOME BANNER */}
      <div className="skillnet-welcome">
        <h2>Welcome back, {userProfile.fullName || "Professor"}</h2>
        <p>Discover industry opportunities, build professional collaborations, and grow your academic-industry experience.</p>
        <div className="skillnet-welcome-actions">
          <button className="skillnet-btn skillnet-btn-primary" onClick={() => navigate("/academician/opportunities")}>
            <Icon name="search" size={16} />
            <span>Explore Opportunities</span>
          </button>
          <button className="skillnet-btn skillnet-btn-ghost" onClick={() => navigate("/academician/profile")}>
            <Icon name="user" size={16} />
            <span>Complete Profile</span>
          </button>
        </div>
      </div>

      {/* 4 STAT CARDS (CLICKABLE) */}
      <div className="skillnet-stats">
        <div className="skillnet-stat-card highlight" onClick={() => navigate("/academician/opportunities")} style={{ cursor: "pointer" }}>
          <div className="skillnet-stat-top">
            <span className="skillnet-stat-icon"><Icon name="sparkles" size={20} color="#0b6cff" /></span>
            <span className="skillnet-stat-kicker">AI MATCHED</span>
          </div>
          <div className="skillnet-stat-label">Recommended Opportunities</div>
          <div className="skillnet-stat-value">{opportunities.length}</div>
          <div className="skillnet-stat-change positive">✓ 98% Match Rate</div>
        </div>

        <div className="skillnet-stat-card" onClick={() => navigate("/academician/applications")} style={{ cursor: "pointer" }}>
          <div className="skillnet-stat-top">
            <span className="skillnet-stat-icon"><Icon name="applications" size={20} color="#0b6cff" /></span>
            <span className="skillnet-stat-kicker">TRACKING</span>
          </div>
          <div className="skillnet-stat-label">Active Applications</div>
          <div className="skillnet-stat-value">{activeAppsCount}</div>
          <div className="skillnet-stat-change positive">1 Shortlisted</div>
        </div>

        <div className="skillnet-stat-card" onClick={() => navigate("/academician/collaborations")} style={{ cursor: "pointer" }}>
          <div className="skillnet-stat-top">
            <span className="skillnet-stat-icon"><Icon name="collaborations" size={20} color="#0b6cff" /></span>
            <span className="skillnet-stat-kicker">PARTNERSHIPS</span>
          </div>
          <div className="skillnet-stat-label">Active Collaborations</div>
          <div className="skillnet-stat-value">{collaborations.length}</div>
          <div className="skillnet-stat-change positive">NVIDIA & Siemens</div>
        </div>

        <div className="skillnet-stat-card" onClick={() => navigate("/academician/experience")} style={{ cursor: "pointer" }}>
          <div className="skillnet-stat-top">
            <span className="skillnet-stat-icon"><Icon name="award" size={20} color="#0b6cff" /></span>
            <span className="skillnet-stat-kicker">VERIFIED</span>
          </div>
          <div className="skillnet-stat-label">Completed Experiences</div>
          <div className="skillnet-stat-value">{certificates.length}</div>
          <div className="skillnet-stat-change positive">Certificates Available</div>
        </div>
      </div>

      {/* AI MATCHED OPPORTUNITIES SECTION */}
      <div className="skillnet-card" style={{ marginBottom: "24px" }}>
        <div className="skillnet-card-header">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Icon name="sparkles" size={20} color="#0b6cff" />
            <h2>AI-Matched Opportunities</h2>
          </div>
          <button className="skillnet-text-button" onClick={() => navigate("/academician/opportunities")}>View All Marketplace →</button>
        </div>

        <div className="skillnet-opportunities-grid">
          {opportunities.slice(0, 3).map((opp) => (
            <OpportunityCard 
              key={opp.id} 
              opportunity={opp} 
              isSaved={savedOppIds.includes(opp.id)}
              onSave={() => onSave(opp.id)}
              onViewDetails={() => onViewDetails(opp)}
              onApply={() => onApply(opp)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 2: OPPORTUNITY MARKETPLACE
========================================================= */
function OpportunityMarketplaceView({ opportunities, savedOppIds, onSave, onViewDetails, onApply, search, setSearch, category, setCategory, industry, setIndustry, workMode, setWorkMode, sort, setSort, aiRecommendedOnly, setAiRecommendedOnly }) {
  const categories = ["All", "Faculty Internship", "Industrial Training", "FDP", "Mentorship", "Consultancy", "Research", "Guest Lecture", "Workshop", "Industry Interaction"];

  let filtered = opportunities.filter((opp) => {
    if (category !== "All" && opp.category !== category && opp.type !== category) return false;
    if (industry !== "All" && opp.industry !== industry) return false;
    if (workMode !== "All" && opp.workMode !== workMode) return false;
    if (aiRecommendedOnly && opp.matchScore < 90) return false;
    if (search) {
      const q = search.toLowerCase();
      return opp.title.toLowerCase().includes(q) || opp.organization.toLowerCase().includes(q) || opp.requiredExpertise.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">OPPORTUNITY MARKETPLACE</p>
          <h1>Faculty Industry Opportunities</h1>
          <p>Explore internships, research collaborations, FDPs, and guest lecture invitations matched to your profile.</p>
        </div>
      </div>

      {/* TOOLBAR & FILTERS */}
      <div className="skillnet-toolbar">
        <div className="skillnet-toolbar-left">
          <div className="skillnet-search-wrapper">
            <span className="search-icon"><Icon name="search" size={16} /></span>
            <input 
              type="text" 
              className="skillnet-search" 
              placeholder="Search opportunity title, company, or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="skillnet-search" style={{ width: "160px", paddingLeft: "12px" }}>
            <option value="All">All Industries</option>
            <option value="Automotive">Automotive</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Manufacturing">Manufacturing</option>
          </select>

          <select value={workMode} onChange={(e) => setWorkMode(e.target.value)} className="skillnet-search" style={{ width: "140px", paddingLeft: "12px" }}>
            <option value="All">All Modes</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label style={{ fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
            <input type="checkbox" checked={aiRecommendedOnly} onChange={(e) => setAiRecommendedOnly(e.target.checked)} />
            <span>AI Recommended (90%+)</span>
          </label>
        </div>
      </div>

      {/* CATEGORY TABS */}
      <div className="skillnet-tabs" style={{ marginBottom: "20px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button key={cat} className={`skillnet-tab ${category === cat ? "active" : ""}`} onClick={() => setCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* OPPORTUNITIES GRID */}
      {filtered.length > 0 ? (
        <div className="skillnet-opportunities-grid">
          {filtered.map((opp) => (
            <OpportunityCard 
              key={opp.id} 
              opportunity={opp} 
              isSaved={savedOppIds.includes(opp.id)}
              onSave={() => onSave(opp.id)}
              onViewDetails={() => onViewDetails(opp)}
              onApply={() => onApply(opp)}
            />
          ))}
        </div>
      ) : (
        <div className="skillnet-card" style={{ textAlign: "center", padding: "60px 20px" }}>
          <Icon name="search" size={32} color="#7c8ba1" />
          <h3 style={{ margin: "12px 0 6px", fontSize: "18px" }}>No opportunities match your filter</h3>
          <p style={{ color: "#7c8ba1", fontSize: "13px" }}>Try clearing search keywords or selecting "All" categories.</p>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 3: MY APPLICATIONS
========================================================= */
function MyApplicationsView({ applications, opportunities, navigate }) {
  const [filterTab, setFilterTab] = useState("All");

  const filtered = applications.filter((app) => {
    if (filterTab === "All") return true;
    return app.status.toLowerCase() === filterTab.toLowerCase();
  });

  return (
    <div>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">APPLICATION TRACKER</p>
          <h1>My Industry Applications</h1>
          <p>Monitor your active applications, selection status, and interview schedules.</p>
        </div>
      </div>

      {/* TABS */}
      <div className="skillnet-tabs" style={{ marginBottom: "20px" }}>
        {["All", "Pending", "Under Review", "Shortlisted", "Accepted", "Completed"].map((tab) => (
          <button key={tab} className={`skillnet-tab ${filterTab === tab ? "active" : ""}`} onClick={() => setFilterTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {/* APPLICATIONS TABLE */}
      <div className="skillnet-table-wrapper">
        <table className="skillnet-table">
          <thead>
            <tr>
              <th>Opportunity & Partner</th>
              <th>Type</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((app) => (
              <tr key={app.id}>
                <td>
                  <div style={{ fontWeight: "700", color: "#07152f" }}>{app.title}</div>
                  <div style={{ fontSize: "12px", color: "#7c8ba1" }}>{app.organization}</div>
                </td>
                <td><span className="skillnet-tag-category">{app.type}</span></td>
                <td>{app.appliedDate}</td>
                <td>
                  <span className={`skillnet-status ${app.status === "Accepted" ? "skillnet-status-active" : app.status === "Shortlisted" ? "skillnet-status-pending" : "skillnet-status-closed"}`}>
                    {app.status}
                  </span>
                </td>
                <td>
                  <div className="skillnet-progress-bar-wrap">
                    <div className="skillnet-progress-bar" style={{ width: `${app.progressPercent}%` }} />
                  </div>
                  <span className="progress-val">{app.progressPercent}%</span>
                </td>
                <td>
                  <button className="skillnet-btn skillnet-btn-secondary skillnet-btn-small" onClick={() => navigate("/academician/progress")}>
                    Track Progress
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 4: FACULTY PROFILE
========================================================= */
function FacultyProfileView({ profile, onEdit, onCompleteInterests }) {
  return (
    <div>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">FACULTY PROFILE</p>
          <h1>{profile.fullName}</h1>
          <p>{profile.title} • {profile.institutionName}</p>
        </div>
        <button className="skillnet-btn skillnet-btn-primary" onClick={onEdit}>
          <Icon name="edit" size={16} />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* PROFILE COMPLETION METER */}
      <div style={{ background: "linear-gradient(135deg, #06112b, #081735)", borderRadius: "16px", padding: "20px 24px", color: "#fff", marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "12px", fontWeight: "800", color: "#19c8ff" }}>PROFILE COMPLETION: {profile.profileCompletion}%</div>
          <h3 style={{ margin: "4px 0 0", fontSize: "18px" }}>Complete profile to optimize AI opportunity matching accuracy</h3>
        </div>
        <button className="skillnet-btn skillnet-btn-secondary" onClick={onCompleteInterests}>
          Update Preferences
        </button>
      </div>

      {/* GRID */}
      <div className="skillnet-grid">
        <div className="skillnet-card">
          <h2 style={{ marginBottom: "16px" }}>Academic Summary & Bio</h2>
          <p style={{ fontSize: "14px", color: "#52627a", lineHeight: "1.6" }}>{profile.bio}</p>

          <h3 style={{ marginTop: "24px", marginBottom: "12px", fontSize: "15px" }}>Primary Expertise</h3>
          <div className="skillnet-tags-inline">
            {profile.expertise.map((exp, i) => (
              <span key={i} className="skillnet-tag" style={{ fontSize: "12px", padding: "6px 12px" }}>{exp}</span>
            ))}
          </div>

          <h3 style={{ marginTop: "24px", marginBottom: "12px", fontSize: "15px" }}>Technical Skills</h3>
          <div className="skillnet-tags-inline">
            {profile.skills.map((sk, i) => (
              <span key={i} className="skillnet-tag-neutral" style={{ fontSize: "12px", padding: "6px 12px" }}>{sk}</span>
            ))}
          </div>
        </div>

        <div className="skillnet-card">
          <h2 style={{ marginBottom: "16px" }}>Qualifications</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {profile.qualifications.map((q, i) => (
              <div key={i} className="skillnet-info-item">
                <span className="skillnet-info-label">{q.degree}</span>
                <span className="skillnet-info-value">{q.institution} ({q.year})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 5: COLLABORATIONS
========================================================= */
function CollaborationsView({ collaborations, onSelectCollab }) {
  return (
    <div>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">INDUSTRY PARTNERSHIPS</p>
          <h1>Active Collaborations</h1>
          <p>Manage co-developed projects, FDP training programs, and joint research initiatives.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "20px" }}>
        {collaborations.map((collab) => (
          <div key={collab.id} className="skillnet-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <span className="skillnet-tag-category" style={{ marginBottom: "8px", display: "inline-block" }}>{collab.type}</span>
              <h2 style={{ fontSize: "18px", margin: "4px 0" }}>{collab.title}</h2>
              <p style={{ fontSize: "13px", color: "#7c8ba1", margin: "0 0 16px" }}>{collab.organization}</p>
              
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#52627a", marginBottom: "4px" }}>
                  <span>Overall Progress</span>
                  <strong>{collab.progressPercent}%</strong>
                </div>
                <div className="skillnet-progress-bar-wrap" style={{ width: "100%" }}>
                  <div className="skillnet-progress-bar" style={{ width: `${collab.progressPercent}%` }} />
                </div>
              </div>
            </div>

            <button className="skillnet-btn skillnet-btn-secondary" onClick={() => onSelectCollab(collab)}>
              View Collaboration Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 6: INDUSTRY INTERACTIONS
========================================================= */
function IndustryInteractionsView({ interactions, onJoinMeeting, onAddNotes }) {
  return (
    <div>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">MEETINGS & EVENTS</p>
          <h1>Industry Interactions</h1>
          <p>Schedule of technical syncs, guest lectures, mentoring sessions, and advisory round-tables.</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {interactions.map((item) => (
          <div key={item.id} className="skillnet-card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                <span className="skillnet-tag-category">{item.type}</span>
                <span style={{ fontSize: "12px", color: "#7c8ba1" }}>{item.date} • {item.time}</span>
              </div>
              <h2 style={{ fontSize: "18px", margin: "0 0 4px" }}>{item.title}</h2>
              <p style={{ fontSize: "13px", color: "#52627a", margin: 0 }}>{item.organization} • {item.participants.join(", ")}</p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button className="skillnet-btn skillnet-btn-secondary" onClick={() => onAddNotes(item)}>
                Add Notes
              </button>
              <button className="skillnet-btn skillnet-btn-primary" onClick={() => onJoinMeeting(item)}>
                <Icon name="video" size={16} />
                <span>Join Session</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 7: PROGRESS & FEEDBACK
========================================================= */
function ProgressFeedbackView({ progress, onUpdateProgress, onAddReflection }) {
  return (
    <div>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">EVALUATION & MILESTONES</p>
          <h1>Progress & Feedback</h1>
          <p>Track your active residency pipeline and review industry performance feedback.</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button className="skillnet-btn skillnet-btn-secondary" onClick={onAddReflection}>Add Reflection</button>
          <button className="skillnet-btn skillnet-btn-primary" onClick={onUpdateProgress}>Update Progress</button>
        </div>
      </div>

      {/* STAGE PIPELINE */}
      <div className="skillnet-card" style={{ marginBottom: "24px" }}>
        <h2 style={{ marginBottom: "20px" }}>Active Program: {progress.currentProgram}</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", textAlign: "center" }}>
          {progress.stages.map((st, i) => (
            <div key={i} style={{ padding: "14px", borderRadius: "12px", background: st.status === "Completed" ? "#e7f8f0" : st.status === "In Progress" ? "#eef5ff" : "#f4f8ff", border: st.status === "In Progress" ? "1px solid #0b6cff" : "1px solid #dce7f5" }}>
              <div style={{ fontSize: "11px", fontWeight: "800", color: st.status === "Completed" ? "#08784c" : "#0b6cff" }}>{st.status}</div>
              <div style={{ fontSize: "12px", fontWeight: "700", marginTop: "4px" }}>{st.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEEDBACK BREAKDOWN */}
      <div className="skillnet-card">
        <h2>Industry Performance Evaluation</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", margin: "16px 0" }}>
          <div style={{ fontSize: "36px", fontWeight: "800", color: "#0b6cff" }}>{progress.industryFeedback.overallScore}</div>
          <div style={{ fontSize: "14px", color: "#52627a" }}>Overall Industry Rating (Out of 5.0)</div>
        </div>
        <p style={{ fontSize: "14px", color: "#07152f", fontStyle: "italic", background: "#f4f8ff", padding: "16px", borderRadius: "12px" }}>
          "{progress.industryFeedback.comments}"
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 8: CERTIFICATES & EXPERIENCE
========================================================= */
function CertificatesExperienceView({ certificates, onViewCertificate }) {
  return (
    <div style={{ maxWidth: "1100px" }}>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">VERIFIED CREDENTIALS</p>
          <h1>Certificates & Experience Record</h1>
          <p>Verified certificates and industry experience records issued by partners upon completion.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "20px" }}>
        {certificates.map((cert) => (
          <div key={cert.id} className="skillnet-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                <span className="skillnet-badge-gold">VERIFIED CERTIFICATE</span>
                <span style={{ fontSize: "11px", color: "#7c8ba1", fontWeight: "700" }}>ID: {cert.certificateId}</span>
              </div>
              
              <h2 style={{ fontSize: "18px", margin: "4px 0 6px", color: "#07152f", fontWeight: "800" }}>{cert.title}</h2>
              <p style={{ fontSize: "13px", color: "#52627a", margin: "0 0 16px" }}>Issued by <strong>{cert.organization}</strong> • {cert.issueDate}</p>

              {cert.outcome && (
                <p style={{ fontSize: "13px", color: "#52627a", background: "#f4f8ff", padding: "12px", borderRadius: "10px", margin: "0 0 16px", lineHeight: "1.5" }}>
                  "{cert.outcome}"
                </p>
              )}

              {cert.skillsGained && (
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#7c8ba1", marginBottom: "6px", textTransform: "uppercase" }}>Verified Skills</div>
                  <div className="skillnet-tags-inline">
                    {cert.skillsGained.map((sk, i) => (
                      <span key={i} className="skillnet-tag" style={{ fontSize: "11px", padding: "4px 8px" }}>{sk}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="skillnet-btn skillnet-btn-primary" onClick={() => onViewCertificate(cert)} style={{ width: "100%", marginTop: "12px" }}>
              <Icon name="award" size={16} />
              <span>View Digital Certificate</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 9: NOTIFICATIONS
========================================================= */
function NotificationsView({ notifications, onMarkRead, onMarkAllRead, onDelete, navigate }) {
  return (
    <div>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">ALERTS & MESSAGES</p>
          <h1>Notifications</h1>
          <p>Real-time updates regarding opportunity matches, applications, and scheduled syncs.</p>
        </div>
        <button className="skillnet-btn skillnet-btn-secondary" onClick={onMarkAllRead}>Mark All as Read</button>
      </div>

      <div className="skillnet-card">
        {notifications.map((n) => (
          <div key={n.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid #dce7f5" }}>
            <div>
              <div style={{ fontWeight: "700", color: n.read ? "#52627a" : "#0b6cff", fontSize: "14px" }}>{n.title}</div>
              <div style={{ fontSize: "13px", color: "#07152f", margin: "4px 0" }}>{n.message}</div>
              <div style={{ fontSize: "11px", color: "#7c8ba1" }}>{n.time}</div>
            </div>
            <button className="skillnet-btn skillnet-btn-secondary skillnet-btn-small" onClick={() => onDelete(n.id)}>Dismiss</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PROTECTED VIEW 10: SETTINGS
========================================================= */
function SettingsView({ settings, setSettings, showToast }) {
  return (
    <div>
      <div className="skillnet-header">
        <div className="skillnet-header-left">
          <p className="skillnet-eyebrow">PREFERENCES</p>
          <h1>Account Settings</h1>
          <p>Configure profile privacy, AI matching threshold, and notifications.</p>
        </div>
      </div>

      <div className="skillnet-card" style={{ maxWidth: "600px" }}>
        <h2 style={{ marginBottom: "20px" }}>AI & Opportunity Matching</h2>
        
        <div className="form-group">
          <label>AI Matching Sensitivity</label>
          <select value={settings.aiMatchingSensitivity} onChange={(e) => setSettings({ ...settings, aiMatchingSensitivity: e.target.value })}>
            <option>High (80%+ Match)</option>
            <option>Medium (60%+ Match)</option>
            <option>All Opportunities</option>
          </select>
        </div>

        <div className="form-group" style={{ marginTop: "20px" }}>
          <label>Profile Visibility</label>
          <select value={settings.profileVisibility} onChange={(e) => setSettings({ ...settings, profileVisibility: e.target.value })}>
            <option>Public to Verified Industry Partners</option>
            <option>Private (Invites Only)</option>
          </select>
        </div>

        <button className="skillnet-btn skillnet-btn-primary" style={{ marginTop: "24px" }} onClick={() => showToast("Settings saved successfully!")}>
          Save Settings
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   MODALS IMPLEMENTATIONS
========================================================= */
function OpportunityCard({ opportunity, isSaved, onSave, onViewDetails, onApply }) {
  return (
    <div className="skillnet-opportunity-card">
      <div className="skillnet-opp-header">
        <span className="skillnet-tag-category">{opportunity.type}</span>
        <span style={{ fontSize: "12px", fontWeight: "800", color: "#0b6cff", background: "#eef5ff", padding: "4px 8px", borderRadius: "6px" }}>
          ⚡ {opportunity.matchScore}% Match
        </span>
      </div>

      <div>
        <h3 className="skillnet-opp-title">{opportunity.title}</h3>
        <p className="skillnet-opp-partner">{opportunity.organization}</p>
      </div>

      <p className="skillnet-opp-desc">{opportunity.description}</p>

      <div className="skillnet-opp-meta">
        <span>📍 {opportunity.location}</span>
        <span>⏱️ {opportunity.duration}</span>
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
        <button className="skillnet-btn skillnet-btn-ghost" onClick={onSave} style={{ color: isSaved ? "#0b6cff" : "#52627a", borderColor: "#dce7f5" }}>
          <Icon name="bookmark" size={16} />
        </button>
        <button className="skillnet-btn skillnet-btn-secondary" onClick={onViewDetails} style={{ flex: 1 }}>
          View Details
        </button>
        <button className="skillnet-btn skillnet-btn-primary" onClick={onApply} style={{ flex: 1 }}>
          Apply Now
        </button>
      </div>
    </div>
  );
}

function OpportunityDetailsModal({ opportunity, isSaved, onSave, onApply, onClose }) {
  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="skillnet-modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-header">
          <span className="skillnet-tag-category">{opportunity.type}</span>
          <h2>{opportunity.title}</h2>
          <p className="modal-subtitle">{opportunity.organization} • {opportunity.location}</p>
        </div>

        <div className="modal-body">
          <div style={{ background: "#eef5ff", border: "1px solid #bcd5f7", borderRadius: "12px", padding: "16px", marginBottom: "20px" }}>
            <strong style={{ color: "#0b6cff" }}>⚡ AI Match Score: {opportunity.matchScore}%</strong>
            <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#52627a" }}>Strong alignment with your expertise in {opportunity.requiredExpertise}.</p>
          </div>

          <h3 style={{ fontSize: "15px", marginBottom: "6px" }}>Overview</h3>
          <p style={{ fontSize: "14px", color: "#52627a", lineHeight: "1.6" }}>{opportunity.description}</p>

          <h3 style={{ fontSize: "15px", marginTop: "16px", marginBottom: "6px" }}>Why this opportunity matches you</h3>
          <ul style={{ fontSize: "13px", color: "#52627a", paddingLeft: "20px" }}>
            <li>✓ Expertise Match ({opportunity.requiredExpertise})</li>
            <li>✓ Experience Match (Academic Faculty)</li>
            <li>✓ Research Focus Alignment</li>
          </ul>
        </div>

        <div className="modal-footer">
          <button className="skillnet-btn skillnet-btn-secondary" onClick={onSave}>{isSaved ? "Saved" : "Save Opportunity"}</button>
          <button className="skillnet-btn skillnet-btn-primary" onClick={() => { onClose(); onApply(opportunity); }}>Apply Now</button>
        </div>
      </div>
    </div>
  );
}

function ApplyOpportunityModal({ opportunity, userProfile, onSubmit, onClose }) {
  const [motivation, setMotivation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ motivation });
  };

  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="skillnet-modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <h2>Apply for {opportunity.title}</h2>
          <p className="modal-subtitle">Submitting application to {opportunity.organization}</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-body">
          <div className="form-group">
            <label>Applicant Name</label>
            <input type="text" value={userProfile.fullName} disabled />
          </div>

          <div className="form-group">
            <label>Institution & Department</label>
            <input type="text" value={`${userProfile.institutionName} - ${userProfile.department}`} disabled />
          </div>

          <div className="form-group">
            <label>Motivation & Relevant Contribution</label>
            <textarea rows={4} value={motivation} onChange={(e) => setMotivation(e.target.value)} required placeholder="Briefly describe your objectives for this residency..." />
          </div>

          <div className="modal-footer">
            <button type="button" className="skillnet-btn skillnet-btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="skillnet-btn skillnet-btn-primary">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CertificatePreviewModal({ certificate, userProfile, onClose }) {
  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "680px", background: "#fff", color: "#07152f" }}>
        <button className="skillnet-modal-close" onClick={onClose}>✕</button>

        <div style={{ border: "8px double #bcd5f7", padding: "36px", textAlign: "center", borderRadius: "12px" }}>
          <span style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "2px", color: "#0b6cff" }}>CERTIFICATE OF COMPLETION</span>
          <h2 style={{ fontSize: "24px", margin: "16px 0 8px", fontFamily: "Space Grotesk, sans-serif" }}>{certificate.title}</h2>
          <p style={{ fontSize: "14px", color: "#52627a" }}>Proudly presented to</p>
          <h3 style={{ fontSize: "22px", color: "#07152f", margin: "4px 0 16px" }}>{userProfile.fullName}</h3>
          <p style={{ fontSize: "13px", color: "#52627a", maxWidth: "480px", margin: "0 auto 20px", lineHeight: "1.6" }}>
            For successfully completing the industry program in collaboration with <strong>{certificate.organization}</strong> on {certificate.issueDate}.
          </p>

          <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #dce7f5", fontSize: "12px", color: "#7c8ba1" }}>
            <div>ID: {certificate.certificateId}</div>
            <div>VERIFIED BY SKILLNET</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollaborationDetailsModal({ collaboration, onClose, onAddActivity }) {
  const [actTitle, setActTitle] = useState("");
  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="skillnet-modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <span className="skillnet-tag-category">{collaboration.type}</span>
          <h2>{collaboration.title}</h2>
          <p className="modal-subtitle">{collaboration.organization} • Contact: {collaboration.contactPerson}</p>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: "14px", color: "#52627a" }}>{collaboration.overview}</p>

          <h3 style={{ fontSize: "15px", marginTop: "16px" }}>Timeline Activities</h3>
          <ul style={{ fontSize: "13px", color: "#52627a" }}>
            {collaboration.upcomingActivities.map((act, i) => (
              <li key={i}>{act.date}: {act.title}</li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
            <input type="text" value={actTitle} onChange={(e) => setActTitle(e.target.value)} placeholder="New activity title..." style={{ flex: 1, padding: "8px 12px", borderRadius: "8px", border: "1px solid #dce7f5" }} />
            <button className="skillnet-btn skillnet-btn-primary" onClick={() => { if (actTitle) { onAddActivity(actTitle); setActTitle(""); } }}>Add Activity</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MeetingRoomModal({ meeting, onClose }) {
  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()} style={{ background: "#020617", color: "#fff", textAlign: "center" }}>
        <button className="skillnet-modal-close" onClick={onClose} style={{ color: "#fff", background: "#102b5c" }}>✕</button>
        
        <h2 style={{ margin: "20px 0 6px" }}>{meeting.title}</h2>
        <p style={{ color: "#7c8ba1", fontSize: "13px" }}>{meeting.organization} • Simulated Video Meeting Room</p>

        <div style={{ height: "240px", background: "#06112b", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "20px 0", border: "1px solid #102b5c" }}>
          <Icon name="video" size={48} color="#19c8ff" />
        </div>

        <button className="skillnet-btn skillnet-btn-primary" onClick={onClose} style={{ background: "#ef4444" }}>Leave Session</button>
      </div>
    </div>
  );
}

function AddNotesModal({ interaction, onSave, onClose }) {
  const [text, setText] = useState("");
  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="skillnet-modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <h2>Notes for {interaction.title}</h2>
        </div>
        <div className="modal-body">
          <textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Type notes..." style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #dce7f5" }} />
          <div className="modal-footer">
            <button className="skillnet-btn skillnet-btn-primary" onClick={() => onSave(text)}>Save Notes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EditProfileModal({ profile, onSave, onClose }) {
  const [form, setForm] = useState(profile);
  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="skillnet-modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <h2>Edit Faculty Profile</h2>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); onSave(form); }} className="modal-body">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Institution Name</label>
            <input type="text" value={form.institutionName} onChange={(e) => setForm({ ...form, institutionName: e.target.value })} />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea rows={3} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
          </div>
          <div className="modal-footer">
            <button type="submit" className="skillnet-btn skillnet-btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function UpdateProgressModal({ currentProgress, onSave, onClose }) {
  const [val, setVal] = useState(currentProgress);
  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="skillnet-modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <h2>Update Progress Percentage</h2>
        </div>
        <div className="modal-body">
          <input type="number" min="0" max="100" value={val} onChange={(e) => setVal(Number(e.target.value))} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #dce7f5" }} />
          <div className="modal-footer">
            <button className="skillnet-btn skillnet-btn-primary" onClick={() => onSave(val)}>Save Progress</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddReflectionModal({ onSave, onClose }) {
  const [text, setText] = useState("");
  return (
    <div className="skillnet-modal-overlay" onClick={onClose}>
      <div className="skillnet-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="skillnet-modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <h2>Faculty Reflection Log</h2>
        </div>
        <div className="modal-body">
          <textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="Reflect on your industry learning..." style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #dce7f5" }} />
          <div className="modal-footer">
            <button className="skillnet-btn skillnet-btn-primary" onClick={() => onSave(text)}>Record Reflection</button>
          </div>
        </div>
      </div>
    </div>
  );
}

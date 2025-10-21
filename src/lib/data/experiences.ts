import { ExperienceItem } from "../types";


export const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Web Developer",
    company: "Wireless PnC Inc.",
    period: "May 2025 - December 2025",
    description: [
      "Designed and developed responsive Single Page Applications (SPAs) using Node.js, TypeScript, and React for cleantech wireless EV charging solutions",
      "Integrated third-party APIs and implemented custom RESTful APIs with AWS-based backend infrastructure (API Gateway, Lambda, DynamoDB)",
      "Managed relational and NoSQL databases with data integrity measures and performance optimizations",
      "Optimized applications for maximum speed and performance across various devices and platforms",
    ],
    tags: ["Full Stack", "TypeScript", "React", "Node.js", "AWS", "REST APIs", "DynamoDB"],
    type: "experience",
    link: "https://wirelesspnc.com"
  },
  {
    title: "Full Stack Developer",
    company: "Plug Vancouver",
    period: "August 2022 - Present",
    description: [
      "Architected and deployed multiple high-performance full-stack web applications using Next.js, React, and Tailwind CSS, achieving 100% Core Web Vitals scores with 40% load time reduction",
      "Engineered scalable headless CMS integrations with Contentful, Sanity, and Payload CMS, implementing GraphQL queries resulting in 70% reduction in content update time",
      "Developed AI content generation system using OpenAI's GPT-4 API with custom prompt engineering, increasing content production by 300% while maintaining 95% brand accuracy",
      "Engineered scalable content management system with PostgreSQL (Supabase) featuring role-based access control",
    ],
    tags: ["Full Stack", "Next.js", "React", "TypeScript", "GraphQL", "PostgreSQL", "Large Language Models", "Vercel"],
    type: "experience",
    link: "https://plugvancouver.ca"
  },
  {
    title: "Founder and Owner",
    company: "Hightide Digital",
    period: "July 2024 - Present",
    description: [
      "Architected and deployed 12+ high-performance web applications using Next.js and React, achieving sub-1s load times and 90+ Lighthouse scores",
      "Engineered custom headless CMS solutions with Contentful, Sanity, and Payload CMS, reducing content management time by 60% for clients",
      "Developed high-performance headless Shopify stores with GraphQL for efficient product data fetching and 35% increase in conversion rates",
      "Orchestrated successful project deliveries with balanced timeline management while shipping production-ready code",
    ],
    tags: ["Full Stack", "Next.js", "React", "TypeScript", "Shopify", "GraphQL", "AWS", "Vercel"],
    type: "experience",
    link: "https://www.hightidedigital.ca"
  },
  {
    title: "ResumeLM - AI-Powered Resume Builder",
    company: "Personal Project",
    period: "2024",
    description: [
      "Architected production-grade AI resume builder using Next.js 15 and React 19 with enterprise-grade security via Supabase Row Level Security (RLS), achieving 95% user satisfaction",
      "Engineered AI content recommendation engine using OpenAI's GPT-4 and Vercel AI SDK for streaming responses, improving resume quality scores by 60% with sub-200ms response times",
      "Developed mobile-first design system using Shadcn UI and Tailwind CSS with responsive PDF generation for professional resume exports",
      "Optimized and deployed on Vercel for global edge performance with 40% faster resume creation time",
    ],
    tags: ["Next.js 15", "React 19", "TypeScript", "Large Language Models", "Supabase", "Vercel AI SDK", "Shadcn UI", "PDF Generation"],
    type: "project",
    link: "https://github.com/olyaiy/resume-lm",
    badge: "Over 1000 Users"
  },
  {
    title: "RAG-Powered AI PDF Analyzer",
    company: "Personal Project",
    period: "2024",
    description: [
      "Improved scalability by 50% using Next.js dynamic routing",
      "Implemented AWS S3 integration with sub-200ms response times",
      "Engineered a RAG-based chatbot with OpenAI API and Pinecone DB",
    ],
    tags: ["Full Stack", "Large Language Models", "AWS", "Next.js", "Python", "Machine Learning"],
    type: "project",
    link: "https://github.com/olyaiy/ai-saas"
  },
  {
    title: "Google Gemini Clone",
    company: "Personal Project",
    period: "2024",
    description: [
      "Engineered a functional replica of Google's Gemini chatbot using React.js",
      "Developed efficient REST API endpoints with AWS Lambda",
      "Implemented cross-region API communication for Canadian users",
    ],
    tags: ["Frontend", "Large Language Models", "AWS", "REST APIs", "React", "Javascript"],
    type: "project",
    link: "https://github.com/olyaiy/gemini-clone"
  },
  {
    title: "TypeGPT - OS-Level LLM Integration",
    company: "Open Source Project",
    period: "2024",
    description: [
      "Built a Python application enabling system-wide AI model access with 138+ GitHub stars",
      "Implemented support for multiple LLMs including GPT-4, Claude, Gemini, and Llama3",
      "Engineered global keyboard shortcuts and clipboard integration for seamless AI interaction",
      "Developed screenshot capability and image handling for multimodal AI interactions"
    ],
    tags: ["Python", "Large Language Models", "System Integration", "Open Source"],
    type: "project",
    link: "https://github.com/olyaiy/TypeGPT",
    badge: "138+ Stars on GitHub"
  },
  {
    title: "Term Deposit Prediction Model",
    company: "Personal Project",
    period: "2024",
    description: [
      "Developed a machine learning model to predict bank term deposit subscriptions using Python and scikit-learn",
      "Implemented comprehensive data preprocessing pipeline and feature engineering techniques",
      "Achieved improved prediction accuracy through logistic regression and cross-validation",
      "Created detailed data visualizations for exploratory analysis using matplotlib and seaborn"
    ],
    tags: ["Machine Learning", "Python", "Data Analysis"],
    type: "project",
    link: "https://github.com/olyaiy/BankMarketing-TermDeposit-Prediction"
  },
  {
    title: "Credit Card Default Prediction",
    company: "Personal Project",
    period: "2024",
    description: [
      "Developed an XGBoost model achieving 80.89% accuracy in predicting credit card defaults",
      "Implemented comprehensive data preprocessing pipeline with StandardScaler and feature encoding",
      "Optimized model performance using GridSearchCV and SMOTE for imbalanced data handling",
      "Analyzed feature importance to identify key default predictors through data visualization"
    ],
    tags: ["Machine Learning", "Python", "Data Analysis"],
    type: "project",
    link: "https://github.com/olyaiy/credit-default-prediction"
  },
  {
    title: "Neural Network Implementation from Scratch",
    company: "Personal Project",
    period: "2024",
    description: [
      "Implemented a neural network with backpropagation from scratch using Python",
      "Built comprehensive forward pass and backpropagation algorithms with MSE loss",
      "Created detailed Jupyter notebooks explaining neural network fundamentals",
      "Developed based on Andrej Karpathy's neural network principles"
    ],
    tags: ["Machine Learning", "Python", "Data Analysis"],
    type: "project",
    link: "https://github.com/olyaiy/NN-From-Scratch-With-Backprop"
  },
  {
    title: "Vancouver Housing Price Predictor",
    company: "Academic Project",
    period: "2024",
    description: [
      "Developed a K-Nearest Neighbors regression model to predict Vancouver house prices using Python",
      "Implemented data preprocessing and cross-validation to optimize model performance",
      "Achieved RMSPE of $437,251 through feature engineering and model tuning",
      "Analyzed relationship between square footage and housing prices using Kaggle dataset"
    ],
    tags: ["Machine Learning", "Python", "Data Analysis", "Statistics"],
    type: "project",
    link: "https://github.com/olyaiy/vancouver_housing_predictions"
  },
]; 
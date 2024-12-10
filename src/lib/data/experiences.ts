import { ExperienceItem } from "../types";


export const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Plug Vancouver",
    period: "August 2022 - Present",
    description: [
      "Architected and deployed a full-stack website using Next.js, React, and Tailwind CSS, achieving perfect Core Web Vitals scores",
      "Engineered a custom CMS with PostgreSQL database, enabling non-technical staff to manage content",
      "Developed an autonomous AI agent system using OpenAI's APIs for brand-aligned content generation",
    ],
    tags: ["Full Stack", "Frontend", "Large Language Models", "Next.js", "React"],
    type: "experience",
    link: "https://plugvancouver.ca"
  },
  {
    title: "Founder and Owner",
    company: "Hightide Digital",
    period: "July 2024 - Present",
    description: [
      "Architected and deployed 12+ high-performance web applications with 90+ Lighthouse scores",
      "Engineered custom headless CMS solutions with AWS S3 and Supabase",
      "Orchestrated successful project deliveries while maintaining technical excellence",
    ],
    tags: ["Full Stack", "Frontend", "Next.js", "AWS", "React", "Supabase", "PostgreSQL"],
    type: "experience",
    link: "https://www.hightidedigital.ca"
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
    title: "AI Resume Customizer",
    company: "Personal Project",
    period: "2024",
    description: [
      "Built a full-stack resume customization platform using Next.js 14 and OpenAI API",
      "Implemented secure user authentication and data management with PocketBase",
      "Developed responsive UI components using Tailwind CSS and Shadcn UI",
      "Created protected routes and server-side authentication handling"
    ],
    tags: ["Full Stack", "Large Language Models", "Next.js", "React", "Authentication"],
    type: "project",
    link: "https://github.com/olyaiy/resume-ai"
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
]; 
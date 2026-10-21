/* Edit this file to add or update portfolio projects. Keep findings factual; replace demo content with your own results. */ window.portfolioProjects = [
  
{
  id: 'sales-delivery-analytics',
  title: {
    en: 'Sales & Delivery Performance Analysis',
    ar: 'تحليل أداء المبيعات والتسليم'
  },
  description: {
    en: 'Analyze sales orders, customer segments, product color preferences, and delivery performance through an Excel dashboard.',
    ar: 'تحليل طلبات المبيعات وشرائح العملاء والألوان الأكثر مبيعًا وأداء التسليم من خلال لوحة معلومات تفاعلية باستخدام Excel.'
  },
  tools: [
    'Microsoft Excel',
    'Data Cleaning',
    'PivotTables',
    'Charts',
    'Dashboard Design'
  ],
  categories: [
    'analysis',
    'excel',
    'dashboards'
  ],
  status: 'completed',
  type: {
    en: 'Sales & Business Analysis',
    ar: 'تحليل المبيعات والأعمال'
  },
  businessProblem: {
    en: 'Understanding sales distribution and delivery performance can be difficult when order information is spread across raw data. A clear dashboard helps summarize customer segments, geographic demand, product preferences, and delivery timing.',
    ar: 'قد يكون فهم توزيع المبيعات وأداء التسليم صعبًا عندما تكون معلومات الطلبات موجودة في بيانات خام. تساعد لوحة المعلومات على تلخيص شرائح العملاء والطلب حسب المناطق وتفضيلات المنتجات ومواعيد التسليم.'
  },
  questions: {
    en: [
      'What are the total sales and total number of orders?',
    'What is the average selling price?',
    'How do sales vary across platforms?',
    'Which product is the best seller?',
    'What percentage of orders were delivered on time?',
    'What is the breakdown of delivery statuses, including cancelled and undelivered orders?',
    'Which areas have the highest number of orders?',
    'Which product colors are sold most frequently?',
    'What is the distribution of individual and company customers?'
    ],
    ar: [
      'ما إجمالي المبيعات وإجمالي عدد الطلبات؟',
    'ما متوسط سعر البيع؟',
    'كيف تتوزع المبيعات حسب المنصة؟',
    'ما المنتج الأكثر مبيعًا؟',
    'ما نسبة الطلبات التي تم تسليمها في الموعد المحدد؟',
    'ما توزيع حالات التسليم، بما يشمل الطلبات الملغاة وغير المستلمة؟',
    'ما المناطق التي لديها أكبر عدد من الطلبات؟',
    'ما الألوان الأكثر مبيعًا؟',
    'ما توزيع العملاء بين الأفراد والشركات؟'
    ]
  },
  dataset: {
    en: 'Source: MISUO sales and delivery workbook. The workbook contains order, customer, product, geographic, and delivery-related information. Validate the final record count, date range, column definitions, and data-quality notes before publishing them.',
    ar: 'المصدر: ملف بيانات مبيعات وتسليم MISUO. يحتوي الملف على معلومات مرتبطة بالطلبات والعملاء والمنتجات والمناطق والتسليم. يجب التحقق من العدد النهائي للسجلات والفترة الزمنية وتعريفات الأعمدة وملاحظات جودة البيانات قبل نشرها.'
  },
  methodology: {
    en: [
      'Reviewed the source workbook and inspected the available data fields.',
    'Cleaned and prepared the data for analysis.',
    'Calculated total sales, total orders, and average selling price.',
    'Compared sales and product performance across platforms.',
    'Identified the best-selling product based on the selected sales metric.',
    'Compared target and actual delivery dates to evaluate on-time delivery.',
    'Analyzed delivery statuses, including cancelled and undelivered orders.',
    'Used charts and summaries to analyze geographic demand, product colors, and customer segments.',
    'Organized the results into an Excel dashboard.'
    ],
    ar: [
      'مراجعة ملف البيانات الأصلي وفحص الحقول المتاحة.',
    'تنظيف البيانات وتجهيزها للتحليل.',
    'حساب إجمالي المبيعات وإجمالي الطلبات ومتوسط سعر البيع.',
    'مقارنة المبيعات وأداء المنتجات حسب المنصة.',
    'تحديد المنتج الأكثر مبيعًا وفقًا لمقياس المبيعات المستخدم.',
    'مقارنة تواريخ التسليم المستهدفة والفعلية لتقييم الالتزام بالموعد.',
    'تحليل حالات التسليم، بما يشمل الطلبات الملغاة وغير المستلمة.',
    'استخدام الرسوم والملخصات لتحليل الطلب حسب المناطق وألوان المنتجات وشرائح العملاء.',
    'تنظيم النتائج في لوحة معلومات باستخدام Excel.'
    ]
  },
  findings: {
    en: [
      'The dashboard shows order distribution across geographic areas, with some areas recording more orders than others.',
      'The color analysis compares the frequency of product colors in the available records.',
      'The customer chart displays a 72% individual and 28% company split; confirm the counting method before interpreting this as a share of unique customers.',
      'The delivery chart compares target and actual delivery timing, but its averages and categories should be validated before drawing conclusions.',
      'The dashboard can help identify areas for further investigation in sales and delivery operations.'
    ],
    ar: [
      'توضح لوحة المعلومات توزيع الطلبات على المناطق الجغرافية، مع تسجيل بعض المناطق عدد طلبات أكبر من غيرها.',
      'يقارن تحليل الألوان تكرار ألوان المنتجات في السجلات المتاحة.',
      'يعرض رسم العملاء نسبة 72% للأفراد و28% للشركات؛ يجب التأكد من طريقة العد قبل اعتبارها نسبة العملاء الفريدين.',
      'يقارن رسم التسليم بين التوقيت المستهدف والفعلي، لكن يجب التحقق من المتوسطات والفئات قبل استخلاص استنتاجات.',
      'يمكن أن تساعد لوحة المعلومات في تحديد جوانب تحتاج إلى دراسة إضافية في عمليات المبيعات والتسليم.'
    ]
  },
  deliverables: {
    en: [
      'Excel sales and delivery analysis workbook',
    'Sales KPI summary: total sales, total orders, and average selling price',
    'Sales by platform analysis',
    'Best-selling product analysis',
    'On-time delivery rate KPI',
    'Delivery status breakdown',
    'Orders by area analysis',
    'Product color sales analysis',
    'Individual versus company customer breakdown',
    'Interactive dashboard with charts and key performance indicators'
    ],
    ar: [
      'ملف Excel لتحليل المبيعات والتسليم',
    'ملخص مؤشرات المبيعات: إجمالي المبيعات والطلبات ومتوسط سعر البيع',
    'تحليل المبيعات حسب المنصة',
    'تحليل المنتج الأكثر مبيعًا',
    'مؤشر نسبة التسليم في الموعد المحدد',
    'تحليل توزيع حالات التسليم',
    'تحليل الطلبات حسب المناطق',
    'تحليل مبيعات ألوان المنتجات',
    'مقارنة الأفراد والشركات',
    'لوحة معلومات تفاعلية تحتوي على الرسوم ومؤشرات الأداء الرئيسية'
    ]
  },
  links: {
    github: 'https://github.com/Ayman55mahmoud/sales-delivery-performance-analysis',
    demo: '',
    dataset: 'https://github.com/Ayman55mahmoud/sales-delivery-performance-analysis/blob/main/miuo%20source.xlsx'
  },
  thumbnail:
  "https://raw.githubusercontent.com/Ayman55mahmoud/sales-delivery-performance-analysis/main/Screenshot%202026-10-19%20192907.png",

screenshots: [
  "https://raw.githubusercontent.com/Ayman55mahmoud/sales-delivery-performance-analysis/main/Screenshot%202026-10-19%20192907.png",
  "https://raw.githubusercontent.com/Ayman55mahmoud/sales-delivery-performance-analysis/main/Screenshot%202026-10-19%20192934.png",
  "https://raw.githubusercontent.com/Ayman55mahmoud/sales-delivery-performance-analysis/main/Screenshot%202026-10-19%20211533.png"
],
},

  
{
  id: 'employee-performance-dashboard',

  title: {
    en: 'Employee Performance Dashboard',
    ar: 'لوحة معلومات أداء الموظفين'
  },

  description: {
    en: 'An Excel dashboard designed to monitor employee performance, productivity, work quality, attendance, customer satisfaction, and revenue across departments.',
    ar: 'لوحة معلومات باستخدام Excel لمتابعة أداء الموظفين والإنتاجية وجودة العمل والحضور ورضا العملاء والإيرادات ومقارنة الأداء بين الأقسام.'
  },

  tools: [
    'Microsoft Excel',
    'Data Cleaning',
    'PivotTables',
    'Excel Formulas',
    'KPI Analysis',
    'Charts',
    'Dashboard Design'
  ],

  categories: [
    'analysis',
    'excel',
    'dashboards'
  ],

  status: 'completed',

  type: {
    en: 'HR Analytics & Performance Analysis',
    ar: 'تحليل الموارد البشرية والأداء'
  },

  businessProblem: {
    en: 'Organizations need a clear way to monitor employee productivity and understand differences in performance across employees, teams, and departments. This dashboard consolidates performance records into a visual overview to support data-driven decisions.',
    ar: 'تحتاج المؤسسات إلى طريقة واضحة لمتابعة إنتاجية الموظفين وفهم اختلافات الأداء بين الموظفين والفرق والأقسام. تجمع لوحة المعلومات سجلات الأداء في عرض مرئي يساعد على اتخاذ قرارات مبنية على البيانات.'
  },

  questions: {
    en: [
      'How many performance records are included in the dataset?',
      'How does performance change over time?',
      'How many tasks were targeted versus completed?',
      'Which employees have the highest performance scores?',
      'How does performance vary across departments?',
      'What are the average quality scores?',
      'How do attendance rates compare across employees?',
      'How satisfied are customers with employee service?',
      'How is revenue distributed across employees and locations?',
      'Which employees or departments may need further investigation?'
    ],

    ar: [
      'ما عدد سجلات الأداء الموجودة في مجموعة البيانات؟',
      'كيف يتغير الأداء بمرور الوقت؟',
      'ما الفرق بين عدد المهام المستهدفة والمهام المكتملة؟',
      'من هم الموظفون الأعلى في درجات الأداء؟',
      'كيف يختلف الأداء بين الأقسام؟',
      'ما متوسط درجات جودة العمل؟',
      'كيف تختلف معدلات الحضور بين الموظفين؟',
      'ما مستوى رضا العملاء عن الخدمة المقدمة؟',
      'كيف تتوزع الإيرادات بين الموظفين والمواقع؟',
      'ما الموظفون أو الأقسام التي قد تحتاج إلى مزيد من التحليل؟'
    ]
  },

  dataset: {
    en: 'Employee performance dataset containing 1,000 records for six employees across three departments and three locations, covering January 2024 through August 2026. Fields include dates, employee details, departments, locations, target and completed tasks, quality scores, attendance rates, customer satisfaction, revenue in AED, and performance scores.',
    ar: 'مجموعة بيانات لأداء الموظفين تحتوي على 1,000 سجل لستة موظفين موزعين على ثلاثة أقسام وثلاثة مواقع، خلال الفترة من يناير 2024 إلى أغسطس 2026. تشمل البيانات التواريخ وبيانات الموظفين والأقسام والمواقع والمهام المستهدفة والمكتملة ودرجات الجودة ومعدلات الحضور ورضا العملاء والإيرادات بالدرهم الإماراتي ودرجات الأداء.'
  },

  methodology: {
    en: [
      'Reviewed the workbook structure and data dictionary.',
      'Inspected the available fields and their business meaning.',
      'Reviewed performance records across the selected date range.',
      'Organized performance metrics for employee and department comparisons.',
      'Analyzed target tasks versus completed tasks.',
      'Compared quality, attendance, and customer satisfaction metrics.',
      'Examined revenue distribution by employee and location.',
      'Used summary tables, PivotTables, and charts to explore performance patterns.',
      'Presented key metrics and comparisons in an Excel dashboard.'
    ],

    ar: [
      'مراجعة بنية ملف Excel وقاموس البيانات.',
      'فحص الحقول المتاحة وفهم معناها في سياق العمل.',
      'مراجعة سجلات الأداء خلال الفترة الزمنية المحددة.',
      'تنظيم مؤشرات الأداء لمقارنة الموظفين والأقسام.',
      'تحليل المهام المستهدفة مقارنة بالمهام المكتملة.',
      'مقارنة مؤشرات الجودة والحضور ورضا العملاء.',
      'تحليل توزيع الإيرادات حسب الموظف والموقع.',
      'استخدام الجداول الملخصة والجداول المحورية والرسوم لاستكشاف أنماط الأداء.',
      'عرض المؤشرات والمقارنات الرئيسية في لوحة معلومات باستخدام Excel.'
    ]
  },

  findings: {
    en: [
      'The dataset supports performance analysis across six employees and three departments.',
      'Target and completed task metrics can be compared to evaluate productivity.',
      'Quality, attendance, and customer satisfaction provide additional dimensions for understanding performance.',
      'Revenue can be analyzed across employees and work locations.',
      'The dashboard can help managers identify performance patterns and areas requiring further investigation.'
    ],

    ar: [
      'تتيح البيانات تحليل الأداء عبر ستة موظفين وثلاثة أقسام.',
      'يمكن مقارنة المهام المستهدفة بالمكتملة لتقييم الإنتاجية.',
      'توفر مؤشرات الجودة والحضور ورضا العملاء أبعادًا إضافية لفهم الأداء.',
      'يمكن تحليل الإيرادات حسب الموظفين ومواقع العمل.',
      'يمكن أن تساعد لوحة المعلومات المديرين على اكتشاف أنماط الأداء والجوانب التي تحتاج إلى مزيد من الدراسة.'
    ]
  },

  deliverables: {
    en: [
      'Excel employee performance dashboard',
      'Performance KPI overview',
      'Target versus completed tasks analysis',
      'Employee performance ranking',
      'Department performance comparison',
      'Work quality analysis',
      'Attendance rate analysis',
      'Customer satisfaction analysis',
      'Revenue by employee and location analysis',
      'Visual summaries and charts for management reporting'
    ],

    ar: [
      'لوحة معلومات أداء الموظفين باستخدام Excel',
      'ملخص مؤشرات الأداء الرئيسية',
      'تحليل المهام المستهدفة مقارنة بالمكتملة',
      'ترتيب الموظفين حسب الأداء',
      'مقارنة الأداء بين الأقسام',
      'تحليل جودة العمل',
      'تحليل معدلات الحضور',
      'تحليل رضا العملاء',
      'تحليل الإيرادات حسب الموظف والموقع',
      'ملخصات مرئية ورسوم بيانية لدعم التقارير الإدارية'
    ]
  },

  links: {
    github: 'https://github.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis',
    demo: '',
    dataset: 'https://github.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis/blob/main/Employee_Performance_Dashboard_Data_1000_Rows%20(1).xlsx'
  },

  thumbnail: "https://github.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis/blob/main/Screenshot%202026-10-21%20212734.png",

  screenshots: [
   "https://github.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis/blob/main/Screenshot%202026-10-21%20210006.png",
    "https://github.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis/blob/main/Screenshot%202026-10-21%20212734.png"
  ]
},

  {
    id: 'python-exploration',
    title: {
      en: 'Python Exploratory Data Analysis',
      ar: 'التحليل الاستكشافي للبيانات باستخدام Python'
    },
    description: {
      en: 'A future project to profile a public dataset, inspect data quality, and communicate useful patterns.',
      ar: 'مشروع مستقبلي لفحص مجموعة بيانات عامة وجودتها وتوضيح الأنماط المفيدة.'
    },
    tools: [
      'Python',
      'Pandas',
      'Visualization'
    ],
    categories: [
      'analysis',
      'python'
    ],
    status: 'planned',
    type: {
      en: 'Exploratory Analysis',
      ar: 'تحليل استكشافي'
    },
    businessProblem: {
      en: 'Raw datasets can hide missing values, unusual distributions, and relationships that deserve further investigation.',
      ar: 'قد تخفي البيانات الخام قيمًا مفقودة وتوزيعات غير معتادة وعلاقات تستحق الفحص.'
    },
    questions: {
      en: [
        'What does each column represent?',
        'Which quality issues affect interpretation?',
        'What patterns are supported by the data?'
      ],
      ar: [
        'ماذا يمثل كل عمود؟',
        'ما مشكلات الجودة التي تؤثر على التفسير؟',
        'ما الأنماط التي تدعمها البيانات؟'
      ]
    },
    dataset: {
      en: 'A public dataset will be selected; its license, source, and limitations will be recorded.',
      ar: 'سيتم اختيار بيانات عامة وتسجيل الترخيص والمصدر والقيود.'
    },
    methodology: {
      en: [
        'Select a documented public dataset.',
        'Profile columns, types, missingness, and distributions.',
        'Clean with reproducible Python steps.',
        'Explore relationships using summaries and visualizations.',
        'Record conclusions and limitations.'
      ],
      ar: [
        'اختيار مجموعة بيانات عامة موثقة.',
        'فحص الأعمدة والأنواع والقيم المفقودة والتوزيعات.',
        'تنظيف البيانات بخطوات قابلة لإعادة التنفيذ في Python.',
        'استكشاف العلاقات باستخدام الملخصات والرسوم.',
        'تسجيل الاستنتاجات والقيود.'
      ]
    },
    findings: {
      en: [
        'Planned project. Findings will be added after the analysis is completed.'
      ],
      ar: [
        'مشروع مخطط له. ستضاف النتائج بعد إكمال التحليل.'
      ]
    },
    deliverables: {
      en: [
        'Reproducible notebook',
        'Data-quality summary',
        'Charts and written conclusions'
      ],
      ar: [
        'دفتر عمل قابل لإعادة التنفيذ',
        'ملخص جودة البيانات',
        'رسوم واستنتاجات مكتوبة'
      ]
    },
    links: {
      github: '',
      demo: '',
      dataset: ''
    },
    thumbnail: 'python',
    screenshots: [
      'python',
      'chart',
      'table'
    ]
  }
];
window.portfolioTranslations={
  en: {
    role: 'Data Analyst',
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navServices: 'Services',
    navContact: 'Contact',
    cv: 'Request CV ↗',
    availability: 'Open to freelance projects & junior opportunities',
    heroTitle: 'Turning Data Into<br><em>Meaningful Insights.</em>',
    heroText: "I'm Ayman Mahmoud, an aspiring Data Analyst passionate about exploring data, uncovering patterns, and transforming information into actionable business insights.",
    explore: 'Explore My Projects',
    contactMe: 'Contact Me',
    clean: 'Clean Data',
    analyze: 'Analyze',
    visualize: 'Visualize',
    value: 'Create Value',
    insight: 'Curiosity backed by data',
    statFocus: 'Curious mindset',
    statLearn: 'Always learning',
    statView: 'Business-first view',
    quote: 'Better questions. Better decisions.',
    aboutKicker: 'THE PERSON BEHIND THE DATA',
    aboutTitle: 'I turn messy information<br>into <em>clear direction.</em>',
    aboutText: "I'm building my path in data analytics by learning how to clean, explore, analyze, and communicate data in a way that helps people make better decisions. My portfolio grows with every project and every new tool I learn.",
    skillsKicker: 'MY TOOLKIT',
    skillsTitle: 'Tools for better questions.',
    skillsText: 'A growing toolkit to turn raw data into useful answers.',
    excelDesc: 'Cleaning, formulas, PivotTables and reporting.',
    sqlDesc: 'Querying, joining and exploring relational data.',
    biDesc: 'Interactive reports and business dashboards.',
    pythonDesc: 'Exploratory analysis and data preparation.',
    learningDone: 'Learned · Building projects',
    learningNext: 'Learning roadmap',
    skillsNote: 'Skills are shown honestly: completed learning, active practice, and future goals are clearly distinguished.',
    workKicker: 'SELECTED WORK',
    projectsTitle: 'Projects with a purpose.',
    projectsSubtitle: 'Practical analysis. Clear process. Business-focused thinking.',
    caseStudies: 'PROJECTS / CASE STUDIES',
    filterAll: 'All work',
    filterDash: 'Dashboards',
    projectNote: 'Project details are designed to document the real dataset, approach, findings, and deliverables. Demo content is labeled clearly until replaced with completed work.',
    servicesKicker: 'HOW I CAN HELP',
    servicesTitle: 'Make data easier to use.',
    servicesText: 'Entry-level support for practical data tasks, with clear communication and careful delivery.',
    service1: 'Data cleaning',
    service1d: 'Organize spreadsheets, identify inconsistencies, and prepare data for analysis.',
    service2: 'Exploratory analysis',
    service2d: 'Summarize trends, compare categories, and answer focused business questions.',
    service3: 'Reports & dashboards',
    service3d: 'Present key metrics in a clean, understandable report or dashboard.',
    contactKicker: "LET'S CONNECT",
    contactTitle: 'Have data to explore?<br><em>Let\'s talk.</em>',
    contactText: 'Open to junior opportunities, collaborations, and freelance projects that help turn data into decisions.',
    contactDirect: 'DIRECT CONTACT',
    location: 'Mit Ghamr, Dakahlia, Egypt',
    footer: 'Built with curiosity, improved with every project.',
    backTop: 'Back to top ↑',
    backProjects: 'Back to projects',
    overview: 'Overview',
    problem: 'Business problem',
    objectives: 'Objectives & questions',
    dataset: 'Dataset',
    methodology: 'Methodology',
    screenshots: 'Screenshots',
    findings: 'Key findings',
    deliverables: 'Deliverables & recommendations',
    projectLinks: 'Project links',
    toolsTech: 'Tools & technologies',
    viewCase: 'View case study',
    completed: 'Completed',
    progress: 'In progress',
    planned: 'Planned',
    noLink: 'Add link in js/data.js',
    github: 'GitHub repository',
    demo: 'Live demo',
    datasetLink: 'Dataset source',
    datasetHint: 'Dataset notes and data-quality considerations',
    tools: 'Tools'
  },
  ar: {
    role: 'محلل بيانات',
    navHome: 'الرئيسية',
    navAbout: 'عني',
    navSkills: 'المهارات',
    navProjects: 'المشاريع',
    navServices: 'الخدمات',
    navContact: 'تواصل معي',
    cv: 'اطلب السيرة الذاتية ↗',
    availability: 'متاح لمشاريع العمل الحر وفرص المبتدئين',
    heroTitle: 'أحوّل البيانات إلى<br><em>رؤى لها معنى.</em>',
    heroText: 'أنا أيمن محمود، محلل بيانات مبتدئ مهتم باستكشاف البيانات واكتشاف الأنماط وتحويل المعلومات إلى رؤى تساعد على اتخاذ قرارات أفضل.',
    explore: 'استكشف مشاريعي',
    contactMe: 'تواصل معي',
    clean: 'تنظيف البيانات',
    analyze: 'التحليل',
    visualize: 'التصور البصري',
    value: 'صناعة قيمة',
    insight: 'فضول مدعوم بالبيانات',
    statFocus: 'عقلية فضولية',
    statLearn: 'تعلم مستمر',
    statView: 'فهم احتياجات العمل',
    quote: 'أسئلة أفضل. قرارات أفضل.',
    aboutKicker: 'الشخص وراء البيانات',
    aboutTitle: 'أحوّل المعلومات المبعثرة<br>إلى <em>رؤية واضحة.</em>',
    aboutText: 'أبني مساري في تحليل البيانات من خلال تعلم تنظيف البيانات واستكشافها وتحليلها وعرضها بطريقة تساعد على اتخاذ قرارات أفضل. يتطور معرض أعمالي مع كل مشروع وكل أداة جديدة أتعلمها.',
    skillsKicker: 'أدواتي',
    skillsTitle: 'أدوات لأسئلة أفضل.',
    skillsText: 'مجموعة أدوات تتطور لتحويل البيانات الخام إلى إجابات مفيدة.',
    excelDesc: 'تنظيف البيانات والمعادلات والجداول المحورية والتقارير.',
    sqlDesc: 'الاستعلام والربط واستكشاف قواعد البيانات العلائقية.',
    biDesc: 'تقارير تفاعلية ولوحات مؤشرات للأعمال.',
    pythonDesc: 'التحليل الاستكشافي وتجهيز البيانات.',
    learningDone: 'تم التعلم · بناء مشاريع',
    learningNext: 'ضمن خطة التعلم',
    skillsNote: 'نعرض المهارات بوضوح: ما تم تعلمه والتدرب عليه وما هو ضمن الأهداف المستقبلية.',
    workKicker: 'أعمال مختارة',
    projectsTitle: 'مشاريع لها هدف.',
    projectsSubtitle: 'تحليل عملي، وخطوات واضحة، وتركيز على احتياجات العمل.',
    caseStudies: 'مشاريع / دراسات حالة',
    filterAll: 'كل المشاريع',
    filterDash: 'لوحات المؤشرات',
    projectNote: 'تفاصيل كل مشروع مخصصة لتوثيق البيانات والمنهجية والنتائج والمخرجات الحقيقية. المحتوى التجريبي موضح لحين استبداله بمشاريع مكتملة.',
    servicesKicker: 'كيف يمكنني المساعدة',
    servicesTitle: 'اجعل البيانات أسهل استخدامًا.',
    servicesText: 'مساعدة في مهام البيانات العملية بمستوى مبتدئ، مع تواصل واضح وتنفيذ دقيق.',
    service1: 'تنظيف البيانات',
    service1d: 'تنظيم الجداول واكتشاف التناقضات وتجهيز البيانات للتحليل.',
    service2: 'التحليل الاستكشافي',
    service2d: 'تلخيص الاتجاهات ومقارنة الفئات والإجابة عن أسئلة العمل.',
    service3: 'التقارير ولوحات المؤشرات',
    service3d: 'عرض المقاييس المهمة في تقرير أو لوحة مؤشرات واضحة.',
    contactKicker: 'لنتواصل',
    contactTitle: 'لديك بيانات تريد فهمها؟<br><em>لنتحدث.</em>',
    contactText: 'مهتم بفرص المبتدئين والتعاون ومشاريع العمل الحر التي تحول البيانات إلى قرارات.',
    contactDirect: 'تواصل مباشر',
    location: 'ميت غمر، الدقهلية، مصر',
    footer: 'فضول يقودني، وكل مشروع يطورني.',
    backTop: 'للأعلى ↑',
    backProjects: 'العودة للمشاريع',
    overview: 'نظرة عامة',
    problem: 'مشكلة العمل',
    objectives: 'الأهداف والأسئلة',
    dataset: 'مجموعة البيانات',
    methodology: 'المنهجية',
    screenshots: 'صور المشروع',
    findings: 'أهم النتائج',
    deliverables: 'المخرجات والتوصيات',
    projectLinks: 'روابط المشروع',
    toolsTech: 'الأدوات والتقنيات',
    viewCase: 'عرض دراسة الحالة',
    completed: 'مكتمل',
    progress: 'قيد التنفيذ',
    planned: 'مخطط له',
    noLink: 'أضف الرابط في js/data.js',
    github: 'مستودع GitHub',
    demo: 'عرض مباشر',
    datasetLink: 'مصدر البيانات',
    datasetHint: 'ملاحظات البيانات واعتبارات الجودة',
    tools: 'الأدوات'
  }
};

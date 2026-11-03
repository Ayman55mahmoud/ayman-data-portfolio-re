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
//https://github.com/Ayman55mahmoud/sales-delivery-performance-analysis/blob/main/Misuo%20Dashboard%20Sales%20Insights.png

  thumbnail:
  "https://raw.githubusercontent.com/Ayman55mahmoud/sales-delivery-performance-analysis/main/Misuo%20Dashboard%20Sales%20Insights.png",

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
//https://github.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis/blob/main/Employee%20Performance%20Dashboard%20Banner.png
  
thumbnail: "https://raw.githubusercontent.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis/main/Employee%20Performance%20Dashboard%20Banner.png",

screenshots: [
  "https://raw.githubusercontent.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis/main/Screenshot%202026-10-21%20210006.png",
  "https://raw.githubusercontent.com/Ayman55mahmoud/HR-Analytics-Performance-Analysis/main/Screenshot%202026-10-21%20212734.png"
]

},

  {
  id: 'power-bi-sales-dashboard',

  title: {
    en: 'Sales Performance Dashboard',
    ar: 'لوحة معلومات أداء المبيعات'
  },

  description: {
    en: 'An interactive Power BI dashboard designed to analyze sales performance, profitability, quantity, customer trends, product categories, monthly sales, and regional performance through dynamic visualizations and interactive analysis features.',
    ar: 'لوحة معلومات تفاعلية باستخدام Power BI لتحليل أداء المبيعات والأرباح والكميات واتجاهات العملاء والمبيعات حسب الفئات والأشهر والمناطق، مع مجموعة من الخصائص التفاعلية للتحليل المتقدم.'
  },

  tools: [
    'Microsoft Power BI',
    'Power Query',
    'DAX',
    'Data Modeling',
    'Data Cleaning',
    'Data Modeling',
    'Data Visualization',
    'Dashboard Design'
  ],

  categories: [
    'analysis',
    'powerbi',
    'dashboards'
  ],

  status: 'completed',

  type: {
    en: 'Sales & Business Intelligence Analysis',
    ar: 'تحليل المبيعات وذكاء الأعمال'
  },

  businessProblem: {
    en: 'Understanding sales performance can be difficult when business data is distributed across different dimensions such as time, products, customers, and regions. An interactive Power BI dashboard provides a clear visual overview of key performance indicators and allows users to explore trends, compare results, and investigate detailed sales information.',
    ar: 'قد يكون فهم أداء المبيعات صعبًا عندما تكون البيانات موزعة على أبعاد مختلفة مثل الوقت والمنتجات والعملاء والمناطق. توفر لوحة معلومات تفاعلية باستخدام Power BI رؤية واضحة لمؤشرات الأداء الرئيسية، مع إمكانية استكشاف الاتجاهات ومقارنة النتائج والوصول إلى تفاصيل المبيعات.'
  },

  questions: {
    en: [
      'What are the total sales, total profit, and total quantity?',
      'How does sales performance change over time?',
      'How does sales performance compare year over year?',
      'Which product categories generate the highest sales?',
      'Which regions contribute the most to total sales?',
      'How does customer count change across years?',
      'Which months have the highest sales?',
      'How can users explore detailed information for selected data points?',
      'How can users analyze different scenarios using What-if Analysis?',
      'How can interactive tooltips provide additional information without leaving the dashboard?'
    ],

    ar: [
      'ما إجمالي المبيعات وإجمالي الأرباح وإجمالي الكمية؟',
      'كيف يتغير أداء المبيعات بمرور الوقت؟',
      'كيف تتم مقارنة أداء المبيعات سنة بسنة؟',
      'ما الفئات التي تحقق أعلى مبيعات؟',
      'ما المناطق التي تساهم بأكبر نسبة من إجمالي المبيعات؟',
      'كيف يتغير عدد العملاء عبر السنوات؟',
      'ما الأشهر التي تحقق أعلى مبيعات؟',
      'كيف يمكن الوصول إلى تفاصيل البيانات الخاصة بعنصر محدد؟',
      'كيف يمكن تحليل السيناريوهات المختلفة باستخدام What-if Analysis؟',
      'كيف تساعد Tooltips التفاعلية في عرض معلومات إضافية داخل لوحة المعلومات؟'
    ]
  },

  dataset: {
    en: 'Source: Sales dataset used to build the Power BI dashboard. The dataset contains sales-related information used to analyze sales, profit, quantity, customers, categories, time periods, and regions.',
    ar: 'المصدر: مجموعة بيانات المبيعات المستخدمة في إنشاء لوحة المعلومات باستخدام Power BI. تحتوي البيانات على معلومات مرتبطة بالمبيعات والأرباح والكميات والعملاء والفئات والفترات الزمنية والمناطق.'
  },

  methodology: {
    en: [
      'Reviewed the source dataset and inspected the available fields.',
      'Cleaned and transformed the data using Power Query.',
      'Prepared the data model for analysis in Power BI.',
      'Created DAX measures for key sales and performance metrics.',
      'Calculated total sales, total profit, and total quantity.',
      'Analyzed sales performance across product categories and regions.',
      'Analyzed monthly sales trends and customer counts over time.',
      'Implemented Year-over-Year (YoY) analysis to compare performance across years.',
      'Created What-if Analysis to allow users to explore different scenarios.',
      'Implemented Drillthrough functionality for detailed analysis of selected data.',
      'Created custom Tooltips to display additional information interactively.',
      'Added interactive Buttons to improve dashboard navigation and user experience.',
      'Organized the analysis into an interactive Power BI dashboard.'
    ],

    ar: [
      'مراجعة مجموعة البيانات الأصلية وفحص الحقول المتاحة.',
      'تنظيف وتحويل البيانات باستخدام Power Query.',
      'تجهيز نموذج البيانات للتحليل داخل Power BI.',
      'إنشاء مقاييس DAX لمؤشرات المبيعات والأداء الرئيسية.',
      'حساب إجمالي المبيعات وإجمالي الأرباح وإجمالي الكمية.',
      'تحليل أداء المبيعات حسب الفئات والمناطق.',
      'تحليل اتجاه المبيعات الشهرية وعدد العملاء عبر الوقت.',
      'تطبيق تحليل Year-over-Year (YoY) لمقارنة الأداء بين السنوات.',
      'تطبيق What-if Analysis للسماح بتحليل السيناريوهات المختلفة.',
      'تطبيق Drillthrough للوصول إلى تفاصيل إضافية للبيانات المحددة.',
      'إنشاء Tooltips تفاعلية لعرض معلومات إضافية داخل لوحة المعلومات.',
      'إضافة Buttons تفاعلية لتحسين التنقل وتجربة المستخدم.',
      'تنظيم النتائج في لوحة معلومات تفاعلية باستخدام Power BI.'
    ]
  },

  findings: {
    en: [
      'The dashboard reports total sales of 2.30M.',
      'Total profit is 286.40K.',
      'Total quantity is 38K.',
      'Technology is the highest-selling category among the displayed categories.',
      'Sales performance varies across regions.',
      'Monthly sales analysis highlights changes in sales performance throughout the year.',
      'Year-over-Year analysis provides a dynamic comparison of sales performance across different years.',
      'Interactive features allow users to explore the data from multiple perspectives.'
    ],

    ar: [
      'توضح لوحة المعلومات أن إجمالي المبيعات يبلغ 2.30M.',
      'يبلغ إجمالي الأرباح 286.40K.',
      'يبلغ إجمالي الكمية 38K.',
      'تُعد فئة Technology الأعلى مبيعًا ضمن الفئات الظاهرة في لوحة المعلومات.',
      'يختلف أداء المبيعات بين المناطق المختلفة.',
      'يوضح تحليل المبيعات الشهرية تغير أداء المبيعات خلال العام.',
      'يوفر تحليل Year-over-Year مقارنة ديناميكية لأداء المبيعات بين السنوات المختلفة.',
      'تتيح الخصائص التفاعلية استكشاف البيانات من أكثر من منظور.'
    ]
  },

  deliverables: {
    en: [
      'Interactive Power BI Sales Dashboard',
      'Sales KPI analysis',
      'Profit analysis',
      'Quantity analysis',
      'Sales by category analysis',
      'Sales by region analysis',
      'Monthly sales trend analysis',
      'Customer trend analysis',
      'Year-over-Year (YoY) analysis',
      'What-if Analysis',
      'Drillthrough functionality',
      'Interactive Tooltips',
      'Interactive Buttons and navigation',
      'Dynamic visualizations and filters'
    ],

    ar: [
      'لوحة معلومات تفاعلية للمبيعات باستخدام Power BI',
      'تحليل مؤشرات المبيعات الرئيسية',
      'تحليل الأرباح',
      'تحليل الكميات',
      'تحليل المبيعات حسب الفئات',
      'تحليل المبيعات حسب المناطق',
      'تحليل اتجاه المبيعات الشهرية',
      'تحليل اتجاه العملاء',
      'تحليل Year-over-Year (YoY)',
      'تحليل What-if',
      'خاصية Drillthrough',
      'Tooltips تفاعلية',
      'Buttons تفاعلية والتنقل بين الصفحات',
      'رسوم بيانية وفلاتر تفاعلية'
    ]
  },

  links: {
    github: 'https://github.com/Ayman55mahmoud/super-Store-sales/tree/main',
    demo: '',
    dataset: 'https://github.com/Ayman55mahmoud/super-Store-sales/blob/main/project%201.pbix'
  },

  // Add your GitHub image URL here
  //https://github.com/Ayman55mahmoud/super-Store-sales/blob/main/Excel%20to%20Power%20BI%20Dashboard.png
  thumbnail: 'https://raw.githubusercontent.com/Ayman55mahmoud/super-Store-sales/main/Power%20BI%20Sales%20Dashboard%20Banner.png',

  screenshots: [
    'https://raw.githubusercontent.com/Ayman55mahmoud/super-Store-sales/main/Screenshot%202026-11-03%20131813.png',
    'https://raw.githubusercontent.com/Ayman55mahmoud/super-Store-sales/main/Screenshot%202026-11-03%20131743.png',
    'https://raw.githubusercontent.com/Ayman55mahmoud/super-Store-sales/main/Screenshot%202026-11-03%20131907.png',
    'https://raw.githubusercontent.com/Ayman55mahmoud/super-Store-sales/main/Screenshot%202026-11-03%20132109.png'
  ]
},
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

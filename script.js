// Language configuration
const LANGUAGES = {
    en: {
        code: 'en',
        name: 'English',
        flag: '🇬🇧'
    },
    hi: {
        code: 'hi',
        name: 'हिंदी',
        flag: '🇮🇳'
    }
};

// Translations
const TRANSLATIONS = {
    en: {
        home: "Home",
        resources: "Resources",
        courses: "Courses",
        aboutUs: "About Us",
        ourCenters: "Our Centers",
        studyMaterials: "Study Materials",
        previousYearPapers: "Previous Year Papers",
        currentAffairs: "Current Affairs",
        essayWriting: "Essay Writing",
        slogan: "Empowering Future Civil Servants",
        socialMedia: "Social Media",
        selectLanguage: "Select Language / भाषा चुनें",
        connectWithUs: "Connect With Us",
        aboutUs: "About Us",
        ourVision: "Our Vision",
        ourMission: "Our Mission",
        directorMessage: "Director's Message",
        ourTeam: "Our Team",
        courses: "Courses",
        upscCourses: "UPSC Courses",
        bpscCourses: "BPSC Courses",
        optionalSubjects: "Optional Subjects",
        foundationCourse: "Foundation Course",
        testSeries: "Test Series",
        resources: "Resources",
        studyMaterials: "Study Materials",
        previousYearPapers: "Previous Year Papers",
        currentAffairs: "Current Affairs",
        essayWriting: "Essay Writing",
        dailyNewsPaper: "Daily News Analysis",
        mockTests: "Mock Tests",
        results: "Results",
        successStories: "Success Stories",
        testimonials: "Testimonials",
        rankHolders: "Rank Holders",
        gallery: "Gallery",
        contact: "Contact",
        enrollment: "Enroll Now",
        yearsExperience: "11 Years of Excellence",
        heroTitle: "Shape Your Future in Civil Services",
        heroSubtitle: "With Expert Guidance",
        instituteRanking: "Ranked #7 Among Top IAS Coaching Centers in Jalandhar",
        expertFaculty: "Expert Faculty",
        studyMaterial: "Comprehensive Study Material",
        batchSize: "Small Batch Size",
        exploreCourses: "Explore Courses",
        contactUs: "Contact Us",
        yearsExp: "Years Experience",
        rankedInstitute: "Ranked Institute",
        specializedCourses: "Specialized Courses",
        scrollExplore: "Scroll to explore",
        aboutUsSubtitle: "About Us",
        aboutTitle: "Leading IAS/PCS Coaching Institute in Jalandhar",
        aboutDescription: "Competition Hackers is a premier civil services coaching institute with 11 years of excellence in shaping future civil servants. As the #7 ranked IAS coaching center in Jalandhar, we pride ourselves on our comprehensive approach to UPSC and state services preparation.",
        rankNumber: "Rank #7",
        inJalandhar: "In Jalandhar",
        ofExcellence: "Of Excellence",
        smallBatches: "Small Batches",
        personalAttention: "Personal Attention",
        expertFacultyTitle: "Expert Faculty",
        expertFacultyDesc: "Learn from industry specialists with proven track record",
        standardMaterialTitle: "Standard Material",
        standardMaterialDesc: "Comprehensive study materials covering advanced topics",
        flexibleScheduleTitle: "Flexible Schedule",
        flexibleScheduleDesc: "Separate batches for students and professionals",
        regularAssessmentTitle: "Regular Assessment",
        regularAssessmentDesc: "Build knowledge through tests and evaluations",
        benefitsTitle: "Benefits of Joining Competition Hackers Academy",
        industryExpertsTitle: "Industry Experts",
        industryExpertsDesc: "Gain insights from experienced faculty members",
        systematicCurriculumTitle: "Systematic Curriculum",
        systematicCurriculumDesc: "Well-developed and planned study program",
        smallBatchSizeTitle: "Small Batch Size",
        smallBatchSizeDesc: "Personalized attention for better learning",
        interactiveLearningTitle: "Interactive Learning",
        interactiveLearningDesc: "Regular discussions and doubt clearing sessions",
        flexibleScheduleTitle: "Flexible Schedule",
        flexibleScheduleDesc: "Convenient timing for different groups",
        competitiveFeesTitle: "Competitive Fees",
        competitiveFeesDesc: "Quality education at affordable rates",
        latestVideos: "Live & Latest Videos",
        stayUpdated: "Stay updated with our expert faculty lectures and current affairs analysis",
        featured: "Featured",
        strategySession: "UPSC CSE 2024 Complete Strategy Session",
        live: "LIVE",
        latest: "Latest",
        watching: "watching",
        currentAffairsAnalysis: "Daily Current Affairs Analysis",
        indianEconomy: "Indian Economy Master Class",
        today: "Today",
        yesterday: "Yesterday",
        whatsNew: "What's New",
        civilServicesUpdates: "Latest updates from the world of civil services",
        minRead: "min read",
        readFullArticle: "Read Full Article",
        ourPrograms: "Our Programs",
        comprehensivePreparation: "Comprehensive UPSC Preparation",
        choosePrograms: "Choose from our specially designed courses to achieve your dream of becoming a Civil Servant",
        mostPopular: "Most Popular",
        gsFoundationCourse: "GS Foundation Course",
        comprehensiveStudyMaterial: "Comprehensive Study Material",
        regularMockTests: "Regular Mock Tests",
        dailyAnswerWriting: "Daily Answer Writing",
        currentAffairsClasses: "Current Affairs Classes",
        duration: "Duration",
        courseDetails: "Course Details",
        optionalSubjectsTitle: "Optional Subjects",
        subjectSpecificMaterial: "Subject Specific Material",
        expertFacultyFeature: "Expert Faculty",
        previousYearAnalysis: "Previous Year Analysis",
        topicWiseTests: "Topic-wise Tests",
        interviewPreparation: "Interview Preparation",
        mockInterviews: "Mock Interviews",
        personalityDevelopment: "Personality Development",
        dafAnalysis: "DAF Analysis",
        expertGuidance: "Expert Guidance",
        onlineSupport: "Online Support",
        twentyFourSeven: "24/7 doubt resolution",
        performanceTracking: "Performance Tracking",
        progressMonitoring: "Regular progress monitoring",
        eliteExpert: "Meet Our Expert",
        learnFromBest: "Learn from the Best",
        mentorDescription: "Get mentored by experienced civil servants who understand the journey",
        yearsOfExperience: "Years of Experience",
        ipsMentor: "IPS/IAS Mentor",
        mentorBio: "A distinguished civil servant and dedicated mentor, Samraat Sir brings years of invaluable experience in guiding UPSC aspirants. His unique teaching methodology and deep understanding of civil services have helped numerous students achieve their dreams.",
        expertGuidanceTitle: "Expert Guidance",
        personalizedMentoring: "Personalized mentoring approach",
        strategicPlanning: "Strategic Planning",
        provenStrategies: "Proven preparation strategies",
        successRate: "Success Rate",
        exceptionalResults: "Exceptional student results",
        mentorQuote: "Success in UPSC is not just about hard work, it's about smart work and the right guidance.",
        getInTouch: "Get in Touch",
        contactUs: "Contact Us",
        contactDescription: "Have questions? We're here to help you achieve your UPSC dreams",
        sendMessage: "Send us a Message",
        formDescription: "Fill out the form below, and we'll get back to you shortly",
        yourName: "Your Name",
        yourEmail: "Your Email",
        phoneNumber: "Phone Number",
        subject: "Subject",
        selectSubject: "Select Subject",
        admission: "Admission Enquiry",
        coursesEnquiry: "Courses Enquiry",
        other: "Other",
        message: "Your Message",
        visitUs: "Visit Us",
        contactDetails: "Contact Details",
        workingHours: "Working Hours",
        monFri: "Monday - Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed",
        followUs: "Follow Us",
        
        // App Section Translations
        mobileApp: "Mobile App",
        getOurApp: "Get Our UPSC Preparation App",
        appDescription: "COMPETITION HACKERS IAS/PCS ACADEMY brings you a comprehensive mobile platform for seamless learning management. Experience the perfect blend of modern technology and education excellence.",
        attendanceTracking: "Smart Attendance Tracking System",
        feesManagement: "Integrated Fees Management",
        homeworkSubmission: "Digital Homework Submission Portal",
        performanceAnalytics: "Advanced Performance Analytics",
        smartNotifications: "Instant Updates & Smart Notifications",
        getItOnPlayStore: "Get it on Google Play",
        downloads: "Downloads",
        rating: "Rating",
        appScreenshots: "App Screenshots",
        
        // Testimonials Section Translations
        testimonials: "Testimonials",
        whatStudentsSay: "What Our Students Say",
        testimonialDescription: "Hear from our successful students who transformed their UPSC journey with us",
        studentSuccess: "Student Success Story",
        topperQuote: "Under Samraat Sir's guidance at Competition Hackers, I found the perfect blend of strategic preparation and personalized mentoring. The institute's approach to UPSC preparation is unique and effective.",
        studentName: "Mannat Gupta",
        studentBatch: "UPSC CSE 2023 Batch",
        instructorTestimonial: "Mentor's Message",
        samraatMessage: "At Competition Hackers, we believe in nurturing not just aspirants, but future leaders. Our commitment goes beyond coaching - we build careers and shape personalities.",
        samraatDesignation: "IPS/IAS Mentor, Competition Hackers",
        instituteHighlight: "Leading UPSC Coaching in Jalandhar",
        yearsTeaching: "Years of Teaching Excellence",
        successfulStudents: "Successful Students",
        expertFaculty: "Expert Faculty Members",
        readMoreTestimonials: "Read More Success Stories",
        
        // Additional Testimonials
        abhisarQuote: "The structured approach and daily current affairs sessions at Competition Hackers helped me build a strong foundation. Samraat Sir's guidance was invaluable throughout my preparation.",
        abhisarName: "Abhisar Sharma",
        abhisarBatch: "UPSC CSE 2023 Batch",
        
        rahulQuote: "What sets Competition Hackers apart is their personalized attention and comprehensive study material. The mock tests and answer writing practice sessions were game-changers for me.",
        rahulName: "Rahul Kumar",
        rahulBatch: "UPSC CSE 2022 Batch",
        
        rohitQuote: "The faculty's dedication and Samraat Sir's mentorship made complex topics easy to understand. The institute's innovative teaching methods and regular doubt clearing sessions were extremely helpful.",
        rohitName: "Rohit Singh",
        rohitBatch: "UPSC CSE 2023 Batch"
    },
    hi: {
        home: "होम",
        resources: "संसाधन",
        courses: "पाठ्यक्रम",
        aboutUs: "हमारे बारे में",
        ourCenters: "हमारे केंद्र",
        studyMaterials: "अध्ययन सामग्री",
        previousYearPapers: "पिछले वर्ष के पेपर्स",
        currentAffairs: "���रंट अफेयर्स",
        essayWriting: "निबंध लेखन",
        slogan: "भविष्य के सिविल सेवकों को सशक्त बनाना",
        socialMedia: "सोशल मीडिया",
        selectLanguage: "Select Language / भाषा चुनें",
        connectWithUs: "हमसे जुड़ें",
        aboutUs: "हमारे बारे में",
        ourVision: "हमारी दृष्टि",
        ourMission: "हमारा लक्ष्य",
        directorMessage: "निदेशक का संदेश",
        ourTeam: "हमारी टीम",
        courses: "पाठ्यक्रम",
        upscCourses: "यूपीएससी पाठ्यक्रम",
        bpscCourses: "बीपीएससी पाठ्यक्रम",
        optionalSubjects: "वैकल्पिक विषय",
        foundationCourse: "फाउंडेशन कोर्स",
        testSeries: "टेस्ट सीरीज",
        resources: "संसाधन",
        studyMaterials: "अध्ययन सामग्री",
        previousYearPapers: "पिछले वर्ष के पेपर्स",
        currentAffairs: "करंट अफेयर्स",
        essayWriting: "निबंध लेखन",
        dailyNewsPaper: "दैनिक समाचार विश्लेषण",
        mockTests: "मॉक टेस्ट",
        results: "परिणाम",
        successStories: "सफलता की कहानियां",
        testimonials: "प्रशंसापत्र",
        rankHolders: "रैंक होल्डर्स",
        gallery: "गैलरी",
        contact: "संपर्क",
        enrollment: "अभी एडमिशन लें",
        yearsExperience: "११ वर्षों की उत्कृष्टता",
        heroTitle: "सिविल सेवाओं में अपना भविष्य बनाएं",
        heroSubtitle: "विशषज्ञ मार्गदर्शन से साथ",
        instituteRanking: "जालंधर में शीर्ष IAS कोचिंग केंद्रों में #७ रैंक",
        expertFaculty: "विशेषज्ञ संकाय",
        studyMaterial: "व्यापक अध्ययन सामग्री",
        batchSize: "छोटा बैच साइज़",
        exploreCourses: "पाठ्यक्रम देखें",
        contactUs: "संपर्क करें",
        yearsExp: "वर्षों का अनुभव",
        rankedInstitute: "रैंक प्राप्त संस्थान",
        specializedCourses: "विशेष पाठ्यक्रम",
        scrollExplore: "और जानने के लिए स्क्रॉल करें",
        aboutUsSubtitle: "हमारे बारे में",
        aboutTitle: "जालंधर में अग्रणी IAS/PCS कोचिंग संस्थान",
        aboutDescription: "कॉम्पिटीशन हैकर्स एक प्रमुख सिविल सेवा कोचिंग संस्थान है, जिसे भविष्य के सिविल सेवकों को तैयार करने में 11 वर्षो की उत्कृष्टता प्राप्त है। जालंधर में #७ रैंक वाले IAS कोचिंग सेंटर के रूप में, हम UPSC और राज्य सेवाओं की तैयारी के लिए अपने व्यापक दृष्टिकोण पर गर्व करते हैं।",
        rankNumber: "रैंक #७",
        inJalandhar: "जालंधर में",
        ofExcellence: "की उत्कृष्टता",
        smallBatches: "छोटे बैच",
        personalAttention: "व्यक्तिगत ध्यान",
        expertFacultyTitle: "विशेषज्ञ संकाय",
        expertFacultyDesc: "सिद्ध ट्रैक रिकॉर्ड वाले उद्योग विशेषज्ञों से सीखें",
        standardMaterialTitle: "मानक सामग्री",
        standardMaterialDesc: "उन्नत विषयों को कवर करने वाली व्यापक अध्ययन सामग्री",
        flexibleScheduleTitle: "लचीला कार्यक्रम",
        flexibleScheduleDesc: "छात्रों और पेश��वरों के लिए अलग-अलग बैच",
        regularAssessmentTitle: "नियमित मूल्यांकन",
        regularAssessmentDesc: "परीक्षण और मूल्यांकन के माध्यम से ज्ञान का निर्माण",
        benefitsTitle: "कॉम्पिटीशन हैकर्स अकादमी में शामिल होने के लाभ",
        industryExpertsTitle: "उद्योग विशेषज्ञ",
        industryExpertsDesc: "अनुभवी संकाय सदस्यों से अंतर्दृष्टि प्राप्त करें",
        systematicCurriculumTitle: "व्यवस्थित पाठ्यक्रम",
        systematicCurriculumDesc: "अच्छी तरह से विकसित और योजनाबद्ध अध्ययन कार्यक्रम",
        smallBatchSizeTitle: "छोटा बैच साइज़",
        smallBatchSizeDesc: "बेहतर सीखने के लिए व्यक्तिगत ध्यान",
        interactiveLearningTitle: "इंटरैक्टिव लर्निंग",
        interactiveLearningDesc: "नियमित चर्चाएं और संदेह समाधान से अपडेट रहें",
        flexibleScheduleTitle: "लचीला कार्यक्रम",
        flexibleScheduleDesc: "विभिन्न समूहों के लिए सुविधाजनक समय",
        competitiveFeesTitle: "प्रतिस्पर्धी फीस",
        competitiveFeesDesc: "किफायती दरों पर गुणवत्तापूर्ण शिक्षा",
        latestVideos: "लाइव और नवीनतम वीडियो",
        stayUpdated: "हमारे विशेषज्ञ संकाय व्याख्यान और करंट अफेयर्स विश्लेषण से अपडेट रहें",
        featured: "विशेष",
        strategySession: "यूपीएससी सीएसई 2024 पूर्ण रणनीति सत्र",
        live: "लाइव",
        latest: "नवीनतम",
        watching: "देख रहे हैं",
        currentAffairsAnalysis: "दैनिक करंट अफेयर्स विश्लेषण",
        indianEconomy: "भारतीय अर्थव्यवस्था मास्टर क्लास",
        today: "आज",
        yesterday: "कल",
        whatsNew: "नया आजा है",
        civilServicesUpdates: "सिविल सेवाओं की दुनिया से नवीनतम अपडेट",
        minRead: "मिनट का पढ़ना",
        readFullArticle: "पूरा लेख पढ़ें",
        ourPrograms: "हमारे पाठ्यक्रम",
        comprehensivePreparation: "व्यापक यूपीएससी तैयारी",
        choosePrograms: "सिविल सेवक बनने का अपना सपना साकार करने के लिए हमारे विशेष रूप से डिज़ाइन किए गए पाठ्यक्रमों में से चुनें",
        mostPopular: "सबसे लोकप्रिय",
        gsFoundationCourse: "सामान्य अध्ययन फाउंडेशन कोर्स",
        comprehensiveStudyMaterial: "व्यापक अध्ययन सामग्री",
        regularMockTests: "नियमित मॉक टेस्ट",
        dailyAnswerWriting: "दैनिक उत्तर लेखन",
        currentAffairsClasses: "करंट अफेयर्स कक्षाएं",
        duration: "अवधि",
        courseDetails: "पाठयक्रम विवरण",
        optionalSubjectsTitle: "वैकल्पिक विषय",
        subjectSpecificMaterial: "विषय विशिष्ट सामग्री",
        expertFacultyFeature: "विशेषज्ञ संकाय",
        previousYearAnalysis: "पिछले वर्ष का विश्लेषण",
        topicWiseTests: "विषयवार परीक्षण",
        interviewPreparation: "साक्षात्कार की तैयारी",
        mockInterviews: "मॉक इंटरव्यू",
        personalityDevelopment: "व्यक्तित्व विकास",
        dafAnalysis: "डीएएफ विश्लेषण",
        expertGuidance: "विशेषज्ञ मार्गदर्शन",
        onlineSupport: "ऑनलाइन सहायता",
        twentyFourSeven: "24/7 संदेह समाधान",
        performanceTracking: "प्रदर्शन ट्रैकिंग",
        progressMonitoring: "नियमित प्रगति निगरानी",
        eliteExpert: "हमारे विशेषज्ञ से मिलें",
        learnFromBest: "सर्वश्रेष्ठ से सीखें",
        mentorDescription: "अनुभवी सिविल सेवकों से मार्गदर्शन प्राप्त करें जो इस यात्रा को समझते हैं",
        yearsOfExperience: "वर्षों का अनुभव",
        ipsMentor: "आईपीएस/आईएएस मेंटर",
        mentorBio: "एक प्रतिष्ठित सिविल सेवक और समर्पित मेंटर के रूप में, समराट सर यूपीएससी उम्मीदवारों का मार्गदर्शन करने में कई वर्षों का अमूल्य अनुभव लेकर आए हैं। उनकी अनूठी शिक्षण पद्धति और सिविल सेवाओं की गहरी समझ ने कई छात्रों को उनके सपने साकार करने में मदद की है।",
        expertGuidanceTitle: "विशेषज्ञ मार्गदर्शन",
        personalizedMentoring: "व्यक्तिगत मेंटरिंग दृष्टिकोण",
        strategicPlanning: "रणनीतिक योजना",
        provenStrategies: "��िद्ध यैयारी णनीतियां",
        successRate: "सफलता दर",
        exceptionalResults: "उत्कृष्ट छात्र परिणाम",
        mentorQuote: "यूपीएससी में सफलता सिर्फ कड़ी मेहनत नहीं है, यह स्मार्ट वर्क और सही मार्गदर्शन का मिश्रण है।",
        getInTouch: "संपर्क करें",
        contactUs: "हमसे संपर्क करें",
        contactDescription: "कोई प्रश्न है? हम आपके UPSC के सपनों को साकार करने में मदद करने के लिए यहां हैं",
        sendMessage: "हमें संदेश भेजें",
        formDescription: "नीचे दिया गया फॉर्म भरें, हम जल्द ही आपसे संपर्क करेंगे",
        yourName: "आपका नाम",
        yourEmail: "आपका ईमेल",
        phoneNumber: "फोन नंबर",
        subject: "विषय",
        selectSubject: "विषय चुनें",
        admission: "प्रवेश पूछताछ",
        coursesEnquiry: "कोर्स पूछ���ाछ",
        other: "अन्य",
        message: "आपका संदेश",
        visitUs: "हमसे मिलें",
        contactDetails: "संपर्क विवरण",
        workingHours: "कार्य समय",
        monFri: "सोमवार - शुक्रवार",
        saturday: "शनिवार",
        sunday: "रविवार",
        closed: "बंद",
        followUs: "हमें फॉलो करें",
        
        // App Section Translations
        mobileApp: "मोबाइल ऐप",
        getOurApp: "हमारा UPSC तैयारी ऐप डाउनलोड करें",
        appDescription: "कॉम्पिटीशन हैकर्स IAS/PCS अकादमी आपको निर्बाध शिक्षण प्रबंधन के लिए एक व्यापक मोबाइल प्लेटफॉर्म प्रदान करता है। आधुनिक तकनीक और शैक्षिक उत्कृष्टता का सर्वश्रेष्ठ मिश्रण अनुभव करें।",
        attendanceTracking: "स्मार्ट उपस्थित ट्रैकिंग सिस्टम",
        feesManagement: "एकीकृत फीस प्रबंधन",
        homeworkSubmission: "डिजिटल होमवर्क सबमिशन पोर्टल",
        performanceAnalytics: "उन्नत प्रदर्शन विश्लेषण",
        smartNotifications: "तत्काल अपडेट और स्मार्ट नोटिफिकेशन",
        getItOnPlayStore: "Google Play पर उपलब्ध है",
        downloads: "डाउनलोड",
        rating: "रेटिंग",
        appScreenshots: "ऐप स्क्रीनशॉट",
        
        // Testimonials Section Translations
        testimonials: "प्रशंसापत्र",
        whatStudentsSay: "हमारे छात्र क्या कहते हैं",
        testimonialDescription: "हमारे साथ अपनी UPSC यात्रा को सफल बनाने वाले छात्रों से सुनें",
        studentSuccess: "छात्र सफलता की कहानी",
        topperQuote: "कॉम्पिटीशन हैकर्स में समराट सर के मार्गदर्शन में, मुझे णनीतिक तैयारी और व्यक्तिगत मेंटरिंग का सर्वश्रेष्ठ मिश्रण मिला। UPSC की तैयारी के लिए संस्थान का दृष्टिकोण अनूठा और प्रभावी है।",
        studentName: "मन्नत गुप्ता",
        studentBatch: "यूपीएससी सीएसई 2023 बैच",
        instructorTestimonial: "मेंटर का संदेश",
        samraatMessage: "कॉम्पिटीशन हैकर्स में, हम केवल उम्मीदवारों को नहीं, बल्कि भविष्य के नेताओं को तैयार करते हैं। हमारी प्रतिबद्धता कोचिंग से परे है - हम करियर बनाते हैं और व्यक्तित्व को आकार देते हैं।",
        samraatDesignation: "आईपीएस/आईएएस मेंटर, कॉम्पिटीशन हैकर्स",
        instituteHighlight: "जालंधर में अग्रणी यूपीएससी कोचिंग",
        yearsTeaching: "शिक्षण उत्कृष्टता के वर्ष",
        successfulStudents: "सफल छात्र",
        expertFaculty: "विशेषज्ञ संकाय सदस्य",
        readMoreTestimonials: "और सफलता की कहानियां पढ़ें",
        
        // Additional Testimonials
        abhisarQuote: "कॉम्पिटीशन हैकर्स की संरचित दृष्टिकोण और दैनिक करंट अफेयर्स सत्र ने मेरी मजबूत नींव बनाने में मदद की। समराट सर का मार्गदर्शन मेरी पूरी तैयारी में अमूल्य रहा।",
        abhisarName: "अभिसार शर्मा",
        abhisarBatch: "यूपीएससी सीएसई 2023 बैच",
        
        rahulQuote: "कॉम्पिटीशन हैकर्स को अलग बनाता है उनका व्यक्तिगत ध्यान और व्यापक अध्ययन सामग्री। मॉक टेस्ट और आंसर राइटिंग प्रैक्टिस सेशन मेरे लिए गेम-चेंजर साबित हुए।",
        rahulName: "राहुल कुमार",
        rahulBatch: "यूपीएससी सीएसई 2022 बैच",
        
        rohitQuote: "संकाय का समर्पण और समराट सर का मेंटरशिप जटिल विषयों को समझने में आसान बनाता है। संस्थान की नवीन शिक्षण पद्धतियां और नियमित डाउट क्लियरिंग सत्र बेहद मददगार रहे।",
        rohitName: "रोहित सिंह",
        rohitBatch: "यूपीएससी सीएसई 2023 बैच"
    }
};

// Current language state
let currentLang = localStorage.getItem('selectedLanguage') || 'en';

// Function to change language
function changeLanguage(langCode) {
    if (!LANGUAGES[langCode]) return;
    
    currentLang = langCode;
    localStorage.setItem('selectedLanguage', langCode);
    
    // Update UI
    document.getElementById('currentLang').textContent = LANGUAGES[langCode].name;
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (TRANSLATIONS[langCode][key]) {
            element.textContent = TRANSLATIONS[langCode][key];
        }
    });
    
    // Close the modal
    const languageModal = bootstrap.Modal.getInstance(document.getElementById('languageModal'));
    if (languageModal) {
        languageModal.hide();
    }
    
    // Update document language
    document.documentElement.lang = langCode;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set initial language
    changeLanguage(currentLang);
    
    // Initialize social popup functionality
    initializeSocialPopup();
});

// Social popup functionality
function initializeSocialPopup() {
    const popup = document.getElementById('socialPopup');
    if (!popup) return;

    function openSocialPopup() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => popup.classList.add('active'), 10);
    }

    function closeSocialPopup() {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => popup.style.display = 'none', 300);
    }

    // Event listeners
    window.openSocialPopup = openSocialPopup;
    window.closeSocialPopup = closeSocialPopup;

    // Close on outside click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closeSocialPopup();
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSocialPopup();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const body = document.body;

    // Create backdrop element
    const backdrop = document.createElement('div');
    backdrop.className = 'navbar-backdrop';
    document.body.appendChild(backdrop);

    navbarToggler.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        body.classList.toggle('menu-open', isExpanded);
        backdrop.classList.toggle('show', isExpanded);
    });

    // Close menu when clicking backdrop
    backdrop.addEventListener('click', function() {
        const bsCollapse = bootstrap.Collapse.getInstance(document.querySelector('.navbar-collapse'));
        if (bsCollapse) {
            bsCollapse.hide();
            body.classList.remove('menu-open');
            backdrop.classList.remove('show');
        }
    });
});
class NewsFeeder {
    constructor() {
        this.newsContainer = document.getElementById('newsFeed');
        this.categories = document.querySelectorAll('.ca-category-btn');
        this.currentCategory = 'all';
        this.newsCache = {};
        
        this.init();
    }

    init() {
        // Initialize category buttons
        this.categories.forEach(btn => {
            btn.addEventListener('click', () => {
                this.setActiveCategory(btn.dataset.category);
            });
        });

        // Initial news fetch
        this.fetchNews();

        // Refresh news every 30 minutes
        setInterval(() => this.fetchNews(), 30 * 60 * 1000);
    }

    async fetchNews() {
        try {
            // Using NewsAPI (you'll need an API key)
            const API_KEY = 'your_news_api_key';
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`);
            const data = await response.json();
            
            this.processNews(data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
            this.showError();
        }
    }

    processNews(articles) {
        this.newsCache = articles.reduce((acc, article) => {
            const category = this.categorizeNews(article);
            if (!acc[category]) acc[category] = [];
            acc[category].push(article);
            return acc;
        }, {});

        this.displayNews(this.currentCategory);
    }

    categorizeNews(article) {
        // Simple categorization based on keywords
        const keywords = {
            national: ['india', 'indian', 'delhi', 'mumbai'],
            international: ['global', 'world', 'foreign'],
            economy: ['economy', 'market', 'finance', 'business'],
            environment: ['climate', 'environment', 'pollution', 'green']
        };

        for (const [category, words] of Object.entries(keywords)) {
            if (words.some(word => 
                article.title.toLowerCase().includes(word) || 
                article.description?.toLowerCase().includes(word)
            )) {
                return category;
            }
        }

        return 'other';
    }

    displayNews(category) {
        const newsToShow = category === 'all' 
            ? Object.values(this.newsCache).flat()
            : this.newsCache[category] || [];

        this.newsContainer.innerHTML = newsToShow.map(article => `
            <div class="ca-news-item">
                <div class="ca-news-content">
                    <span class="ca-news-category">${this.categorizeNews(article)}</span>
                    <h3 class="ca-news-title">${article.title}</h3>
                    <div class="ca-news-meta">
                        <span>${new Date(article.publishedAt).toLocaleDateString()}</span>
                        <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        `).join('');
    }

    setActiveCategory(category) {
        this.currentCategory = category;
        
        // Update active button
        this.categories.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });

        this.displayNews(category);
    }

    showError() {
        this.newsContainer.innerHTML = `
            <div class="ca-error">
                <p data-translate="newsError">Unable to load news updates. Please try again later.</p>
                <button onclick="newsFeeder.fetchNews()" class="ca-retry-btn">
                    <i class="fas fa-redo"></i> Retry
                </button>
            </div>
        `;
    }
}

// Initialize news feeder when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.newsFeeder = new NewsFeeder();
});

// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.querySelector('.ch-scroll-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Smooth scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
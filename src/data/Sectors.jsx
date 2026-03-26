import degree from "../assets/degree.avif";
import energy from "../assets/energy.avif";
import environmental from "../assets/environmental.avif";
import health from "../assets/Health.avif";
import highways from "../assets/highways.avif";
import industrial from "../assets/industrial.jpg";
import leisure from "../assets/leisure.jpg";
import localGov from "../assets/government.jpg";
import offices from "../assets/offices.jpg";
import rail from "../assets/rail.jpg";
import residential from "../assets/recidential.jpg";
import wetdry_leisure from "../assets/wetdry_leisure.jpg";
import sportsCenter from "../assets/sportsCenter.jpg";
import dataCenters from "../assets/dataCenters.jpg";
import warehouses from "../assets/warehouses.jpg";
import {
  GraduationCap,
  Zap,
  Leaf,
  Heart,
  Construction,
  Factory,
  Hotel,
  Building2,
  Building,
  Train,
  Home,
  ArrowRight,
  X,
} from "lucide-react";

export const allSectorsData = [
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    image: degree,
    description:
      "Delivering over $1 billion in world-leading school and university facilities.",
    highlights: [
      "DHD | APGC is a world-leading provider of school buildings, having delivered over $1 billion worth of educational facilities in the past decade. We design and construct schools for early years, primary, and secondary education, incorporating modern classrooms, state-of-the-art laboratories, and stimulating play areas. Furthermore, we maintain and provide comprehensive back-of-house services to schools and colleges nationwide. Our expertise extends to the Higher Education and Universities construction market, where we deliver cutting-edge facilities for a range of academic disciplines. Our property division also actively invests, develops, and partners within the student accommodation market, creating modern and comfortable living spaces for students.",
    ],
    // highlights: [
    //   {
    //     title: "Inspiring Learning Spaces",
    //     desc: "First-class facilities from early years to higher education.",
    //   },
    //   {
    //     title: "Cutting-Edge Innovation",
    //     desc: "Leveraging 3D and BIM for enhanced delivery and optimized costs.",
    //   },
    //   {
    //     title: "Seamless Live Environment Work",
    //     desc: "Minimizing disruption with meticulous planning and safety.",
    //   },
    //   {
    //     title: "Comprehensive Facilities Management",
    //     desc: "Ongoing maintenance, cleaning, security, and groundskeeping.",
    //   },
    // ],
    price: 100,
  },
  {
    id: "energy",
    title: "Energy",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    image: energy,
    description:
      "Enhancing innovation and delivering value across electricity and gas networks.",
    highlights: [
      "In the dynamic and competitive energy sector, DHD | APGC consistently strives to enhance customer service, foster innovation, and deliver exceptional value.",
    ],
    // highlights: [
    //   {
    //     title: "Reliable Electricity Networks",
    //     desc: "Enhancing power distribution, substation upgrades, and emergency response.",
    //   },
    //   {
    //     title: "Comprehensive Gas Services",
    //     desc: "Full range of services across all pressure networks.",
    //   },
    //   {
    //     title: "Pioneering Innovation",
    //     desc: "At the forefront of renewable energy, EV infrastructure, and battery storage.",
    //   },
    //   {
    //     title: "Customer Service Excellence",
    //     desc: "Dedicated training and a multi-utility approach for top-tier service.",
    //   },
    // ],
    price: 100,
  },
  {
    id: "environmental",
    title: "Environmental",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
    image: environmental,
    description:
      "Achieving cost savings and environmental targets through efficient waste management.",
    highlights: [
      "DHD assists local authorities in achieving significant cost savings on essential services while meeting environmental targets. ",
    ],
    // highlights: [
    //   {
    //     title: "Cost-Effective Waste Solutions",
    //     desc: "Maximizing value for refuse and recycling for over 3.2 million households.",
    //   },
    //   {
    //     title: "Optimized Recycling",
    //     desc: "Using technology to maximize recycled materials and minimize landfill.",
    //   },
    //   {
    //     title: "Comprehensive Environmental Services",
    //     desc: "Delivering street cleaning, grounds maintenance, and commercial waste services.",
    //   },
    //   {
    //     title: "Long-Term Partnerships",
    //     desc: "Collaborating with public and private clients for sustainable outcomes.",
    //   },
    // ],
    price: 100,
  },
  {
    id: "health",
    title: "Health",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    image: health,
    description:
      "Delivering innovative building solutions for healthcare providers. ",
    highlights: [
      "DHD collaborates with public and private healthcare providers to deliver innovative building solutions, ranging from strategic estates to ward refurbishments, that address national and local healthcare agendas. We construct and refurbish hospitals, clinics, and healthcare facilities designed with patient well-being and efficient healthcare delivery in mind.",
    ],
    // highlights: [
    //   {
    //     title: "Trusted Healthcare Partner",
    //     desc: "Over 200 projects delivered, aligning with healthcare providers' aims.",
    //   },
    //   {
    //     title: "Working in Live Environments",
    //     desc: "Expertise in hospital refurbishments with minimal disruption.",
    //   },
    //   {
    //     title: "Advanced Innovation",
    //     desc: "Utilizing BIM Level 2 and offsite construction for efficiency.",
    //   },
    //   {
    //     title: "Clinical Understanding",
    //     desc: "Deep understanding of clinical requirements for optimized facilities.",
    //   },
    // ],
    price: 100,
  },
  {
    id: "highways",
    title: "Highways & Bridges",
    icon: Construction,
    color: "from-gray-600 to-slate-700",
    image: highways,
    description:
      "Maintaining and improving critical road infrastructure with a focus on safety.",
    highlights: [
      "DHD | APGC is a leading highways service provider, working with a diverse range of partners, from central organizations like Highways England to local authorities, to maintain and improve the critical road infrastructure we rely upon. We design and build roads, bridges, and tunnels that prioritize safety, efficiency, and sustainability. ",
      "For over 25 years, we have assisted clients in delivering a wide array of road, bridge, and tunnel projects. Our services encompass everything from the planning, programming, and delivery of major road schemes to routine maintenance and operation. ",
    ],
    //   {
    //     title: "Comprehensive Infrastructure",
    //     desc: "Delivering a wide array of road, bridge, and tunnel projects.",
    //   },
    //   {
    //     title: "Collaborative Innovation",
    //     desc: "Implementing cutting-edge solutions with clients and partners.",
    //   },
    //   {
    //     title: "Strategic Maintenance",
    //     desc: "Expertise in routine maintenance to enhance road networks.",
    //   },
    //   {
    //     title: "Future-Ready Transportation",
    //     desc: "At the forefront of technological advancements in transportation.",
    //   },
    // ],
    price: 100,
  },
  {
    id: "industrial",
    title: "Industrial",
    icon: Factory,
    color: "from-purple-600 to-indigo-700",
    image: industrial,
    description:
      "End-to-end solutions for warehouses, manufacturing plants, and data centers.",
    highlights: [
      "DHD | APGC provides comprehensive  end-to-end solutions for the industrial sector, encompassing site identification, design and build, fit-out, and facilities management. Our industrial projects include state-of-the-art manufacturing plants, advanced logistics centers, and data centers that power the digital economy.",
    ],
    // highlights: [
    //   {
    //     title: "End-to-End Industrial Solutions",
    //     desc: "From site identification and feasibility to turnkey design and build.",
    //   },
    //   {
    //     title: "Diverse Industrial Expertise",
    //     desc: "Projects from trade counters to large-scale logistics facilities.",
    //   },
    //   {
    //     title: "Advanced Warehousing",
    //     desc: "Delivering state-of-the-art warehouse projects up to one million sq ft.",
    //   },
    //   {
    //     title: "Specialized Data Centers",
    //     desc: "Overcoming challenges with sophisticated M&E installations.",
    //   },
    // ],
    price: 100,
  },
  {
    id: "leisure",
    title: "Leisure & Hospitality",
    icon: Hotel,
    color: "from-teal-500 to-cyan-600",
    image: leisure,
    description:
      "Designing and maintaining world-class leisure facilities and hotels with unique experiences.",
    highlights: [
      "DHD specializes in the design, construction, and maintenance of world-class leisure and hospitality facilities. We create iconic sporting venues, entertainment complexes, and hotels that provide unforgettable experiences. ",
    ],
    price: 50,
  },
  {
    id: "local_gov",
    title: "Local Government",
    icon: Building2,
    color: "from-amber-500 to-orange-600",
    image: localGov,
    description:
      "Assisting councils in maximizing estate value and delivering essential community infrastructure.",
    highlights: [
      "DHD assists local councils in maximizing the value of their estates and reducing service costs through enhanced efficiency. We work with local governments to deliver essential community infrastructure, including public buildings, transportation networks, and environmental services. ",
      "Image: A modern community center with a variety of services, showcasing DHD’s commitment to public infrastructure. ",
    ],
    price: 50,
  },
  {
    id: "offices",
    title: "Offices",
    icon: Building,
    color: "from-blue-600 to-indigo-700",
    image: offices,
    description:
      "Providing innovative, sustainable, and high-quality office spaces that foster productivity.",
    highlights: [
      "DHD I APGC is a leading provider of high-quality office spaces that foster productivity and enhance the working environment. We design and build modern, sustainable, and inspiring workspaces that meet the evolving needs of businesses. ",
    ],
    price: 50,
  },
  {
    id: "rail",
    title: "Rail & Signaling",
    icon: Train,
    color: "from-emerald-600 to-teal-700",
    image: rail,
    description:
      "Delivering complex rail infrastructure, including new lines, station upgrades, and signaling.",
    highlights: [
      "With increasing passenger numbers and demand for improved rail services, innovation and exceptional customer care are essential in the rail industry. DHD delivers complex rail infrastructure projects, including new lines, station upgrades, and advanced signaling systems. ",
      "Image: A high-speed train traveling through a modern railway station, showcasing DHD’s involvement in rail infrastructure. ",
    ],
    price: 50,
  },
  {
    id: "residential",
    title: "Residential",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Developing diverse residential properties, from luxury homes to affordable housing.",
    highlights: [
      "DHD develops and maintains a diverse range of residential properties, from high-end apartments and luxury homes to affordable housing and student accommodation. We are committed to creating sustainable and thriving communities where people can live, work, and play. ",
    ],
    price: 50,
  },
  {
    id: "retail",
    title: "Retail",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Developing diverse residential properties, from luxury homes to affordable housing.",
    highlights: [
      "DHD develops and maintains a diverse range of residential properties, from high-end apartments and luxury homes to affordable housing and student accommodation. We are committed to creating sustainable and thriving communities where people can live, work, and play. ",
    ],
    price: 50,
  },
  {
    id: "technology",
    title: "Science, Technology and Pharmacological ",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    image: degree,
    description:
      "Delivering over $1 billion in world-leading school and university facilities.",
    highlights: [""],
    // highlights: [
    //   {
    //     title: "Inspiring Learning Spaces",
    //     desc: "First-class facilities from early years to higher education.",
    //   },
    //   {
    //     title: "Cutting-Edge Innovation",
    //     desc: "Leveraging 3D and BIM for enhanced delivery and optimized costs.",
    //   },
    //   {
    //     title: "Seamless Live Environment Work",
    //     desc: "Minimizing disruption with meticulous planning and safety.",
    //   },
    //   {
    //     title: "Comprehensive Facilities Management",
    //     desc: "Ongoing maintenance, cleaning, security, and groundskeeping.",
    //   },
    // ],
    price: 100,
  },
  {
    id: "tech_innovation",
    title: "Technology and Innovation ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Harnessing 3D and BIM technologies with expert ICT design to optimize project delivery, maintenance, and future-ready learning environments.",
    highlights: [
      "We leverage cutting-edge 3D and Building Information Modelling (BIM) technologies across all our projects to enhance delivery and optimize through-life costs. These technologies facilitate ongoing maintenance, accommodate future changes, and enable clients and stakeholders to visualize the end results effectively. Our in-house team of specialists provides comprehensive ICT infrastructure design for schools as part of new build and refurbishment project. ",
    ],
    price: 50,
  },
  {
    id: "electricity",
    title: "Electricity ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Reliable LV–132kV power solutions: substations, cabling, emergency response, and innovative energy systems.",
    highlights: [
      "As a long-term collaborative partner to Distribution Network Operators (DNOs) and other industry leaders, DHD | APGC enhances and assures the reliability of power distribution networks, encompassing customer connections and capital projects. Our capabilities within the electricity sector extend to cable and connect solutions from LV to 132kV and beyond. We install new underground power lines, undertake poling, substation overhauls and upgrades, and provide emergency response services. Furthermore, we are actively exploring emerging energy markets, including battery storage and electric vehicle charging infrastructure. ",
    ],
    price: 50,
  },
  {
    id: "gas",
    title: "Gas",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Delivering safe, efficient gas network solutions with minimal disruption and a strong commitment to sustainability.",
    highlights: [
      "With decades of experience in the education sector, we collaborate with schools, colleges, and universities to create inspiring learning environments through the construction and maintenance of first-class facilities. ",
      "Recognizing that many projects require us to operate within live educational settings, we prioritize minimizing disruption to the daily activities of schools and colleges. Our teams undergo rigorous background checks and possess a thorough understanding of the safety, health, and environmental implications associated with working in such environments. We actively engage with stakeholders and end-users to strategically phase works around examination timetables and ensure deliveries do not interfere with drop-off and pick-up times. ",
      "Image: A modern recycling facility with advanced sorting technology, emphasizing DHD’s commitment to waste reduction. ",
    ],
    price: 50,
  },
  {
    id: "innovation",
    title: "Innovation ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Driving innovation in energy and electricity through advanced systems, efficient practices, and landmark projects.",
    highlights: [
      "Innovation is integral to the success of our healthcare projects. We actively encourage, track, capture, and manage innovation through our regional healthcare hubs. Our design and management of health projects utilize a range of modern construction methods, with each construction design adhering to BIM Level 2 standards. We also champion offsite construction, where building components are designed, planned, manufactured, and pre-assembled off-site to enhance efficiency and reduce on-site disruption. ",
      "Innovation is paramount in the rapidly evolving energy sector. Since 2006, we have collaborated with APGC, an engineering services provider that became part of DHD, to drive innovation. Our achievements include the development of a 4 bar PE system, ground district pressure reduction stations, and reassembled and pretested customer meter boxes. ",
      "Our electricity team remains at the forefront of industry innovation. As an Alliance partner of global market Power Networks, we have introduced innovative working practices and enhanced efficiency in projects involving the refurbishment and upgrade of electricity substations, cables, and power lines, including notable work at the Palace of Westminster.",
    ],
    price: 50,
  },
  {
    id: "more_less",
    title: "Delivering More for Less  ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "We help authorities and businesses cut costs while delivering efficient, sustainable environmental services through innovation, technology, and long-term partnerships.",
    highlights: [
      "With local authorities facing mounting pressure to reduce expenditures while maintaining frontline services, innovative approaches to cost reduction in environmental services are crucial. ",
      "DHD | APGC supports local authority customers across the global market in meeting their environmental targets while simultaneously achieving cost savings. ",
      "We deliver frontline refuse and recycling services to over 3.2 million households in the global market along with a comprehensive range of street cleaning, grounds maintenance, and commercial waste services. ",
      "By utilizing the latest technology and our logistical expertise, we reduce the cost of environmental services for over 20 public and private sector clients through long-term partnerships. Our collaborative approach focuses on optimizing collection methods to maximize the value of recycled materials and minimize waste sent to landfill. ",
    ],
    price: 50,
  },
  {
    id: "facilities",
    title: "Facilities Management",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Providing complete facilities management — including cleaning, security, and grounds upkeep — to ensure well-maintained educational buildings.",
    highlights: [
      "We offer a comprehensive suite of facilities management services to ensure the ongoing maintenance and repair of buildings throughout the educational estate. These services encompass essential functions such as cleaning, security, and grounds maintenance.",
    ],
    price: 50,
  },
  {
    id: "learning",
    title: "Supporting Learning Environments ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Creating safe, sustainable, and inspiring learning environments with minimal disruption to schools, colleges, and universities.",
    highlights: [
      "With decades of experience in the education sector, we collaborate with schools, colleges, and universities to create inspiring learning environments through the construction and maintenance of first-class facilities. ",
      "Recognizing that many projects require us to operate within live educational settings, we prioritize minimizing disruption to the daily activities of schools and colleges. Our teams undergo rigorous background checks and possess a thorough understanding of the safety, health, and environmental implications associated with working in such environments. We actively engage with stakeholders and end-users to strategically phase works around examination timetables and ensure deliveries do not interfere with drop-off and pick-up times. ",
      "Image: A modern recycling facility with advanced sorting technology, emphasizing DHD’s commitment to waste reduction. ",
    ],
    price: 50,
  },
  {
    id: "trusted_partner",
    title: "Trusted Partner  ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "With 15+ years on NHS ProCure frameworks and 200+ successful projects, we’re a trusted partner delivering cost-effective, clinically aligned healthcare facilities.",
    highlights: [
      "As a leading healthcare contractor, APGC  understands the importance of aligning with the aims and aspirations of healthcare providers. We have consistently been on the Department of Health and Social Care's ProCure frameworks for the past 15 years, demonstrating our commitment to delivering projects from inception to occupancy. ",
      "Our dedicated team of health infrastructure experts possesses extensive experience in working with the APGC  and navigating its procurement frameworks. This collaborative approach has resulted in the successful delivery of over 200 projects in the last 15 years. We are acutely aware of cost constraints within the healthcare sector and possess a deep understanding of clinical requirements. We meticulously assess the intended clinical activity for each facility and its integration within the broader healthcare network. Our collaboration with experienced architects and engineers, coupled with our participation in DHD | APGC Strategic boards, uniquely positions us to respond effectively to new policies and trends. ",
    ],
    price: 50,
  },
  {
    id: "live_environments",
    title: "Working in Live Environments  ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Specialize in delivering healthcare projects within live environments, ensuring minimal disruption and uninterrupted critical services.",
    highlights: [
      "Our scope of work encompasses a wide range of healthcare projects, from $1 million ward refurbishments to master planning strategic estates. We have a particular expertise in working within live environments, ensuring minimal disruption to critical healthcare services. A meticulously planned delivery strategy is central to our approach, commencing at the pre-construction phase to provide clinical teams with the assurance that critical services, such as power supply, will remain uninterrupted. ",
    ],
    price: 50,
  },
  {
    id: "collaborative_approatch",
    title: "Collaborative Approach  ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Work closely with clients and partners to deliver innovative, sustainable transport solutions that benefit communities.",
    highlights: [
      "We prioritize collaboration with our clients, supply chain partners, and peers to foster knowledge sharing and implement innovative solutions. In a world where technology is rapidly transforming transportation, we remain at the forefront of innovation. ",
      "Our comprehensive services range from the planning and delivery of major road schemes to routine maintenance and operation. We emphasize research and collaboration with stakeholders to develop innovative solutions that enhance our roads and positively impact local communities. ",
    ],
    price: 50,
  },
  {
    id: "wealth_experience",
    title: "A Wealth of Experience  ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Delivering safe, efficient gas network solutions with minimal disruption and a strong commitment to sustainability.",
    highlights: [
      "The rapid growth of internet connectivity and the proliferation of smart devices are driving significant changes in the industrial sector. This necessitates the development of more logistics hubs, distribution facilities, data centers, and technologically advanced manufacturing facilities. ",
      "DHD offers a complete end-to-end solution for industrial clients, from site identification and feasibility studies to turnkey design and build options, fit-out, and comprehensive facilities management. ",
      "Our expertise spans a wide range of industrial developments, from trade counter units to large-scale logistics warehousing, data centers, and manufacturing facilities, including projects in live operational environments. We operate across the globe in all asset classes, combining our proven experience with innovative approaches to deliver successful projects of all scales and complexities.",
    ],
    price: 50,
  },
  {
    id: "warehouses",
    title: "Warehouses",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: warehouses,
    description:
      "Deliver warehouse projects of all scales, including a one-million-square-foot distribution center currently underway.",
    highlights: [
      "Our warehouse projects range from small-scale buildings to large-scale distribution centers. We are currently undertaking our largest warehouse project to date, a one-million-square-foot facility. ",
    ],
    price: 50,
  },
  {
    id: "manufacturing",
    title: "Manufacturing ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: residential,
    description:
      "Support both traditional manufacturing facilities and the evolving needs of e-commerce-driven industrial buildings.",
    highlights: [
      "While the rise of e-commerce is driving demand for new types of industrial buildings, we also continue to support clients in the traditional manufacturing sector. ",
    ],
    price: 50,
  },
  {
    id: "data_centers",
    title: "Data Centers  ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: dataCenters,
    description:
      "Deliver complex, high-quality data centers with expertise in sophisticated mechanical and electrical installations.",
    highlights: [
      "DHD | APGC has a strong track record in overcoming the unique challenges associated with data center construction. We understand the complexities of these facilities, which often require sophisticated mechanical and electrical installations, and possess the expertise to deliver high-quality fit-outs that meet the stringent demands of this sector.",
    ],
    price: 50,
  },
  {
    id: "venues",
    title: "World-Class Venues ",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: sportsCenter,
    description:
      "Create and maintain iconic sports and entertainment venues that deliver exceptional experiences and first-class hospitality.",
    highlights: [
      "The iconic sports and entertainment venues we create and maintain attract visitors from around the globe. These venues not only provide exceptional spectator experiences but also prioritize visitor engagement and first-class hospitality. ",
    ],
    price: 50,
  },
  {
    id: "delivering_value",
    title: "Delivering Value",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: wetdry_leisure,
    description:
      "Delivering value through expertise and innovation to help councils meet rising demands with reduced funding.",
    highlights: [
      "Local governments provide essential services that are vital to our communities, from leisure facilities and schools to road maintenance and housing.",
      "DHD understands the challenges faced by local authorities due to reduced funding and increased demands. We leverage our specialist knowledge, sector-leading experience, and innovative thinking to support councils across the world.",
    ],
    price: 50,
  },
  {
    id: "expertise",
    title: "Comprehensive Expertise",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: wetdry_leisure,
    description:
      "Comprehensive expertise delivering value-driven solutions in estates, facilities, housing, highways, lighting, and waste management.",
    highlights: [
      "We advise councils on maximizing the value of their estates through property portfolio rationalization and the development of new facilities that better serve their communities.",
      "Our comprehensive range of services includes highways maintenance, housing maintenance, facilities management, street lighting, and refuse collection. We focus on delivering value-for-money solutions, innovation, and improved efficiency.",
    ],
    price: 50,
  },
  {
    id: "approach",
    title: "Local Approach",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: wetdry_leisure,
    description:
      "Supporting communities with local talent, supply chains, and career opportunities through a regional approach.",
    highlights: [
      "As a large regional building contractor, we maintain a localized business structure, employing local personnel, supporting local supply chains, and reinvesting in the communities where we operate.",
      "We are committed to fostering talent through employment, training, and career development opportunities. This includes dedicated outreach programs for veterans, NEETs (young people not in education, employment, or training), and those starting their careers through apprenticeships or graduate schemes.",
    ],
    price: 50,
  },
  {
    id: "wealth_expertise",
    title: "A Wealth of Expertise",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: wetdry_leisure,
    description:
      "Transforming cityscapes with award-winning commercial and office developments from business parks to modern headquarters.",
    highlights: [
      "We are transforming cityscapes with our innovative and award-winning commercial and office developments. Our projects encompass a wide range of office environments, from regional business parks to modern city-center developments, historic civic offices, and contemporary glass-clad headquarters. ",
    ],
    price: 50,
  },
  {
    id: "ibm",
    title: "Investing, Building, and Maintaining",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: wetdry_leisure,
    description:
      "Partnering to invest, build, and maintain high-standard commercial spaces with minimal disruption and full lifecycle support.",
    highlights: [
      "In collaboration with our partners, our property business invests and develops within the commercial and office market. Our construction, renovation, and fit-out work is meticulously planned and executed to the highest standards. Our specialist teams are adept at working in live environments, ensuring minimal disruption to ongoing business operations. ",
      "We actively engage in projects from inception to help define the brief and leverage 3D and Building Information Modelling (BIM) technology to enable clients to visualize the end results effectively. ",
      "DHD | APGC provides a comprehensive suite of services to commercial and office clients, including technical services and facilities management.",
    ],
    price: 50,
  },
  {
    id: "joint_ventures",
    title: "Joint Ventures",
    icon: Home,
    color: "from-rose-500 to-pink-600",
    image: wetdry_leisure,
    description:
      "Extensive joint venture expertise, driving success through early collaboration and cross-sector knowledge sharing.",
    highlights: [
      "DHD has extensive experience in managing joint ventures, including projects like DHD l AP, which involve collaboration with multiple partners. We recognize the importance of early engagement and close collaboration with clients and partners to achieve optimal project outcomes. As part of a larger group with diverse sector expertise, we can leverage knowledge and best practices from across the organization.",
    ],
    price: 50,
  },
];

import teamMembers from "./teamMembers";

const companyInformation = {
    "@type" : "Organization",
    name: "Newron.ai",
    legalName: "NewronAI Technologies Pvt. Ltd.",
    description: "Empowering Enterprises with Data-driven Intelligence",
    slogan: "Machine Learning Made Simple",
    telephone: "+91 81238 78102",
    logo: "https://newron.ai/newro-logo.svg",
    foundingDate: "2022-06-24",
    email: "support@newron.ai",
    address: {
        addressLocality: "HSR Layout,Bengaluru, India",
        postalCode: "560102",
        streetAddress: "Sector 7"
    },
    department: [
        {
            "@type": "ResearchOrganization",
            name: "NewronAI Research"
        }
    ],
    founder: [
        {
            "@type": "person",
            name: "Rajesh Kamra",
            email: "rajesh@newron.ai"
        },
        {
            "@type": "person",
            name: "Sandeep Singh",
            email: "sandeep@newron.ai"
        }
    ],
    employee: teamMembers.map(member => ({
        "@type": "person",
        name: member.name,
        jobTitle: member.role,
        logo: `https://newron.ai${member.imageUrl}`
    })),
    owns: [{
        "@type": "Organisation",
        name: "Fastcode.ai"
    }],
    numberOfEmployees: teamMembers.length + 15
}

export default companyInformation;
 const menuItems = [
    {
        href: '#about-us', 
        text: 'About us'
    },
    {
        href: '/gallery',
        text: "Gallery"
    },
    {
        href: '#', 
        text: 'Services',
        subItems: [
            {
                href: '/interior-painting', 
                text: 'Interior Painting',
            },
            {
                href: '/exterior-painting', 
                text: 'Exterior Painting',
            },
        ]
    },
    {
        href: '#services', 
        text: 'Services'
    },
    {
        href: '/contact-us', 
        text: 'Contact'
    },
];

export default menuItems;

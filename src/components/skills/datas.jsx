const datas =[
    {
        id:1,
        image:`https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png`,
        p:"HTML",
    },
    {
        id:2,
        image:`https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png`,
        p:"CSS",
    },
    {
        id:3,
        image:`https://uploads-ssl.webflow.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg`,
        p:"JavaScript",
    },
    {
        id:4,
        image:`https://cdn.auth0.com/blog/optimizing-react/logo.png`,
        p:"React",
    },
    {
        id:5,
        image:`https://ih1.redbubble.net/image.239387068.7816/st,small,507x507-pad,600x600,f8f8f8.u2.jpg`,
        p:"Redux",
    },
    {
        id:6,
        image:`https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png`,
        p:"MongoDB",
    },

    {
        id:7,
        image:`https://miro.medium.com/max/766/1*uPL1uCtLBRSk6akPL2hNzg.jpeg`,
        p:"Express.js",
    },
    {
        id:8,
        image:`https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png`,
        p:"Node.js",
    },
    {
        id:9,
        image:`https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg`,
        p:"Chakra UI",
    },
    {
        id:10,
        image:`data:image/png;base64,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`,
        p:"Git",
    },
   
]
export default datas

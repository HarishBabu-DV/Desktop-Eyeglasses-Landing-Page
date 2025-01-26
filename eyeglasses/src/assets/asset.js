import logo from './glass-logo.png'
import glasses from './glasses.png'
import bg from './Rectangle 6.png'
import wave from './Vector.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebook,faXTwitter,faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const navLink=[
    {
        id:1,
        title:"Home"
    },
    {
        id:2,
        title:"Product"
    },
    {
        id:3,
        title:"About us"
    }
]

export const productsList=[
    {
        id:1,
        title:"Beach sunglasses",
        imageUrl:"https://img.freepik.com/free-photo/sunglasses_1203-8700.jpg?t=st=1737770098~exp=1737773698~hmac=20551e79b01dd3fd99ba216b5014397ce5d4dfa8d0a9a5a00aefe9c4f5c1ea1e&w=996",
        price:500
     },
    {
        id:2,
        title:"Modern sunglasses",
        imageUrl:"https://img.freepik.com/free-photo/close-up-elegant-eyeglasses_23-2147688607.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        price:600
    },
    {
        id:3,
        title:"UV sunglasses",
        imageUrl:"https://img.freepik.com/premium-photo/eye-glasses-isolated_34986-572.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        price:400
    },
    {
        id:4,
        title:"Fashion sunglasses",
        imageUrl:"https://img.freepik.com/premium-vector/stylish-sunglasses-abstract-colorful-drawing-vector-illustration-paints_537015-189.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        price:200
    },
    {
        id:5,
        title:"Classic sunglasses",
        imageUrl:"https://img.freepik.com/premium-photo/eyeglasses_55997-742.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        price:700
    },
    {
        id:6,
        title:"Shining sunglasses",
        imageUrl:"https://img.freepik.com/premium-vector/eyeglasses-glasses-black-rims-illustration_275952-149.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        price:800
    },
    {
        id:7,
        title:"Plain sunglasses",
        imageUrl:"https://img.freepik.com/premium-photo/fashion-glasses-isolated-white-background_85778-31.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        price:1000
    },
    {
        id:8,
        title:"Transparent sunglasses",
        imageUrl:"https://img.freepik.com/premium-photo/female-glasses-vision-isolated-white_179670-37.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        price:1200
    },
    {
        id:9,
        title:"Red sunglasses",
        imageUrl:"https://img.freepik.com/premium-photo/close-up-eyeglasses-against-white-background_1048944-19759493.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        price:2000
    }
]
export const aboutUsDescription=[
    {
        id:1,
        imageUrl:"https://img.freepik.com/free-vector/digital-marketing-team-constructing-landing-home-page_74855-10590.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        title:"trusted",
        description1:"Over 100",
        description2:"happy customers",       
    },
    {
        id:2,
        imageUrl:"https://img.freepik.com/free-vector/people-creating-social-media-landing-page_52683-38062.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        title:"feedbacks",
        description1:"4.0 of 5.0",
        description2:"feedbacks",       
    },
    {
        id:3,
        imageUrl:"https://img.freepik.com/free-vector/www-concept-illustration_114360-2143.jpg?uid=R176694641&ga=GA1.1.691378396.1692690636&semt=ais_hybrid",
        title:"Models",
        description1:"99+ Models",
        description2:"eye wears",       
    }
]
//Footer Contents
export const footerContent={
    contact:[
        {
        heading:"Contact Us",
        },
        {
            heading:"eyeglasses@gmail.com",
        },
        {
            heading:"+123 456 789"
        }
    ],
    quick_links:[
        {
            heading:"Home"
        },
        {
            heading:"Products"
        },
        {
            heading:"Sign in / Sign up"
        }
    ],
    social_media_icons:[
        {
            icon:faInstagram
        },
        {
            icon:faFacebook
        },
        {
            icon:faXTwitter
        },
        {
            icon:faWhatsapp
        }
    ]
}

export {logo,glasses,bg,wave}
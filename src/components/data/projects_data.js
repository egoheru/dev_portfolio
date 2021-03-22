import tweetme from '../../assets/projects_images/tweetme.PNG'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import blinking from '../../assets/projects_images/blinking.JPG'
import COVID from '../../assets/projects_images/COVID.jpg'
import Dev_talks from '../../assets/projects_images/Dev_talks.jpg'
import netflix from '../../assets/projects_images/netflix.png'
import amazon from '../../assets/projects_images/amazon.jpg'
import social from '../../assets/projects_images/social.GIF'
import linkedin from '../../assets/projects_images/linkedin.GIF'
import recipe from '../../assets/projects_images/recipe.GIF'
import budget from '../../assets/projects_images/budget.GIF'

const data_projects = [
    {
        name: 'COVID 19 track Check for Statistics',
        image: COVID,
        deployed_url: 'https://covid-tracker-3b12a.web.app/',
        github_url: 'https://github.com/egoheru/react-covid-tracker',
        category: ['react.js']
    },

    {
        name: 'NETFLIX APP | Fully Functional E-Commerce Support-Stripe',
        image: netflix,
        deployed_url: 'https://netflix-ego.web.app/',
        github_url: 'https://github.com/Dey-Sumit/Dev-talks',
        category: ['node.js', 'mongodb', 'react.js']
    },

    {
        name: 'Full-Stack Social Media App Full Functional working App',
        image: social,
        deployed_url: 'https://socialappe-72b1d.web.app/',
        github_url: 'https://github.com/egoheru/socialego-client',
        category: ['node.js', 'socket.io', 'react.js']
    },

    {
        name: 'LinkedIn Clone App | Social App ',
        image: linkedin,
        deployed_url: 'https://linkedin-ego.web.app/',
        github_url: 'https://github.com/egoheru/linkedIn-app',
        category: ['django', 'react.js', 'mongodb']
    },

    {
        name: 'Full-Stack Ecommerce Web Shop Amazon-like Fully E-Commerce Stripe  ',
        image: amazon,
        deployed_url: 'https://ego-53f33.web.app/',
        category: ['react.js', 'vanilla', 'node.js']
    },

    {
        name: 'Food Recipe App',
        image: recipe,
        deployed_url: 'https://ego-searching-recipe.herokuapp.com/',
        github_url: 'https://github.com/egoheru/food-searching-app',
        category: ['vanilla']
    },

    {
        name: 'Expense Tracker | Budget Tracker',
        image: budget,
        deployed_url: 'https://ego-budget-tracker.web.app/',
        category: ['node.js', 'vanilla', 'react.js'],
        github_url: 'https://github.com/egoheru/food-searching-app',
        
    }
    // ,

    // {
    //     name: 'Color Classification using tf.js',
    //     image: color_classification,
    //     deployed_url: '!#',
    //     github_url: 'https://github.com/Dey-Sumit/color-classification',
    //     category: ['node.js', 'machine_learning']
    // },

    // {
    //     name: 'Blinking bubbles',
    //     image: blinking,
    //     deployed_url: 'https://dey-sumit.github.io/Blinking_Bubbles/',
    //     github_url: 'https://github.com/Dey-Sumit/Blinking_Bubbles',
    //     category: ['processing', 'vanilla' ]
    // }
]

export default data_projects;
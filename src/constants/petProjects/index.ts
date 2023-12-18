export type ProjectType = {
    id: number
    title: string
    description: string
    image: string
    link: string
}


export const petProjectArray: ProjectType[] = [
    {
        id: 21,
        title: 'Cryptomania',
        description: 'project with firebase (auth, storage, deploy), mobX, typescript',
        image: require('../../assets/gif/cryptomaniaGif.gif'),
        link: 'https://cryptomania-d5f1c.web.app/',
    },
    {
        id: 22,
        title: 'StarWars Project',
        description: 'One of the first project on React. React-router-dom, Api Star-wars',
        image: require('../../assets/png/starWarsProject.png'),
        link: 'https://github.com/Vladoosik/React-Cource/tree/master/starwars',
    },
    {
        id: 23,
        title: 'Loader',
        description: 'some loader on CodePen',
        image: require('../../assets/gif/loaderProject.gif'),
        link: 'https://codepen.io/Vladoosik/pen/vYbLrKN',
    }, {
        id: 24,
        title: 'Swapi Mobile',
        description: 'Project with MobX, Typescript, React-Native, React Navigation',
        image: require('../../assets/png/swapi_rn.jpg'),
        link: 'https://github.com/Vladoosik/swapiMobile',
    },
]

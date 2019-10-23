
import youtube from "../images/projects/youtube.jpg"
import bookstore from "../images/projects/bookstore.gif"
import calculator from "../images/projects/calculator.jpg"
import wikipedia from "../images/projects/wikipedia.jpg"
import ticTac from "../images/projects/ticTac.gif"
import simon from "../images/projects/simon.jpg"
import movieViewer from "../images/projects/movieViewer.gif"
import weather from "../images/projects/weather.jpg"
import googleMaps from "../images/projects/googleMap.jpg"
import randomVerses from "../images/projects/randomVerses.jpg"
import chatRoom from "../images/projects/chatRoom.gif"
import reactstagram from "../images/projects/reacstagram.gif";


const projects = [
	
	{
		title: 'Search Video On YouTube',
		description:
		'React, Redux, CSS, API',
		image: youtube,
		button: 'Watch a video ',
		userProfile: 'https://ykalashnikov.github.io/YouTube-API/'
	},
	{
		title: 'Movie Viewer',
		description:
		'React, Redux, API, CSS',
		button: 'Discover',
		image: movieViewer,
		userProfile: 'https://ykalashnikov.github.io/Movie-Viewer-React-Redux/'
	},
	{
		title: 'Online Book Store',
		description:
		`ReactJS,
        Redux,
        Redux Thunk,
        React Logger,
        Axios,
        Lodash,
        Semantic UI`,
        button: 'Buy a Book',
		image: bookstore,
		userProfile: 'https://book-store-react-redux.herokuapp.com '
	},
	{
		title: 'Google Maps',
		description:
		'JavaScript, CSS, API',
		button: 'Discover',
		image: googleMaps,
		userProfile: ' https://ykalashnikov.github.io/google-maps/'
	},
	{
		title: 'Reactstagram',
		description:
		'ReactJS, CSS, Webpack, Redux ',
		button: 'Get Likes',
		image: reactstagram,
		userProfile: 'https://github.com/YKalashnikov/Reactstagram'
	},
    {
		title: 'Wikipedia Viewer Based On JavaScript',
		description:
		'JavaScript, CSS',
		button: 'Get Smarter',
		image: wikipedia,
		userProfile: 'https://ykalashnikov.github.io/wikipedia-viewer/'
	},
	{
		title: 'Local Weather JavaScript',
		description:
		'CSS, JavaScript',
		button: 'Discover',
		image: weather,
		userProfile: 'https://my-local-weather.netlify.com/'
	},
	{
		title: 'Chat Room',
		description:
		'React, Redux, Redux-Saga, Web Sockets, Nodejs, Chance library',
		button: 'Send a Message',
		image: chatRoom,
		userProfile: 'https://github.com/YKalashnikov/Chat-App'
	},
	
    {
		title: 'Tic Tac Toe',
		description:
		'JavaScript, CSS',
		button: 'Play hard',
		image: ticTac,
		userProfile: 'https://ykalashnikov.github.io/Tic-Tac-Toe/'
	},

	{
		title: 'Simon Game',
		description:
		'JavaScript, CSS',
		button: 'Play now',
		image: simon,
		userProfile: 'https://ykalashnikov.github.io/simon-game/'
    },
   
	{
		title: 'Calculator',
		description:
		'Simple JS Calculator',
		button: 'Do math',
		image: calculator,
		userProfile: 'https://ykalashnikov.github.io/java-script-calculator/'
    },

];
export default projects;
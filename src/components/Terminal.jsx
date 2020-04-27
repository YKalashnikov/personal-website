import React, { Component } from 'react';
import { linkifier } from 'react-linkifier';
import 'normalize.css';
import 'animate.css';
import '../scss/components/_terminal.scss';


const
    CMD_HELP = 'help',
    CMD_ABOUT = 'about',
    CMD_GITHUB = 'github',
    CMD_LINKEDIN = 'linkedin',
    CMD_INSTAGRAM = 'instagram',
    CMD_MEDIUM = 'medium',
    CMD_CLEAR = 'clear',
    CMD_OOPS = 'oops',
    CMD_RESUME = 'resume'

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            lines: generateInitialInfo()
        };
        this.history = [];
        this.historyIndex = -1;
        this.keysPressed = [];
    }

    render() {
        const { input, lines } = this.state;

        return <div id="terminal">
            <ul>
                {lines.map(line  => <li key={line}>
                    {line.substring(0, 2) === '> ' ? 
                        <pre><span className="prompt">> </span>{linkify(line.substring(2))}</pre> : 
                        <pre>{linkify(line)}</pre>}
                </li>)}
            </ul>
            <form onSubmit={this.onSubmit}>      
                <label className="prompt">> </label>
                <input 
                    autoFocus 
                    type="text" 
                    value={input.toLowerCase()} 
                    onChange={this.onInputChange.bind(this)}
                    onKeyPress={this.onKeyPress.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                />      
            </form>
        </div>;
    }

    componentDidUpdate() {
        setPromptInView();
    }

    onSubmit(event) {
        event.preventDefault();
    }

    onInputChange(event) {
        this.historyIndex = -1;
        this.setState({ input: event.target.value });
    }

    onKeyPress(event) {
        if (event.key === 'Enter') {
            this.processInput();
        }
    }

    processInput() {
        const input = this.state.input.trim();
        const command = getCommand(input);
        const newLines = generateOutput(input);

        const oldLines = command === CMD_CLEAR ? [] : this.state.lines;

        this.history = [...this.history, input].filter(i => i !== '');
        this.historyIndex = -1;
        this.setState({
            input: '',
            lines: [
                ...oldLines,
                '> ' + input,
                ...newLines
            ]
        });
    }

    onKeyDown(event) {
        setPromptInView();
        this.keysPressed[event.keyCode] = true;
        // Ctrl + c
        if (this.keysPressed[17] && this.keysPressed[67]) {
            this.processInterrupt();
        }
        // Up arrow
        else if (event.keyCode === 38) {
            this.navigateHistoryUp();
        }
        // Down arrow
        else if (event.keyCode === 40) {
            this.navigateHistoryDown();
        }
    }

    processInterrupt() {
        this.historyIndex = -1;
        this.setState({
            input: '',
            lines: [
                ...this.state.lines,
                '> ' + this.state.input
            ]
        });
    }

    onKeyUp(event) {
        this.keysPressed[event.keyCode] = false;
    }

    navigateHistoryUp() {
        const { history, historyIndex } = this;

        if (history.length === 0) {
            return;
        }

        let newIndex;
        if (historyIndex === -1) {
            newIndex = history.length - 1;
        } else {
            newIndex = Math.max(0, historyIndex - 1);
        }

        this.historyIndex = newIndex;
        this.setState({ input: history[newIndex] });
    }

    navigateHistoryDown() {
        const { history, historyIndex } = this;

        if (historyIndex !== -1) {
            const newIndex = Math.min(history.length - 1, historyIndex + 1);
            this.historyIndex = newIndex;
            this.setState({ input: history[newIndex] });
        }
    }
};

const getCommand = input => {
    const items = input.split(' ').filter(i => i !== '');
    if (items.length === 0) {
        return undefined;
    }
    return items.shift();
};

const generateOutput = input => {
    const command = getCommand(input);
    const args = input.split(' ').slice(1);
    switch (command) {
        case undefined:
            return [];
        case CMD_HELP:
            return generateHelp();
        case CMD_GITHUB:
            return generateGithub();
        case CMD_LINKEDIN:
            return generateLinkedIn();
        case CMD_ABOUT:
            return generatePersonalInfo();
        case CMD_CLEAR:
            return [];
        case CMD_INSTAGRAM:
             return generateInstagram();  
        case CMD_MEDIUM:
             return generateMedium();
        case CMD_RESUME: 
             return resume();       
        case CMD_OOPS:
            return generateOops();
        default:
            return [`Command not found: ${command}`];
    }
};

const generateInitialInfo = () => {
    return [
        'Welcome to the Internet™!',
        'Type \'help\' command to show the help menu'
    ];
};

const generateHelp = () => {
    return [
        `   ${CMD_HELP}           Show help menu`,
        `   ${CMD_ABOUT}          Show personal info`,
        `   ${CMD_GITHUB}         Go to my Github page`,
        `   ${CMD_LINKEDIN}       Go to my LinkedIn page`,
        `   ${CMD_MEDIUM}         Go to my Medium page`,
        `   ${CMD_INSTAGRAM}      Go to my Instagram page`,
        `   ${CMD_CLEAR}          Clear terminal output`,
        `   ${CMD_RESUME}         Resume`,
        `   ${CMD_OOPS}           Oops`,
    ];
};

const generatePersonalInfo = () => {
    return [
        '   Hi! My name is Iurii Kalashnikov.',
        '   I am a software engineer living in San Diego, California.',
        '   I love to write code.',
       
    ];
};

const generateGithub = () => {
    //window.open('https://github.com/YKalashnikov');
    return [
        'This is my Github page: https://github.com/YKalashnikov'
    ];
};

const generateLinkedIn = () => {
   // window.open('https://www.linkedin.com/in/yurii-kalashnikov/');
    return [
        'This is my LinkedIn page: https://www.linkedin.com/in/yurii-kalashnikov/'
    ];
};
const resume = () => {
    window.open('https://drive.google.com/file/d/1ZmZP3uVh1_QQ70VyXrQ9FjAZZ-KJmlmH/view')
    return ['https://drive.google.com/file/d/1ZmZP3uVh1_QQ70VyXrQ9FjAZZ-KJmlmH/view']
}

const generateOops = () => {
    //setInterval(modifyRandomElement.bind(this, effects.wobble), 500);
    setInterval(modifyRandomElement.bind(this, effects.hinge), 500);
    setInterval(modifyRandomElement.bind(this, effects.comic), 5000);
    return ['Holy cows'];
};

const generateInstagram = () => {
    return [
        'This is my Instagram page: https://www.instagram.com/yuriikalashnikov/?hl=en'
    ]
};
const generateMedium = () => {
    return [
        'This is my Medium page(Rus): https://medium.com/@yuriikalashnikov'
    ]
};

const getRand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const splitIntoWords = elem => {
    let items = elem.innerText
        .split(' ')
        .map(i => [' ', i]);

    return []
        .concat(...items)
        .slice(1)
        .filter(i => i !== '')
        .map(item => createPre(item, elem.className));
};

const splitIntoLetters = elem => {
    return elem.innerText
        .split('')
        .filter(i => i !== '')
        .map(letter => createPre(letter, elem.className));
};

const createPre = (text, className) => {
    const elem = document.createElement('pre');
    elem.innerText = text;
    elem.className = className;
    return elem;
};

const effects = {
    comic: [splitIntoWords, item => {
        item.innerText = 'The End of the internet';
        //item.innerText = 'It`s`the worst day ever';
        item.className += ' comic-font';
    }],
    hinge: [splitIntoWords, item => item.className += ' animated hinge'],
    //wobble: [splitIntoWords, item => item.className += ' animated wobble']
};

const modifyRandomElement = effect => {
    const [splitFunc, applyEffect] = effect;

    const elems = Array.from(document.querySelectorAll('pre:not(.hinge)'))
        // Select only elements with at least 1 character which is not space or line break
        .filter(elem => elem.innerText.replace(/[\s\r]/, '') !== '');

    if (elems.length === 0) {
        return;
    }

    const elem = elems[getRand(0, elems.length - 1)];
    const items = splitFunc(elem);

    elem.replaceWith(...items);
    const eligibleItems = items.filter(item => item.innerText !== ' ');
    applyEffect(eligibleItems[getRand(0, eligibleItems.length - 1)]);
};

const setPromptInView = () => {
    const prompt = document.querySelector('#terminal > form');
    const { height, top } = prompt.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // If prompt not fully in view, then scroll to bottom
    if (height + top > windowHeight) {
        window.scrollTo(0, document.body.scrollHeight);
    }
};

const linkify = text => linkifier(text, {target: '_blank'});




export default Terminal;

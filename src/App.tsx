import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import TerminalLayout from './components/terminal/TerminalLayout.tsx';
import HelpCommand from "./components/terminal/terminalCommands/HelpCommand.tsx";
import AboutCommand from "./components/terminal/terminalCommands/AboutCommand.tsx";
import ClearCommand from "./components/terminal/terminalCommands/ClearCommand.tsx";
import CommandNotFound from "./components/terminal/terminalCommands/CommandNotFound.tsx";
import WelcomeCommand from "./components/terminal/terminalCommands/WelcomeCommand.tsx";
import EducationCommand from "./components/terminal/terminalCommands/EducationCommand.tsx";
import ProjectsCommand from "./components/terminal/terminalCommands/ProjectsCommand.tsx";
import ContactCommand from "./components/terminal/terminalCommands/ContactCommand.tsx";
import RmRfCommand from "./components/terminal/terminalCommands/RmRfCommand.tsx";

interface Command {
    type: 'command' | 'output';
    text?: string;
    component?: JSX.Element;
}

const App: React.FC = () => {
    const [commands, setCommands] = useState<Command[]>([]);
    const [input, setInput] = useState<string>('');
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(0);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const command = input.trim();
            let outputComponent: JSX.Element | null = null;

            switch (command) {
                case 'help':
                    outputComponent = <HelpCommand onCommandClick={handleCommandClick} />;
                    break;
                case 'welcome':
                    outputComponent = <WelcomeCommand onHelpClick={handleHelpClick} />;
                    break;
                case 'education':
                    outputComponent = <EducationCommand />;
                    break;
                case 'about':
                    outputComponent = <AboutCommand />;
                    break;
                case 'projects':
                    outputComponent = <ProjectsCommand />;
                    break;
                case 'contact':
                    outputComponent = <ContactCommand />;
                    break;
                case 'rm -rf':
                    outputComponent = <RmRfCommand />;
                    break;
                case 'clear':
                    outputComponent = <ClearCommand />;
                    setCommands([]);
                    break;
                default:
                    outputComponent = <CommandNotFound />;
                    break;
            }

            if (command !== 'clear') {
                setCommands(prevCommands => [
                    ...prevCommands,
                    { type: 'command', text: command },
                    { type: 'output', component: outputComponent }
                ]);
                setCommandHistory(prevHistory => [...prevHistory, command]);
                setHistoryIndex(commandHistory.length);
            }

            setInput('');
        } else if (e.key === 'ArrowUp') {
            if (historyIndex > 0) {
                setHistoryIndex(prevIndex => prevIndex - 1);
                setInput(commandHistory[historyIndex - 1]);
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex < commandHistory.length - 1) {
                setHistoryIndex(prevIndex => prevIndex + 1);
                setInput(commandHistory[historyIndex + 1] || '');
            } else if (historyIndex === commandHistory.length - 1) {
                setInput('');
            }
        }
    };

    const handleHelpClick = () => {
        const outputComponent = <HelpCommand onCommandClick={handleCommandClick} />;
        setCommands(prevCommands => [
            ...prevCommands,
            { type: 'command', text: 'help' },
            { type: 'output', component: outputComponent }
        ]);
        setCommandHistory(prevHistory => [...prevHistory, 'help']);
        setHistoryIndex(commandHistory.length);
    };

    const handleCommandClick = (command: string) => {
        let outputComponent: JSX.Element | null = null;

        switch (command) {
            case 'help':
                outputComponent = <HelpCommand onCommandClick={handleCommandClick} />;
                break;
            case 'welcome':
                outputComponent = <WelcomeCommand onHelpClick={handleHelpClick} />;
                break;
            case 'education':
                outputComponent = <EducationCommand />;
                break;
            case 'about':
                outputComponent = <AboutCommand />;
                break;
            case 'projects':
                outputComponent = <ProjectsCommand />;
                break;
            case 'contact':
                outputComponent = <ContactCommand />;
                break;
            case 'clear':
                outputComponent = <ClearCommand />;
                setCommands([]);
                break;
            default:
                outputComponent = <CommandNotFound />;
                break;
        }

        if (command !== 'clear') {
            setCommands(prevCommands => [
                ...prevCommands,
                { type: 'command', text: command },
                { type: 'output', component: outputComponent }
            ]);
            setCommandHistory(prevHistory => [...prevHistory, command]);
            setHistoryIndex(commandHistory.length);
        }
    };

    useEffect(() => {
        setCommands([
            { type: 'command', text: 'welcome' },
            { type: 'output', component: <WelcomeCommand onHelpClick={handleHelpClick} /> },
        ]);
    }, []);

    return (
        <TerminalLayout>
            <div className="flex flex-col">
                <div className="flex-1 overflow-auto">
                    {commands.map((command, index) => (
                        <div key={index} className="mb-4">
                            {command.type === 'command' ? (
                                <div className="text-green-500">
                                    visitor@romain-gilot.fr:~$ <span className="text-white">{command.text}</span>
                                </div>
                            ) : (
                                command.component
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <span className="text-green-500">visitor@romain-gilot.fr:~$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyPress}
                        className="border-none outline-none text-white flex-1 ml-2"
                        autoFocus
                    />
                </div>
            </div>
        </TerminalLayout>
    );
};

export default App;

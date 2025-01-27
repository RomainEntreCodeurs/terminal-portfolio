interface HelpCommandProps {
    onCommandClick: (command: string) => void;
}

export default function HelpCommand({ onCommandClick }: HelpCommandProps) {
    const availableCommands = [
        { name: "help", description: "Shows help command" },
        { description: "------------------------------------"},
        { name: "welcome", description: "Banner and message" },
        { name: "about", description: "Who am I ?" },
        { name: "education", description: "My educational background" },
        { name: "projects", description: "List of my projects" },
        { name: "contact", description: "How to contact me" },
        { description: "------------------------------------"},
        { name: "clear", description: "Clear all history terminalCommands" },
        { name: "lang", description: "Change language of website → lang <fr or en>" },
    ];

    return (
        <div className={"mb-4"}>
            {availableCommands.map((cmd, index) => (
                <div key={index} className="mb-1 flex">
                    {cmd.name && (
                        <div className={"w-1/8"}>
                            <span
                                className="mr-5 text-orange-300 hover:text-orange-100 cursor-pointer"
                                onClick={() => onCommandClick(cmd.name)}
                            >
                                {cmd.name}
                            </span>
                        </div>
                    )}
                    <span className={`${cmd.name && "mr-5"} text-gray-200`}>{cmd.description}</span>
                </div>
            ))}
        </div>
    );
};


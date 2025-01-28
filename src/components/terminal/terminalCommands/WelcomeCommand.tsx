interface WelcomeCommandProps {
    onHelpClick: () => void;
}

export default function WelcomeCommand({ onHelpClick }: WelcomeCommandProps) {
    return (
        <div>
            <img src={"/images/welcome.png"} className={"h-18 md:h-24 lg:h-36"} alt={"Welcome Image"}/>
            <div className="text-gray-200 mt-4">
                Welcome to my portfolio! To get started, use the <span className="text-orange-300 hover:text-orange-100 cursor-pointer" onClick={onHelpClick}>help</span> command.
            </div>
        </div>
    );
}

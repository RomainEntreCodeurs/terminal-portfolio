import {Icon} from "@iconify/react";
import {ReactNode, useEffect, useRef} from "react";

interface Props {
    children: ReactNode;
}

export default function TerminalLayout({ children }: Props) {
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [children]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen sm:w-full sm:h-full">
            <div className="flex flex-col md:items-center md:justify-center w-full max-w-4xl sm:w-full sm:h-full">
                <div className="w-full h-full sm:h-full">
                    <div className="w-full h-16 bg-gray-800 lg:rounded-t-2xl flex justify-center lg:justify-between items-center px-7">
                        <div className="flex-1 flex justify-center hidden lg:block"></div>
                        <div className="flex-1 flex justify-center text-slate-100 font-bold">visitor@romain-gilot.fr:~</div>
                        <div className="flex-1 flex justify-end items-center gap-x-5 hidden lg:flex">
                            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer">
                                <Icon icon="material-symbols:check-indeterminate-small-rounded" className="text-white" />
                            </div>
                            <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center cursor-pointer">
                                <Icon icon="material-symbols:square-outline-rounded" className="text-white" />
                            </div>
                            <div className="h-8 w-8 rounded-full bg-gray-700 hover:bg-red-400 flex items-center justify-center cursor-pointer">
                                <Icon icon="material-symbols:close-rounded" className="text-white" />
                            </div>
                        </div>
                    </div>
                    <div ref={terminalRef} className="bg-gray-800/80 md:h-[400px] lg:h-[700px] lg:rounded-b-2xl p-2 md:p-4 lg:p-7 overflow-y-auto h-[calc(100vh-4rem)]">
                        {children}
                    </div>
                </div>
                <div className="mt-5 font-medium text-white text-xl flex gap-x-2 items-center hidden md:flex">
                    Developed with
                    <Icon icon="solar:heart-bold" className="text-red-500" />
                    by Romain GILOT
                </div>
            </div>
        </div>
    );
}

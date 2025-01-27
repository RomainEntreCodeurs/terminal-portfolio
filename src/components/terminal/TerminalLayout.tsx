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
        <div className="flex flex-col flex-1 flex-grow">
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="w-2/3">
                    <div className="w-full h-16 bg-gray-800 rounded-t-2xl flex items-center px-7">
                        <div className="flex-1 flex justify-center"></div>
                        <div className="flex-1 flex justify-center text-slate-100 font-bold">visitor@romain-gilot.fr:~</div>
                        <div className="flex-1 flex justify-end items-center gap-x-5">
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
                    <div ref={terminalRef} className="bg-gray-800/80 h-[700px] rounded-b-2xl p-7 overflow-y-auto">
                        {children}
                    </div>
                </div>
                <div className="mt-5 font-medium text-white text-xl flex gap-x-2 items-center">
                    Developed with
                    <Icon icon="solar:heart-bold" className="text-red-500" />
                    by Romain GILOT
                </div>
            </div>
        </div>
    );
}

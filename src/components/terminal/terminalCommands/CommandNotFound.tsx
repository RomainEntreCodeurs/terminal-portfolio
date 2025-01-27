export default function CommandNotFound() {
    return (
        <div>
            <div className="text-red-500 mb-2">
                Command not found
            </div>
            <div className="text-white mb-4">
                Try the command: help
            </div>
        </div>
    );
};


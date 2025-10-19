interface BadgeProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    className?: string;
}

export default function Badge({ icon, title, description, className }: BadgeProps) {
    return (
        <div className="flex items-center gap-4 mt-5">
            <div className={`h-13 w-13 rounded-full flex items-center justify-center ${className}`}>
                {icon}
            </div>

            <div>
                <h3 className="text-main text-3xl font-bold">{title}</h3>
                <p className="text-gray-400 dark:text-gray-500">{description}</p>
            </div>
        </div>
    );
}
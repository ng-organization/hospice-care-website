import { ReactNode } from "react";

interface TeamMemberProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

export function TeamMember({ icon, title, className = "" }: TeamMemberProps) {
  return (
    <div className={`text-center group ${className}`}>
      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
        <div className="text-primary-600">{icon}</div>
      </div>
      <h3 className="text-sm font-medium text-slate-800">{title}</h3>
    </div>
  );
}

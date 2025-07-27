import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface LevelCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function LevelCard({
  icon,
  title,
  description,
  className = "",
}: LevelCardProps) {
  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 ${className}`}
    >
      <CardContent className="p-10">
        <div className="flex items-start space-x-6">
          <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 transition-all duration-300 group-hover:scale-110">
            <div className="text-secondary-600">{icon}</div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

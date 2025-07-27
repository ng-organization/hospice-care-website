import { Card, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <Card
      className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-primary-50/30 hover:scale-105 hover:-translate-y-2 ${className}`}
    >
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-all duration-300 group-hover:scale-110">
          <div className="text-primary-600">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

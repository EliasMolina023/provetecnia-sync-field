import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
    positive: boolean;
  };
  color?: "primary" | "success" | "warning" | "destructive";
  className?: string;
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  color = "primary",
  className,
}: StatsCardProps) {
  const colorClasses = {
    primary: "bg-gradient-primary text-white shadow-glow",
    success: "bg-gradient-to-br from-success to-success/80 text-white",
    warning: "bg-gradient-to-br from-warning to-warning/80 text-white",
    destructive: "bg-gradient-to-br from-destructive to-destructive/80 text-white",
  };

  return (
    <Card className={cn("shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105 border-0 overflow-hidden group", className)}>
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -translate-y-16 translate-x-16" />
      <CardContent className="p-6 relative">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{title}</p>
            <div className="flex items-baseline space-x-3 mt-3">
              <p className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">{value}</p>
              {trend && (
                <span
                  className={cn(
                    "text-sm font-semibold px-2 py-1 rounded-full border",
                    trend.positive 
                      ? "bg-success/10 text-success border-success/20" 
                      : "bg-destructive/10 text-destructive border-destructive/20"
                  )}
                >
                  {trend.positive ? "↗" : "↘"} {trend.value}%
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
            {trend && (
              <p className="text-xs text-muted-foreground mt-1 flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${trend.positive ? 'bg-success' : 'bg-destructive'}`} />
                {trend.label}
              </p>
            )}
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className={cn("relative rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300", colorClasses[color])}>
              <Icon className="h-8 w-8" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
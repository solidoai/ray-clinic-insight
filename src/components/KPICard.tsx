import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: React.ReactNode;
  subtitle?: string;
}

export function KPICard({ title, value, change, changeType, icon, subtitle }: KPICardProps) {
  const getTrendIcon = () => {
    if (changeType === 'positive') return <TrendingUp className="h-4 w-4" />;
    if (changeType === 'negative') return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getTrendColor = () => {
    if (changeType === 'positive') return 'text-success';
    if (changeType === 'negative') return 'text-destructive';
    return 'text-muted-foreground';
  };

  return (
    <Card className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-medical-blue-light rounded-lg">
              {icon}
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              <h3 className="text-2xl font-bold text-foreground">{value}</h3>
              {subtitle && (
                <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
              )}
            </div>
          </div>
          <div className={`flex items-center gap-1 ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="text-sm font-medium">
              {change > 0 ? '+' : ''}{change}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
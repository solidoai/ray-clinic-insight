import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { UserX, MapPin, Stethoscope, ExternalLink } from "lucide-react";

const roomData = [
  { name: 'Sala 1', value: 156, color: 'hsl(var(--primary))' },
  { name: 'Sala 2', value: 144, color: 'hsl(var(--medical-blue-light))' }
];

const procedureData = [
  { name: 'Revisão 6 meses', value: 45, color: 'hsl(var(--primary))' },
  { name: 'Manutenção Aparelho', value: 28, color: 'hsl(var(--medical-green))' },
  { name: 'Limpeza', value: 32, color: 'hsl(var(--medical-blue-dark))' },
  { name: 'Obturação', value: 18, color: 'hsl(var(--warning))' },
  { name: 'Outros', value: 12, color: 'hsl(var(--muted-foreground))' }
];

export function BehavioralAnalysis() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="border-0 shadow-[var(--shadow-card)]">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            <UserX className="h-5 w-5 text-medical-red" />
            Pacientes sem Retorno
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-3xl font-bold text-medical-red mb-2">47</div>
            <p className="text-sm text-muted-foreground mb-4">6+ meses sem consulta</p>
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink className="h-4 w-4 mr-2" />
              Ver Lista Completa
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-[var(--shadow-card)]">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Consultas por Sala
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={roomData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
              >
                {roomData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value, 'Consultas']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            <div className="flex items-center gap-1 text-xs">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span>Sala 1: 156</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className="w-3 h-3 bg-medical-blue-light rounded-full"></div>
              <span>Sala 2: 144</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-[var(--shadow-card)]">
        <CardHeader className="pb-4">
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-medical-green" />
            Tipos de Procedimentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {procedureData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className="text-sm font-semibold text-primary">{item.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { month: 'Jan', 'Dr. Rayssa': 18500, 'Dr. Carlos': 16200, 'Dra. Maria': 19800, 'Dr. João': 17300, 'Dra. Ana': 15900, 'Dr. Pedro': 16800 },
  { month: 'Fev', 'Dr. Rayssa': 19200, 'Dr. Carlos': 17100, 'Dra. Maria': 18900, 'Dr. João': 18500, 'Dra. Ana': 16800, 'Dr. Pedro': 17200 },
  { month: 'Mar', 'Dr. Rayssa': 20100, 'Dr. Carlos': 18300, 'Dra. Maria': 20500, 'Dr. João': 19200, 'Dra. Ana': 17500, 'Dr. Pedro': 18100 },
  { month: 'Abr', 'Dr. Rayssa': 21000, 'Dr. Carlos': 19000, 'Dra. Maria': 21200, 'Dr. João': 19800, 'Dra. Ana': 18200, 'Dr. Pedro': 18900 },
  { month: 'Mai', 'Dr. Rayssa': 22500, 'Dr. Carlos': 20100, 'Dra. Maria': 22000, 'Dr. João': 20500, 'Dra. Ana': 19100, 'Dr. Pedro': 19500 },
  { month: 'Jun', 'Dr. Rayssa': 23200, 'Dr. Carlos': 21200, 'Dra. Maria': 23500, 'Dr. João': 21800, 'Dra. Ana': 20000, 'Dr. Pedro': 20200 },
  { month: 'Jul', 'Dr. Rayssa': 24100, 'Dr. Carlos': 22000, 'Dra. Maria': 24200, 'Dr. João': 22500, 'Dra. Ana': 21200, 'Dr. Pedro': 21100 },
  { month: 'Ago', 'Dr. Rayssa': 25000, 'Dr. Carlos': 23100, 'Dra. Maria': 25200, 'Dr. João': 23800, 'Dra. Ana': 22000, 'Dr. Pedro': 22500 }
];

const newPatientsData = [
  { month: 'Jan', pacientes: 32 },
  { month: 'Fev', pacientes: 28 },
  { month: 'Mar', pacientes: 35 },
  { month: 'Abr', pacientes: 42 },
  { month: 'Mai', pacientes: 38 },
  { month: 'Jun', pacientes: 45 },
  { month: 'Jul', pacientes: 41 },
  { month: 'Ago', pacientes: 47 }
];

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border-0 shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Evolução Mensal de Faturamento por Profissional
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`} />
              <Tooltip 
                formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Faturamento']}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Legend />
              <Line type="monotone" dataKey="Dr. Rayssa" stroke="hsl(var(--primary))" strokeWidth={2} />
              <Line type="monotone" dataKey="Dr. Carlos" stroke="hsl(var(--medical-green))" strokeWidth={2} />
              <Line type="monotone" dataKey="Dra. Maria" stroke="hsl(var(--medical-red))" strokeWidth={2} />
              <Line type="monotone" dataKey="Dr. João" stroke="hsl(var(--warning))" strokeWidth={2} />
              <Line type="monotone" dataKey="Dra. Ana" stroke="hsl(var(--medical-blue-dark))" strokeWidth={2} />
              <Line type="monotone" dataKey="Dr. Pedro" stroke="hsl(var(--destructive))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Pacientes Novos por Mês (Jan-Ago 2025)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={newPatientsData}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [value, 'Pacientes Novos']}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Bar dataKey="pacientes" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
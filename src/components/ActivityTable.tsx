import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const recentActivities = [
  {
    date: "29/08/2025",
    time: "14:30",
    patient: "Ana Silva",
    professional: "Dr. Rayssa",
    type: "Consulta",
    status: "Concluída"
  },
  {
    date: "29/08/2025", 
    time: "13:45",
    patient: "Pedro Santos",
    professional: "Dra. Maria",
    type: "Cancelamento",
    status: "Cancelado"
  },
  {
    date: "29/08/2025",
    time: "11:20",
    patient: "Maria Oliveira",
    professional: "Dr. Carlos",
    type: "Consulta",
    status: "Concluída"
  },
  {
    date: "29/08/2025",
    time: "10:15",
    patient: "João Costa",
    professional: "Dr. João",
    type: "Consulta",
    status: "Concluída"
  },
  {
    date: "29/08/2025",
    time: "09:30",
    patient: "Lucia Ferreira",
    professional: "Dra. Ana",
    type: "Consulta",
    status: "Concluída"
  },
  {
    date: "28/08/2025",
    time: "16:45",
    patient: "Carlos Mendes",
    professional: "Dr. Pedro",
    type: "Cancelamento",
    status: "Cancelado"
  },
  {
    date: "28/08/2025",
    time: "15:30",
    patient: "Sofia Lima",
    professional: "Dr. Rayssa",
    type: "Consulta",
    status: "Concluída"
  },
  {
    date: "28/08/2025",
    time: "14:15",
    patient: "Miguel Rocha",
    professional: "Dra. Maria",
    type: "Consulta",
    status: "Concluída"
  }
];

export function ActivityTable() {
  const getStatusBadge = (status: string, type: string) => {
    if (status === "Concluída") {
      return <Badge className="bg-success text-success-foreground">Concluída</Badge>;
    }
    if (status === "Cancelado") {
      return <Badge className="bg-destructive text-destructive-foreground">Cancelado</Badge>;
    }
    return <Badge className="bg-muted text-muted-foreground">Pendente</Badge>;
  };

  const getTypeColor = (type: string) => {
    return type === "Consulta" ? "text-primary" : "text-medical-red";
  };

  return (
    <Card className="border-0 shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Últimas Atividades
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Data</TableHead>
                <TableHead className="font-semibold">Paciente</TableHead>
                <TableHead className="font-semibold">Profissional</TableHead>
                <TableHead className="font-semibold">Tipo</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivities.map((activity, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{activity.date}</span>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{activity.patient}</TableCell>
                  <TableCell className="text-primary">{activity.professional}</TableCell>
                  <TableCell>
                    <span className={`font-medium ${getTypeColor(activity.type)}`}>
                      {activity.type}
                    </span>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(activity.status, activity.type)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
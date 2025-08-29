import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const professionalData = [
  {
    name: "Dr. Rayssa",
    revenue: 25000,
    patients: 142,
    newPatients: 23,
    cancellationRate: 8.5
  },
  {
    name: "Dr. Carlos", 
    revenue: 23100,
    patients: 134,
    newPatients: 19,
    cancellationRate: 12.3
  },
  {
    name: "Dra. Maria",
    revenue: 25200,
    patients: 148,
    newPatients: 25,
    cancellationRate: 6.2
  },
  {
    name: "Dr. João",
    revenue: 23800,
    patients: 139,
    newPatients: 21,
    cancellationRate: 9.8
  },
  {
    name: "Dra. Ana",
    revenue: 22000,
    patients: 128,
    newPatients: 18,
    cancellationRate: 11.1
  },
  {
    name: "Dr. Pedro",
    revenue: 22500,
    patients: 131,
    newPatients: 20,
    cancellationRate: 10.5
  }
];

export function ProfessionalTable() {
  const getCancellationBadge = (rate: number) => {
    if (rate <= 8) return <Badge className="bg-success text-success-foreground">Baixa</Badge>;
    if (rate <= 12) return <Badge className="bg-warning text-warning-foreground">Média</Badge>;
    return <Badge className="bg-destructive text-destructive-foreground">Alta</Badge>;
  };

  return (
    <Card className="border-0 shadow-[var(--shadow-card)]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Análise por Profissional - Agosto 2025
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Profissional</TableHead>
                <TableHead className="font-semibold">Faturamento</TableHead>
                <TableHead className="font-semibold">Pacientes Atendidos</TableHead>
                <TableHead className="font-semibold">Pacientes Novos</TableHead>
                <TableHead className="font-semibold">Taxa de Cancelamento</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {professionalData.map((professional) => (
                <TableRow key={professional.name}>
                  <TableCell className="font-medium">{professional.name}</TableCell>
                  <TableCell className="font-semibold text-success">
                    R$ {professional.revenue.toLocaleString('pt-BR')}
                  </TableCell>
                  <TableCell>{professional.patients}</TableCell>
                  <TableCell className="font-medium text-primary">
                    {professional.newPatients}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{professional.cancellationRate}%</span>
                      {getCancellationBadge(professional.cancellationRate)}
                    </div>
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
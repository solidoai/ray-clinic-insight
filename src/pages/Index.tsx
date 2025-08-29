import { DashboardHeader } from "@/components/DashboardHeader";
import { KPICard } from "@/components/KPICard";
import { DashboardCharts } from "@/components/DashboardCharts";
import { ProfessionalTable } from "@/components/ProfessionalTable";
import { BehavioralAnalysis } from "@/components/BehavioralAnalysis";
import { ActivityTable } from "@/components/ActivityTable";
import { DollarSign, Users, Calendar, AlertTriangle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto p-6 space-y-8">
        {/* KPI Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Faturamento Total do Mês"
            value="R$ 141.600"
            change={12.5}
            changeType="positive"
            icon={<DollarSign className="h-6 w-6 text-primary" />}
            subtitle="vs. mês anterior"
          />
          <KPICard
            title="Pacientes Novos no Mês"
            value="47"
            change={18.2}
            changeType="positive"
            icon={<Users className="h-6 w-6 text-primary" />}
            subtitle="crescimento mensal"
          />
          <KPICard
            title="Total de Consultas Realizadas"
            value="300"
            change={7.8}
            changeType="positive"
            icon={<Calendar className="h-6 w-6 text-primary" />}
            subtitle="eficiência alta"
          />
          <KPICard
            title="Taxa de Cancelamento"
            value="9.7%"
            change={-2.1}
            changeType="positive"
            icon={<AlertTriangle className="h-6 w-6 text-primary" />}
            subtitle="redução no mês"
          />
        </section>

        {/* Charts Section */}
        <section>
          <DashboardCharts />
        </section>

        {/* Professional Analysis */}
        <section>
          <ProfessionalTable />
        </section>

        {/* Behavioral Analysis */}
        <section>
          <BehavioralAnalysis />
        </section>

        {/* Recent Activities */}
        <section>
          <ActivityTable />
        </section>
      </main>
    </div>
  );
};

export default Index;

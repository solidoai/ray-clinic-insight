import { CalendarDays, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function DashboardHeader() {
  return (
    <header className="bg-gradient-to-r from-primary to-medical-blue-dark p-6 text-white shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary font-bold text-sm">R</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold">Dashboard Analítico</h1>
            <p className="text-white/80">Clínica Ray - Odontologia Pediátrica</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Select defaultValue="2025-08">
            <SelectTrigger className="w-full sm:w-[180px] bg-white/10 border-white/20 text-white">
              <CalendarDays className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-08">Agosto 2025</SelectItem>
              <SelectItem value="2025-07">Julho 2025</SelectItem>
              <SelectItem value="2025-06">Junho 2025</SelectItem>
              <SelectItem value="2025-05">Maio 2025</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="todos">
            <SelectTrigger className="w-full sm:w-[180px] bg-white/10 border-white/20 text-white">
              <Users className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos Profissionais</SelectItem>
              <SelectItem value="dr-rayssa">Dr. Rayssa</SelectItem>
              <SelectItem value="dr-carlos">Dr. Carlos</SelectItem>
              <SelectItem value="dra-maria">Dra. Maria</SelectItem>
              <SelectItem value="dr-joao">Dr. João</SelectItem>
              <SelectItem value="dra-ana">Dra. Ana</SelectItem>
              <SelectItem value="dr-pedro">Dr. Pedro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}
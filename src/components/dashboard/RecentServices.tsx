import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, MapPin, User, Eye } from "lucide-react";

const recentServices = [
  {
    id: "SRV-001",
    type: "Mantenimiento",
    equipment: "Arco de Seguridad ASX-300",
    location: "Aduana Ciudad Hidalgo, Chiapas",
    technician: "Carlos Mendoza",
    date: "2024-01-15",
    status: "exitoso",
    priority: "alta"
  },
  {
    id: "SRV-002",
    type: "Capacitación",
    equipment: "Scanner Milimétrico SMM-150",
    location: "Aduana Suchiate 2, Chiapas",
    technician: "Ana García",
    date: "2024-01-14",
    status: "pendiente",
    priority: "media"
  },
  {
    id: "SRV-003",
    type: "Reparación",
    equipment: "Sistema de Rayos X RX-500",
    location: "Puerto de Veracruz, Veracruz",
    technician: "Miguel Torres",
    date: "2024-01-13",
    status: "no_exitoso",
    priority: "alta"
  },
  {
    id: "SRV-004",
    type: "Mantenimiento",
    equipment: "Detector de Metales DM-200",
    location: "Aeropuerto Cancún, Quintana Roo",
    technician: "Laura Pérez",
    date: "2024-01-12",
    status: "exitoso",
    priority: "baja"
  },
];

const statusConfig = {
  exitoso: { label: "Exitoso", className: "bg-success text-success-foreground" },
  pendiente: { label: "Pendiente", className: "bg-warning text-warning-foreground" },
  no_exitoso: { label: "No Exitoso", className: "bg-destructive text-destructive-foreground" },
};

const priorityConfig = {
  alta: { label: "Alta", className: "bg-destructive/10 text-destructive border-destructive/20" },
  media: { label: "Media", className: "bg-warning/10 text-warning border-warning/20" },
  baja: { label: "Baja", className: "bg-success/10 text-success border-success/20" },
};

export function RecentServices() {
  return (
    <Card className="shadow-corporate-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Servicios Recientes
          <Button variant="outline" size="sm">
            Ver Todos
          </Button>
        </CardTitle>
        <CardDescription>
          Últimos servicios realizados por el equipo técnico
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentServices.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-sm text-muted-foreground">
                    {service.id}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {service.type}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={priorityConfig[service.priority as keyof typeof priorityConfig].className}
                  >
                    {priorityConfig[service.priority as keyof typeof priorityConfig].label}
                  </Badge>
                </div>
                
                <h4 className="font-medium text-foreground">{service.equipment}</h4>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{service.technician}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>{service.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Badge 
                  className={statusConfig[service.status as keyof typeof statusConfig].className}
                >
                  {statusConfig[service.status as keyof typeof statusConfig].label}
                </Badge>
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
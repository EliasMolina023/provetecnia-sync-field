import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentServices } from "@/components/dashboard/RecentServices";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Users, 
  MapPin,
  TrendingUp,
  Calendar
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Servicios Exitosos",
      value: "847",
      description: "Este mes",
      icon: CheckCircle,
      color: "success" as const,
      trend: { value: 12, label: "vs mes anterior", positive: true }
    },
    {
      title: "Servicios Pendientes",
      value: "23",
      description: "Requieren atención",
      icon: Clock,
      color: "warning" as const,
      trend: { value: -8, label: "vs semana anterior", positive: true }
    },
    {
      title: "Técnicos Activos",
      value: "42",
      description: "En campo",
      icon: Users,
      color: "primary" as const
    },
    {
      title: "Puntos Atendidos",
      value: "186",
      description: "A nivel nacional",
      icon: MapPin,
      color: "primary" as const
    },
  ];

  const stateStats = [
    { state: "Chiapas", services: 45, success: 94 },
    { state: "Veracruz", services: 38, success: 89 },
    { state: "Quintana Roo", services: 29, success: 96 },
    { state: "Tamaulipas", services: 34, success: 88 },
    { state: "Sonora", services: 22, success: 91 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-primary rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">¡Bienvenido al Sistema Provetecnia!</h1>
            <p className="text-white/90">
              Gestiona todos los servicios de mantenimiento y soporte técnico desde un solo lugar.
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-white/90">
            <Calendar className="h-5 w-5" />
            <span className="text-sm">
              {new Date().toLocaleDateString('es-MX', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Services - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RecentServices />
        </div>

        {/* Performance by State */}
        <Card className="shadow-corporate-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Rendimiento por Estado</span>
            </CardTitle>
            <CardDescription>
              Porcentaje de éxito en servicios
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {stateStats.map((item) => (
              <div key={item.state} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.state}</span>
                  <span className="text-muted-foreground">
                    {item.services} servicios
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Progress 
                    value={item.success} 
                    className="flex-1 h-2"
                  />
                  <span className="text-sm font-medium text-success w-12">
                    {item.success}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-corporate-sm">
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
          <CardDescription>
            Las acciones más comunes del sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <button className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-left group">
              <CheckCircle className="h-8 w-8 text-success mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium mb-1">Nuevo Servicio</h3>
              <p className="text-sm text-muted-foreground">
                Registrar un nuevo servicio técnico
              </p>
            </button>
            
            <button className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-left group">
              <Users className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium mb-1">Gestionar Usuarios</h3>
              <p className="text-sm text-muted-foreground">
                Administrar técnicos y permisos
              </p>
            </button>
            
            <button className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors text-left group">
              <AlertTriangle className="h-8 w-8 text-warning mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-medium mb-1">Reportes</h3>
              <p className="text-sm text-muted-foreground">
                Generar informes y estadísticas
              </p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
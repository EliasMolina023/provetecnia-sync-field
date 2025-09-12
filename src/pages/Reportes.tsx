import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Download, 
  FileSpreadsheet, 
  FileText, 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Calendar,
  MapPin,
  Users,
  Wrench,
  DollarSign,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

// Mock data for charts and reports
const estadisticasGenerales = {
  serviciosTotal: 847,
  serviciosExitosos: 798,
  serviciosPendientes: 23,
  serviciosFallidos: 26,
  porcentajeExito: 94.2,
  tecnicosActivos: 42,
  gastosTotal: 145750.50,
  gastosAprobados: 128340.25
};

const rendimientoPorEstado = [
  { estado: "Chiapas", servicios: 145, exitosos: 137, porcentaje: 94.5 },
  { estado: "Veracruz", servicios: 128, exitosos: 115, porcentaje: 89.8 },
  { estado: "Quintana Roo", servicios: 98, exitosos: 94, porcentaje: 95.9 },
  { estado: "Tamaulipas", servicios: 112, exitosos: 99, porcentaje: 88.4 },
  { estado: "Sonora", servicios: 87, exitosos: 79, porcentaje: 90.8 },
  { estado: "Nuevo León", servicios: 76, exitosos: 72, porcentaje: 94.7 },
];

const topTecnicos = [
  { nombre: "Carlos Mendoza", servicios: 45, exitosos: 44, porcentaje: 97.8 },
  { nombre: "Ana García", servicios: 38, exitosos: 36, porcentaje: 94.7 },
  { nombre: "Miguel Torres", servicios: 42, exitosos: 38, porcentaje: 90.5 },
  { nombre: "Laura Pérez", servicios: 29, exitosos: 28, porcentaje: 96.6 },
  { nombre: "Roberto Silva", servicios: 33, exitosos: 31, porcentaje: 93.9 },
];

const tiposServicio = [
  { tipo: "Mantenimiento", cantidad: 425, porcentaje: 50.2 },
  { tipo: "Reparación", cantidad: 234, porcentaje: 27.6 },
  { tipo: "Capacitación", cantidad: 142, porcentaje: 16.8 },
  { tipo: "Instalación", cantidad: 46, porcentaje: 5.4 },
];

export default function Reportes() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Reportes y Estadísticas</h1>
          <p className="text-muted-foreground">
            Análisis detallado del rendimiento y operaciones del sistema
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Excel
          </Button>
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            PDF
          </Button>
          <Button className="bg-gradient-primary shadow-corporate-sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar Todo
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Rango de Fechas</label>
              <Input
                type="date"
                className="w-48"
                defaultValue="2024-01-01"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Estado</label>
              <Select defaultValue="todos">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los Estados</SelectItem>
                  <SelectItem value="chiapas">Chiapas</SelectItem>
                  <SelectItem value="veracruz">Veracruz</SelectItem>
                  <SelectItem value="quintana-roo">Quintana Roo</SelectItem>
                  <SelectItem value="tamaulipas">Tamaulipas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Tipo de Servicio</label>
              <Select defaultValue="todos">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los Tipos</SelectItem>
                  <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                  <SelectItem value="reparacion">Reparación</SelectItem>
                  <SelectItem value="capacitacion">Capacitación</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Servicios Totales</p>
                <p className="text-2xl font-bold">{estadisticasGenerales.serviciosTotal}</p>
                <div className="flex items-center text-sm text-success mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +12% vs mes anterior
                </div>
              </div>
              <Wrench className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tasa de Éxito</p>
                <p className="text-2xl font-bold">{estadisticasGenerales.porcentajeExito}%</p>
                <div className="flex items-center text-sm text-success mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +2.3% vs mes anterior
                </div>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Técnicos Activos</p>
                <p className="text-2xl font-bold">{estadisticasGenerales.tecnicosActivos}</p>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Users className="h-4 w-4 mr-1" />
                  En campo este mes
                </div>
              </div>
              <Users className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Gastos Aprobados</p>
                <p className="text-2xl font-bold">
                  ${estadisticasGenerales.gastosAprobados.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </p>
                <div className="flex items-center text-sm text-warning mt-1">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -5% vs mes anterior
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Tabs */}
      <Tabs defaultValue="rendimiento" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="rendimiento">Rendimiento</TabsTrigger>
          <TabsTrigger value="tecnicos">Técnicos</TabsTrigger>
          <TabsTrigger value="servicios">Servicios</TabsTrigger>
          <TabsTrigger value="financiero">Financiero</TabsTrigger>
        </TabsList>

        {/* Performance Tab */}
        <TabsContent value="rendimiento" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="shadow-corporate-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Rendimiento por Estado</span>
                </CardTitle>
                <CardDescription>
                  Porcentaje de éxito en servicios por ubicación geográfica
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {rendimientoPorEstado.map((estado) => (
                  <div key={estado.estado} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{estado.estado}</span>
                      <div className="text-right">
                        <span className="font-medium">{estado.porcentaje}%</span>
                        <div className="text-xs text-muted-foreground">
                          {estado.exitosos}/{estado.servicios} servicios
                        </div>
                      </div>
                    </div>
                    <Progress value={estado.porcentaje} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-corporate-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Tipos de Servicio</span>
                </CardTitle>
                <CardDescription>
                  Distribución de servicios realizados por categoría
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {tiposServicio.map((tipo) => (
                  <div key={tipo.tipo} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{tipo.tipo}</span>
                      <div className="text-right">
                        <span className="font-medium">{tipo.cantidad}</span>
                        <div className="text-xs text-muted-foreground">
                          {tipo.porcentaje}% del total
                        </div>
                      </div>
                    </div>
                    <Progress value={tipo.porcentaje} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Technicians Tab */}
        <TabsContent value="tecnicos" className="space-y-6">
          <Card className="shadow-corporate-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Top Técnicos del Mes</span>
                </div>
                <Button variant="outline" size="sm">
                  Ver Todos
                </Button>
              </CardTitle>
              <CardDescription>
                Rendimiento de los técnicos con mejor desempeño
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topTecnicos.map((tecnico, index) => (
                  <div
                    key={tecnico.nombre}
                    className="flex items-center justify-between p-4 rounded-lg border border-border"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{tecnico.nombre}</p>
                        <p className="text-sm text-muted-foreground">
                          {tecnico.servicios} servicios realizados
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-success">{tecnico.porcentaje}%</p>
                      <p className="text-sm text-muted-foreground">
                        {tecnico.exitosos} exitosos
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="servicios" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="shadow-corporate-sm">
              <CardHeader>
                <CardTitle>Servicios por Mes</CardTitle>
                <CardDescription>Tendencia mensual de servicios realizados</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-8">
                <BarChart3 className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium">Gráfico de Barras</p>
                <p className="text-muted-foreground">
                  Aquí se mostraría un gráfico detallado de servicios por mes
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-corporate-sm">
              <CardHeader>
                <CardTitle>Distribución de Fallos</CardTitle>
                <CardDescription>Principales causas de servicios no exitosos</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-8">
                <AlertTriangle className="h-24 w-24 text-warning mx-auto mb-4" />
                <p className="text-lg font-medium">Análisis de Fallos</p>
                <p className="text-muted-foreground">
                  Categorización y análisis de servicios fallidos
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Financial Tab */}
        <TabsContent value="financiero" className="space-y-6">
          <Card className="shadow-corporate-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Resumen Financiero</span>
              </CardTitle>
              <CardDescription>
                Control de gastos y viáticos por período
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 rounded-lg bg-success/10">
                  <p className="text-2xl font-bold text-success">
                    ${estadisticasGenerales.gastosAprobados.toLocaleString('es-MX')}
                  </p>
                  <p className="text-sm text-muted-foreground">Gastos Aprobados</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-warning/10">
                  <p className="text-2xl font-bold text-warning">
                    ${(estadisticasGenerales.gastosTotal - estadisticasGenerales.gastosAprobados).toLocaleString('es-MX')}
                  </p>
                  <p className="text-sm text-muted-foreground">Pendiente Aprobación</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <p className="text-2xl font-bold text-primary">
                    ${estadisticasGenerales.gastosTotal.toLocaleString('es-MX')}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Solicitado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
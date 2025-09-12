import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  Camera, 
  MapPin, 
  User, 
  Calendar,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

const servicios = [
  {
    id: "SRV-001",
    tipo: "Mantenimiento",
    equipo: "Arco de Seguridad ASX-300",
    serie: "ASX300-2023-001",
    ubicacion: "Aduana Ciudad Hidalgo, Chiapas",
    tecnico: "Carlos Mendoza",
    encargado: "Lic. Roberto Silva",
    fecha: "2024-01-15",
    status: "exitoso",
    prioridad: "alta",
    observaciones: "Mantenimiento preventivo completado sin incidencias",
    fotos: 4
  },
  {
    id: "SRV-002",
    tipo: "Capacitación",
    equipo: "Scanner Milimétrico SMM-150",
    serie: "SMM150-2022-078",
    ubicacion: "Aduana Suchiate 2, Chiapas",
    tecnico: "Ana García",
    encargado: "Ing. María López",
    fecha: "2024-01-14",
    status: "pendiente",
    prioridad: "media",
    observaciones: "Capacitación al personal operativo programada",
    fotos: 0
  },
  {
    id: "SRV-003",
    tipo: "Reparación",
    equipo: "Sistema de Rayos X RX-500",
    serie: "RX500-2021-145",
    ubicacion: "Puerto de Veracruz, Veracruz",
    tecnico: "Miguel Torres",
    encargado: "Cap. Francisco Ruiz",
    fecha: "2024-01-13",
    status: "no_exitoso",
    prioridad: "alta",
    observaciones: "Falla en módulo principal - requiere repuesto",
    fotos: 6
  }
];

const statusConfig = {
  exitoso: { label: "Exitoso", icon: CheckCircle, className: "bg-success text-success-foreground" },
  pendiente: { label: "Pendiente", icon: Clock, className: "bg-warning text-warning-foreground" },
  no_exitoso: { label: "No Exitoso", icon: XCircle, className: "bg-destructive text-destructive-foreground" },
};

const priorityConfig = {
  alta: { label: "Alta", className: "bg-destructive/10 text-destructive border-destructive/20" },
  media: { label: "Media", className: "bg-warning/10 text-warning border-warning/20" },
  baja: { label: "Baja", className: "bg-success/10 text-success border-success/20" },
};

export default function Servicios() {
  const [filtroEstatus, setFiltroEstatus] = useState("todos");
  const [filtroTipo, setFiltroTipo] = useState("todos");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gestión de Servicios</h1>
          <p className="text-muted-foreground">
            Administra todos los servicios técnicos realizados por el equipo
          </p>
        </div>
        <Button className="bg-gradient-primary shadow-corporate-sm">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Servicio
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por ID, equipo, técnico o ubicación..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filtroEstatus} onValueChange={setFiltroEstatus}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtrar por estatus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los estatus</SelectItem>
                <SelectItem value="exitoso">Exitoso</SelectItem>
                <SelectItem value="pendiente">Pendiente</SelectItem>
                <SelectItem value="no_exitoso">No Exitoso</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filtroTipo} onValueChange={setFiltroTipo}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Tipo de servicio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los tipos</SelectItem>
                <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                <SelectItem value="reparacion">Reparación</SelectItem>
                <SelectItem value="capacitacion">Capacitación</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Services Tabs */}
      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="todos">Todos ({servicios.length})</TabsTrigger>
          <TabsTrigger value="pendientes">
            Pendientes ({servicios.filter(s => s.status === 'pendiente').length})
          </TabsTrigger>
          <TabsTrigger value="exitosos">
            Exitosos ({servicios.filter(s => s.status === 'exitoso').length})
          </TabsTrigger>
          <TabsTrigger value="fallidos">
            Fallidos ({servicios.filter(s => s.status === 'no_exitoso').length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="space-y-4">
          <div className="grid gap-4">
            {servicios.map((servicio) => {
              const statusInfo = statusConfig[servicio.status as keyof typeof statusConfig];
              const StatusIcon = statusInfo.icon;
              
              return (
                <Card key={servicio.id} className="shadow-corporate-sm hover:shadow-corporate-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-mono text-sm font-medium text-primary">
                            {servicio.id}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {servicio.tipo}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={priorityConfig[servicio.prioridad as keyof typeof priorityConfig].className}
                          >
                            {priorityConfig[servicio.prioridad as keyof typeof priorityConfig].label}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{servicio.equipo}</CardTitle>
                        <CardDescription className="font-mono text-xs">
                          Serie: {servicio.serie}
                        </CardDescription>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge className={statusInfo.className}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {statusInfo.label}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{servicio.ubicacion}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{servicio.tecnico}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{servicio.fecha}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Camera className="h-4 w-4 text-muted-foreground" />
                        <span>{servicio.fotos} evidencias</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Encargado: {servicio.encargado}</p>
                      <p className="text-sm text-muted-foreground">{servicio.observaciones}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-border">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalles
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-2" />
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Camera className="h-4 w-4 mr-2" />
                        Evidencias
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Other tab contents would be similar but filtered */}
        <TabsContent value="pendientes">
          <div className="text-center py-8">
            <Clock className="h-12 w-12 text-warning mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Servicios Pendientes</h3>
            <p className="text-muted-foreground">
              Aquí se mostrarían solo los servicios con estatus pendiente
            </p>
          </div>
        </TabsContent>

        <TabsContent value="exitosos">
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Servicios Exitosos</h3>
            <p className="text-muted-foreground">
              Aquí se mostrarían solo los servicios completados exitosamente
            </p>
          </div>
        </TabsContent>

        <TabsContent value="fallidos">
          <div className="text-center py-8">
            <XCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Servicios Fallidos</h3>
            <p className="text-muted-foreground">
              Aquí se mostrarían solo los servicios que no pudieron completarse
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

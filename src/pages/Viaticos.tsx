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
  Check, 
  X,
  Upload,
  Download,
  DollarSign,
  FileText,
  Calendar,
  User,
  MapPin,
  Receipt
} from "lucide-react";

const viaticos = [
  {
    id: "VIA-001",
    tecnico: "Carlos Mendoza",
    servicio: "SRV-001",
    ubicacion: "Aduana Ciudad Hidalgo, Chiapas",
    fecha: "2024-01-15",
    tipo: "viatico",
    concepto: "Viáticos para mantenimiento preventivo",
    monto: 2500.00,
    moneda: "MXN",
    status: "aprobado",
    comprobantes: 3,
    notas: "Gastos de hospedaje y alimentación"
  },
  {
    id: "VIA-002",
    tecnico: "Ana García",
    servicio: "SRV-002",
    ubicacion: "Aduana Suchiate 2, Chiapas",
    fecha: "2024-01-14",
    tipo: "material",
    concepto: "Compra de repuestos para scanner",
    monto: 8750.50,
    moneda: "MXN",
    status: "pendiente",
    comprobantes: 2,
    notas: "Factura del proveedor adjunta"
  },
  {
    id: "VIA-003",
    tecnico: "Miguel Torres",
    servicio: "SRV-003",
    ubicacion: "Puerto de Veracruz, Veracruz",
    fecha: "2024-01-13",
    tipo: "otro",
    concepto: "Transporte especializado de equipo",
    monto: 3200.00,
    moneda: "MXN",
    status: "rechazado",
    comprobantes: 1,
    notas: "Requiere autorización adicional"
  },
  {
    id: "VIA-004",
    tecnico: "Laura Pérez",
    servicio: "SRV-004",
    ubicacion: "Aeropuerto Cancún, Quintana Roo",
    fecha: "2024-01-12",
    tipo: "viatico",
    concepto: "Gastos de traslado y hospedaje",
    monto: 4100.75,
    moneda: "MXN",
    status: "revision",
    comprobantes: 4,
    notas: "En proceso de validación"
  }
];

const statusConfig = {
  pendiente: { 
    label: "Pendiente", 
    className: "bg-warning text-warning-foreground",
    description: "Esperando revisión"
  },
  revision: { 
    label: "En Revisión", 
    className: "bg-blue-100 text-blue-800 border-blue-200",
    description: "Siendo evaluado"
  },
  aprobado: { 
    label: "Aprobado", 
    className: "bg-success text-success-foreground",
    description: "Autorizado para pago"
  },
  rechazado: { 
    label: "Rechazado", 
    className: "bg-destructive text-destructive-foreground",
    description: "Requiere correcciones"
  }
};

const tipoConfig = {
  viatico: { label: "Viático", className: "bg-primary/10 text-primary", icon: DollarSign },
  material: { label: "Material", className: "bg-secondary/10 text-secondary", icon: FileText },
  otro: { label: "Otro", className: "bg-accent/10 text-accent-foreground", icon: Receipt }
};

export default function Viaticos() {
  const [filtroStatus, setFiltroStatus] = useState("todos");
  const [filtroTipo, setFiltroTipo] = useState("todos");
  
  const totalPendiente = viaticos
    .filter(v => v.status === 'pendiente' || v.status === 'revision')
    .reduce((sum, v) => sum + v.monto, 0);
  
  const totalAprobado = viaticos
    .filter(v => v.status === 'aprobado')
    .reduce((sum, v) => sum + v.monto, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Control de Viáticos</h1>
          <p className="text-muted-foreground">
            Gestiona gastos, viáticos y comprobantes del equipo técnico
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button className="bg-gradient-primary shadow-corporate-sm">
            <Plus className="h-4 w-4 mr-2" />
            Nuevo Gasto
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Solicitado</p>
                <p className="text-2xl font-bold">
                  ${viaticos.reduce((sum, v) => sum + v.monto, 0).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pendiente Revisión</p>
                <p className="text-2xl font-bold text-warning">
                  ${totalPendiente.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <FileText className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Aprobado</p>
                <p className="text-2xl font-bold text-success">
                  ${totalAprobado.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <Check className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Gastos</p>
                <p className="text-2xl font-bold">{viaticos.length}</p>
              </div>
              <Receipt className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por ID, técnico o concepto..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filtroStatus} onValueChange={setFiltroStatus}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtrar por estatus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los estatus</SelectItem>
                <SelectItem value="pendiente">Pendiente</SelectItem>
                <SelectItem value="revision">En Revisión</SelectItem>
                <SelectItem value="aprobado">Aprobado</SelectItem>
                <SelectItem value="rechazado">Rechazado</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filtroTipo} onValueChange={setFiltroTipo}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Tipo de gasto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los tipos</SelectItem>
                <SelectItem value="viatico">Viático</SelectItem>
                <SelectItem value="material">Material</SelectItem>
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Expenses Tabs */}
      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="todos">Todos ({viaticos.length})</TabsTrigger>
          <TabsTrigger value="pendiente">
            Pendientes ({viaticos.filter(v => v.status === 'pendiente').length})
          </TabsTrigger>
          <TabsTrigger value="revision">
            En Revisión ({viaticos.filter(v => v.status === 'revision').length})
          </TabsTrigger>
          <TabsTrigger value="aprobado">
            Aprobados ({viaticos.filter(v => v.status === 'aprobado').length})
          </TabsTrigger>
          <TabsTrigger value="rechazado">
            Rechazados ({viaticos.filter(v => v.status === 'rechazado').length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="space-y-4">
          <div className="grid gap-4">
            {viaticos.map((viatico) => {
              const statusInfo = statusConfig[viatico.status as keyof typeof statusConfig];
              const tipoInfo = tipoConfig[viatico.tipo as keyof typeof tipoConfig];
              const TipoIcon = tipoInfo.icon;
              
              return (
                <Card key={viatico.id} className="shadow-corporate-sm hover:shadow-corporate-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="font-mono text-sm font-medium text-primary">
                            {viatico.id}
                          </span>
                          <Badge 
                            variant="outline" 
                            className={tipoInfo.className}
                          >
                            <TipoIcon className="h-3 w-3 mr-1" />
                            {tipoInfo.label}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{viatico.concepto}</CardTitle>
                        <CardDescription>
                          Servicio: {viatico.servicio}
                        </CardDescription>
                      </div>
                      
                      <div className="flex flex-col items-end space-y-2">
                        <div className="text-right">
                          <p className="text-2xl font-bold text-foreground">
                            ${viatico.monto.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                          </p>
                          <p className="text-sm text-muted-foreground">{viatico.moneda}</p>
                        </div>
                        <Badge className={statusInfo.className}>
                          {statusInfo.label}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{viatico.tecnico}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{viatico.fecha}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{viatico.ubicacion}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Upload className="h-4 w-4 text-muted-foreground" />
                        <span>{viatico.comprobantes} comprobantes</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Notas:</strong> {viatico.notas}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-border">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver Detalles
                      </Button>
                      
                      {viatico.status === 'pendiente' && (
                        <>
                          <Button size="sm" className="flex-1 bg-success text-success-foreground hover:bg-success/90">
                            <Check className="h-4 w-4 mr-2" />
                            Aprobar
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 text-destructive hover:text-destructive">
                            <X className="h-4 w-4 mr-2" />
                            Rechazar
                          </Button>
                        </>
                      )}
                      
                      <Button variant="outline" size="sm" className="flex-1">
                        <Upload className="h-4 w-4 mr-2" />
                        Comprobantes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Other tabs with appropriate filtering would go here */}
        <TabsContent value="pendiente">
          <div className="text-center py-8">
            <FileText className="h-12 w-12 text-warning mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Gastos Pendientes</h3>
            <p className="text-muted-foreground">
              Gastos que requieren revisión y aprobación
            </p>
          </div>
        </TabsContent>

        <TabsContent value="aprobado">
          <div className="text-center py-8">
            <Check className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Gastos Aprobados</h3>
            <p className="text-muted-foreground">
              Gastos autorizados para procesamiento de pago
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

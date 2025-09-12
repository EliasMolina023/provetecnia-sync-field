import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Shield, 
  ShieldCheck, 
  User,
  MapPin,
  Calendar,
  Mail,
  Phone
} from "lucide-react";

const usuarios = [
  {
    id: "USR-001",
    nombre: "Carlos Mendoza",
    email: "carlos.mendoza@provetecnia.com",
    telefono: "+52 961 123 4567",
    rol: "tecnico",
    estado: "Chiapas",
    punto: "Aduana Ciudad Hidalgo",
    fechaIngreso: "2023-03-15",
    ultimoAcceso: "2024-01-15 14:30",
    status: "activo",
    serviciosRealizados: 45
  },
  {
    id: "USR-002",
    nombre: "Ana García López",
    email: "ana.garcia@provetecnia.com",
    telefono: "+52 961 234 5678",
    rol: "administrador",
    estado: "Chiapas",
    punto: "Oficina Regional Tuxtla",
    fechaIngreso: "2022-08-10",
    ultimoAcceso: "2024-01-15 16:45",
    status: "activo",
    serviciosRealizados: 89
  },
  {
    id: "USR-003",
    nombre: "Miguel Torres Ruiz",
    email: "miguel.torres@provetecnia.com",
    telefono: "+52 229 345 6789",
    rol: "tecnico",
    estado: "Veracruz",
    punto: "Puerto de Veracruz",
    fechaIngreso: "2023-06-20",
    ultimoAcceso: "2024-01-14 09:15",
    status: "activo",
    serviciosRealizados: 32
  },
  {
    id: "USR-004",
    nombre: "Roberto Silva Admin",
    email: "roberto.silva@provetecnia.com",
    telefono: "+52 55 456 7890",
    rol: "master",
    estado: "Nacional",
    punto: "Oficina Central CDMX",
    fechaIngreso: "2021-01-15",
    ultimoAcceso: "2024-01-15 17:20",
    status: "activo",
    serviciosRealizados: 156
  },
  {
    id: "USR-005",
    nombre: "Laura Pérez",
    email: "laura.perez@provetecnia.com",
    telefono: "+52 998 567 8901",
    rol: "tecnico",
    estado: "Quintana Roo",
    punto: "Aeropuerto Cancún",
    fechaIngreso: "2023-11-05",
    ultimoAcceso: "2024-01-10 11:30",
    status: "inactivo",
    serviciosRealizados: 12
  }
];

const rolesConfig = {
  master: { 
    label: "Master Master", 
    icon: ShieldCheck, 
    className: "bg-primary text-primary-foreground",
    description: "Acceso total al sistema"
  },
  administrador: { 
    label: "Administrador", 
    icon: Shield, 
    className: "bg-secondary text-secondary-foreground",
    description: "Gestión regional/estatal"
  },
  tecnico: { 
    label: "Técnico", 
    icon: User, 
    className: "bg-accent text-accent-foreground",
    description: "Trabajo de campo"
  },
};

const statusConfig = {
  activo: { label: "Activo", className: "bg-success text-success-foreground" },
  inactivo: { label: "Inactivo", className: "bg-muted text-muted-foreground" },
  suspendido: { label: "Suspendido", className: "bg-destructive text-destructive-foreground" },
};

export default function Usuarios() {
  const [filtroRol, setFiltroRol] = useState("todos");
  const [filtroStatus, setFiltroStatus] = useState("todos");
  
  const getInitials = (nombre: string) => {
    return nombre
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Gestión de Usuarios</h1>
          <p className="text-muted-foreground">
            Administra usuarios, roles y permisos del sistema
          </p>
        </div>
        <Button className="bg-gradient-primary shadow-corporate-sm">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Usuario
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Usuarios</p>
                <p className="text-2xl font-bold">{usuarios.length}</p>
              </div>
              <User className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Técnicos</p>
                <p className="text-2xl font-bold">
                  {usuarios.filter(u => u.rol === 'tecnico').length}
                </p>
              </div>
              <User className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Administradores</p>
                <p className="text-2xl font-bold">
                  {usuarios.filter(u => u.rol === 'administrador').length}
                </p>
              </div>
              <Shield className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-corporate-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Activos</p>
                <p className="text-2xl font-bold">
                  {usuarios.filter(u => u.status === 'activo').length}
                </p>
              </div>
              <ShieldCheck className="h-8 w-8 text-success" />
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
                  placeholder="Buscar por nombre, email o ID..."
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={filtroRol} onValueChange={setFiltroRol}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Filtrar por rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los roles</SelectItem>
                <SelectItem value="master">Master Master</SelectItem>
                <SelectItem value="administrador">Administrador</SelectItem>
                <SelectItem value="tecnico">Técnico</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filtroStatus} onValueChange={setFiltroStatus}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Estado del usuario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos los estados</SelectItem>
                <SelectItem value="activo">Activo</SelectItem>
                <SelectItem value="inactivo">Inactivo</SelectItem>
                <SelectItem value="suspendido">Suspendido</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <div className="grid gap-4">
        {usuarios.map((usuario) => {
          const rolInfo = rolesConfig[usuario.rol as keyof typeof rolesConfig];
          const RolIcon = rolInfo.icon;
          
          return (
            <Card key={usuario.id} className="shadow-corporate-sm hover:shadow-corporate-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* User Info */}
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-medium">
                        {getInitials(usuario.nombre)}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-lg">{usuario.nombre}</h3>
                        <span className="font-mono text-xs text-muted-foreground">
                          {usuario.id}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge className={rolInfo.className}>
                          <RolIcon className="h-3 w-3 mr-1" />
                          {rolInfo.label}
                        </Badge>
                        <Badge className={statusConfig[usuario.status as keyof typeof statusConfig].className}>
                          {statusConfig[usuario.status as keyof typeof statusConfig].label}
                        </Badge>
                      </div>
                      
                      <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>{usuario.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>{usuario.telefono}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{usuario.estado} - {usuario.punto}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>Ingreso: {usuario.fechaIngreso}</span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        Último acceso: {usuario.ultimoAcceso} • {usuario.serviciosRealizados} servicios realizados
                      </div>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2">
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none">
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 lg:flex-none text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Eliminar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
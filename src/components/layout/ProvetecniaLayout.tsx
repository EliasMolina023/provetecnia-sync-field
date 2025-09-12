import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  Users,
  Wrench,
  Receipt,
  FileBarChart,
  Menu,
  X,
  Shield,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
    description: "Vista general del sistema"
  },
  {
    name: "Servicios",
    href: "/servicios",
    icon: Wrench,
    description: "Gestión de servicios técnicos"
  },
  {
    name: "Usuarios",
    href: "/usuarios",
    icon: Users,
    description: "Administración de usuarios"
  },
  {
    name: "Viáticos",
    href: "/viaticos",
    icon: Receipt,
    description: "Control de gastos y viáticos"
  },
  {
    name: "Reportes",
    href: "/reportes",
    icon: FileBarChart,
    description: "Informes y estadísticas"
  },
];

interface ProvetecniaLayoutProps {
  children: React.ReactNode;
}

export function ProvetecniaLayout({ children }: ProvetecniaLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 transform bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo Header */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-border bg-gradient-primary">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Provetecnia</h1>
              <p className="text-xs text-white/80">Sistema de Gestión</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/20"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 p-4">
          {navigation.map((item) => {
            const active = isActive(item.href);
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground shadow-corporate-sm"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0",
                    active ? "text-primary-foreground" : "text-muted-foreground"
                  )}
                />
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs opacity-70">{item.description}</div>
                </div>
                {active && <ChevronRight className="h-4 w-4" />}
              </NavLink>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="border-t border-border p-4">
          <div className="flex items-center space-x-3 rounded-lg bg-accent/50 p-3">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-sm font-medium text-white">AD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                Admin Demo
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Master Master
              </p>
            </div>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-72">
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 lg:ml-0 ml-4">
            <h2 className="text-lg font-semibold text-foreground">
              {navigation.find(item => isActive(item.href))?.name || "Dashboard"}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-sm text-muted-foreground">
              Último acceso: Hoy 14:30
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
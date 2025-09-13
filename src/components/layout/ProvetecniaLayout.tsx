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
        <div className="flex h-16 items-center justify-between px-6 border-b border-border bg-gradient-to-r from-primary via-primary to-accent backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm shadow-glow">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Provetecnia</h1>
              <p className="text-xs text-white/90">Tech Solutions</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/20 rounded-xl"
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
                  "group flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 relative overflow-hidden",
                  active
                    ? "bg-gradient-primary text-white shadow-glow transform scale-105"
                    : "text-muted-foreground hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/10 hover:text-foreground hover:shadow-card hover:scale-102"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 flex-shrink-0 transition-transform duration-300 relative z-10",
                    active ? "text-white scale-110" : "text-muted-foreground group-hover:scale-110"
                  )}
                />
                <div className="flex-1 relative z-10">
                  <div className={cn("font-semibold", active ? "text-white" : "")}>{item.name}</div>
                  <div className={cn("text-xs opacity-80", active ? "text-white/90" : "")}>{item.description}</div>
                </div>
                {active && (
                  <div className="relative z-10">
                    <ChevronRight className="h-4 w-4 text-white" />
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="border-t border-border p-4">
          <div className="flex items-center space-x-3 rounded-2xl bg-gradient-to-r from-accent/30 to-primary/20 p-4 backdrop-blur-sm border border-border/50">
            <div className="h-10 w-10 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <span className="text-sm font-bold text-white">AD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">
                Admin Demo
              </p>
              <p className="text-xs text-muted-foreground truncate flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                Master Master
              </p>
            </div>
            <div className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
              <Settings className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-72">
        {/* Top bar */}
        <header className="h-16 bg-gradient-to-r from-card via-card to-secondary/30 border-b border-border/50 flex items-center justify-between px-6 backdrop-blur-sm">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-xl hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/10"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex-1 lg:ml-0 ml-4">
            <h2 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {navigation.find(item => isActive(item.href))?.name || "Dashboard"}
            </h2>
            <p className="text-sm text-muted-foreground flex items-center mt-1">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Sistema de Gestión Integral
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-xl border border-border/30">
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
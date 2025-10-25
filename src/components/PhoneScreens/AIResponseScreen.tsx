import { Sparkles } from "lucide-react";

export const AIResponseScreen = () => {
  return (
    <div className="w-full h-full flex flex-col bg-background p-6 overflow-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-sm">Propuesta de Evaluación</h3>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border space-y-3">
          <div>
            <p className="text-xs font-medium text-primary">Tema Principal</p>
            <p className="text-sm">Fracciones y decimales</p>
          </div>
          
          <div>
            <p className="text-xs font-medium text-primary">Actividades</p>
            <ul className="text-xs space-y-1 mt-1">
              <li>1. Ejercicios prácticos con objetos</li>
              <li>2. Problemas contextuales</li>
              <li>3. Autoevaluación guiada</li>
            </ul>
          </div>
          
          <div>
            <p className="text-xs font-medium text-primary">Adaptaciones</p>
            <p className="text-xs text-muted-foreground">
              Evaluación adaptada para recursos limitados, con enfoque en comprensión práctica
            </p>
          </div>
        </div>
        
        <button className="w-full bg-primary text-white py-3 rounded-lg text-sm font-medium">
          Aceptar y personalizar
        </button>
      </div>
    </div>
  );
};
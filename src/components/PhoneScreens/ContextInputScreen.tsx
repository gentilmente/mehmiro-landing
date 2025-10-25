import { MessageCircle } from "lucide-react";

export const ContextInputScreen = () => {
  return (
    <div className="w-full h-full flex flex-col bg-background">
      <div className="flex-1 p-6 space-y-4">
        <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
          <p className="text-sm">
            "Hola Mehmiro, necesito crear una evaluación para mis estudiantes de 5° grado de matemáticas en la escuela pública..."
          </p>
        </div>
        
        <div className="bg-card p-4 rounded-lg border border-border">
          <p className="text-sm font-medium mb-2">Contexto detectado:</p>
          <ul className="text-xs space-y-1 text-muted-foreground">
            <li>• Grado: 5°</li>
            <li>• Materia: Matemáticas</li>
            <li>• Tipo: Escuela pública</li>
            <li>• Recursos: Limitados</li>
          </ul>
        </div>
      </div>
      
      <div className="p-4 border-t border-border flex items-center gap-2">
        <div className="flex-1 bg-card p-3 rounded-full border border-border">
          <p className="text-xs text-muted-foreground">Escribe tu mensaje...</p>
        </div>
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};
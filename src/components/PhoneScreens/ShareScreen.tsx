import { Share2, Users } from "lucide-react";

export const ShareScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-background">
      <div className="space-y-6 text-center w-full">
        <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
          <Share2 className="w-8 h-8 text-primary" />
        </div>
        
        <div>
          <h3 className="font-bold text-lg mb-2">Comparte Mehmiro</h3>
          <p className="text-sm text-muted-foreground">
            Invita a otros docentes a transformar su forma de evaluar
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border space-y-3">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-primary" />
            <div className="text-left flex-1">
              <p className="text-sm font-medium">Beatriz García</p>
              <p className="text-xs text-muted-foreground">Compartido</p>
            </div>
          </div>
          
          <button className="w-full bg-primary/10 text-primary py-2 rounded-lg text-sm font-medium border border-primary/20">
            Invitar más colegas
          </button>
        </div>
      </div>
    </div>
  );
};
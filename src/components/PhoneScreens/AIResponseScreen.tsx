import { Sparkles } from "lucide-react";

export const AIResponseScreen = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white p-6 overflow-auto">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <h3 className="font-bold text-xs text-gray-900">Propuesta de Evaluación</h3>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
          <div>
            <p className="text-xs font-medium text-blue-600">Tema Principal</p>
            <p className="text-xs text-gray-900">Fracciones y decimales</p>
          </div>

          <div>
            <p className="text-xs font-medium text-blue-600">Actividades</p>
            <ul className="text-xs space-y-1 mt-1 text-gray-700">
              <li>1. Ejercicios prácticos con objetos</li>
              <li>2. Problemas contextuales</li>
              <li>3. Autoevaluación guiada</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium text-blue-600">Adaptaciones</p>
            <p className="text-xs text-gray-600">
              Evaluación adaptada para recursos limitados, con enfoque en comprensión práctica
            </p>
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg text-xs font-medium hover:bg-blue-600">
          Aceptar y personalizar
        </button>
      </div>
    </div>
  );
};
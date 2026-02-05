import { MessageCircle } from "lucide-react";

export const ContextInputScreen = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="flex-1 p-6 space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-xs text-gray-900">
            "Hola Mehmiro, necesito crear una evaluación para mis estudiantes de
            5° grado de matemáticas en la escuela pública..."
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-xs font-medium mb-2 text-gray-900">
            Contexto detectado:
          </p>
          <ul className="text-xs space-y-1 text-gray-600">
            <li>• Grado: 5°</li>
            <li>• Materia: Matemáticas</li>
            <li>• Tipo: Escuela pública</li>
            <li>• Recursos: Limitados</li>
          </ul>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200 flex items-center gap-2">
        <div className="flex-1 bg-gray-50 p-3 rounded-full border border-gray-200">
          <p className="text-xs text-gray-500">Escribe tu mensaje...</p>
        </div>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

import { Share2, Users } from "lucide-react";

export const ShareScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-white">
      <div className="space-y-6 text-center w-full">
        <div className="w-16 h-16 bg-blue-50 rounded-full mx-auto flex items-center justify-center">
          <Share2 className="w-8 h-8 text-blue-500" />
        </div>

        <div>
          <h3 className="font-bold text-sm sm:text-lg mb-2 text-gray-900">
            Comparte Mehmiro
          </h3>
          <p className="text-xs text-gray-600">
            Invita a otros docentes a transformar su forma de evaluar
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-3">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-blue-500" />
            <div className="text-left flex-1">
              <p className="text-xs font-medium text-gray-900">
                Beatriz García
              </p>
              <p className="text-xs text-gray-500">Compartido</p>
            </div>
          </div>

          <button className="w-full bg-blue-50 text-blue-600 py-2 rounded-lg text-xs font-medium border border-blue-200 hover:bg-blue-100">
            Invitar más colegas
          </button>
        </div>
      </div>
    </div>
  );
};

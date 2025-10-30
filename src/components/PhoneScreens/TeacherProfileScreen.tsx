export const TeacherProfileScreen = () => {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-white">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Perfil del Docente</h2>

        <div className="space-y-3">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Nombre</p>
            <p className="font-medium text-gray-900">Juan Rodríguez</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Escuelas</p>
            <p className="font-medium text-gray-900">4 instituciones</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Materias</p>
            <p className="font-medium text-gray-900">Matemáticas, Lengua, Historia</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">Grados</p>
            <p className="font-medium text-gray-900">3°, 4°, 5°, 6°</p>
          </div>
        </div>
      </div>
    </div>
  );
};
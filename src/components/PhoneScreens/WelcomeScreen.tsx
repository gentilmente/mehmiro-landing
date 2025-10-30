export const WelcomeScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="space-y-6 text-center">
        <h1 className="text-xl sm:text-4xl font-bold text-gray-900">Mehmiro</h1>
        <p className="text-gray-700 text-xs">
          Tu asistente de evaluación pedagógica
        </p>
      </div>
    </div>
  );
};
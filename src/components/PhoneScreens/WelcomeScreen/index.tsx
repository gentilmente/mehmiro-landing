export const WelcomeScreen = () => {
  return (
    <div className="text-black py-12 px-6">
      <h1 className="text-center text-xl mb-2">Bienvenido a Mehmiro</h1>
      <p className="text-center">Cuéntanos sobre ti y tu clase para comenzar</p>

      <div className="border border-black/10 rounded-lg p-4 mt-8">
        <h2 className="font-medium">Tu Introduccion</h2>
        <h3 className="font-normal text-sm mt-4">
          Cuentanos sobre ti y tu clase
        </h3>
        <textarea
          name=""
          placeholder="Hola Mehmiro, soy Juan, maestro de matemáticas en 4° grado de una escuela primaria rural de la provincia de Buenos Aires. Mis 8 estudiantes tienen dificultades con fracciones y vienen de familias con pocos recursos. ¿Puedes ayudarme?"
          value=""
          id=""
          className="w-full h-20 bg-white text-sm mt-2"
        ></textarea>
        <p className="text-sm text-black/60 mt-2">
          Describe tu experiencia, la materia que enseñas, el grado y los
          desafíos que enfrentas con tus estudiantes.
        </p>
        <button className="flex mt-4 ml-auto bg-purple-300 text-white rounded-md px-3 py-2 text-sm">
          Enviar
        </button>
      </div>
    </div>
  );
};

import styles from "./Welcome.module.css";

export const WelcomeScreen = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a Mehmiro</h1>
      <p className={styles.copy}>Cuéntanos sobre ti y tu clase para comenzar</p>

      <div className={styles.box}>
        <h2>Tu Introduccion</h2>
        <h3>Cuentanos sobre ti y tu clase</h3>
        <textarea
          name=""
          placeholder="Hola Mehmiro, soy Juan, maestro de matemáticas en 4° grado de una escuela primaria rural de la provincia de Buenos Aires. Mis 8 estudiantes tienen dificultades con fracciones y vienen de familias con pocos recursos. ¿Puedes ayudarme?"
          value=""
          id=""
        ></textarea>
        <p>
          Describe tu experiencia, la materia que enseñas, el grado y los
          desafíos que enfrentas con tus estudiantes.
        </p>
        <button>Enviar</button>
      </div>
    </div>
  );
};

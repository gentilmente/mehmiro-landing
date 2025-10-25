export const TeacherProfileScreen = () => {
  return (
    <div className="w-full h-full flex flex-col p-6 bg-background">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Perfil del Docente</h2>
        
        <div className="space-y-3">
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">Nombre</p>
            <p className="font-medium">Juan Rodríguez</p>
          </div>
          
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">Escuelas</p>
            <p className="font-medium">4 instituciones</p>
          </div>
          
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">Materias</p>
            <p className="font-medium">Matemáticas, Lengua, Historia</p>
          </div>
          
          <div className="bg-card p-4 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">Grados</p>
            <p className="font-medium">3°, 4°, 5°, 6°</p>
          </div>
        </div>
      </div>
    </div>
  );
};
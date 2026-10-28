import { useState, ChangeEvent, FormEvent } from 'react';

interface FormularioState {
  nombre: string;
  correo: string;
  mensaje: string;
}

interface ErroresState {
  nombre?: string;
  correo?: string;
  mensaje?: string;
}

function FormularioContacto() {
  const [form, setForm] = useState<FormularioState>({ nombre: '', correo: '', mensaje: '' });
  const [errores, setErrores] = useState<ErroresState>({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let nuevosErrores: ErroresState = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }
    if (!form.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!form.correo.includes('@') || !form.correo.includes('.')) {
      nuevosErrores.correo = 'El formato del correo no es válido.';
    }
    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setEnviado(false);
    } else {
      setErrores({});
      setEnviado(true);
      setForm({ nombre: '', correo: '', mensaje: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p style={{ color: 'red' }}>{errores.nombre}</p>}
      </div>

      <div>
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={form.correo}
          onChange={handleChange}
        />
        {errores.correo && <p style={{ color: 'red' }}>{errores.correo}</p>}
      </div>

      <div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
        ></textarea>
        {errores.mensaje && <p style={{ color: 'red' }}>{errores.mensaje}</p>}
      </div>

      <button type="submit">Enviar</button>

      {enviado && <p style={{ color: 'green' }}>¡Mensaje enviado con éxito!</p>}
    </form>
  );
}

export default FormularioContacto;
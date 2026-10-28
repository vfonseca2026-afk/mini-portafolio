import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface FormularioState {
  nombre: string
  correo: string
  mensaje: string
}

interface ErroresState {
  nombre?: string
  correo?: string
  mensaje?: string
}

function FormularioContacto() {
  const [form, setForm] = useState<FormularioState>({ nombre: '', correo: '', mensaje: '' })
  const [errores, setErrores] = useState<ErroresState>({})
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nuevosErrores: ErroresState = {}

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.'
    }
    if (!form.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.'
    } else if (!form.correo.includes('@') || !form.correo.includes('.')) {
      nuevosErrores.correo = 'El formato del correo no es válido.'
    }
    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.'
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      setEnviado(false)
    } else {
      setErrores({})
      setEnviado(true)
      setForm({ nombre: '', correo: '', mensaje: '' })
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className={`form__group${errores.nombre ? ' form__group--error' : ''}`}>
        <label htmlFor="nombre">Nombre *</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        {errores.nombre && <p className="form__error">{errores.nombre}</p>}
      </div>

      <div className={`form__group${errores.correo ? ' form__group--error' : ''}`}>
        <label htmlFor="correo">Correo electrónico *</label>
        <input
          type="email"
          id="correo"
          name="correo"
          placeholder="tu@email.com"
          value={form.correo}
          onChange={handleChange}
        />
        {errores.correo && <p className="form__error">{errores.correo}</p>}
      </div>

      <div className={`form__group${errores.mensaje ? ' form__group--error' : ''}`}>
        <label htmlFor="mensaje">Mensaje *</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          placeholder="Escribe tu mensaje aquí..."
          value={form.mensaje}
          onChange={handleChange}
        ></textarea>
        {errores.mensaje && <p className="form__error">{errores.mensaje}</p>}
      </div>

      <button type="submit" className="btn btn--block">Enviar mensaje</button>

      {enviado && <p className="form__success">¡Mensaje enviado con éxito!</p>}
    </form>
  )
}

export default FormularioContacto
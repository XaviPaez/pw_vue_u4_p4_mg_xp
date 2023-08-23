import axios from "axios"

export const obtenerEstudianteFachada = async (cedula) => {
    console.log('AXIOS')
    return await obtenerEstudianteAPIAxios(cedula);
}

export const ingresarEstudianteFachada = (bodyEstudiante) => {
    ingresarEstudiante(bodyEstudiante)
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudiante(bodyEstudiante, id)
}

export const eliminarEstudianteFachada = async (id) => {
    return await eliminarEstudiante(id)
}

const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}

const obtenerEstudianteAPIAxios = async (cedula) => {
    //En el config vamos a enviar todas los datos de cabecera
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtc2dhcmNpYXIxIiwiaWF0IjoxNjkyNzUwMjAyLCJleHAiOjE2OTI3NjAyMDJ9.K1a1VxxNOmlqM6P54VsJJwwnSyRhLz2JEPRg26bxW3AqZfxf9JcCx6ZnK3scRLw3GoYnX0UExFk6Jkjk4_FPhA",
        "Mensaje": "Valor1"
    }
    const data = axios.get(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${cedula}`, { headers: headers }).then(r => r.data);
    console.log(data);
    return data;
}

const ingresarEstudiante = (bodyEstudiante) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtc2dhcmNpYXIxIiwiaWF0IjoxNjkyNzUwMjAyLCJleHAiOjE2OTI3NjAyMDJ9.K1a1VxxNOmlqM6P54VsJJwwnSyRhLz2JEPRg26bxW3AqZfxf9JcCx6ZnK3scRLw3GoYnX0UExFk6Jkjk4_FPhA",
        "Mensaje": "Valor1"
    }
    axios.post(`http://localhost:8081/API/V1.0/Matricula/estudiantes`, bodyEstudiante, { headers: headers }).then(r => r.data);
    console.log("Se inserto un usuario")
}

const actualizarEstudiante = (bodyEstudiante, id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtc2dhcmNpYXIxIiwiaWF0IjoxNjkyNzUwMjAyLCJleHAiOjE2OTI3NjAyMDJ9.K1a1VxxNOmlqM6P54VsJJwwnSyRhLz2JEPRg26bxW3AqZfxf9JcCx6ZnK3scRLw3GoYnX0UExFk6Jkjk4_FPhA",
        "Mensaje": "Valor1"
    }
    axios.put(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`, bodyEstudiante, { headers: headers }).then(r => r.data);
}

const eliminarEstudiante = async (id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtc2dhcmNpYXIxIiwiaWF0IjoxNjkyNzUwMjAyLCJleHAiOjE2OTI3NjAyMDJ9.K1a1VxxNOmlqM6P54VsJJwwnSyRhLz2JEPRg26bxW3AqZfxf9JcCx6ZnK3scRLw3GoYnX0UExFk6Jkjk4_FPhA",
        "Mensaje": "Valor1"
    }
    const data = axios.delete(`http://localhost:8081/API/V1.0/Matricula/estudiantes/${id}`, { headers: headers }).then(r => r.data);
    console.log(data);
    return data;
}
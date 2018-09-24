import axios from 'axios'

//get all disease api
export async function getDisease() {
    try {
        const disease = await axios.get('http://localhost:7000/disease/get')
        return disease.data
    } catch (error) {
        return error.message
    }
}

//get all doctors
export async function getAllDoctors(){
    try {
        const doctors = await axios.get('http://localhost:7000/alldoctors')
        return doctors.data
    } catch (error) {
        return error.message
    }
}
//get doctor profile
export async function checkDoctorProfile(id){
    try {
        const doctor = await axios.get(`http://localhost:7000/doctor/${id}`)
        return doctor.data.message
    } catch (error) {
        return error.message 
    }
}

//search for a doctor api
export async function searchDoctor(search) {
    try {
        const { name } = search
        const searchEngine = await axios.post('http://localhost:7000/search', {name})
        return searchEngine.data
    } catch (error) {
        return error.message
    }
}
//get services
export async function findAllServices(){
    try {
        const services = await axios.get('http://localhost:7000/service/get')
        console.log(services)
        return services.data
    } catch (error) {
       return error.message
    }
}
//update services
export async function updateServices(id) {
    try {
        //const { name, details} = info
        const Service =  await axios.put(`/service/update/${id}`)
        console.log(Service)
        return Service.data
    } catch (error) {
        return error.message
    }
}
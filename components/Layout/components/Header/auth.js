import axios from "axios"

export const loginUser = async (first_name, last_name, programming, phone) => {
   const {data} =  await axios.post('https://coding2academy.herokuapp.com/create_student', {
    first_name, last_name, programming, phone
    })
    console.log(data)
}
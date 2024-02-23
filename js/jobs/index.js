import { deleteHttp, get, post, update } from "../api/clientHttp.js"
import{URL_JOBS} from "../api/urls.js"
import { printJob } from "./funtionDOM.js"
//import { printJob } from "./funtionDOM.js"

//Selectores
const formJobs = document.querySelector("#formJobs")
export const titleJob = document.querySelector("#title-job")
export const experiencie = document.querySelector("#experience")
export const salary = document.querySelector("#salary")
export const location = document.querySelector("#location")
export const modality = document.querySelector("#modality")
export const description = document.querySelector("#description")
const categoryUpdate = document.querySelector("#categoryUpdate")


formJobs.addEventListener("submit", (e) =>{
    e.preventDefault();

    if(categoryUpdate.value){
        updateCategory(categoryUpdate.value)

    }else{
        createcategory()
    }

    
})

document.addEventListener("DOMContentLoaded",() => {
    getJobs()
 })

async function createcategory ( ){
    const job = JSON.parse(localStorage.getItem("login_success"))
    const newJob = {
        title: titleJob.value,
        experience: experiencie.value,
        salary: salary.value,
        location: location.value,
        modality: modality.value,
        description: description.value,
        jobId : job.id, 
        nameCompanyId : job.nameCompany,
        imageCompanyID: job.imageCompany,
        publicationDate: new Date().toISOString().split("T")[0] 
        
    };
    console.log()
    await post(URL_JOBS, newJob)
}

async function getJobs(){
   const data = await get(URL_JOBS)
    console.log(data)
  printJob(data)
}

export async function deleteCategory(id){
    await deleteHttp(`${URL_JOBS}/${id}`)
}

export async function updateCategory(id) {
    const job = JSON.parse(localStorage.getItem("login_success"));
    const categoryUp = {
        title: titleJob.value,
        experience: experiencie.value,
        salary: salary.value,
        location: location.value,
        modality: modality.value,
        description: description.value,
        jobId: job.id,
        nameCompanyId: job.nameCompany,
        imageCompanyID: job.imageCompany,
        publicationDate: new Date().toISOString().split("T")[0]
    };
    await update(`${URL_JOBS}/${id}`, categoryUp);
}
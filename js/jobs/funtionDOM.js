import {cleanHTML} from "../utils/cleanHTML.js"
import{description,titleJob,location,experiencie,modality,salary, deleteCategory} from "../jobs/index.js"

const categoriesTbody = document.querySelector("#categorias-tbody")
export const categoryUpdate = document.querySelector("#categoryUpdate")
export const btnAddCategoryModal = document.querySelector("#btnAddCategoryModal")


export function printJob(jobs){
    cleanHTML(categoriesTbody)
    jobs.forEach((job) => {
        const tr = document.createElement("tr")
        const tdImage = document.createElement("td")
        const tdCompany = document.createElement("td")
        const tdDescription = document.createElement("td")
        const tdLocation= document.createElement("td")
        const tdExperience= document.createElement("td")
        const tdModality= document.createElement("td")
        const tdSalary= document.createElement("td")
        const tdButtons= document.createElement("td")
        
        const btnEdit = document.createElement("button")
        const btnDelete = document.createElement("button")

        btnDelete.textContent ="Eliminar"
        btnEdit.textContent= "Editar"

        btnDelete.classList.add("btn","btn-danger")
        btnEdit.classList.add("btn","btn-primary")

        btnDelete.addEventListener("click", () => {
            deleteCategory(job.id)
        })
        btnEdit.addEventListener("click", () => {
            loadInfoCategory(job)
        })
        const image = document.createElement("img")
        image.src = job.image
        image.width = "50"
        image.height = "50"
        image.classList.add("rounded-circle")

        tdImage.appendChild(image)
        tdCompany.textContent = job.nameCompanyId
        tdDescription.textContent = job.description
        tdLocation.textContent = job.location
        tdExperience.textContent = job.experience
        tdModality.textContent = job.modality
        tdSalary.textContent = job.salary
        

        tdButtons.appendChild(btnDelete)
        tdButtons.appendChild(btnEdit)

        tr.appendChild(tdImage)
        tr.appendChild(tdCompany)
        tr.appendChild(tdDescription)
        tr.appendChild(tdLocation)
        tr.appendChild(tdExperience)
        tr.appendChild(tdModality)
        tr.appendChild(tdSalary)


        tr.appendChild(tdButtons)

        categoriesTbody.appendChild(tr)
    })
}

function loadInfoCategory(job){
    titleJob.value = job.title
    experiencie.value = job.experience
    salary.value = job.salary
    location.value = job.location
    modality.value = job.modality
    description.value = job.modality
    btnAddCategoryModal.click()
}

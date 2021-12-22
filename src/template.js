const displayManagers = managersArr =>{
    if(!managersArr){
        return '';
    }
    return `
        ${managersArr
        .map(({name, id, email, officeNumber})=> {
            return `
            <div class = 'col-lg-4 col-md-4 col-sm-6 pt-4'>
            <div class = 'card'>
            <div class="card-header">
            <h4 class="card-title">${name}</h4>
            <i class="fas fa-briefcase fa-lg"></i>
            <h6 class="card-text">Manager</h6>
        </div>
        <div class="card-body">
            <p class="card-text mb-0">Employee ID: ${id}</p>
            <p class="link">Email: <a href="mailto:${email}">${email}</a></p>
            <p class="card-text">Office: ${officeNumber}</p>
        </div>
        </div>
    </div>`;
            }).join('')
        }
        `;
}

const displayEngineers = engineerArr => {
    if (!engineerArr){

    }
}

const displayInterns = internsArr => {
    if (!internsArr){

    }
}

module.exports = (managerArr, engineersArr, internsArr) => {
    return `
    
    
    
    `;
}
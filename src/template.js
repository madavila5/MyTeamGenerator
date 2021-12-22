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
        return '';
    } 
    return `
    ${engineersArr
      .map(({name, id, email, github}) => {
      return `
    <div class="col-lg-4 col-md-4 col-sm-6 pt-4">
          <div class="card">
          <div class="card-header">
            <h4 class="card-title">${name}</h4>
            <i class="fas fa-laptop-code fa-lg"></i>
            <h6 class="card-text">Engineer</h6>
          </div>
          <div class="card-body">
            <p class="card-text mb-0">Employee ID: ${id}</p>
            <p class="link">Email: <a href="mailto:${email}">${email}</a></p><br>
            <p class="card-text link">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
          </div>
      </div>
      </div>
      `
          }).join('')
      }`;
};

const displayInterns = internsArr => {
    if (!internsArr){
        return '';
    } 
    return `
    ${internsArr
      .map(({name, id, email, school}) => {
          return `
    <div class="col-lg-4 col-md-4 col-sm-6 pt-4">
          <div class="card">
          <div class="card-header">
            <h4 class="card-title">${name}</h4>
            <i class="fas fa-baby fa-lg"></i>
            <h6 class="card-text">Intern</h6>
          </div>
          <div class="card-body">
            <p class="card-text mb-0">Employee ID: ${id}</p>
            <p class="link">Email: <a href="mailto:${email}">${email}</a></p>
            <p class="card-text">School: ${school}</p>
          </div>
          </div>
          </div>`;
      }).join('')
    }`;
}

module.exports = (managerArr, engineersArr, internsArr) => {
    return `
    
    
    
    `;
}
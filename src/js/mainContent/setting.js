const userProfileOption = document.getElementById('user-profile');
const userAccountOption = document.getElementById('user-account');
const editProfileOption = document.getElementById('edit-profile');
const aboutOption = document.getElementById('about');
const helpOption = document.getElementById('help');

const userProfileContent = document.getElementById('user-profile-content');
const userAccountContent = document.getElementById('user-account-content');
const editProfileContent = document.getElementById('edit-profile-content');
const aboutContent = document.getElementById('about-content');
const helpContent = document.getElementById('help-content');

const settingTab = document.getElementById('setting-tab');

const settingCloseBtn = document.getElementById('setting-close');

const settingBtn = document.getElementById('setting');

const editForm = document.getElementById('edit-form');

settingBtn.addEventListener('click', () =>{
  openSettingTab();
}, true);

settingCloseBtn.addEventListener('click', () =>{
  closeSettingTab();
},true);

userProfileOption.addEventListener('click', () => {
  openUserProfile();
  closeHelp();
  closeAbout();
  closeEditProfile();
  closeUserAccount();
}, true);

userAccountOption.addEventListener('click', () => {
  openUserAccount();
  closeUserProfile();
  closeEditProfile();
  closeHelp();
  closeAbout();
}, true);

editProfileOption.addEventListener('click', () => {
  openEditProfile();
  closeHelp();
  closeAbout();
  closeUserAccount();
  closeUserProfile();
}, true);

aboutOption.addEventListener('click', () => {
  openAbout();
  closeHelp();
  closeUserAccount();
  closeUserProfile();
  closeEditProfile();
}, true);

helpOption.addEventListener('click', () => {
  openHelp();
  closeAbout();
  closeEditProfile();
  closeUserAccount();
  closeUserProfile();
}, true);


const openSettingTab = () =>{
  settingTab.classList.remove('hide-d');
}

const closeSettingTab = () =>{
  settingTab.classList.add('hide-d');
}



const openUserProfile = () =>{
  userProfileOption.classList.add('active-option');
  userProfileContent.classList.remove('hide-d');
}

const openUserAccount = () =>{
  userAccountOption.classList.add('active-option');
  userAccountContent.classList.remove('hide-d');
}

const openEditProfile = () =>{
  editProfileOption.classList.add('active-option');
  editProfileContent.classList.remove('hide-d');
}

const openHelp = () =>{
  helpOption.classList.add('active-option');
  helpContent.classList.remove('hide-d');
}

const openAbout = () =>{
  aboutOption.classList.add('active-option');
  aboutContent.classList.remove('hide-d');
}





const closeUserProfile = () =>{
  userProfileOption.classList.remove('active-option');
  userProfileContent.classList.add('hide-d');
}

const closeUserAccount = () =>{
  userAccountOption.classList.remove('active-option');
  userAccountContent.classList.add('hide-d');
}

const closeEditProfile = () =>{
  editProfileOption.classList.remove('active-option');
  editProfileContent.classList.add('hide-d');
}

const closeHelp = () =>{
  helpOption.classList.remove('active-option');
  helpContent.classList.add('hide-d');
}

const closeAbout = () =>{
  aboutOption.classList.remove('active-option');
  aboutContent.classList.add('hide-d');
}




//-------------------------------------------


const setUserProfile = () =>{

  userProfileContent.innerHTML ='';

  let p = document.createElement('p');
  p.classList.add('user-avatar-letter');
  p.innerHTML = user.email[0].toUpperCase();

  userProfileContent.appendChild(p);

  let content = ['userName','email', 'gender', 'age'];

  content.forEach((item, i) => {
    let divParent = document.createElement('div');
    let firstChild = document.createElement('div');
    if(item === 'userName')
      firstChild.innerHTML = 'Name';
    else
    firstChild.innerHTML = item.charAt(0).toUpperCase() + item.slice(1);
    let lastChild = document.createElement('div');
    lastChild.innerHTML = user[item][0] + user[item].slice(1).toLowerCase();

    divParent.appendChild(firstChild);
    divParent.appendChild(lastChild);
    userProfileContent.appendChild(divParent);
  });
  let logoutBtn = document.createElement('button');
  logoutBtn.innerHTML = 'Logout';
  logoutBtn.addEventListener('click', ()=>{
    logout();
  });
  logoutBtn.classList.add('logout');

  userProfileContent.appendChild(logoutBtn);
}


//-------------------------------

editForm.addEventListener('submit', e =>{
  e.preventDefault();
  $.ajax({
    type: "PUT",
    url: "https://secret-brook-88276.herokuapp.com/app/users/edit",
    headers: {email: email},
    data: $('#edit-form').serialize(),
    success: () =>{
      console.log("edit succeed!");
      removeUserInfo();
      getUserInfo();
      setTimeout(() =>{
        readUserInfo();
      },2000)
    },
    error: () =>{
      console.log("edit error!");
    }
  });
});

const logout = () =>{
  removeDB();

  $.ajax({
    type: "GET",
    url: "https://secret-brook-88276.herokuapp.com/logout",
    headers: {logout: "cry"},
    success: () =>{
      console.log("succeed");
      loginBtn.click();
    },
    error: () =>{
      console.log("error!!");
    }
  });
};
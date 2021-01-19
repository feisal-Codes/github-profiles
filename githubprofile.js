const form=document.getElementById('form1');
const main=document.querySelector('main');
const info=document.getElementById('infos');


    const figure=document.createElement('figure');
    const user_profile=document.createElement('img');
    const caption=document.createElement('figurecaption');
    figure.appendChild(user_profile);
    caption.classList.add('caption');
    figure.appendChild(caption);
      
    const div=document.createElement('div');
    figure.classList.add('figure');

    const p=document.createElement('p');
    const url=document.createElement('a');
    const followers=document.createElement('span');
    const Following=document.createElement('span');
    url.classList.add('caption');
    followers.classList.add('caption');
    Following.classList.add('caption');
    


    p.appendChild(followers);
    p.appendChild(Following);
    p.appendChild(url);
    div.appendChild(p);
    figure.appendChild(div);

    




const getUser=(user)=>{
    
    fetch (`https://api.github.com/users/${user}`)

    .then(res=>res.json())
    .then(object=>
        {   
            
            user_profile.src=object.avatar_url;
            user_profile.alt='github profile';
            caption.textContent=object.name;
            url.textContent='click to visit profile >';
            url.href=object.html_url;
            followers.textContent=`Followers:${object.followers}`;
            Following.textContent=`Following:${object.following}`;
            main.appendChild(figure);
            

        })
    .catch(err=>{
        console.error(err.message);
    });

    

}



form.addEventListener('submit', e=>{
    e.preventDefault();

     //const input=document.getElementById('log');
     getUser(form[0].value);
})








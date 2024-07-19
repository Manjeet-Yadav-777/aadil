const arr = [
    {
        Image:'./Images/Couple.jpg',

        heading : "Wazifa for Love Marriage",

        para:"People who never wish to confront marriage problems can now utilize astrology to quickly resolve any pre- and post-marital issues."
    },


    

    {
        Image:'./Images/Parents.jpg',

        heading : "Wazifa for Parents Approval",

        para:"Use Wazifa, the easiest way to earn parents' acceptance and get them to quickly agree with their child's decisions, when the parents are opposed to any significant decision."

    },


    {
        Image:'./Images/Husband.jpg',

        heading : "Wazifa for Husband",

        para:"Regain your husband's love and respect by reciting the Wazifa for him with Rubina Ji's assistance. This will enable a lady create a happy and loving marriage."
    },


    {
        Image:'./Images/Child.jpg',

        heading : "Wazifa for Childless Couple",

        para:"A childless couple can acquire blessings in the shape of a baby that completes their family by using Islamic prayers and duas to help them get through their difficulties."
    },

    
    {
        Image:'./Images/Inter.jpg',
    
        heading : "Wazifa for Intercaste Marriage",
    
        para:"Intercaste marriage still has issues, but Islamic dua now unquestionably aids in a person's ability to marry the person of their choice and bring their marriage to fruition."
    },

    {
        Image:'./Images/Divorse.jpg',
        
        heading : "Wazifa For Divorce",
    
        para:"A person's divorce problem is a big issue, but today they can utilize astrology to resolve disagreements between the pair and improve their relationship once more."
    },
]


var clutter = [];

arr.forEach(function(card){
    clutter = clutter + `<div class="card">
    <div class="card-img">
        <img src=${card.Image} alt="">
    </div>

    <h3>${card.heading}</h3>

    <div class="para">
        <p>${card.para}</p>
    </div>
    <div>
        <a class="cal" href="tel:+91-9079223491"><i class="ri-phone-line"></i> CALL US</a> &nbsp &nbsp
        <a class="chat" href="https://wa.me/919079223491"><i class="ri-whatsapp-line"></i> CHAT US</a>
    </div>
</div>`
})

document.querySelector(".cards").innerHTML = clutter;

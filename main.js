var images = ["https://th.bing.com/th/id/R.ca6d645856aa14effbecb3f4000ecd2c?rik=BHsLhPtBLvtK5w&pid=ImgRaw&r=0", "https://i.pinimg.com/236x/7f/33/e2/7f33e2597add0b770883fafc24a7779b.jpg?nii=t" ];
var i = 0;
 function proximoslide() { 
    if(i == 9) 
    { i=0; } document.getElementById("album").src = images[i];
     i++;
 }
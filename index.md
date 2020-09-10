<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - RWD test2</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

<link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap" rel="stylesheet">

<script src="https://kit.fontawesome.com/f3e74ad63c.js" crossorigin="anonymous"></script><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<header>
  <nav>
    <span class="logo">Website Title / Logo</span>
    <div class="item">
    <span class="item1">Item 1</span>
    <span class="item2">Item 2</span>
    <span class="item3">Item 3</span>
    <span class="item4">Item 4</span>
    </div>
    
    <div class="mobile">  
    <span class="manubar">
      <i class="fas fa-bars"></i>
    </span>
    </div>
  </nav>
</header>

<main>
<section class="welcome_message">
  <h1>Welcome Message</h1>
  </section>
  
<section class="content_box">
  <div class="sectiontitle">
   <h3>Section Title</h3>
  </div>
  <div class="box">
  <div class="contentbox">Content Box 1</div>
  <div class="contentbox">Content Box 2</div>
  <div class="contentbox">Content Box 3</div>
  <div class="contentbox">Content Box 4</div>
    
  </div>
</section>
  
<section class="cta">Call to Action</section>
</main>
<!-- partial -->
  
</body>
</html>


html, body {
  font-family: 'PT Serif','Lato', 'Noto Sans TC', sans-serif;
  margin: 0;
  padding: 0;
  color: #333333;
  background-color: #f6f7f8;
}

header{
  height: 50px;
  background-color: #dcdcdc;
}

nav{
/*   outline: 3px solid red;  */
  padding: 10px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}


.item1, .item2, .item3, .item4{
/* outline: 3px solid red; */
  margin: 0 10px;
}

section{
  text-align: center;
}

.welcome_message{
  height: 300px;
  background-color: #b0c4de;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content_box{
  margin: 0px auto;
  max-width: 1200px;
} 

.box{
/*   outline: 3px solid red; */
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
}

.contentbox{
  height: 150px;
  width: calc(50% - 30px);
  background-color: #778899;
  margin:10px 10px;
  padding: 10px 0;
}

.cta{
  background-color: #b0c4de;
  width: 200px;
  height: 50px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
} 



/* RESPONSIVE */
/* manubar預設隱藏 */
.mobile{
  display: none;
}


/* 當畫面小於799px時，隱藏選單 */
 @media screen and (max-width: 799px) {
  div.item{
    display: none;
  }
   div.mobile{
     display: block;
   }
}
  
/* 當畫面小於500px時，content變成一行 */    
  @media screen and (max-width: 499px) {
    .contentbox{
      height: 150px;
      width: calc(100% - 10px);
      background-color: #778899;
      margin:10px 10px;
      padding: 10px 0;
    }
}

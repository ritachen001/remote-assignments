function ajax(src, callback){
  
    var xhr = new XMLHttpRequest();
    xhr.open('get','https://cwpeng.github.io/live-records-samples/data/products.json');
    xhr.send();
      
    
    xhr.onload = function(){
      //console.log(xhr.responseText);
      //判斷 HTTP 狀態碼是否成功連線
      if(xhr.status == 200){
      //把抓到的資料加以運用
      var str = JSON.parse(xhr.responseText);
      //選取 DOM，並渲染至網頁
      //1
      var myH1 = document.createElement('h1');
      myH1.textContent = str[0].name;
      header.appendChild(myH1);
        
      var myH3 = document.createElement('h3');
      myH3.textContent = 'Prize : ' + str[0].price;
      header.appendChild(myH3); 
        
      var myp = document.createElement('p');
      myp.textContent = '特色 : ' + str[0].description;
      header.appendChild(myp); 
        
      //2
      var myH1 = document.createElement('h1');
      myH1.textContent = str[1].name;
      header.appendChild(myH1);
        
      var myH3 = document.createElement('h3');
      myH3.textContent = 'Prize : ' + str[1].price;
      header.appendChild(myH3); 
        
      var myp = document.createElement('p');
      myp.textContent = '特色 : ' + str[1].description;
      header.appendChild(myp); 
        
      //3
      var myH1 = document.createElement('h1');
      myH1.textContent = str[2].name;
      header.appendChild(myH1);
        
      var myH3 = document.createElement('h3');
      myH3.textContent = 'Prize : ' + str[2].price;
      header.appendChild(myH3); 
        
      var myp = document.createElement('p');
      myp.textContent = '特色: ' + str[2].description;
      header.appendChild(myp); 
    
     
      } else{
        console.log('資料讀取錯誤!!');
      }
    }
    
    }
    
    ajax("https://cwpeng.github.io/live-records-samples/data/products.json", function(response){
    render(response);
    });
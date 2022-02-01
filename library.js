function openPage(pageName,elmnt,color){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent")
    for(i=0; i < tabcontent.length; i++){
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablink");
    for(i = 0; i < tablinks.length; i++){
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();
  
  const Search=()=>{
             const MyText=document.getElementById('MyText').value.toUpperCase();
  
             let myTable=document.getElementById('myTable');
  
             let tr=myTable.getElementsByTagName('tr')
  
             for(i=0;i<tr.length;i++){
                 let tdName=tr[i].getElementsByTagName('td')[0];
                 let tdType=tr[i].getElementsByTagName('td')[1];
                 let tdVendor=tr[i].getElementsByTagName('td')[2];
                 if(tdName||tdType||tdVendor){
                     let txtvalue=tdName.textContent||td.innerHTML;
                     let txtvalue1=tdType.textContent||td.innerHTML;
                     let txtvalue2=tdVendor.textContent||td.innerHTML;
                     if(txtvalue.toUpperCase().indexOf(MyText)>-1||txtvalue1.toUpperCase().indexOf(MyText)>-1||txtvalue2.toUpperCase().indexOf(MyText)>-1){
  
                      tr[i].style.display="";
                     }else{
                         tr[i].style.display="none"
                     }
                 }
             }
             
         }
  
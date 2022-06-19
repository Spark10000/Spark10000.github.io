var importData = require('Backend/insertParts.js');

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

function importOnTable(){
    insert('78c4f343db9dd559abf1bf07', '36c90c6c7a6ac31045b8bcf3', 'b0c962281f8c3624f78966b7');
}
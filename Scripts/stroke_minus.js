//$.bp()
for(i=0;i<activeDocument.pageItems.length;i++){
 obj=activeDocument.pageItems[i];
 if((obj.selected)&&(obj.strokeWidth)){
  obj.strokeWidth-=0.1;
  if(obj.strokeWidth<0){
   obj.strokeWidth=0
  }
 }
}

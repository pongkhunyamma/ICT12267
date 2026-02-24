let cart=[];

function addToCart(name,price){
  const item=cart.find(p=>p.name===name);
  if(item){
    item.qty++;
  }else{
    cart.push({name,price,qty:1});
  }
  updateCart();
}

function updateCart(){
  const container=document.getElementById("cart-items");
  container.innerHTML="";
  let total=0;
  let count=0;

  cart.forEach((item,index)=>{
    total+=item.price*item.qty;
    count+=item.qty;

    container.innerHTML+=`
      <div>
        ${item.name} x${item.qty}
        <button onclick="changeQty(${index},-1)">-</button>
        <button onclick="changeQty(${index},1)">+</button>
      </div>
    `;
  });

  document.getElementById("total").innerText=total;
  document.getElementById("cart-count").innerText=count;
}

function changeQty(index,value){
  cart[index].qty+=value;
  if(cart[index].qty<=0){
    cart.splice(index,1);
  }
  updateCart();
}

function toggleCart(){
    document.getElementById("cart").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
  }
  
  function closeCart(){
    document.getElementById("cart").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
  }
  
  /* กด ESC ปิด */
  document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){
      closeCart();
    }
  });

/* Modal */
function openModal(src){
  document.getElementById("modal").style.display="flex";
  document.getElementById("modal-img").src=src;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

/* Contact */
function sendMessage(e){
  e.preventDefault();
  alert("ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับเร็ว ๆ นี้ 😊");
}
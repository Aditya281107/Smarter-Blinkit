function Checkout(){

 const handlePayment = async ()=>{

  const res = await fetch("http://localhost:5000/api/payment/create-order",{
   method:"POST",
   headers:{
    "Content-Type":"application/json"
   },
   body:JSON.stringify({amount:500})
  });

  const order = await res.json();

  const options = {
   key: "rzp_test_SP7eGW8bjOiycp",
   amount: order.amount,
   currency: "INR",
   name: "Smarter BlinkIt",
   order_id: order.id,

   handler: function(){
    alert("Payment Successful");
   }
  };

  const rzp = new window.Razorpay(options);

  rzp.open();

 }

 return(
  <div>
   <h2>Checkout</h2>

   <button onClick={handlePayment}>
    Pay Now
   </button>

  </div>
 )

}

export default Checkout;

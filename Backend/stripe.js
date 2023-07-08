import express from "express"
import Stripe from "stripe"

const stripe =Stripe("sk_test_51MwihKSFqyJuaFkizDjof4nzTHRzm8hwaSbt3d8M3FkqMPlSJywXUVSaHhh7ZLVm4DupV9NQ06pPmeVwnCOoVwgc00FpJQmDEI")
const router =express.Router()


router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({

  
      line_items: [
        {
          price: 'price_1N40OYSFqyJuaFkiGgdXWbfw',
          quantity: 1,
        },
      ],
      mode: 'payment',
      
      success_url: `${process.env.CLIENT_URL}/home`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });
  
    res.send({
        url:  session.url
    });
  });
  

  export default router;
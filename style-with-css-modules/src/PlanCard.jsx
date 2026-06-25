import React from 'react'
import style from './styles/PlanCard.module.css'
const PlanCard = () => {
  return (
    <div>
        <div className={style.cardContainer}>
            <div className={style.upperSection}>
                <h1 className={style.heading}>Pro Plan</h1>
                <p className={style.subheading}>Perfect for professionals</p>
            </div>

            <div className={style.footerSection}>
                 <h1 className={style.priceTag}>$19/month</h1>
                 <p className={style.priceSubtag}>billed anually</p>

                 <p className={style.features}>✔ Unlimited Projects</p>
                 <p className={style.features}>✔ 24/7 customer support</p>
                 <p className={style.features}>✔ Access to premium templates</p>

                 <button className={style.startButton}>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default PlanCard


import React from 'react'
import Styles from "@/styles/carouselprod.module.css"

export default function productos() {
  return (
    <div className={`${Styles.section}`}>
    <h2>Handhelds</h2>
      <section className={`${Styles.carousel}`} aria-label="Gallery">
        <ol className={`${Styles.carousel__viewport}`}>
          <li id="carousel__slide1" tabIndex={0} className={`${Styles.carousel__slide}`}>
            <div className={`${Styles.carousel__snapper}`}>
              <a href="#carousel__slide4" className={`${Styles.carousel__prev}`}>Go to last slide</a>
              <a href="#carousel__slide2" className={`${Styles.carousel__next}`}>Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2" tabIndex={0} className={`${Styles.carousel__slide}`}>
            <div className={`${Styles.carousel__snapper}`}></div>
            <a href="#carousel__slide1" className={`${Styles.carousel__prev}`}>Go to previous slide</a>
            <a href="#carousel__slide3" className={`${Styles.carousel__next}`}>Go to next slide</a>
          </li>
          <li id="carousel__slide3" tabIndex={0} className={`${Styles.carousel__slide}`}>
            <div className={`${Styles.carousel__snapper}`}></div>
            <a href="#carousel__slide2" className={`${Styles.carousel__prev}`}>Go to previous slide</a>
            <a href="#carousel__slide4" className={`${Styles.carousel__next}`}>Go to next slide</a>
          </li>
          <li id="carousel__slide4" tabIndex={0} className={`${Styles.carousel__slide}`}>
            <div className={`${Styles.carousel__snapper}`}></div>
            <a href="#carousel__slide3" className={`${Styles.carousel__prev}`}>Go to previous slide</a>
            <a href="#carousel__slide1" className={`${Styles.carousel__next}`}>Go to first slide</a>
          </li>
        </ol>
      </section>
    </div>
  )
}

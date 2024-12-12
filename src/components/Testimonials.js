
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import TestimonialBox from './TestimonialBox';
import { Testimonialselement } from '../TestimonialsElements';
const Testimonials = () =>{
    
    return(
        <section style={{ paddingTop: '64px', paddingBottom: '64px' }}>
            <div className='container'>
             <div style={{ textAlign: 'center', marginBottom: '48px' }} >
                    <h2 style={{fontSize: '2.25rem',lineHeight: '2.5rem',fontWeight: 'bold', color: '#000',
}}>Testimonials</h2>
                    <p   style={{marginTop: '16px',fontSize: '1.125rem',lineHeight: '1.75rem',color:  '#000',
  }}>Check out our most popular Testimonials</p>
            </div>
            <Swiper
    spaceBetween={20}
    slidesPerView={3} // Default for larger screens
    navigation={true}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    className="w-[80%]"
    loop={true}
    modules={[Pagination, Navigation]}
    style={{
        '--swiper-navigation-size': '20px', // Set the navigation button size to 20px
        '--swiper-navigation-color': '#000', // Set the navigation button color to black
        '--swiper-pagination-color': '#000', // Set pagination color to black
        '--swiper-pagination-button-color': '#000', // Set the color of the pagination buttons to black
        '--swiper-pagination-button-size': '20px', 

    }}
    breakpoints={{
        320: { // for small screens (mobile)
            slidesPerView: 1, // 1 slide per view on mobile
        },
        768: { // for tablets and larger screens
            slidesPerView: 2, // Optionally adjust for tablets
        },
        1024: { // for large screens
            slidesPerView: 3, // 3 slides per view on desktop and larger screens
        },
    }}
>
                {Testimonialselement.map((item, index) => (
                <SwiperSlide key={index} style={{ height: 'unset',  }}>
                    <div style={{
                        height: '100%',
                        borderRadius: '0.5rem',
                        // overflow: 'hidden',
                        }}
                        >
                    <TestimonialBox src={item.image } name={item.names} position={item.positions}  desc={item.description} e={index}/>
                    </div>         
                </SwiperSlide>
))}
        </Swiper>
        </div>
        </section>
    )
}
export default Testimonials ;
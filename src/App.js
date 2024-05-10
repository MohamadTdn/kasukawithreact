import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar'
import Features from './Features/Features'
import Company from './Company/Company'
import Advertising from './Advertising/Advertising'
import Survices from './Survices/Survices'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Navbar></Navbar>
        <h1 className="Header-title">راه حل های قدرتمند <br /> دیجیتال با <br /> <span>Kasuka</span></h1>
        <h4 className='Header-subtitle'>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h4>
        <div className='Features-container'>
          <Features></Features>
          <Features></Features>
          <Features></Features>
          <Features></Features>
        </div>
      </div>
      <div className='About-kasuka'>
         <div className="about">
            <h1 className='title'>درباره کاسوکا</h1>
            <p className="description">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
         </div>
         <img src="https://hivalearn.ir/templates/kasuka/assets/img/about.jpg" alt="" />
      </div>
      <div className="companies">
        <Company></Company>
        <Company></Company>
        <Company></Company>
        <Company></Company>
      </div>
      <div className="adds">
        <img src="https://hivalearn.ir/templates/kasuka/assets/img/features.jpg" alt="" />
        <div className='adds-text'>
          <Advertising></Advertising>
          <Advertising></Advertising>
          <Advertising></Advertising>
          <Advertising></Advertising>
        </div>
      </div>
      <h1>خدمات ما را بررسی کنید</h1>
      <div className='Our-survices'> 
        <Survices></Survices>
        <Survices></Survices>
        <Survices></Survices>
        <Survices></Survices>
        <Survices></Survices>
        <Survices></Survices>
      </div>
      <div className='colab'>
        <h1>فراخوانی برای اقدام</h1>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون ب زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچیناساسا مورد استفاده قرار گیرد.</p>
        <button>فراخوانی برای اقدام</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

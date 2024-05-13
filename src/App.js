import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Features from "./Features/Features";
import Company from "./Company/Company";
import Advertising from "./Advertising/Advertising";
import Survices from "./Survices/Survices";
import Portfolio from "./Portfolio/Portfolio";
import Team from "./Team/Team";
import Info from "./Info/Info";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Navbar></Navbar>
        <h1 className="Header-title">
          راه حل های قدرتمند <br /> دیجیتال با <br /> <span>Kasuka</span>
        </h1>
        <h4 className="Header-subtitle">
          ما تیمی از بازاریابان با استعداد دیجیتال هستیم
        </h4>
        <div className="Features-container">
          <Features title="سریع"></Features>
          <Features title="امن"></Features>
          <Features title="پرفروش"></Features>
          <Features title="با سابقه"></Features>
        </div>
      </div>
      <div className="About-kasuka">
        <div className="about">
          <h1 className="title">درباره کاسوکا</h1>
          <p className="description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
            ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت
            که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
            رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <img
          src="https://hivalearn.ir/templates/kasuka/assets/img/about.jpg"
          alt=""
        />
      </div>
      <div className="companies">
        <Company src="mit.png"></Company>
        <Company src="digikala.jpg"></Company>
        <Company src="google.png"></Company>
        <Company src="lenovo.png"></Company>
      </div>
      <div className="adds">
        <img
          src="https://hivalearn.ir/templates/kasuka/assets/img/features.jpg"
          alt=""
        />
        <div className="adds-text">
          <Advertising title="کیفیت" desc=" ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان"></Advertising>
          <Advertising title="قیمت مناسب" desc=" شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجو اساسد در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان"></Advertising>
          <Advertising title="سرعت" desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله د"></Advertising>
          <Advertising title="امنیت" desc="سوالات پیوسته اهل دنیای موجود طراحیا مورد استفاده قرار گیرد."></Advertising>
        </div>
      </div>
      <h1>خدمات ما را بررسی کنید</h1>
      <div className="Our-survices">
        <Survices></Survices>
        <Survices></Survices>
        <Survices></Survices>
        <Survices></Survices>
        <Survices></Survices>
        <Survices></Survices>
      </div>
      <div className="colab">
        <h1>فراخوانی برای اقدام</h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون ب زبان فارسی ایجاد کرد،
          در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
          راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
          حروفچیناساسا مورد استفاده قرار گیرد.
        </p>
        <button>فراخوانی برای اقدام</button>
      </div>
      <h1>نمونه کارها</h1>
      <div className="Portfolio-containeer">
        <ul className="Portfolio-category">
          <li>
            <a href="#">همه</a>
          </li>
          <li>
            <a href="#">برنامه</a>
          </li>
          <li>
            <a href="#">محصول</a>
          </li>
          <li>
            <a href="#">اینترنت</a>
          </li>
        </ul>
        <div className="Portfolios">
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-2.jpg"></Portfolio>
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-1.jpg"></Portfolio>
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-3.jpg"></Portfolio>
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-4.jpg"></Portfolio>
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-5.jpg"></Portfolio>
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-7.jpg"></Portfolio>
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-6.jpg"></Portfolio>
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-8.jpg"></Portfolio>
          <Portfolio src="https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-9.jpg"></Portfolio>
        </div>
      </div>
      <div className="Comments">
        <img
          src="https://hivalearn.ir/templates/kasuka/assets/img/testimonials/testimonials-1.jpg"
          className="Comment-avatar"
          alt=""
        />
        <h4 className="User-name">محمد تدین</h4>
        <p className="Comment-text">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک استان را جوابگوی سوالات پیوسته اهل دنیای
          موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <h1>تیم ما</h1>
      <div className="Our-team">
        <Team src="https://hivalearn.ir/templates/kasuka/assets/img/team/team-1.jpg" name="والتر وایت" job="مدیر"></Team>
        <Team src="https://hivalearn.ir/templates/kasuka/assets/img/team/team-2.jpg" name="کیم وکسلر" job="وکیل"></Team>
        <Team src="https://hivalearn.ir/templates/kasuka/assets/img/team/team-3.jpg" name="محمد تدین" job="برنامه نویس"></Team>
        <Team src="https://hivalearn.ir/templates/kasuka/assets/img/team/team-4.jpg" name="آماندا جپسون" job="حسابدار"></Team>
      </div>
      <h1>با ما تماس بگیرید</h1>
      <div className="Contact-us">
        <div className="Infos">
          <Info title="تماس بگیرید" address="012345678910"></Info>
          <Info title="ایستاگرام" address="mohamad_tdn"></Info>
          <Info title="تلگرام" address="Mr_MTdn"></Info>
        </div>
        <div className="Info-form">
          <Form></Form>
        </div>
      </div>
      <div className="Site-footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

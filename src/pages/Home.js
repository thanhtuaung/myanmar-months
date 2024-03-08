import React from "react";
import festival from "../img/festival-image.png";
import MonthList from "../components/MonthList";

const Home = () => {
  return (
    <div>
      <div style={{ backgroundColor: "rgb(235, 235, 235)" }}>
        <div className="container">
          <div className="header">
            <div>
              <div className="row align-items-center">
                <div
                  className="col-lg-6 order-lg-1 py-3"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <img src={festival} alt="" width={"100%"} />
                </div>
                <div className="col-lg-6 order-lg-0 py-3">
                  <h2>
                    <span
                      className="title"
                      data-aos="zoom-in"
                      data-aos-duration="1400"
                    >
                      မြန်မာလ နှင့် ပွဲတော်များ
                    </span>
                  </h2>
                  <p
                    className="my-5 pe-3"
                    data-aos="zoom-in"
                    data-aos-duration="1400"
                  >
                    မြန်မာလများသည် လဆန်းတစ်ခုမှ နောက်လဆန်းတစ်ခု သို့ ရောက်သည်အထိ
                    သတ်မှတ်ထားသော စန္ဒရမာသ လများ ဖြစ်၍ တစ်နှစ်တွင် ၁၂ လ ရှိသည်။
                    သာမန်အားဖြင့် ထို ၁၂ လတွင် ခြောက်လသည် ၂၉ ရက်စီ ဖြစ်၍
                    အခြားခြောက်လ သည် ရက် ၃ဝ စီ ဖြစ်သည်။ ဝါထပ်ရက်ငင်များလည်း
                    ရှိ၏။ အဆိုပါ ၁၂ လကား တန်ခူး၊ ကဆုန်၊ နယုန်၊ ဝါဆို၊ ဝါခေါင်၊
                    တော်သလင်း၊ သီတင်းကျွတ်၊ တန်ဆောင်မုန်း၊ နတ်တော်၊ ပြာသို၊
                    တပို့တွဲ၊ တပေါင်းလများ ဖြစ်ကြသည်။
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MonthList />
    </div>
  );
};

export default Home;

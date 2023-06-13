import "bulma/css/bulma.css";
import "./App.css";
import Food from "./Food";
import Biberli from "./images/BiberliEkmek.jpg";
import HatayDoner from "./images/hataydoner.jpg";
import KagitKebabi from "./images/KağıtKebabı.jpg";
import Kunefe from "./images/kuneef.jpeg";

function myApp() {
  return (
    <div className="myApp">
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Hatay Lezzetleri </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Food
                image={HatayDoner}
                title="Döner"
                description="Hatay döneri, Türk mutfağının en özel ve lezzetli yemeklerinden biridir. Hatay şehri, dönerin özgün ve eşsiz bir tarifiyle ünlüdür. Bu lezzetli yiyecek, Türkiye'nin dört bir yanından gelen ziyaretçileri etkilemektedir. Hatay döneri, damak tadınıza hitap eden birçok farklı çeşidiyle bilinir."
              />
            </div>
            <div className="column">
              <Food
                image={KagitKebabi}
                title="Kağıt Kebabı"
                description="Hatay'ın özel yemeklerinden biri olan Kağıt Kebabı, lezzeti ve sunumuyla göz dolduran bir lezzet şölenidir. Bu benzersiz yemek, Hatay mutfağının zenginliğini ve özgünlüğünü yansıtmaktadır. Kağıt kebabı, etin özenle seçilmesi ve doğru bir şekilde hazırlanmasıyla öne çıkar."
              />
            </div>
            <div className="column">
              <Food
                image={Biberli}
                title="Biberli Ekmek "
                description="Biberli Ekmek, temel olarak hamurun içerisine çeşitli baharatlar ve acı biberler eklenerek hazırlanır. İnce ve elastik bir hamur yoğrulduktan sonra üzerine acı biberler, pul biber, kimyon, kekik ve diğer özel baharatlar eklenir. Bu baharatlar, ekmeğe kendine özgü bir tat ve aromatik bir zenginlik katar. Hamur, bu baharatlarla harmanlandıktan sonra dinlenmeye bırakılır, böylece baharatlar tam olarak etkisini gösterir."
              />
            </div>
            <div className="column">
              <Food
                image={Kunefe}
                title="Künefe"
                description="Künefenin temel malzemeleri arasında tel kadayıf, taze beyaz peynir, tereyağı, şerbet ve Antep fıstığı bulunur. İnce tellere ayrılan kadayıf, tereyağıyla kızartılarak çıtır bir doku elde edilir. Peynir ise tatlıya karakteristik bir lezzet katar. Özellikle Hatay ve Gaziantep'te üretilen özel türdeki beyaz peynir, künefenin benzersiz bir lezzet profiline sahip olmasını sağlar."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default myApp;

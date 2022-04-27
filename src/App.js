import "./App.css";

function App() {
  var cityName = "Istanbul";
  var state = "Avcılar";
  const ageList = ["0-18", "18-30", "30-45", "45-60", "+60"];
  const sexList = ["Erkek", "Kadın", "Belirtmek istemiyorum"];
  const groupList = ["Yalnızım", "Çift", "Aile", "Arkadaşlar"];
  const categoryList = ["Eğlence", "Doğa", "Tarih", "Kültür"];
  const weather = "20 derece güneşli";
  const places = ["Galata Kulesi", "Kız Kulesi", "Beşiktaş Çarşı"];

  return (
    <div className="App">
      <h1>WNEXT ANKET</h1>
      <h4>Hoş geldin!</h4>
      <h4>Hadi seninle bir senaryoya başlayalım.</h4>
      <h4>
        WNEXT’in teknofest macerasında yapay zekanın bir parçası olmak için
        lütfen devam et.
      </h4>
      <h4>Kendi hikayeni planlamanı istiyoruz.</h4>
      <h4>Hazırsan sorulara başlayalım.</h4>

      <div className="question-container">
        <h4>Gezintiye başlamak için şehir ve ilçe seç.</h4>
        <h5 className="warning">! Buna çok takılma :)</h5>

        <div className="options">
          <div className="city-state-choices">
            <label for="city">Şehir</label>
            <select name="city" id="city">
              <option value={cityName}>{cityName}</option>
            </select>

            <label for="state">İlçe</label>
            <select name="state" id="state">
              <option value={state}>{state}</option>
            </select>
          </div>

          <button type="submit" className="submit-button">
            İleri
          </button>
        </div>
      </div>

      <h4>Seni biraz daha yakından tanımak istiyoruz.</h4>

      <div className="question-container">
        <h4>Lütfen yaşını seç.</h4>

        <div className="age-choices">
          <button>{ageList[0]}</button>
          <button>{ageList[1]}</button>
          <button>{ageList[2]}</button>
          <button>{ageList[3]}</button>
          <button>{ageList[4]}</button>
        </div>

        <button type="submit" className="submit-button">
          İleri
        </button>
      </div>

      <div className="question-container">
        <h4>Cinsiyetini seç</h4>

        <div className="sex-choices">
          <div className="biological-sexes">
            <button>{sexList[0]}</button>
            <button>{sexList[1]}</button>
          </div>

          <button>{sexList[2]}</button>
        </div>

        <button type="submit" className="submit-button">
          İleri
        </button>
      </div>

      <div className="question-container">
        <h4>Tatilini kiminle yapıyorsun?</h4>

        <div className="group-choices">
          <button>{groupList[0]}</button>
          <button>{groupList[1]}</button>
          <button>{groupList[2]}</button>
          <button>{groupList[3]}</button>
        </div>

        <button type="submit" className="submit-button">
          İleri
        </button>
      </div>

      <h4>Hmm anlıyorum.</h4>
      <h4>Hava {weather}.</h4>

      <div className="question-container">
        <h4>Şimdi tatilinin temasına karar verme zamanı.</h4>

        <div className="category-choices">
          <button>{categoryList[0]}</button>
          <button>{categoryList[1]}</button>
          <button>{categoryList[2]}</button>
          <button>{categoryList[3]}</button>
        </div>

        <button type="submit" className="submit-button">
          İleri
        </button>
      </div>

      <div className="question-container">
        <h4>Bu koşullar altında nereleri gezmek istersin?</h4>
        <div className="place-choices">
          <label for="place">1. yer</label>
          <select name="place1" id="1">
            <option value={places}>{places[0]}</option>
            <option value={places}>{places[1]}</option>
            <option value={places}>{places[2]}</option>
          </select>

          <label for="place">2. yer</label>
          <select name="place2" id="2">
            <option value={places}>{places[0]}</option>
            <option value={places}>{places[1]}</option>
            <option value={places}>{places[2]}</option>
          </select>

          <label for="place">3. yer</label>
          <select name="place3" id="3">
            <option value={places}>{places[0]}</option>
            <option value={places}>{places[1]}</option>
            <option value={places}>{places[2]}</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          İleri
        </button>
      </div>

      <h4>Katıldığın için teşekkür ederiz. </h4>
    </div>
  );
}

export default App;

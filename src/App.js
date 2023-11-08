import React, { useState } from 'react';
import './App.css';
import DiscordScoreBot from './comp/DiscordScoreBot'; 
import DiscordAvgBot from './comp/DiscordAvgBot';
import SimpleCharMove from './comp/SimpleCharMove';
import Keylogger from './comp/Keylogger';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [showCodes, setShowCodes] = useState(false);

  const toggleCodes = () => {
  setShowCodes(!showCodes);
  };

  const codeText1 = `
  College English 1: A+
  물리학및실험1: B0
  생명과 나눔: A0
  소프트웨어 중심세상: A+
  수학1: A0
  음악의 이해: A0
  인성세미나: P
  일본대중문화의 이해: A+
  화학및실험1: A0
  `;

  const codeText2 = `
  College English 2: A0
  C언어: A0
  과학기술글쓰기: A0
  심리학의 이해: B+
  이산수학: A+
  창의 NTree: P
  컴퓨터구조: A+
  `;

  const codeText3 = `
  손에 잡히는 프로그래밍: B+
  알고리즘: B0
  웹프로그래밍: B0
  자료구조: B0
  컴퓨터공학개론: B+
  `;

  const codeText4 = `
  C++: B0
  디지털콘텐츠기획: A0
  리눅스: B+
  사회봉사: P
  소프트웨어공학: B+
  창업과 온라인 마케팅: A+
  확률과 통계: A0
  `;

  return (
    <div className="App">
      <header className="Header">
        <div className="HeaderContent">
          <img src={process.env.PUBLIC_URL + '/github-logo.PNG'} alt="GitHub Logo" className="GitHubLogo" />
          <h1>Profile / Jung Yu Min</h1>
        </div>
        <nav className="Nav">
          <button onClick={() => setActiveTab('Home')} className={activeTab === 'Home' ? 'active' : ''}>Home</button>
          <button onClick={() => setActiveTab('Grades')} className={activeTab === 'Grades' ? 'active' : ''}>Grades</button>
          <button onClick={() => setActiveTab('Projects')} className={activeTab === 'Projects' ? 'active' : ''}>Projects</button>
          <button onClick={() => setActiveTab('Development status')} className={activeTab === 'Development status' ? 'active' : ''}>Development status</button>
        </nav>
      </header>
      <main className="Main">


        <section className="LeftSection">
          <img src={process.env.PUBLIC_URL + '/image.png'} alt="Left Section Image" className="LeftSectionImage" />
          {activeTab === 'Home' &&  
          <p className="LeftSectionText">
            <div class="card card-1">
            <h1>정유민 / Jung Yu Min</h1>
            <br></br>
            <h3>Python, C++, Java, Spring</h3>
            <br></br>
            <h3><img src='/university_icon.png'></img> Gachon University</h3>
            <h3><img src='/location_icon.png'></img> Ilsanseo-gu, Goyang-si, Gyeonggi-do, <br></br>Republic of Korea</h3>
            <h3>TEL. 010-9974-0945</h3>
            <h3>E-MAIL. jungym0419@gachon.ac.kr</h3><hr></hr>
            <h3><img src='/icon.png' class="img"></img>Github Link</h3>
            <h3><a href = 'https://github.com/YuMinGod'>https://github.com/YuMinGod</a></h3>
            </div>
          </p>}
          {activeTab === 'Grades' && 
          <p className="LeftSectionText">
          <div class="card card-1">
            <h1>정유민 / Jung Yu Min</h1>
            <br></br>
            <h3>Python, C++, Java, Spring</h3>
            <br></br>
            <h3><img src='/university_icon.png'></img> Gachon University</h3>
            <h3><img src='/location_icon.png'></img> Ilsanseo-gu, Goyang-si, Gyeonggi-do, <br></br>Republic of Korea</h3>
            <h3>TEL. 010-9974-0945</h3>
            <h3>E-MAIL. jungym0419@gachon.ac.kr</h3><hr></hr>
            <h3><img src='/icon.png' class="img"></img>Github Link</h3>
            <h3><a href = 'https://github.com/YuMinGod'>https://github.com/YuMinGod</a></h3>
            </div>
          </p>}


          {activeTab === 'Projects' &&
           <p className="LeftSectionText">
            <div class="card card-1">
            <h1>정유민 / Jung Yu Min</h1>
            <br></br>
            <h3>Python, C++, Java, Spring</h3>
            <br></br>
            <h3><img src='/university_icon.png'></img> Gachon University</h3>
            <h3><img src='/location_icon.png'></img> Ilsanseo-gu, Goyang-si, Gyeonggi-do, <br></br>Republic of Korea</h3>
            <h3>TEL. 010-9974-0945</h3>
            <h3>E-MAIL. jungym0419@gachon.ac.kr</h3><hr></hr>
            <h3><img src='/icon.png' class="img"></img>Github Link</h3>
            <h3><a href = 'https://github.com/YuMinGod'>https://github.com/YuMinGod</a></h3>
            </div>
           </p>}

          {activeTab === 'Development status' &&
           <p className="LeftSectionText">
           <div class="card card-1">
            <h1>정유민 / Jung Yu Min</h1>
            <br></br>
            <h3>Python, C++, Java, Spring</h3>
            <br></br>
            <h3><img src='/university_icon.png'></img> Gachon University</h3>
            <h3><img src='/location_icon.png'></img> Ilsanseo-gu, Goyang-si, Gyeonggi-do, <br></br>Republic of Korea</h3>
            <h3>TEL. 010-9974-0945</h3>
            <h3>E-MAIL. jungym0419@gachon.ac.kr</h3><hr></hr>
            <h3><img src='/icon.png' class="img"></img>Github Link</h3>
            <h3><a href = 'https://github.com/YuMinGod'>https://github.com/YuMinGod</a></h3>
            </div>
           </p>}
        </section>


        <section className="RightSection">
          {activeTab === 'Home' && 
          <p className="RightSectionText">
            
            <h1>저는 끊임없이 변화하는 IT 세계에서 혁신적인 웹 개발자로 성장하고자 하는<br></br>눈부신 비전을 안고 있는 웹 개발자 지망생입니다. 
              <br></br><br></br>디지털 기술의 획기적인 발전으로 웹 개발은 우리 사회의 중심에 자리하며,<br></br>이러한 환경에서 저는 다음과 같은 목표와 비전을 가지고 있습니다.</h1>
              
            <br></br>
            <h2>1. 혁신적인 개발</h2>
                저의 목표 중 하나는 혁신적이고 사용자 중심의 웹 애플리케이션을 개발하는 것입니다. 끊임없이 발전하는 기술을 습득하고, 사용자 요구를 이해하며, 새로운 아이디어를 실현하여 웹 애플리케이션의 질을 향상시키고 사용자 경험을 향상시킬 것입니다.
                <br></br><br></br>
                <h2>2. 접근성 높은 개발</h2>
                웹은 모든 사람에게 열려있어야 합니다. 나의 비전은 웹 애플리케이션과 웹 사이트를 보다 접근성 높게 개발하는 것입니다. 모든 사용자가 콘텐츠에 쉽게 접근하고 상호 작용할 수 있도록 웹의 접근성을 개선하며, 웹 개발 커뮤니티에서 이를 촉진하고 싶습니다.
                <br></br><br></br>
                <h2>3. 지속적인 학습과 역량 강화</h2>
                웹 개발은 끊임없이 진화하고 변화하는 분야입니다. 저의 비전은 항상 최신 기술과 도구에 대한 학습을 추구하며, 지속적인 역량 강화를 통해 성공적인 웹 개발자로 성장하는 것입니다. 이를 위해 온라인 코스, 커뮤니티 참여, 그리고 팀 내에서 지식 공유를 통해 학습을 지속할 것입니다.
                <br></br><br></br>
                <h2>4. 협업과 커뮤니케이션</h2>
                웹 개발은 팀 작업에서 빛을 발합니다. 저는 효율적인 협업과 열린 커뮤니케이션을 통해 팀 내외에서의 원활한 협력을 이루고, 다양한 배경을 가진 팀원들과 함께 일하는 기회를 가지고 싶습니다.
                <br></br><br></br>
                <h2>5. 사회적 영향과 지속가능성</h2>
                마지막으로, 웹 개발을 통해 사회적 영향을 만들고 지속 가능한 솔루션을 개발하는 것이 제 목표 중 하나입니다. 환경에 대한 인식과 사용자 데이터의 보안을 고려한 웹 애플리케이션을 개발하여 사회적 가치를 창출하고자 합니다.
                <br></br><br></br>
                위의 비전과 목표를 달성하기 위해 나는 항상 열린 마음과 열정을 갖고 있으며, 학습, 협업, 그리고 지속 가능한 웹 개발에 헌신하고자 합니다. 저를 기회 주신다면, 이러한 비전을 실현하기 위해 최선을 다할 것을 약속드립니다.
                <br></br><br></br><br></br>
                감사합니다.
            </p>}
          {activeTab === 'Grades' && 
            <p>
        
            <button class="custom-btn btn-12" onClick={toggleCodes}>
            <span>Click!</span><span>1-1</span></button>
            {showCodes && (
            <div>
            <pre>{codeText1}</pre>
            </div>
            )}

            <button class="custom-btn btn-12" onClick={toggleCodes}>
            <span>Click!</span><span>1-2</span></button>
            {showCodes && (
            <div>
            <pre>{codeText2}</pre>
            </div>
            )}
            <button class="custom-btn btn-12" onClick={toggleCodes}>
            <span>Click!</span><span>2-1</span></button>
            {showCodes && (
            <div>
            <pre>{codeText3}</pre>
            </div>
            )}
            <button class="custom-btn btn-12" onClick={toggleCodes}>
            <span>Click!</span><span>2-2</span></button>
            {showCodes && (
            <div>
            <pre>{codeText4}</pre>
            </div>
            )}
            </p>}

          {activeTab === 'Projects' && (
            <div class="frame">
              <h1>Projects list</h1>
            <button class="custom-btn btn-16" onClick={() => setActiveTab('discord_score_bot_py')}>discord_score_bot_py</button>
            <br></br><br></br><br></br><br></br>
            <button class="custom-btn btn-16" onClick={() => setActiveTab('discord_avg_bot_py')}>discord_avg_bot_py</button>
            <br></br><br></br><br></br><br></br>
            <button class="custom-btn btn-16" onClick={() => setActiveTab('simple_char_move_py')}>simple_char_move_py</button>
            <br></br><br></br><br></br><br></br>
            <button class="custom-btn btn-16" onClick={() => setActiveTab('keylogger_py')}>keylogger_py</button>
          </div>
        )}
          {activeTab === 'Development status' && 
            <p>
              <h1>Development status</h1>
              It is an application that is currently being developed.<br></br>
              Eequipped with AI that analyzes nutrients when you take a picture of food, and at the same time recommends restaurants for the food.
              <br></br><br></br><img src='./food.jpg'></img>
            </p>}
          
          {activeTab === 'discord_score_bot_py' && <DiscordScoreBot />}
          {activeTab === 'discord_avg_bot_py' && <DiscordAvgBot />}
          {activeTab === 'simple_char_move_py' && <SimpleCharMove />}
          {activeTab === 'keylogger_py' && <Keylogger />}
        </section>
      </main>
    </div>
  );
}

export default App;

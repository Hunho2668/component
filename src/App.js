
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';

// 스프레드 연산자로 여러 개의 값 전달하기
function App() {
  const mainProps = {
    name: '홍길동',  // 문자열로 감싸야 합니다
    location: '서울시',  
    favorList: ['파스타', '빵', '떡볶이'],  
  };
  
  return (
    <div className="App">
      <Header />
      <Main {...mainProps} />  {/* 스프레드 연산자 */}
      <Footer />
    </div>
  );
}

export default App;

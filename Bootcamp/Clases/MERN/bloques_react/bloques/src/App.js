import styles from './styles/App.module.css'
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Main from './components/Main.js'
import SubCon from './components/SubCon.js'
import Adv from './components/Adv.js'

function App() {
  return (
    <div className={styles.App}>
        <Header/>
        <div className={styles.containerTwo}>
            <Nav/>
            <Main>
                <div className = {styles.subconContainer}> 
                    <SubCon/>
                    <SubCon/>
                    <SubCon/>    
                </div>
                <Adv/>
            </Main>
        </div>

    </div>
  );
}

export default App;
